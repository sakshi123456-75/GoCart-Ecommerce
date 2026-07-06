document.addEventListener("DOMContentLoaded",()=>{
    let products=JSON.parse(localStorage.getItem("products"));
    let productId=localStorage.getItem("productId");
    let productDetails=document.getElementById("productDetails")
    // console.log(products);
    // console.log(productId);
   if(productId && products){
    let selectedProduct=products.find((val)=>{
        return val.id==productId;
    })
   console.log(selectedProduct);
   if(selectedProduct){
    productDetails.innerHTML=`

    <img src="${selectedProduct.images[0]}"/>
    <h1>${selectedProduct.title} </h1>
    <h2> Brand : ${selectedProduct.brand}</h2>
    <h3><b>Category : </b>${selectedProduct.category}</h3>
    <p><b>Description :</b> ${selectedProduct.description}</p>
    <h4><b>Price :&#8377</b> ${selectedProduct.price}</h4>
    <button id="addToCart">Add to Cart</button>
    <button id="backHome">Back to Home</button>
    
    
    
   <h5><b>Customer reviews</b></h5>
   <div style="width:
    100%; height: 1px;
     background-color: black;
      margin: 600px 0 20px 0;">
      </div>
    
    
    `;


    


    //add to home section //
    document.getElementById("backHome").addEventListener("click", () => {
            window.location.href = "index.html"; 
        });


        //add to cart section //
         document.getElementById("addToCart").addEventListener("click", () => {
            
            addToCart(selectedProduct)
            // alert("Product added to cart!");

        });
        
   }


   }
   else{
    productDetails.innerHTML="<p>No product found</p>"
   }



})

function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart"))  ||[];
    console.log(product);
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Added succesfully");
    

}