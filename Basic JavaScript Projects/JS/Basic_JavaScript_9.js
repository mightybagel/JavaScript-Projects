var currentIndex = 0; //start at first slide
function myFunction(){
    var time = parseInt(document.getElementById("seconds").value);
    console.log(time);
    setTimeout(playSlideshow,1000*time);
}

function playSlideshow(){
    currentSlide(1);   
}    

function plusSlide (index){    
    let pics = document.getElementsByClassName("picture-containers");
    let dots = document.getElementsByClassName("dot");
    let container =  document.getElementsByClassName("slideshow");
    pics[currentIndex].style.display = "none";
    //search for the word "active" and remove the word active because assuming there is active class in dot
    dots[currentIndex].className =  dots[currentIndex].className.replace(" active",""); // class name is a string  
    currentIndex += index;
    if(currentIndex >= pics.length){
        currentIndex = 0;
    }
    else if(currentIndex < 0){
        currentIndex = pics.length - 1;
    }
    container[0].style.display = "block";
    pics[currentIndex].style.display = "block";
    dots[currentIndex].className += " active";
}

function currentSlide (index_2){
    let pics = document.getElementsByClassName("picture-containers");
    let dots = document.getElementsByClassName("dot");
    let container =  document.getElementsByClassName("slideshow");
    pics[currentIndex].style.display = "none";// hide all pictures
    dots[currentIndex].className =  dots[currentIndex].className.replace(" active","");//Without  this line, there 
    //This line set dots to default
    currentIndex = index_2 - 1;
    //check current index fits within the range
    if(currentIndex >= pics.length ||currentIndex <0){
        currentIndex = 0;// can throw error instead
    }
    container[0].style.display = "block";
    pics[currentIndex].style.display = "block";
    dots[currentIndex].className += " active";
}