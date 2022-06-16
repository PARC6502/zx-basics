#! /usr/bin/env node

import "zx/globals"

$.shell = "pwsh"

let newScriptName = argv.n || argv.name
if (!newScriptName) {
    newScriptName = await question("Please enter a script name: ")
}
while(!newScriptName.endsWith(".js")) {
  console.error(chalk.red("File name must end with '.js'"))
  newScriptName = await question("Please enter a valid script name: ")
}

await $`New-Item -Path . -Name ${newScriptName} -ItemType "file"`
$.prefix += `Add-Content -Path ./${newScriptName} -Value `
await Promise.all([
  $`"#! /usr/bin/env node"`,
  $`"import 'zx/globals'"`,
  $`"$.shell = 'pwsh'"`,
])
