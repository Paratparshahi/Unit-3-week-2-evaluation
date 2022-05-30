// Add the coffee to local storage with key "coffee"
function getData() {
    return fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    .then(function(res){
        return res.json();
    }).then(function(res){
        console.log(res);
        return res;
    }).catch(function(err){
        console.log(error)
    })
 }
 getData().then(function(res){
    product= res.menu.data;
    product.map(function(elem,index){
        var div=document.createElement("div");
        var image=document.createElement("img");
        image.src=elem.image;
        image.style.width="400px";
        image.style.height="400px";
        var name=document.createElement("p");
        name.innerText=elem.title;
        name.style.textAlign="center"
        var price=document.createElement("p");
        price.innerText=elem.price;
        price.style.textAlign="center"
        add=document.createElement("button");
        add.innerText="Add to cart";
        add.style.marginLeft="195px"
        add.setAttribute("id","add_to_bucket")
        add.addEventListener("click",function(){
            let store=JSON.parse(localStorage.getItem("coffee"))||[];
            obj={
                Image:elem.image,
                Name:elem.title,
                Price:elem.price,

            }
            store.push(obj);
            localStorage.setItem("coffee",JSON.stringify(store));
            console.log(store);
            store2=JSON.parse(localStorage.getItem("coffee"))||[];
            document.getElementById("coffee_count").innerText=store2.length;
        })
        div.append(image,name,price,add);
        document.getElementById("menu").append(div)

    })
    
}) 
function count(){
    var cou=JSON.parse(localStorage.getItem("coffee"));
    document.getElementById("coffee_count").innerText=cou.length;

}count()
