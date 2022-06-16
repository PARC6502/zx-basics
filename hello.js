#! /usr/bin/env node

import "zx/globals"

let name = await question("What is your name? ")
echo`hello ${name}`