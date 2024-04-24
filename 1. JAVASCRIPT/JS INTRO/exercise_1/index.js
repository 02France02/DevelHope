const arrayCar = [{brand: "fiat", model: "Punto", year: "2010"},
                  {brand: "lancia", model: "delta", year: "2009"},
                  {brand: "opel", model: "Meriva", year: "2012"}]

function printModel(cars) {
    let newArr = [];
    cars.forEach(car => {
        let brand = car.brand;
        let model = car.model;
        newArr.push(brand)
        newArr.push(model)

    });
    console.log(newArr);
}
printModel(arrayCar)