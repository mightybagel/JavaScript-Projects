var num = 10;
function check_season() {
  var d= new Date();
  var date = parseInt(d.getDate());
  var month= parseInt(d.getMonth() + 1);
  console.log(d);
  console.log(date);
  console.log(month);
  if (month>=3 && month<=5 && date>=1 && date<=31)
    return "We are in spring";
  else if (month>=6 && month<=8 && date>=1 && date<=31)
    return "We are in summer";
  else if (month>=9 && month<=11 && date>=1 && date<=30)
    return "We are in autumn";
  else
    return "We are in winter";
}
function check_time(){
  var time = new Date().getHours();
  console.log(time);
  if (time <12 && time >0 )
    return "It is morning time";
  else
    return "It is afternoon time";
}

function myFunction(){
  // use local variable in  the different function
  //d.Date();
  //console.log(d);
  document.getElementById("demo_1").innerHTML=check_season();
  document.getElementById("demo_2").innerHTML=check_time();
}
