const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function islampBroken (){
   return lamp.src.indexOf('quebrada') > -1
}

function lampOn () {
    if (!islampBroken ()) {
        lamp.src = './img/acesa.png';
    }
}

function lampOff () {
    if (!islampBroken ()) {
        lamp.src = './img/apagada.png';
    }
}

function lampBroken () {
        lamp.src = './img/quebrada.png';
    }
    turnOn.addEventListener ('click', lampOn);
    turnOff.addEventListener ('click', lampOff);
    lamp.addEventListener ('dblclick', lampBroken);

   
        document.getElementById('ano').textContent = new Date().getFullYear();
    



