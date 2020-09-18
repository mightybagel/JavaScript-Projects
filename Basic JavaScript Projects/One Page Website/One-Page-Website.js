//track the CURRENT slide index to use in plusSlide() primarily
//Do not need it if there were not the plusSlide() function in this case
//Could just pass the index to use in showSlide()
var slideIndex = 1;

function openModal(){
    let modal = document.getElementById("myModal");
    modal.style.display="block";
    let container = document.getElementById("whole-page-container");
    container.style.overflow = "hidden";
}
function closeModal(){
    let modal = document.getElementById("myModal");
    modal.style.display="none";
    let container = document.getElementById("whole-page-container");
    container.style.overflow = "auto";
}

function currentSlide(n){
    slideIndex = n;
    showSlide(slideIndex);
}

function plusSlides(n){
    slideIndex +=n;
    showSlide(slideIndex);
}

function showSlide(n){
    var slides = document.getElementsByClassName("mySlides");
    var thumbnails = document.getElementsByClassName("demo");
    var caption = document.getElementById("caption");
    //Check if the slide Index is out of bound
    if(n > slides.length){
        slideIndex = 1;
    }
    else if(n < 1){
        slideIndex =  slides.length;
    }
    var counter;
    //Run the for loops to set all the pictures to default as the condition "display: hidden" in the css
    for(counter = 0; counter < slides.length; counter++){
        slides[counter].style.display = "none";
        thumbnails[counter].className = thumbnails[counter].className.replace("active", "");
    }
    //use the slideIndex (not using counter) because slideIndex keeps track of what the current slide is
    slides[slideIndex - 1].style.display = "block";//-1 if slideIndex = 1 (cause the array index starts at 0)
    thumbnails[slideIndex - 1].className += " active";
    caption.innerHTML = thumbnails[slideIndex -1].alt;
}
