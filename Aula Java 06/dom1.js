let elemento01 = window.document.getElementById('TituloPrincipal');

elemento01.style.color = 'red'
elemento01.innerHTML = 'Gabriel Luis';
let elemento02 = window.document.getElementsByClassName("elementoParagrafo");
elemento02[0].style.color = 'blue';

 for(let contador = 0; contador < elemento02.length; contador++) {
    elemento02[contador].style.backgroundColor = "cadetblue"
 }

console.log(typeof elemento02);