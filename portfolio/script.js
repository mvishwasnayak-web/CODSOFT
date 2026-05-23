// Typing Effect

const typingText = document.querySelector(".typing");

const words = [
    "Software Developer",
    "Cloud Enthusiast",
    "Web Developer",
    "Backend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0,charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect,1000);

            return;
        }

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,120);

}

typeEffect();



// Scroll Reveal Animation

const hiddenElements =
document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>
observer.observe(el));