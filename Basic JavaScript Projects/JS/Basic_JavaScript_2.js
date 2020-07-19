var element=document.getElementById("demo");
document.getElementById('demo').onclick=function(){
    element.innerHTML="Hello";
    element.style.color="blue";
};
element.onmouseover=function(){
    element.innerHTML="Thank you";
};
element.innerHTML+= ", please";

