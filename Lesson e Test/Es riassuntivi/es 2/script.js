async function fetchData() {
  try {
    const dataObj = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const singleObJ = await dataObj.json();

    console.log(singleObJ);
  } catch (error) {}
}
fetchData();
