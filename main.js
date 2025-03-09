var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingToggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playPause() {
    if (!document.getElementById("switchforsound").checked) {
        audio.pause();
    } else {
        audio.play();
    }
}

function visualMode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
        e.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileToggleMenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hideMenuByLi() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobileNavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let activeSection = "";
    
    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            activeSection = section.getAttribute("id");
        }
    });

    mobileNavLi.forEach((li) => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(activeSection)) {
            li.classList.add("activeThismobiletab");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(activeSection)) {
            li.classList.add("activeThistab");
        }
    });
});

console.log("%c Designed and Developed by Vinod Jangid ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

let myButton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (event) {
    if (event.target.nodeName === "IMG") {
        event.preventDefault();
    }
}, false);

let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    fracXValue = (currentXPosition = event.clientX - mouseXStartPoint) / mouseXRange;
    fracYValue = (currentYPosition = event.clientY) / mouseYEndPoint;
    let translateX = pupilStartPoint + fracXValue * pupilRangeX,
        translateY = pupilStartPoint + fracYValue * pupilRangeY;
    
    pupilsArr.forEach((pupil) => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
};

const windowResize = () => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
