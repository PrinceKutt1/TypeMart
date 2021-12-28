import products from './products';
const productName : string = 'tote bag';
const product = products.filter(product => product.name === productName)[0];


let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress :string = '555 Liberation Highway, Airport City, Accra';




if (product.preOrder) {
  console.log('We will send you a message when your product is on its way.');
}

if(product.price >= 25){
  shipping = 0;
  console.log('Free shipping for products worth $25 or more');
}
else{
  shipping = 5;
  console.log('We charge $5 for products below $25')
}

if(shippingAddress.match('New York')){
 taxPercent = 0.1;
}
else{
taxPercent = .05
}

taxTotal= product.price * taxPercent;
total = product.price + taxTotal + shipping;

console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);

console.log(product)
