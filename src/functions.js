function addToCart(quantity, productName = "Elma") {
  console.log("Sepete eklendi : ürün: " + productName + " adet: " + quantity);
}

//addToCart()
//addToCart("Limon")
addToCart(15);

let sayHello = () => {
  console.log("Hello world!");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello world2!");
};

sayHello2();

function addToCart2(productName, quantity, unitPrice) {}
addToCart2("Elma", 5, 10);
addToCart2("Armut", 2, 20);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("Ürün adı: " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart3(product1);

function addToCart4(x) {
  console.log(products);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);

function add(number1, number2) {
  console.log(number1 + number2);
}
function add2(number1, number2, number3) {
  console.log(number1 + number2 + number3);
}

//rest
function add3(bisey, ...numbers) {
  //console.log(numbers)
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
  console.log(bisey);
}
add3(20, 30, 40, 50);

//spread
let numbers = [30, 10, 500, 600, 120];
//console.log(...numbers)
console.log(Math.max(...numbers));

//destructure
let [icAnadolu, marmara, akdeniz, [icAnadoluSehirleri]] = [
  { name: "İç Anadolu", population: "20M" },
  { name: "Marmara", population: "30M" },
  { name: "Akdeniz", population: "10M" },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Mersin", "Antalya"],
  ],
];
console.log(akdeniz);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = { productName: "Elma", unitPrice: 10, quantity: 5 });
console.log(newProductName);
