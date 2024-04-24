function AddObj(id, name, surname, age) { 
    this.id = id;            
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let st1 = new AddObj(55, "Pippo", "Agostino", 30);

let st2 = new AddObj(58, "franco", "suppi", 20);

let st3 = new AddObj(74, "ligi", "sassi", 23);

let students = [st1, st2, st3];



for(i = 0; i < students.length; i++){
    console.log(students[i])
}


//OPPURE


const student = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
    ];

    
for(i = 0; i < student.length; i++){
    console.log(student[i])
}
