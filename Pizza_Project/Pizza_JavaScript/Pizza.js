function getReceipt(){
    var text1 = "<h3>You Ordered:</h3>";
    var total = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");//Get all the size radio input
    var selectedSize = "";
    for (var i = 0; i <sizeArray.length; i++){
        if(sizeArray[i].checked){
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
            break;//Radio button only allows 1 to be checked. Break to get out of the loop
        }
    }

    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    }
    else if (selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }
    else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }
    else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }
    else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }
    
    total = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Size text1: " + text1 );
    console.log("Subtotal: $" + total +".00");
    getToppings(total,text1);
}

function getToppings(runningTotal,text){
    var toppingTotal = 0;
    var numberOfToppings = 0;
    var toppingArray = document.getElementsByClassName("toppings");
    for(var j = 0; j <toppingArray.length; j++){
        if(toppingArray[j].checked){
            text += toppingArray[j].value +"<br>";//Cant use break due to multiple toppings are allowed. 
            //Continue the loop after 1 topping has been picked.
            numberOfToppings++;
            console.log("Selected topping item: (" + toppingArray[j].value +")");
        }
    }

    toppingTotal = numberOfToppings -1;
    if(toppingTotal < 0){
        toppingTotal = 0;
    }
    runningTotal += toppingTotal;
    console.log("Total selected toppings items: " + numberOfToppings);
    console.log(numberOfToppings + " toppings - 1 free topping = $" +toppingTotal + ".00");
    console.log("Toppings text1: " + text );
    console.log("Purchase total: $" + runningTotal + ".00");    
    document.getElementById("showText").innerHTML = text;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal +".00</strong></h3>";
}
