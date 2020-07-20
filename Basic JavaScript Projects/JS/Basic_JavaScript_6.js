function RideFunction(){
    var height, can_Ride;
    height = document.getElementById("Height").innerHTML.value;
    can_Ride = (height < 52)?"You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= can_Ride + " to ride";
};