import fs from 'fs'

(async () => {
  const constants = {
    dataSourceFolder: './data-source',
    dataOutputFolder: './data-output'
  }

  try {
    const lisfOfFiles = fs.readdirSync(constants.dataSourceFolder, { encoding: 'utf8' })
    lisfOfFiles.forEach((fileName) => copyFileSync(fileName, `${formatDate()}-${fileName}`))
    console.info('Work done!')
  } catch (error) {
    console.error({ message: error.message })
  }

  function copyFileSync (fileName, newFileName) {
    const file = fs.readFileSync(`${constants.dataSourceFolder}/${fileName}`)
    fs.writeFileSync(`${constants.dataOutputFolder}/${newFileName}`, file)
  }

  function formatDate () {
    const date = new Date()
    return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}_${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
  }
})()
