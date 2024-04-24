const containerCard = document.querySelector(".container-Card");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const insertedWord = document.querySelector('input').value;
    fetchWord(insertedWord)
})

async function fetchWord(wordParameter) {
    try {
        const words = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordParameter}`);
        const objWords = await words.json();
        const card = document.createElement("div")
        card.classList.add("main");

        console.log(objWords);
        const {word, phonetics, meanings, sourceUrls} = objWords[0];
        
        card.innerHTML = `
            <h3 class="name">${word}</h3>
            <p class="phonetic">${phonetics[1].text}</p>
            <div class="origin">${meanings[0].definitions[0].definition}</div>
            <a href="${sourceUrls}">Apri</a>
        `;  
        containerCard.appendChild(card);
    } catch (error) {
        console.error(error);
    }
}


