const tık=document.getElementById("nav-links")
const ıcon= document.querySelector(".responsive");

tık.addEventListener("click", function(){
    if(tık.classList.contains("responsive")){
        tık.classList.remove("responsive")
    }
    else{
        tık.classList.add("responsive");
        $(`.responsive`).hide();
        $(`.responsive`).fadeIn(500);
        $(`responsive`).next().slideToggle(400);
        

    }
});

const tak = document.querySelectorAll("a");
const tak2= document.querySelectorAll("div");
const tak3 = document.querySelectorAll(".container h2");

tak.forEach((item , index) => {
    item.style.animation = `moveup 2s ease-in-out forwards ${index /7}s`;
    item.addEventListener("animationend", () => {
        tak3.forEach((item,index)=> {
            item.style.animation = `moveup 1s ease-in-out forwards ${index/10}s`;
        });
        tak2.style.animation=`movetoleft 0.5s ease-in-out forwards`;
    });
});