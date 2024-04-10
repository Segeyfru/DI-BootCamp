const products = require("./products");

function showProduct(name) {
    for (const product of products) {
        if(product.name === name){
            return product
        }
    }
    
    return -1;
}

console.log(showProduct("Laptop"));
console.log(showProduct("Headphones"));
