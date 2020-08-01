var slideIndex = 1;// set initial value
showSlides(slideIndex);// call showSlides

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");//get all the slides
    var dots = document.getElementsByClassName("dot");//get all the dots
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}