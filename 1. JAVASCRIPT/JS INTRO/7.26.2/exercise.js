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

console.log(students[0])
