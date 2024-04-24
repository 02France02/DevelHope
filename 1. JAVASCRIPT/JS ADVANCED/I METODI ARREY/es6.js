// 1 Utilizza forEach per stampare i nomi degli studenti.
// 2 Utilizza find per trovare uno studente con un voto superiore a 90.
// 3 Utilizza reduce per calcolare la media dei voti degli studenti.
// 4 Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// 5 Utilizza filter per trovare gli studenti con voti superiori a 85.


const studenti = [
    { nome: "Alice", voto: 95 },
    { nome: "Bob", voto: 88 },
    { nome: "Carol", voto: 76 },
    { nome: "David", voto: 92 },
    { nome: "Eve", voto: 84 },
  ];


studenti.forEach(studenti => console.log(studenti))     //1

const vot = studenti.find(studenti =>  studenti.voto >= 90)     //2 
console.log(vot)

const sum = studenti.reduce((a, student) => a + student.voto, 0 )            //3
const avg = sum / studenti.length
console.log(avg)

const highLetter = studenti.map(studenti => studenti.nome.toUpperCase() )     //4
console.log(highLetter)

const bestVote = studenti.filter(studenti => studenti.voto >= 85)         //5
console.log(bestVote)