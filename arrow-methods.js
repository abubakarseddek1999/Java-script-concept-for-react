const products =[
    {name: 'laptop', price:3200, brand:'lenovo', color: 'silver'},
    {name: 'phone', price:7000, brand:'iphone', color: 'golden'},
    {name: 'watch', price:3000, brand:'casio', color: 'yellow'},
    {name: 'sunglass', price:300, brand:'r bon', color: 'black'},
    {name: 'camera', price:9000, brand:'canon', color: 'gray'}
]
const brand = products.map(product => product.brand);
// console.log(brand);
const price = products.map(product => product.price);
// console.log(price);

products.forEach(product =>console.log( product));
products.forEach(product =>{

});

const cheap =products.filter(product => product.price <=5000);
console.log(cheap);
const specificName =products.filter(product => product.name.includes('n'));
console.log(specificName);

const special =products.find(product => product.name.includes('n'));
console.log(special);


