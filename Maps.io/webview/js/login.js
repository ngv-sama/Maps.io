// let images = ["../assets/dragonspine.jpg", "../assets/inazuma.jpg", "../assets/liyue.jpg", "../assets/sumeru.jpg", "../assets/venti.jpg"];
// let currentImage = 0;

// setInterval(() => {
//     document.body.style.backgroundImage = `url(${images[currentImage]})`;
//     currentImage = (currentImage + 1) % images.length;
// }, 5500);


document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{

    if(user){
        location.replace("../html/welcome.html")
    }
})


function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
    
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}