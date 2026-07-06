let products=[];
function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        products = val.products;
        console.log(products);
        localStorage.setItem("products",JSON.stringify(products));
        fetchProduct(products);
    })
}
function fetchProduct(product){
    let output = "";
    product.map((v)=>{
        output +=`<div id="box">
        <img src=${v.images[0]} width="200"/>
        <h3>${v.title}</h3>
        <h4>Rating:${v.rating}</h4>
        <h4>PRICE:${v.price} Rs</h4>
        <br>
        <button id="view" onclick="viewMore(${v.id})">View More</button>
        </div>`
    });
    document.getElementById("containerBox").innerHTML = output;
}
 document.getElementById("searchproduct")
.addEventListener("input",function searchItem(e){
    let searchTerm = e.target.value.toLowerCase();
    console.log(searchTerm);
    
    let filterProduct = products.filter((val)=>{
        return(
            val.title.toLowerCase().includes(searchTerm) || val.category.toLowerCase().includes(searchTerm)
        );
})
fetchProduct(filterProduct);
})

function viewMore(productId){
    console.log(productId)
    localStorage.setItem("productId",productId);
    window.location.href="./viewMore.html"

}

fetchData()