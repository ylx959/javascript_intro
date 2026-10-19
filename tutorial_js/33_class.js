//class

class Product{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(1)}`);
    }
}

const salesTax=0.05;

const product1=new Product("Shirt",19.99);
const product2=new Product("Pants",15.99);
const product3=new Product("Underwear",100.00);

product3.displayProduct();

product1.displayProduct();
product2.displayProduct();