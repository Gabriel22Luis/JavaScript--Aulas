let elemento22 = window.document.getElementById("titulo")

elemento22.style.color = 'blue'
// elemento22.innerHTML = 'miope'

let elemento4 = window.document.getElementsByClassName("elementoParagrafo");
elemento4[0].style.color = 'red';

for(contador = 0; contador < elemento4.length; contador++) {
    elemento4[contador].style.backgroundColor = "aqua"
}

console.log(typeof elemento4);