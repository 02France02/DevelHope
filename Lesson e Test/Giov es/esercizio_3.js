/********
 Esercizio 4: Simulazione di un App Todo List
 Crea una classe TodoList che consenta di aggiungere, rimuovere e visualizzare attività.
 Implementa anche la funzionalità di segnare un'attività come completata.
 *******/

const todoList = {
    attivita: [{key: "pulire casa", done: true}, {homeWork: "la casa colorata", done: false} ]   
}

function aggiungiAttivita(descrizione) {
    todoList.attivita.push(descrizione);
}

function rimuoviAttivita(index) {
    todoList.attivita.splice(index, 1);
}

function visualizzaAttivita(list) {
    console.log(list);
}

function segnaCompletata(index) {
    let complete = todoList.attivita.filter(attivity => attivity.done === false)
    return complete = index
}

//Aggiuingo nuove attività
console.log("Aggiuingo nuove attività");
aggiungiAttivita({key: "nonna", done: true})
aggiungiAttivita({key: "gym", done: false})

//Vedo le attività aggiunte

visualizzaAttivita(todoList)

//cancello le attività che non devo più fare o che ho gia fatto
console.log("cancello le attività che non devo più fare o che ho gia fatto");
rimuoviAttivita(0)

visualizzaAttivita(todoList)

//segno le attività come fatte
console.log("segno le attività come fatte");
segnaCompletata(true)

visualizzaAttivita(todoList)
