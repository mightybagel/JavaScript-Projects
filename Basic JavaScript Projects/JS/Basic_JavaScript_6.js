/*================================================
    Check the availability to ride using height
================================================*/
function Compare(){
    var height, canRide;
    height=document.getElementById("Height").value;
    canRide=(height<52)?"You are not tall enough":"You are tall enough";
    document.getElementById("Rider").innerHTML=canRide +" to ride";
}
/*-================================================
    Check the availability to vote using age
    ================================================*/

function Check_age(){
    var age, canVote;
    age=document.getElementById("Qualify_to_Vote").value;
    canVote=(age<18)?"You are not old enough to vote":"You can vote";
    document.getElementById("Eligibility").innerHTML=canVote

}
/*-================================================
    Calculator
    ================================================*/
function Calculator(first, second){
    this.first = first;
    this.second = second; 
    this.sum = (first + second);
    this.product = (first*second);
}
    
function myCalculator(){
var number_1 = parseInt(document.getElementById("Number_1").value);
var number_2 = parseInt(document.getElementById("Number_2").value);
   
    var calc = new Calculator(number_1, number_2);

    document.getElementById("result_sum").innerHTML=calc.sum;
    document.getElementById("result_product").innerHTML=calc.product;
}
/*-================================================
    Accumulator
    ================================================*/
function my_nested_function(){
    var user_input = prompt("Please enter a number: ");
    var num = parseInt(user_input);
    function accumulator(){
        num++;
    }
    accumulator();
    document.getElementById("next_number").innerHTML=num;
}
    