const products = [
    { name: "Laptop", price: 800, available: true },
    { name: "Phone", price: 600, available: false },
    { name: "Tablet", price: 400, available: true },
    { name: "Monitor", price: 300, available: true }
];

const output = document.getElementById("products");

//Map: apply 10% discount to all products
document.getElementById("discount").addEventListener("click", ()=>{
    const discountedProducts = products.map(product => ({
        name: product.name,
        discountPrice: (product.price * 0.9).toFixed(2)
    }));
    //discountedPrices ouytout
    //[{name:"Laptop",discountPrice:720},{name:"Phone",discountPrice:540},...]

output.innerHTML = `<h2>Discounted Products (10% off):</h2>
<ul>
${discountedProducts.map(p => `<li>${p.name}: $${p.discountPrice}</li>`).join('')}
</ul>`;
});

//Filter: get only available products
document.getElementById("available").addEventListener("click", ()=>{
    const availableProducts = products.filter(product => product.available);
    //availableProducts output
    //[{name:"Laptop",price:800,available:true},{name:"Tablet",price:400,available:true},...]
    output.innerHTML = `<h2>Available Products:</h2>
<ul>
${availableProducts.map(p => `<li>${p.name}: $${p.price}</li>`).join('')}
</ul>`;
});


//Reduce: calculate total price of all products
document.getElementById("total").addEventListener("click", ()=>{
    const totalPrice = products.reduce((total, product) => total + product.price, 0);
    output.innerHTML = `<h2>Total Price of All Products: $${totalPrice.toFixed(2)}</h2>`;
});
