const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

name == lastname   //false
age <= average  //true
firstYearCompleted == lastname  //false
yearsCompleted == firstYearCompleted  //true
firstYearCompleted === yearsCompleted  //false, perchè "===", indicano uguale per valore e tipo
examsCompleted < age   //true
isGraduated > yearsCompleted   //false, perchè false rappresenta 0