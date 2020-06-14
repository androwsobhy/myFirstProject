let products = [
    {name: "Pepsi",quantity: 100,type: "Unit",},
    {name: "Tomato",quantity: 50,type: "Kilo",},
   

 ];
   

function getProducts(x){
 const addProductList=[...x];

console.log(addProductList)

}

getProducts(products);

function addProduct(name,quantity,type){

products.push({name,quantity,type})

}

addProduct("onion", 30, "unit");
console.log(products);




function updateQuantitiy(productName , quantity){

   for (let i=0;i < products.length ;i++){
   if (products[i].name == productName) 
   { products[i].quantity=quantity;}
   
   }};
   
   updateQuantitiy("onion", 1000);
   console.log(products);

   /*function validatQuantity(quantity){
      if(typeof quantity !== "number"){
   throw new Error(`${quantity} is not a number`);}}
function add(x,y,z){

   validatQuantity(x);
   validatQuantity(y);
   validatQuantity(z);
   return x + y +z;}
console.log(add(1,2,'hey'));*/

function validation (name,quantity,type){
  if     (typeof  name !=="string")    {throw new Error(`${name} is not a string`);}
 else if (typeof quantity !== "number"){throw new Error(`${quantity} is not a number`);}  
 else if(typeof  type!=="string" )     {throw new Error(`${type} is not a string`);}
                                       }



   validation("oninon",50,"kilo")
   console.log(products)