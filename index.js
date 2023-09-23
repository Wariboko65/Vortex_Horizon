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

// Connect to Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzDBhLcGzbTS3w-L3D6jeN8q3bv_iOl37IAyrGQ93eph77xaLnOjPI2i-CBelHogHdY/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
e.preventDefault();
fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message));
});

const one = document.getElementsByClassName("one");
const dot = document.getElementsByClassName("dot");

const marginn = {
    threshold: 0,
    rootMargin: "10px"
};

const observer1 = new IntersectionObserver(entries => {
    if (!entries.isIntersecting) {
        dot[0].classList.toggle("active");
    }
}, marginn);

const observer2 = new IntersectionObserver(entries => {
    if (!entries.isIntersecting) {
        dot[1].classList.toggle("active");
    }
}, marginn);

const observer3 = new IntersectionObserver(entries => {
    if (!entries.isIntersecting) {
        dot[2].classList.toggle("active");
    }
}, marginn);

const observer4 = new IntersectionObserver(entries => {
    if (!entries.isIntersecting) {
        dot[3].classList.toggle("active");
    }
}, marginn);

const observer5 = new IntersectionObserver(entries => {
    if (!entries.isIntersecting) {
        dot[4].classList.toggle("active");
    }
}, marginn);

observer1.observe(one[0]);
observer2.observe(one[1]);
observer3.observe(one[2]);
observer4.observe(one[3]);
observer5.observe(one[4]);

// Fixed contact button
let conBtn = document.getElementsByClassName("onlinec")[0];
function fixedContact() {
    if (!conBtn.classList.contains("act")) {
        conBtn.classList.add("act");
    } else {
        conBtn.classList.remove("act");
    }
}
conBtn.addEventListener("click", () => {
    fixedContact();
});

// Theme changer
let themeBtn = document.getElementsByClassName("theme")[0];
let back = document.getElementsByClassName("backImg")[0];
let fLogo = document.getElementsByClassName("logo")[0];
let newBack = back.getElementsByTagName("img")[0];
let logo = document.getElementsByClassName("logoo")[0];
let newLogo = logo.getElementsByTagName("img")[0];
let fImage = document.getElementsByClassName("vi")[0];

function dark() {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    newLogo.src = "Media/Picture3.png";
    fLogo.src = "Media/Picture3.png";
    newBack.src = "Media/ji_11zon.png";
    fImage.style.backgroundImage = "url('Media/rendering_019-watermark.jpg')";
}
function light() {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    newLogo.src = "Media/Picture2.png";
    fLogo.src = "Media/Picture2.png";
    newBack.src = "Media/2084267.jpg";
    fImage.style.backgroundImage = "url('Media/rendering_015-watermark.jpg')";
}
function themeChange() {
    if (document.body.classList.contains("light")) {
        dark();
    } else {
        light();
    }
    const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    dark();
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    light();
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (e.matches) {
        dark();
    } else {
        light();
    }
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        dark();
    } else if (savedTheme === "light") {
        light();
    }

    const preserveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (preserveTheme && !savedTheme) {
        dark();
        localStorage.setItem("theme", "dark");
    } else if (!preserveTheme && !savedTheme) {
        light();
        localStorage.setItem("theme", "light");
    }
});

themeBtn.addEventListener("click", () => {
    themeChange();
});
