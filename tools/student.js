const fs = require('fs')

const addStudent = (id, name, degree, comment) => {
    const student = loadStudent()
    const duplicated = student.find((x) => {
        return x.id === id //return true or false
    })

    if (!duplicated) {
        student.push({
            id,
            name,
            degree,
            comment
        })
        saveStudent(student)
        console.log('student save successfully')
    } else {
        console.log("error duplicated id")
    }

}

const saveStudent = (x) => {

    const saveData = JSON.stringify(x)
    fs.writeFileSync('student.json', saveData)
}
const loadStudent = () => {

    try {

        const data = fs.readFileSync('student.json').toString()
        return JSON.parse(data)
    } catch (e) {
        return []
    }
}
const deleteStudent = (id) => {
    const student = loadStudent()
    console.log(student)
    console.log(student.length)
    const student1 = student.filter((x) => { //return array of values



        return x.id !== id //true or false
            //true-->if id1 not equal id 2
            //false--> if the two ids are equal

    })
    console.log(student1)

    console.log(student1.length)
    if (student1.length == student.length) {

        console.log('this id is not found')
    } else {
        saveStudent(student1) //save for array of student1 (new array)
        console.log('the student removed successfully')
    }

}
const readStudents = (y) => {
    const student = loadStudent()
    const studentRead = student.find((e) => {
        return e.id === y
    })
    console.log(studentRead)
    if (studentRead) {
        console.log(studentRead.name)
    } else {
        console.log('not found')
    }
}
const listStudent = () => {
    const student = loadStudent()
    student.forEach((el) => {
        if (el.degree == undefined && el.comment == undefined) {
            console.log(el.id, el.name)
        } else if (el.degree !== undefined && el.comment == undefined) {
            console.log(el.id, el.name, el.degree)
        } else if (el.degree !== undefined && el.comment !== undefined) {
            console.log(el.id, el.name, el.degree, el.comment)
        }
    })
}


module.exports = {
    addStudent,
    deleteStudent,
    readStudents,
    listStudent
}