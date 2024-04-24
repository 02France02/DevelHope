const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

function AddObj(name, surname, age) {             //oggetto 2 da mettere nell'1
    this.name = name;
    this.surname = surname;
    this.age = age;
}

let personalRef = new AddObj("Pippo", "Agostino", 30)     //chiamata della funzione dell'oggetto 2

student.personalData = personalRef;                       //aggiungo una key nell'oggetto 1, questa key conterrà l'oggetto 2

console.log(student)           //faccio partire l'oggetto 1 

console.log(personalRef)      //faccio partire l'oggetto 2

//OOOOPPURE

const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

const personalData = {
  name: "pippo",
  surname: "agostino",
  age: "30"
}

student.personalData = personalData;

console.log(student)