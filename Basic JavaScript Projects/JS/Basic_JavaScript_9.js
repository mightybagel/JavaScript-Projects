function myFunction(){
    var time = parseInt(document.getElementById("seconds").value);
    console.log(time);
    function countdown(){
        time = time -1;
        console.log(time)
        if(time==-1){
            alert("Time up");
        }
        else{
            setTimeout(countdown,1000);
        }
    }
        setTimeout(countdown,1000);
}
    
    

    
