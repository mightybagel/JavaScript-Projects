/*================================================
    Check the availability to ride using height
================================================*/
/*function Compare(){
    var height, canRide;
    height=document.getElementById("Height").value;
    canRide=(height<52)?"You are not tall enough":"You are tall enough";
    document.getElementById("Rider").innerHTML=canRide +" to ride";
}*/
function Check_age(){
    var age, canVote;
    age=document.getElementById("Qualify_to_Vote").value;
    canVote=(age<18)?"You are not old enough to vote":"You can vote";
    document.getElementById("Eligibility").innerHTML=canVote

}