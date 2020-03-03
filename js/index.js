//Variables to use and it's a mix of global and local variables
let shoppingCart = [];
let cartProducts = '';

//This code gets whatever is inside data-product in the HTML
let product = event.target.parentNode.getAttribute('data-product');
cartProducts += '<li><span class="product-title">Titel: </span>' + shoppingCart[i] + '</li>';


//
document.getElementById('productsInCart').innerHTML = shoppingCart.length;
document.getElementById('cart').classList.toggle('hide');
document.getElementById('products').innerHTML = cartProducts;
products[i].addEventListener('click', function(event) {});
document.getElementById('open-cart').addEventListener('click', function() {});

//Function declarations, add code inside {}
function updateCart() {}
function listProductsInCart() {}


//For-loops of two arrays
for(let i = 0; i < shoppingCart.length; i++) {}
for(let i = 0; i < products.length; i++) {}


//Function calls and there should be two listProductsInCart()
updateCart();
listProductsInCart();
listProductsInCart();


// solution provided by Chriss
// let products = document.getElementsByTagName('button');
// for(let i = 0; i < product.length; i++){
//     console.log(product[i]);
//     console.log('iteration' + i);
//     product[i].addEventListener('click', function(event){
//         console.log(even.target.parentNode.getAttribute('data-product');
//         shoppingCart.push(product);
    

//     });

// }