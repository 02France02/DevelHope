                     /* I METODI DELLA CONSOLE */
/*
-La console è un'interfaccia che permette di visualizzare log, errori e altri messaggi generati dal codice JavaScript.
-La console offre la possibilità di ESEGUIRE direttamente CODICE JAVASCRIPT.

VARI METODI DI STAMPA:
-♦CONSOLE.LOG(): stampa un qualsiasi risultato
-♦CONSOLE.ERROR(): usato per stampare un messaggio di errore
-♦CONSOLE.WARM(): stampa un messaggio di avvertimento
-♦CONSOLE.TABLE(): visualizza dati sotto forma di tabella, organizza meglio i dati di unn Array.
-♦CONSOLE.GROUP(): raggruppa una serie di log correlati. "es: una func con tanti log,"
 per es.: console.group("User Details")
            console.log("nome: Marco");
            console.log("age: 12");
          console.groupEnd()
-CONSOLE.ASSERT(): esso prende 2 parametri: una Condition e il Log. Stampa un messaggio solo se una determinata condizione è falsa. 
 per es.:console.assert(1 === 2) = faild
*/


                    /* INTRODUZIONE DOM */
/*                
Il DOM (Document Object Model), è la STRUTTURA di un documento web che permette di INTERAGIRE con l'HTML della pagina.
-Con il DOM, è possibile MANIPOLARE la pagina, cambiare colori, aggiungere elementi e leggere dati.
-Proprietà necessaria: è DOCUMENT ELEMENT, che stampa l'intera struttura html.

-♦"DOCUMENT", è la chiave per accedere al DOM e offre diverse proprietà e API per lavorare con esso.
-♦NODO: è ogni parte del DOM, es."tag <html>, <head>, <body>, <p>"
-♦ELEMENTO: è specificamente un pezzo di codice HTML racchiuso tra due tag. es.:"<body> <header></header> </body>",
  HEADER sarebbe un elemento, anche se è a sua volta anche un nodo.*/

                 /* NAVIGARE IL DOM */

/*Per puntare determinati elementi nel DOM,  Gli OBJECT DOCUMENT e DOCUMENT ELEMENT, usano Diverse PROPRIETA':

-♦CHILDREN: Ritorna una collezione degli elementi figli di un elemento. Es.: <div> <ul> <li></li> </ul> </div>, 
  se uso CHILDREN su <UL>, mi andrà a prendere tutti gli <LI>*/
  const html = document.documentElement
  /* STAMPA DI TUTTO L'HTML */
  console.log(html);
  /* CHIAMATA DI ELEMENTI FIGLI */
  console.log(html.children);
  /* STAMPA: HTMLCollection(3) [head, body, grammarly] */
  const body = html.children[1]
  /* STAMPA: elementi del body [ul, script] */
  const ul = body.children[0]
  /* STAMPA: elementi di ul [li, li, li] */
  const liAll = ul.children
  /* STAMPA: tutti gli elementi di ul  */
/* 

-♦PARENTELEMENT: ritorna l'elemento genitore nel nodo */
  const li= ul.children[1]
  /* STAMPA: tutti gli elementi di ul  */
  li.parentElement
  /* STAMPA del GENITORE: UL */
/*

-♦PREVIOUSELEMENTSIBLING: ritorna l'elemento precedente sullo stesso livello, ovvero il fratello, come gli <LI>
-♦NEXTELEMENTSIBLING: ritorna l'elemento successivo sullo stesso livello, ovvero il fratello, come gli <LI>*/
  const li1 = ul.children[1]
  /* STAMPA: tutti gli elementi di ul  */
  li1.previousElementSibling
  /* STAMPA: il precedente fratello */
  li1.nextElementSiblingElementSibling
  /* STAMPA: il successivo fratello */


              /* CERCARE ELEMENTI NEL DOM 
              
-♦QUERYSELECTOR: è un metodo di DOCUMENT, e non DocumentElement. Ritorna il primo elemento che corrisponde al selettore fornito.*/
  //In una var chiamiamo il method, e nelle "", usiamo la CLASS, l'ID o i SELECTOR
  const ul1 = document.querySelector("#my-Id-Ul", ".my-Class-Ul", "<ul>", "select[attribute]")
  console.log(ul1);
/* 
-♦QUERYSELECTORALL: è un metodo di DOCUMENT, e non DocumentElement. Ritorna tutti gli elementi corrispondenti. */
  //In una var chiamiamo il method, e nelle "", usiamo la CLASS o i SELECTOR
  const ul2 = document.querySelectorAll(".my-Class-Ul", "<ul>")
  console.log(ul2);
/* 
-♦GETELEMENTBYID: ritorna il primo elemento dato un ID.*/
  //Nelle tonde passo Solo Il Nome Dell'ID, senza il "#"
  const ul3 = document.getElementById("my-Id-Ul")
  console.log(ul3);
/* 
-♦GETELEMENTSBYCLASSNAME: ritorna una lista di elementi data da una classe.  */
  //Nelle tonde passo Solo Il Nome Della CLASS, senza il "."
  const ul4 = document.getElementById("my-Class-Ul")
  console.log(ul4);

  


              /*  -----------------------------------------------------------------------------------------------
                                                MANIPOLARE IL DOM 
              --------------------------------------------------------------------------------------------------- */ 
/*                
Per manipolare gli elementi, useremo dei metodi:
-♦TEXTCONTENT: ottenere o impostare il contenuto testuale di un nodo del DOM
              -non tiene conto del css applicato all'elemento, più veloce
-♦INNERTEXT: Ottiene o Imposta il Testo Contenuto all'Interno di un Elemento. 
             -Non posiiamo modificarlo mettento altri tag HTML dentro INNERTEXT.
             -tiene conto delle regole css applicate
-♦INNERHTML: Ottiene o imposta il Codice HTML contenuto all'interno di un elemento.
            -In questo caso, possiamo aggiungere altri TAG.
-♦CLASSLIST.ADD: Aggiunge una classe.
-♦CLASSLIST.REMOVE: Rimuove una classe.
-♦CLASSLIST.CONTAIN: si usa per lo più nei controlli, per verificare se son presenti delle classi.
                    -E' stato sostituito dal ClassList.togle, SOLO PER I CONTROLLI.
-♦CLASSLIST:TOGGLE: Aggiunge/Rimuove una classe.
-♦SETATTRIBUTE("NAME", "VALUE"): Si usano per aggiungere o per impostare un nuovo valore di attributo ad un elemento.
-♦CREATEELEMENT: Crea un nuovo elemento.
-♦APPENDCHILD: Aggiunge un elemento al DOM.
-♦REMOVE: Rimuove un elemento.
-♦elementFromForm.VALUE: Value si usa per leggere il valore di un input o altro, che anche per modificarlo.


-♦INNERTEXT: Ottiene o Imposta il Testo Contenuto all'Interno di un Elemento. 
             -Non possiamo modificarlo mettendo altri tag HTML dentro INNERTEXT.
*/
//1°: Leggere il valore tramite variabile
const h1 = document.querySelector(".my-Title")
//2°: Selezionare il Testo, mettere il Testo in una var
const h1Text = h1.innerText;
console.log(h1Text);
//Possiamo anche modificarlo
h1.innerText = "Another Title";
//Possiamo aggiungere un SetTimeOut per ritardare la modifica ad ogni refresh della pag
setTimeout(() => {
  h1.innerText = "Another Title";
}, 2000)


/*  
-♦INNERHTML: Ottiene o imposta il Codice HTML contenuto all'interno di un elemento.
            -In questo caso, possiamo aggiungere altri TAG.*/
h1.innerHTML = "<i>Another Title</i>";


/* 
-♦CLASSLIST.ADD: Aggiunge una classe*/
//Prendiamo l'H1 ricercato e aggiungiamo una classe con il colore diverso
const h1 = document.querySelector(".my-Title");
//aggiungo una classe creata sul css
h1.classList.add("class-in-css")


/* 
-♦CLASSLIST.REMOVE: Rimuove una classe*/
//Prendiamo l'H1 ricercato e rimuoviamo una classe
const h1 = document.querySelector(".my-Title");
//rimuovo una classe creata sul css
h1.classList.remove("class-in-css")



/* 
-♦CLASSLIST.CONTAIN: si usa per lo più nei controlli, per verificare se son presenti delle classi.
                    -E' stato sostituito dal ClassList.togle, SOLO PER I CONTROLLI
Mettiamo caso che io voglia rimuovere la classe se esiste o aggiungerla se non presente */
//Andrà fatto un controllo con IF
if (h1.classList.contains("this-class")) {
  h1.classList.remove("this-class")
} else {
  h1.classList.add("this-class")
}



/*
-♦CLASSLIST:TOGGLE: Aggiunge/Rimuove una classe*/
//Serve per semplificare il Controllo di Prima
h1.classList.toggle("this-class")  



/* 
-♦SETATTRIBUTE("NAME", "VALUE"): Si usano per aggiungere o per impostare un nuovo valore di attributo ad un elemento*/
//NAME: nome dell'attributo;
//VALUE: valore del nuovo attributo;
element.setAttribute("name", "value");
//cambio sa input a button
myInput.setAttribute("type", "button");
        /* ESEMPIO: CAMBIO HREF DI UN LINK */
const a = document.querySelector(".mylink")
a.setAttribute("href", "www.facebook.com")


/* 
-♦CREATEELEMENT: Crea un nuovo elemento*/
//Voglio creare un nuovo elemento, tipo un LI ad una UL vuota
const ul5 = document.getElementById("my-ul");
//Creo il nodo figlio da Appendere, nelle ("tag da creare")
const li2 = document.createElement("li");
//Ora aggiungo un TxT a LI2
li2.innerText = "My added Element";



/*  
-♦APPENDCHILD: Aggiunge un elemento al DOM*/
//Devo appendere all'elemento padre, il precedente elemento creato
//ANALISI: Nome elemento Su cui Inserire, appendChild, (var da inserire)
ul5.appendChild(li2)


/*  
-♦REMOVE: Rimuove un elemento*/
//Voglio rimuovere un elemento, tipo una UL 
const ul6 = document.getElementById("my-ul");
//Ora Rimuovo
ul6.remove()



/*                       LEGGERE UN ELEMENTO FORM E MODIFICARLO

Vediamo come LEGGERE il Valore di un INPUT o di un qualsiasi elemento valore di FORM e come MODIFICARLO: 
LEGGERE: */
const input = document.querySelector(".my-input")
//ACCESSO al VALORE
const value = input.value;
console.log(value);
//MODIFICA
input.value = "New text to the value";


/*  -----------------------------------------------------------------------------------------------
                                    GLI EVENTI DEL DOM
--------------------------------------------------------------------------------------------------- */
/* 
Gli eventi sono AZIONI o OCCORRENZE che possono esser CATTURETE o GESTITE nel codice. ES: Al click appare una lista o cambio colore.
-♦ADD-EVENT-LISTENER: consente di ascoltare specifici eventi e di eseguire funzioni di callback quando questi si verificano.
 Esso può contenere vari eventi, come:
 -CLICK: Viene scatenato quando un utente clicca su un elemento.
 -CHANGE: Quando il valore di evento di un InPut cambia. (Usato spesso nel form)
 -KEYDOWN: Quando viene premuto un tasto. (Usato spesso nel form)
 -MOUSEOVER: Quando il mouse passa su un elemento.
 -MOUSEOUT: Quando viene premuto un tasto.
 
SINTASSI: 1°= Evento da gestire; 2°= Callback da compiere ogni qualvolta si verifica un evento*/
const btn = document.querySelector("button")
btn.addEventListener("EVENTO", (e) => {}) 
             
                /* EXAMPLE */
// Change event
const select = document.querySelector('.my-select');

select.addEventListener('change', event => {
    console.log('select event', event);
});

// Keydown event
const input = document.querySelector('.my-input');

input.addEventListener('keydown', event => {
    console.log('input event', event);
});

// Mouse events
const div = document.querySelector('.parent');

div.addEventListener('mouseover', event => {
    console.log('mouseover event', event);
});

div.addEventListener('mouseout', event => {
    console.log('mouseout event', event);
});

/* Ogni volta che si verifica un evento, viene stampato un OGGETTO EVENT che contiene svariate info, tra cui:
-♦TATGET: elemento su cui è partito l'evento, tipo H1 
-♦TYPE: Tipologia di evento, tipo CLICK */

                   /* METODI DI EVENT */

/* 
Alcuni elementi del DOM, hanno eventi gestiti in AUTO, come i LINK 
-♦PREVENTDEFAULT: impedisce l'azione predefinita di un evento.
-♦STOP-PROPAGATION: previene la propagazione dell'evento verso elementi genitori.

            EXAMPLE: Voglio bloccare i link:*/
const a1 = document.querySelector(".my-link");
//do un Event ad a, al clik, non funzioni
a.addEventListener("click", e => {
  //Resta sulla stessa PAG
  e.preventDefault()
  //Viene stampato questo
  console.log("redirect prevent");
})

/* EXAMPLE: Ho 2 Div annidati, se clicco nel DIV padre appare un alert, mentre nel DIV figlio, 
   appaiono 2 alert, per il figlio ed il padre. Questo fenomeno è chiamato:

   #EVENT-BUBBLING# quando parte un evento dall'elemento figlio, si propaga dal basso verso l'alto fino all'elemento più
                    esterno del DOM, andando a prendere tutti i padri.*/

const child = document.querySelector(".child")
child.addEventListener("click", e => {
  e.stopImmediatePropagation()
  alert("Child clicked")
})