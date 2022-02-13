//commands(add,remove, read,list)


const { describe } = require('yargs')


const yargs = require('yargs')
const student = require('./tools/student')
yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder: {
        id: {
            describe: 'This is student id description in add command',
            demandOption: true,
            type: 'var'
        },
        name: {
            describe: 'This is student name description in add command',
            demandOption: true,
            type: 'string'
        },
        degree: {
            describe: 'hello',
            demandOption: false,
            type: 'array'
        },
        comment: {
            description: "hello comment",
            demondOption: false,
            type: 'string'
        }
    },
    handler: (x) => {
        // console.log(x.degree[1]) --id=''
        student.addStudent(x.id, x.name, x.degree, x.comment)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove student ',
    builder: {
        id: {
            describe: 'the id of student',
            demondOption: true,
            type: 'var'
        }
    },
    handler: (x) => {
        student.deleteStudent(x.id)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read notes',
    builder: {
        id: {
            describe: 'This is title description in read command',
            demandOption: true,
            type: 'var'
        }
    },
    handler: (x) => {
        student.readStudents(x.id)
    }
})
yargs.command({
    command: 'list',
    describe: 'list of students',
    handler: () => {
        student.listStudent()
    }
})
yargs.parse()