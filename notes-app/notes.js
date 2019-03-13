const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesTokeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesTokeep.length) {
        saveNotes(notesTokeep)
        console.log(chalk.inverse.green('Note has been removed!'))
    } else {
        console.log(chalk.inverse.red('No note found!'))
    }
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
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

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
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
    removeNote: removeNote
}