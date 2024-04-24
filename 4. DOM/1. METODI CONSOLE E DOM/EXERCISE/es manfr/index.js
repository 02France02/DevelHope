const ul = document.querySelector("#unordered-list");
//chiamo il form
const form = document.querySelector("form");

//Aggiungo un evento al form, sarà submit + un'arrowfunction
form.addEventListener("submit", (e) => {
  //Uso il preventDefoult per non far aggiornare la pag
  e.preventDefault();
  //prendo l'input dentro il form con e.target.input
  const newToDo = e.target.input.value;
  //Controllo se ci sia qualcosa nell'input
  if (newToDo) {
    //creo ul button Remove
    const remove = document.createElement("button")
    remove.textContent = "x"
    //creo i LI
    const li = document.createElement("li");
    //I LI hanno come contenuto il valore dell'imput
    li.textContent = newToDo;
    //Appendo LI a UL
    ul.appendChild(li);
    //Appendo Il Button Remove a LI
    li.appendChild(remove)

    //Non è l'ideale
    //remove.onclick = () => li.remove()

    //Chiamo un evento per eliminare la LI chiamando il bottone
    remove.addEventListener("click", () => li.remove())
  } else {
    alert("Input vuoto");
  }
});
