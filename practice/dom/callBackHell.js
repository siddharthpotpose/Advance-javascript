// call back hell 
// duuuuum-duuum pyramids

let student = {
    firstName: 'sid',
    middleName: 'r',
    lastName: 'potpose'
}
let fName;
let mName;
let lName;
// function fullName() {
//     setTimeout(() => {
//         fName = student.firstName;
//         console.log(fName, mName, lName)
//     }, 2000)
//     setTimeout(() => {
//         mName = student.middleName;

//     }, 2000)
//     setTimeout(() => {
//         lName = student.lastName

//     }, 2000)

// }
// fullName()

//this pyramids is call back hell => or duumm - duumm

function fullName() {
    setTimeout(() => {
        fName = student.firstName;
        setTimeout(() => {
            mName = student.middleName;
            setTimeout(() => {
                lName = student.lastName;
          console.log(fName, mName, lName)
            }, 2000)
          
        }, 2000)
    }, 2000)
}
fullName()