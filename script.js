let colorBtn = document.querySelectorAll(".filter_color");
let maincontainer = document.querySelector(".main-container");
for(let i = 0; i<colorBtn.length; i++){
    colorBtn[i].addEventListener("click",function(e){
        let color = colorBtn[i].classList[1];
        maincontainer.style.backgroundColor=color;
    })
}