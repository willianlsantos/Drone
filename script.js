const text = document.querySelector(".sec-text");

const Load = () => {
    setTimeout(() => {
        text.innerHTML = "Câmera HD 4K";
    }, 0);
    setTimeout(() => {
        text.innerHTML = "Série 3.5";
    }, 4000);
    setTimeout(() => {
        text.innerHTML = "InnJoo Blackeye";
    }, 8000); //1s = 1000 milliseconds
}

Load();
setInterval(Load, 12000);



function buttonShop() {
    alert('Parabens pela compra!')
}


