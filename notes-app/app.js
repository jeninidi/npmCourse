//  const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Zheni!');

// fs.appendFileSync('notes.txt', '  I live in Copenhagen!');

//require('./utils.js')

//const add = require('./utils.js')

//const name = 'Zheni'

//const sum = add(4, -2)

//console.log(sum)  

//const validator = require('validator')
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')


//const msg = getNotes()
//console.log(msg)

//console.log(validator.isURL('www.example.com'))

// console.log(chalk.underline.green('Success!'));
// console.log(chalk.red('Success!'));
// console.log(chalk.bold.inverse.blue('Success!'));

// console.log(process.argv[2]) 

//const command = process.argv[2]

console.log(process.argv)
console.log(yargs.argv)
//customize yargs version
yargs.version('1.1.0')

//add,remove,list,read
//add 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//read 
yargs.command ({
    command: 'read',
    describe: 'Reading a note!',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//list  
yargs.command ({
    command: 'list',
    describe: 'Listing all notes!',
    handler() {
        notes.listNotes()
    }
})
 yargs.parse()




// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }