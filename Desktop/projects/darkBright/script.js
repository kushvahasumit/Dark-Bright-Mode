const inputEl = document.querySelector(".input")
const bodyEL = document.querySelector("body")

inputEl.checked =false;

updatebg()

function updatebg(){
    if(inputEl.checked){
        bodyEL.style.background = "rgb(46,46,46)";
        bodyEL.style.color ="white"
    }else{
        bodyEL.style.background = "white";
        bodyEL.style.color ="black"
      

    }
}

inputEl.addEventListener("input" ,()=>{
    updatebg()
})