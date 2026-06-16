// scripts/init-project.js

import fs from 'node:fs'
import readline from 'node:readline'
import { execSync } from 'node:child_process'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ask = question =>
  new Promise(resolve => rl.question(question, resolve))

const askRequired = async (question) => {
  while (true) {
    const answer = await ask(question)

    if (answer.trim()) {
      return answer.trim()
    }

    console.log('⚠️ Campo obligatorio')
  }
}

function section(title) {
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log(title)
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
}

function success(message) {
  console.log(`✅ ${message}`)
}

function warning(message) {
  console.log(`⚠️ ${message}`)
}

function info(message) {
  console.log(`ℹ️ ${message}`)
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function replaceTokens(content, variables) {
  let result = content

  for (const [key, value] of Object.entries(variables)) {
    result = result.replaceAll(key, value)
  }

  return result
}

function findPlaceholders(content) {
  return content.match(/__[A-Z0-9_]+__/g) || []
}

async function main() {
  console.clear()

  console.log(`
╔══════════════════════════════════════╗
║      🚀 Nuxt Template Wizard        ║
╚══════════════════════════════════════╝
`)

  section('Project Information')

  const projectName = slugify(
    await askRequired('Project name: ')
  )

  const description
    = await askRequired('Description: ')

  const appTitle
    = await askRequired('App title: ')

  section('Branding')

  const primary
    = await askRequired('Primary color: ')

  const neutral
    = await askRequired('Neutral color: ')

  section('Author')

  const author
    = await askRequired('Author: ')

  section('Git')

  const initGit = (
    await ask('Init git? (Y/n): ')
  ).trim().toLowerCase()

  section('Configuration Summary')

  console.log(`📦 Project      : ${projectName}`)
  console.log(`📝 Description  : ${description}`)
  console.log(`🖥️  Title       : ${appTitle}`)
  console.log(`🪪 Author       : ${author}`)
  console.log(`🎨 Primary      : ${primary}`)
  console.log(`🎨 Neutral      : ${neutral}`)

  const confirm = (
    await ask('\nContinue? (Y/n): ')
  ).trim().toLowerCase()

  if (confirm === 'n' || confirm === 'no') {
    warning('Operation cancelled')
    rl.close()
    process.exit(0)
  }

  const variables = {
    __PROJECT_NAME__: projectName,
    __DESCRIPTION__: description,
    __APP_TITLE__: appTitle,
    __PRIMARY_COLOR__: primary,
    __NEUTRAL_COLOR__: neutral,
    __AUTHOR__: author
  }

  section('Generating Files')

  const filesToProcess = [
    './package.json',
    './nuxt.config.ts',
    './app/app.config.ts'
  ]

  for (const file of filesToProcess) {
    if (!fs.existsSync(file)) continue

    const content = fs.readFileSync(
      file,
      'utf8'
    )

    const updated = replaceTokens(
      content,
      variables
    )

    fs.writeFileSync(file, updated)

    success(`Updated ${file}`)
  }

  if (fs.existsSync('./README.template.md')) {
    const template = fs.readFileSync(
      './README.template.md',
      'utf8'
    )

    const finalReadme = replaceTokens(
      template,
      variables
    )

    fs.writeFileSync(
      './README.md',
      finalReadme
    )

    success('Generated README.md')
  }

  const envContent = `NUXT_PUBLIC_APP_NAME=${appTitle}
NUXT_PUBLIC_AUTHOR=${author}
`

  fs.writeFileSync(
    './.env',
    envContent
  )

  success('Generated .env')

  const envExample = `NUXT_PUBLIC_APP_NAME=
NUXT_PUBLIC_AUTHOR=
`

  fs.writeFileSync(
    './.env.example',
    envExample
  )

  success('Generated .env.example')

  if (
    initGit === ''
    || initGit === 'y'
    || initGit === 'yes'
  ) {
    try {
      if (!fs.existsSync('./.git')) {
        section('Initializing Git')

        execSync('git init', {
          stdio: 'inherit'
        })

        execSync('git add .', {
          stdio: 'inherit'
        })

        execSync(
          'git commit -m "chore: init project"',
          {
            stdio: 'inherit'
          }
        )

        success('Git initialized')
      } else {
        info('Git repository already exists')
      }
    } catch (error) {
      warning('Git initialization failed')
      console.log(error.message)
    }
  }

  section('Validation')

  const filesToValidate = [
    './package.json',
    './nuxt.config.ts',
    './app/app.config.ts',
    './README.md',
    './.env',
    './.env.example'
  ]

  const remaining = []

  for (const file of filesToValidate) {
    if (!fs.existsSync(file)) continue

    const content = fs.readFileSync(
      file,
      'utf8'
    )

    const placeholders
      = findPlaceholders(content)

    if (placeholders.length) {
      remaining.push({
        file,
        placeholders: [
          ...new Set(placeholders)
        ]
      })
    }
  }

  if (remaining.length) {
    warning('Placeholders pending')

    for (const item of remaining) {
      console.log(`\n${item.file}`)

      item.placeholders.forEach(p =>
        console.log(`  - ${p}`)
      )
    }
  } else {
    success('No placeholders found')
  }

  section('Done')

  console.log(`📦 ${projectName}`)
  console.log(`📝 ${description}`)
  console.log(`🪪 ${author}`)
  console.log(`🎨 Primary : ${primary}`)
  console.log(`🎨 Neutral : ${neutral}`)

  console.log('\n✨ Ready to develop\n')

  rl.close()
}

main()
