#! /usr/bin/env node

import "zx/globals"

$.shell = 'pwsh'
$.verbose = false

await $`mkdir temp`
echo(await $`ls`)
await cd('./temp')
echo(await $`pwd`)
await cd('../')

$.verbose = true
await $`rmdir ./temp`
