const films = [
    {
      title: "Il padrino",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Fantasy"
    },
    {
      title: "Star Wars: Episodio IV - Una nuova speranza",
      director: "George Lucas",
      year: 1977,
      genre: "Fantascienza"
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Fantasy"
    },
    {
      title: "Il signore degli anelli: La compagnia dell'anello",
      director: "Peter Jackson",
      year: 2001,
      genre: "Fantasy"
    }
  ];

function printObj(moves) {
    let newObj = []
    moves.forEach(film => {
      if (!newObj.includes(film.genre)) {
        let obj = film.genre
        newObj.push(obj)

      } else {
        console.log(film.genre);
      }
        
  });
  

    console.log(newObj);
    
}
printObj(films)