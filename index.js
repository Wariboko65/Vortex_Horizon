let navBtn = document.getElementsByClassName("navBtn")[0];
let navMenu = document.getElementsByClassName("nav")[0];
let b = document.getElementsByTagName("main")[0];
function navBttn() {
    navBtn.classList.toggle("change");
    navMenu.classList.toggle("move");
    b.classList.toggle("d");
}
navBtn.addEventListener("click", () => {
    navBttn();
});
// Email Validation
let emailBttn = document.getElementsByTagName("button")[0];
function checkEmail() {
    const emailInput = document.getElementsByTagName("input")[0];
    let emailErr = document.getElementById("emailErr");
    let form = document.getElementsByClassName("hero")[0];
    if(emailInput.validity.patterMismatch || emailInput.value.trim() == "") {
        emailErr.innerHTML = "Valid email required";
        emailInput.style.borderBottom = "2px solid tomato";
        emailErr.style.opacity = "1";
        setTimeout(function() {
            emailErr.innerHTML = "";
            emailInput.style.borderBottom = "2px solid rgb(255, 255, 255)";
            emailErr.style.opacity = "0";
        }, 5000);
    } else {
        emailErr.innerHTML = "";
        emailInput.style.borderBottom = "2px solid rgb(255, 255, 255)";
        form.submit();

    }
}
emailBttn.addEventListener("click", checkEmail);

// Button Event 
let developmentBttn = document.getElementsByTagName("button")[1];
let modelingBttn = document.getElementsByTagName("button")[2];
const development = document.querySelectorAll(".development");
const dev = document.querySelectorAll(".dev");
const mod = document.querySelectorAll(".mod");
const modeling = document.querySelectorAll(".modeling");
function modelignDisplay() {
    if(modeling[0].classList.contains("modeling")) {
        modeling.forEach(card => {
            card.style.display = "block";
        });
        development.forEach(card => {
            card.style.display = "none";
        });
        mod.forEach(card => {
            card.style.display = "block";
        });
        dev.forEach(card => {
            card.style.display = "none";
        });
    } 
}
function developmentDisplay() {
    if(development[0].classList.contains("development")) {
        development.forEach(card => {
            card.style.display = "block";
        });
        dev.forEach(card => {
            card.style.display = "block";
        });
        modeling.forEach(card => {
            card.style.display = "none";
        });
        mod.forEach(card => {
            card.style.display = "none";
        });
    } 
}
modelingBttn.addEventListener("click", modelignDisplay);
developmentBttn.addEventListener("click", developmentDisplay);

// See More Button
let seeMoreBttn = document.getElementsByTagName("button")[3];
const more = document.querySelectorAll(".more");
function seeMoreFunction() {
    if(more[0].classList.contains("more")) {
        more.forEach(card => {
            card.classList.remove("more");
        });
    } else {
        location.assign("https://shorturl.at/dhRY5");
    }
}
seeMoreBttn.addEventListener("click", seeMoreFunction);

// Testimonial Slides

