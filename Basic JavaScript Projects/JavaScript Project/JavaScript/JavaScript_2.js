function validateForm(){
    var x = document.forms["myForm"]["lname"].value;
    var y = document.forms["myForm"]["lname"].value;
    if (x == ""||y=="" ) {
        alert("Name must be filled out");
        return false;
    }
}