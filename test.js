// const products = [
//     {
//     image: "https://images.pexels.com/photos/5836524/pexels-photo-5836524.jpeg",
//     name: "SmartPhone",
//     Price: 15000,
//     inStock: true
// },
// {
//     image: "https://images.pexels.com/photos/5836524/pexels-photo-5836524.jpeg",
//     name: "HeadPhones",
//     Price: 5000,
//     inStock: false
// },
// {
//     image: "https://images.pexels.com/photos/5836524/pexels-photo-5836524.jpeg",
//     name: "Laptop",
//     Price: 50000,
//     inStock: true
// }



// ];

// function displyProducts(){
//     const container = document.getElementById("productContainer");
// container.innerHTML = "";

// for(let i  =  0; i<products.length;i++){
//     let product = products[i];

//     let card = document.createElement("div");
//     card.className = "bg-white rounded-2xl text-center shodow-lg";
//     card.innerHTML = `
//     <img src="${product.image}" alt="${product.name}" class="mx-auto mb-4 w-32 h-32 object-cover rounded">
//     <h2 class="text-lg font-bold">${product.name}</h2>
//     <p class="text-gray-600">${product.Price}</p>
//     <div class="flex justify-center gap-2 mt-4 mb-4">
//     <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900">Add to Crat</button>
//     <button class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-900 ${!product.inStock ? "opacity-50 cursor-not-allowed" : ""}" ${!product.inStock ? "disabled" : ""}>Buy Now</button>
//     </div>
//     `

//     container.appendChild(card);
// }
// }
// displyProducts()



let currentRating = 0;

function setRating(rating){
    currentRating = rating;

    const stars = document.getElementById("stars").getElementsByTagName("i");

for(let i=0; i<stars.length;i++){
    if(i<rating){
        stars[i].style.color = "gold";
    }
    else{
        stars[i].style.color = "gray";
    }
}
document.getElementById("ratingText").innerText = "Your Rating: "+ rating;
}


