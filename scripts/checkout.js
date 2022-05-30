function alerting(){
    setTimeout(start,0);
    setTimeout(processing,3000);
    setTimeout(completed,8000);
    setTimeout(delivery,10000);
    setTimeout(delivered,12000);

}
function start(){
    alert("Your order is accepted");
};
function processing(){
    alert("Your order is being Prepared");
}
function completed(){
    alert("Your order is being packed");
}
function delivery(){
    alert("Your order is out for delivery");
}
function delivered(){
    alert("Order delievered");
}