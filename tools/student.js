const fs = require('fs')

let sum;
const sumFunction = (x) => {

    sum = 0
        // Here all the elements of the array is being printed.
    for (let i = 0; i < x.length; i++) {
        sum += x[i]
    }
    return sum
}

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

        if (studentRead.degree == undefined && studentRead.comment == undefined) {
            console.log('name :', studentRead.name)
        } else if (studentRead.degree !== undefined && studentRead.comment == undefined) {
            console.log('name :', studentRead.name, 'degrees :', studentRead.degree, 'total degree =', sumFunction(studentRead.degree))
        } else if (studentRead.degree !== undefined && studentRead.comment !== undefined) {
            console.log('name :', studentRead.name, 'degrees :', studentRead.degree, 'total degree =', sumFunction(studentRead.degree), 'comment :', studentRead.comment)
        }


        // console.log(studentRead.name, studentRead.degree, 'total sum = ', sumFunction(studentRead.degree), studentRead.comment)
        console.log('final of read')
    } else {
        console.log('not found')
    }
}
const listStudent = () => {
    const student = loadStudent()

    student.forEach((el) => {
        if (el.degree == undefined && el.comment == undefined) {
            console.log('-id :', el.id, '-name :', el.name)
        } else if (el.degree !== undefined && el.comment == undefined) {
            console.log('-id :', el.id, '-name :', el.name, '-degrees :', el.degree, '-total degree =', sumFunction(el.degree))
        } else if (el.degree !== undefined && el.comment !== undefined) {
            console.log('-id :', el.id, '-name :', el.name, '-degrees :', el.degree, '-total degree =', sumFunction(el.degree), '-comment :', el.comment)
        }
    })
}


module.exports = {
    addStudent,
    deleteStudent,
    readStudents,
    listStudent
}