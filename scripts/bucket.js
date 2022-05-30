// On clicking remove button the item should be removed from DOM as well as localstorage.
product2=JSON.parse(localStorage.getItem("coffee"))||[];
console.log(product2);
product2.map(function(elem,index){
    var div2=document.createElement("div");
    div2.setAttribute("id","bag")
    var image2=document.createElement("img");
    image2.src=elem.Image;
    image2.style.height="400px";
    image2.style.width="400px"
    var name2=document.createElement("p");
    name2.innerText=elem.Name;
    name2.style.textAlign="center";
    var price2=document.createElement("p");
    price2.innerText=elem.Price;
    price2.style.textAlign="center";
    var btn2=document.createElement("button");
    btn2.innerText="Remove";
    btn2.style.marginLeft="195px";
    btn2.setAttribute('id',"remove_coffee")
    btn2.addEventListener("click",remove)
        function remove(){
            var ele=document.getElementById("bag");
            ele.parentNode.removeChild(ele);
            product2.splice(index,1);
            localStorage.setItem("coffee",JSON.stringify(product2));
            pro=JSON.parse(localStorage.getItem("coffee"))||[];
            var rtu=0;
            for(var i=0;i<pro.length;i++){
                rtu+=Number(pro[i].Price);  
            }document.getElementById("total_amount").innerText=rtu;
            
        }
    
    div2.append(image2,name2,price2,btn2);
    document.getElementById("bucket").append(div2);
})

function total(){
    var tot=0;
for(var i=0;i<product2.length;i++){
    tot+=Number(product2[i].Price);
}document.getElementById("total_amount").innerText=tot;
}
total()
document.getElementById("confirm_checkout").addEventListener("click",checkout);
function checkout(){
    window.location.href="checkout.html"
}
