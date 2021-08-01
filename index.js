#!/usr/bin/env node
const prog = require("commander");
const clipboardy = require("clipboardy")
const chalk = require("chalk")
const createPasswd = require("./createPasswd")
const savePasswd = require("./savePasswd")

prog.version("1.0.0").description("NodeJS Password Generator");
prog
  .option("-l, --length <number>", "password length")
  .option("-s, --save", "save the password to txt file")
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .parse();

const { length, save, numbers, symbols } = prog.opts()

// Generate password
const generatedPasswd = createPasswd(length, numbers, symbols)

// Save to file
if(save){
    savePasswd(generatedPasswd)
}
// Copy to clipboard
clipboardy.writeSync(generatedPasswd)
// Console output
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPasswd))
console.log(chalk.yellow('Password copied to clipboard'))