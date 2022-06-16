# zx Basics

Trying out the basics of the [google/zx](https://github.com/google/zx) package so that I can better do scripting & automation with [Node.js](https://nodejs.org/en/).

Essentially `zx` makes node's [Child process](https://nodejs.org/api/child_process.html) easier and nicer to use.

Unlike the recommendation/examples in the `zx` readme, I've:

1. Installed `zx` as a dev dependency rather than globally to make the scripts more portable (not sure if there's way for `package.json` to require a global package)
2. Added `"type": "module"` to the `package.json` so that all files can have the `.js` extension
3. Used [PowerShell](https://github.com/PowerShell/PowerShell/tree/master/docs/learning-powershell) rather than `bash` since I primarily use Windows and wanted to get better at PowerShell anyways (note that PowerShell is available on linux and macos too)

## Current scripts
Quick description of the scripts in this repo. If I end up doing much more in this repo I'm pretty unlikely to keep this up to date (unless I write a script to do it...)

### `hello.js`
Doesn't really use any of the key features of `zx`, just waits for a user input and replies with "hello {name}"

### `create-temp.js`
Creates and then deletes a `/temp` folder.

### `zx-init.js`
Creates a new zx script file with the required defaults at the top.