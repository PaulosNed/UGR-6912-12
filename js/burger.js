function burgerButton(){
    document.getElementById("burger-button").addEventListener("click",()=>{
        document.getElementsByTagName("nav")[0].classList.toggle("hide")
    });
}

burgerButton();