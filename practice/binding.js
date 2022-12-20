// types of binding 
// implicit = automatically bind (object)
// explicit = manually object bind 
// new binding = 
// default = 

// -----------------------------------------------------------

let student={
    name:'sid',
    lastname:'potpose',
    rollno:47,
    number:8485896373,
    fun:function()
    {
     console.log(`this is a student object::${this.name,this.lastname,this.rollno,this.number}`)
    }
}
student.fun()