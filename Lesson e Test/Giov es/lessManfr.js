// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {
//     return arr.filter(num => num % 2 === 0)       //filtra i numeri pari
// }

// let result = createArrey(callback, 1, 2, 3, 4, 5, 6)
// console.log(result);

// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {
//     let sum = 0;
//     arr.forEach((num) => sum += num);            //cicla elementi
//     return sum;
// }

// let result = createArrey(callback, 1, 2, 3, 4, 5, 6)
// console.log(result);

// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {

//     return arr.map((num) => num * 2);    //crea un nuvo arrey, con moltiplicazioni, divisioni ecc...

// }

// let result = createArrey(callback, 1, 2, 3, 4, 5, 6)
// console.log(result);

// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {

//     return arr.find((num) => num > 5);    //trova il primo elemento della cond

// }

// let result = createArrey(callback, 1, 2, 3, 4, 5, 6)
// console.log(result);

// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {

//     return arr.sort((a, b) => a - b);    //trova in ordine i numeri, con una function, con (a - b) è in ordine crescente

// }

// let result = createArrey(callback, 10, 5, 4, 35, 52)
// console.log(result);

// function createArrey (cb, ...params) {
//     return cb(params)
// }

// function callback(arr) {

//     return arr.sort();    //trova in ordine i numeri, con una function, con (a - b) è in ordine crescente

// }

// let result = createArrey(callback, "cherry", "cherey" , "date", "apple", "elderberry", "banana", )
// console.log(result);

//blocco di codice che gestisce errori

// let myArr = [1, 2, 3, 4, 5]
// let string = "ciao"
// // let myObj = {key: 1}

// // console.log(typeof myArr, typeof myObj)

// function printArr(arr) {

//     try {

//         if(typeof arr === "object") {
//           console.log(arr)
//         } else {
//             throw new Error("inserisci un arrey")
//         }

//     } catch (error) {

//         console.error("sono dentro il catch", error)
//     }
// }

// printArr(string)

//CALLBACKS

// function printNameCB(a) {
//      a()
// }

// function nameCb() {
//     g = "ciao"
// }

// let stamp = printNameCB(nameCb)
// console.log(stamp)

// //function Arrow

// let arrey = [1, 2, 3, 4 ,5]

// const loop = () => {
//     let tot = 0
//     for (let index = 0; index < array.length; index++) {
//         tot += arrey[index]

//     }
//     return tot
// }

// function sumForEach() {
//     let tot = 0
//     arrey.forEach(num => tot += num)
//     return tot

// }

// function sumReduce() {
//     const tot = arrey.reduce((a, num) => a + num, 0)
//     return tot
// }

// const obj = {name: "ciao", age: 55}

// for (const key in obj) {                                //Solo per oggetti, cicla gli elementi
//     if (Object.hasOwnProperty.call(obj, key)) {           //verifica se ci sono key in un oggetto
//         const element = object[key];

//     }
// }

//creare un sistema carrello

// const products = [
//     {
//       id: 1,
//       name: 'Product A',
//       price: 29.99,
//       category: 'Electronics',
//     },
//     {
//       id: 2,
//       name: 'Product B',
//       price: 39.99,
//       category: 'Clothing',
//     },
//     {
//       id: 3,
//       name: 'Product C',
//       price: 9.99,
//       category: 'Home & Kitchen',
//     },
//     {
//       id: 4,
//       name: 'Product D',
//       price: 49.99,
//       category: 'Electronics',
//     }
//   ];

// //creare una func mostra tutti i prodotti del carrello

// function showProducts() {

//     console.log(products);
// }

// showProducts()

// //crea una funzione addProducts

// let cart = [];

// function addCart(id) {
//     for(let i = 0; i < products.length; i++) {
//         if (products[i].id === id) {
//             cart.push(products[i])
//         }
//     }

// }

// addCart(1)
// addCart(2)
// addCart(3)

// console.log(cart)

// //elimina un prodotto

// function removeKart(id) {

//     let filteredArr = cart.filter(element => {
//         return element.id !== id
//     })

//     cart = filteredArr;

// }

// removeKart(1);

// console.log(cart);

// //Totale dopo aver aggiunto i prodotti in cart

// function tot() {
//     let sum = cart.reduce((a, num) => a + num.price, 0)
//     console.log(Math.round(sum));
// }
// tot()

// let fruits = ["banana", "mela", "pera", "kiwi", "peach"];
// let secondFruits = [];

// function testProm(food) {
//   return new Promise((resolve, reject) => {
//     if (food.length != 0) {
//       resolve(food);
//     } else {
//       reject(new Error("L'arrey non è pieno"));
//     }
//   });
// }

// //trasforma tutto in maiuscolo

// function highLetter(food) {
//   return new Promise((resolve, reject) => {
//     if (food.length != 0) {
//       let upper = food.map((fruit) => fruit.toUpperCase());
//       secondFruits = upper;

//       resolve(secondFruits);
//     } else {
//       reject(new Error("empty"));
//     }
//   });
// }

// // async function startProm() {

// //   try {

// //     const sweet = await testProm(fruits);
// //     console.log(sweet);

// //     const highLe = await highLetter(sweet)
// //     console.log(highLe);

// //   } catch (error) {
// //     console.error(error);
// //   };
// // };
// // startProm();


// // testProm(fruits)
// //   .then((data) => {
// //     console.log(data);
// //     return highLetter(data);
// //   })
// //   .then((data2) => console.log(data2))
// //   .catch((error) => console.error(error));



// Promise.all([testProm(fruits), highLetter(fruits)])
// .then(data => console.log(data))
// .catch(error => console.error(error))

// Promise.race([testProm(fruits), highLetter(fruits)])       //stampa la prima che viene completata
// .then(data => console.log(data))
// .catch(error => console.error(error))



// let newArr = [testProm(fruits), highLetter(fruits)]

// Promise.race([newArr.map(element => element.then((data) => console.log(data)).catch((err) => console.error(err)))])






// Exercise: Simulate asynchronous data processing and filtering / Simula l'elaborazione e il filtraggio asincroni dei dati

// Task: -Given an array of numbers, simulate asynchronous data processing using timeouts. / -Dato un array di numeri, simula l'elaborazione asincrona dei dati utilizzando i timeout.
//       -Filter out even numbers and return the sum of the remaining odd numbers. / -Filtra i numeri pari e restituisce la somma dei restanti numeri dispari.
//       -ci sono metodi degli array, timeouts e promise




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];     


function filterNum(nums) {
  return new Promise((resolve, reject) => {                 //promise
    setTimeout(() => {
      if (numbers.length !== 0) {

        let even = nums.filter(num => num % 2 === 0)              //filter per prendere i num pari

        let oddSum = 0;
        
        nums.forEach(num => {                                 //forEach per sommare i numeri pari
          oddSum += num % 2 != 0   
        });

        resolve(`The sum of odd numbers is: ${oddSum}. The Even Numbers are: ${even}`)

      } else {
        reject(new Error("Insert the numbers into the arrey"))
      }
    }, 2000)
  });
};


async function startPromise() {
  try {

    const even = await filterNum(numbers);
    console.log(even);

  } catch (error) {
    console.error(error);
  }
}
startPromise();