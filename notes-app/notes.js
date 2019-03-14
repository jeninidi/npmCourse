const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const readNote = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((note) => note.title === title)

    if (notesToRead) {
        console.log(chalk.inverse.green(notesToRead.title))
        console.log(notesToRead.body)
    } else {
        console.log(chalk.inverse.red('No note was found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.blue('Your notes!'))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesTokeep.length) {
        saveNotes(notesTokeep)
        console.log(chalk.inverse.green('Note has been removed!'))
    } else {
        console.log(chalk.inverse.red('No note found!'))
    }
}

//debugger

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    const duplicateNote = notes.find((note) => note.title === title)
    //const duplicateNotes = notes.filter((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,

            body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note has been added!'))
    } else {
        console.log(chalk.inverse.red('Title is taken!'))

    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}