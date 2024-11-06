
//Digital Clock

let hourHand = document.querySelector('.hours');
let minHand = document.querySelector('.minutes');
let secHand = document.querySelector('.seconds');

let ticking = function(){
    let currentDate = new Date();
    let getHour = currentDate.getHours();
    let getMin = currentDate.getMinutes();
    let getSec = currentDate.getSeconds();

    hourHand.textContent = getHour;
    minHand.textContent = getMin;
    secHand.textContent = getSec;

}
setInterval(ticking,1000); //1000 = 1sec