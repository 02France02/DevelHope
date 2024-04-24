function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let phone1 = new Smartphone("samsung", "s10", 800 + "$")

let phone2 = new Smartphone("apple", "iphone xs", 700 + "$")

console.log(phone1)

console.log(phone2)
