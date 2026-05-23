// Scroll Reveal Animation

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>
observer.observe(el));




// Navbar Background on Scroll

window.addEventListener("scroll",()=>{

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background =
        "rgba(0,0,0,0.8)";

    }else{

        nav.style.background =
        "rgba(255,255,255,0.05)";
    }

});




// Ripple Effect

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const circle =
        document.createElement("span");

        const diameter =
        Math.max(
            button.clientWidth,
            button.clientHeight
        );

        const radius =
        diameter / 2;

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.left =
        `${e.clientX -
        button.offsetLeft -
        radius}px`;

        circle.style.top =
        `${e.clientY -
        button.offsetTop -
        radius}px`;

        circle.classList.add("ripple");

        const ripple =
        button.getElementsByClassName("ripple")[0];

        if(ripple){
            ripple.remove();
        }

        button.appendChild(circle);

    });

});