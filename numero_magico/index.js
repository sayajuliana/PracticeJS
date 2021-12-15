const magicNumer = document.querySelector('h1');
const inpNumber = document.getElementById('input-Number'); 
const magNumb = randomNumber(1, 100); 

inpNumber.addEventListener ('keyup', showEvent ); 

function calcNumber(event) {
    
}
function randomNumber(min, max) {
    
}
function showEvent(event) {
    if(event.keyCode === 13){
        console.log ('Correcto'); 
    }else{
        console.log('sigue intentando');
    }
}
