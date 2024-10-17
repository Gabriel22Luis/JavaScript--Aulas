let a = 0, b = 1;
let contador = 0;
const n = 10; 

while (contador < n) {
    console.log(a);
    let temp = a; 
    a = b;  
    b = temp + b; 'b'
    contador++; 
}
