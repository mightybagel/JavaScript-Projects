//var first = document.getElementsByTagName("p")[0];
var operation = (10+3)*7/(5-2);
var modulus = ((10+3)*7)%(5-2);
var number = 10;
function myFunction(){
    var rNum= Math.random()*100;
    window.alert(rNum);
}
document.writeln("<ul><li>5 to power 4: " + Math.pow(5,4) + "</li>");
document.writeln("<li>(10+3)*7/(5-2): " + operation+ "</li>");
document.writeln("<li>Modulus of (10+3)*7/(5-2): "+ modulus+ "</li>");
document.writeln("<li>Negation of 5: "+ ~(5)+ "</li>");
document.writeln("<li>Increment of "+number+ " is "+ ++number +"</li>");
document.writeln("<li>Decrement of "+number+ " is "+ --number +"</li>"); 
document.writeln("</ul>");