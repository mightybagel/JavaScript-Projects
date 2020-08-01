function Call_Loop(){
    var x = 2;
    var index= 1;
    var result;
    while(index <11){
        var result = Math.pow(2,index);
        index++;
        document.getElementById("mark").innerHTML +="n="+index+": "+result +"<br>";
    }
    
}


for (let index = 1; index < 11; index++) {
    if(index==3){continue;}
    if(index==10){break;}
    document.writeln("2 to the power of " + index +" is: " +Math.pow(2,index)+"<br>");
}

var i=["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"];
var y;
var content="";
function forLoop(){
    for(y=0; y<i.length;y++){
        content +=i[y]+"<br>"
        
    }
    document.getElementById("List").innerHTML=content;
}
function letter(){
    var letter=["A","B","C","D"];
    document.getElementById("array").innerHTML = letter;
}

function constantFunction(){
    const receipt={
        egg:"$4",
        bread:"$2",
        beef:"$10",
        tea:"$5"    
    }
    receipt.egg="$6";
    receipt.jelly="$2";
    document.getElementById("constant").innerHTML= "Eggs cost "+receipt.egg+" and jelly costs "+receipt.jelly+"."
}
var total = 0;
var additionalAmount = 10;
function myFunction(){
    let additionalAmount = 50;
    total += additionalAmount;
    document.getElementById("let").innerHTML="Total amount is "+total+" ";
}

function returnFunction(){
    var x=0;
    x= 4*3;
    return x;
}
function eventHandlerFunction(){
    let y= returnFunction();
    document.getElementById("Return").innerHTML=y;

}

function Student(){  
let student={
    fname : "John",
    lname : "Randall",
    yborn : "1992",
    dborn : "28",
    mborn : "Feb",
    description: function(){return this.fname+" "+this.lname+": "+ "birth date: "+this.dborn+" "+this.mborn+", "+this.yborn;}
};
    document.getElementById("Student").innerHTML= student.description();
}