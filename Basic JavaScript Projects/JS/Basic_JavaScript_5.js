document.writeln(typeof 3);
document.writeln("<br>");
document.writeln(typeof "word");
document.writeln("<br>");
function myFunction() {
    document.getElementById("Test").innerHTML=isNaN("This is a string");
    
    document.getElementById("Test").innerHTML+=" " + isNaN(007);
    document.getElementById("Test").innerHTML+=" " + 0/0;
};
    document.writeln(2E311);
    document.writeln("<br>");
    document.write(-1.5E311);
    document.writeln("<br>");
    document.write(9>3);
    document.writeln("<br>");
    console.log(3+3);
    document.write("10"+5);
    document.writeln("<br>");
    console.log(3==4);
    document.write("10"==5);
    document.writeln("<br>");
    document.write(12/12/2019===12/12/2019);
    document.writeln("<br>");
    document.write("10"===10);
    document.writeln("<br>");
    document.writeln(5===6);
    document.writeln("<br>");
    document.writeln("hello"==="Man");
    document.writeln("<br>");
    document.writeln("10>4 and 3>5 is "+ (10>4&&3>5));
    document.writeln("<br>");
    document.writeln("9>3 and 8>7 is " + (9>3&&8>7));
    document.writeln("<br>");
    document.writeln("9>4 and 5>6 is "+ (9>4&&5>6));
    document.writeln("<br>");
    document.writeln("9>3 or 3>5 is " +(9>3||3>5));
    document.writeln("<br>");
    document.writeln("6>7 or 9>11 is " + (6>7||9>11));
    document.writeln("<br>");
    document.writeln("4>2 or 1>0 is " +(4>2||1>0));
    document.writeln("<br>");
    document.writeln("!(5>10) is "+ !(5>10));
