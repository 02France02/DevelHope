async function fetchData() {
  try {
    const resp = await fetch(`https://fakestoreapi.com/products`);
    const respObj = await resp.json();
    console.log(respObj);

    let cart = [];
    const containerAll = document.querySelector(".container-all");
    respObj.forEach((element) => {
      const card = document.createElement("div");
      card.classList.add("single-card");

      card.innerHTML = `
        <div class="image">
            <img src="${element.image}" alt="">
        </div>
        <h4 class="title">${element.title}</h4>
        <span class="price">$${element.price}</span>
        <button class="add">ADD</button>
        `;
      containerAll.appendChild(card);
    });

    const addButton = Array.from(document.querySelectorAll(".add"));
    addButton.forEach((button) => {
      button.addEventListener("click", () => {
        cart.push("prodotto");
        alert("Prodotto aggiunto" + cart.length)
         console.log(cart);
      });
    });

   

  } catch (error) {
    console.error(error);
  }
}
fetchData();
