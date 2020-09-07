function FindYourPet(){
    var user_input=document.getElementById("name").value;
    var output;
    switch(user_input){
        case "Juno":
        case "juno":
            output="2 months old. Calm and friendly. He likes to chase squirrels. ";
            break;
        case "Oreo":
        case"oreo":
            output="1 years old. Like her name suggests, she is covered in black fur. She is active and gentle.";
            break;
        case "Cream Pie":
        case "cream pie":
            output="New born. Sweet likes a cream pie. She would be lucky to have a home with you.";
            break;
        default:
            output="Please choose one of the lovely names on the list: ";
    }
   document.getElementById("demo").innerHTML = output;
}

function myFunction(){
    var A = document.getElementsByClassName("Make_Change");
    A[0].innerHTML = "Today is cloudy."

}

function Draw(){
    var circle = document.getElementById("my_canvas");
    var ctx= circle.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle ="red";
    ctx.arc(105,105,50,0,2*Math.PI);
    ctx.stroke();

    var grd=ctx.createLinearGradient(0,0,50,50)
    grd.addColorStop(0.9, "black");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 30, 30);
}