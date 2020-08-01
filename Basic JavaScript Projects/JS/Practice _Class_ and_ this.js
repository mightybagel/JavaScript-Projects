function Vehicles(year,make, color){
    this.V_year = year;
    this.V_make = make;
    this.V_color = color;
}
    var Erik = new Vehicles(2010,"Ford","red");
    var Jocelyn  = new Vehicles (2012,"Honda", "blue");
    var Richard = new Vehicles (2014,"Lexus", "black");
function myFunction(){
    
document.getElementById("driver_and_car").innerHTML= "Erik drives a "+ Erik.V_year + " " + Erik.V_color + " manufactured by " + Erik.V_make;
}