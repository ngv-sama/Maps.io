firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("../html/login.html")
    }else{
        document.getElementById("user").innerHTML="Hello, " +user.email
    }
})

function logout(){
    firebase.auth().signOut()
}

var slides = document.querySelectorAll('#slideshow img');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = ' ';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'active';
}


// let images = ["../assets/dragonspine.jpg", "../assets/inazuma.jpg", "../assets/liyue.jpg", "../assets/sumeru.jpg", "../assets/venti.jpg"];
// let currentImage = 0;

// setInterval(() => {
//     document.body.style.backgroundImage = `url(${images[currentImage]})`;
//     currentImage = (currentImage + 1) % images.length;
// }, 5500);


function map()
{
    location.replace("../html/map.html")
}
