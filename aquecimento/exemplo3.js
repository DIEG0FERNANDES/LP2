var a = 1;
let b = 1;

if(a % 2 ==1){
    a = 2;
    b = 2;
}

const c = a + b;
console.log(c);


/**
 * Toda variável criada dentro de uma
 * função tem escopo de bloco
 */
function fazAlgumaCoisa(){
    a += 1;//a = a + 1 
    b += 1;//b = b + 1
    var d = 7;//dara erro
    let e = 8;//dara erro
}

fazAlgumaCoisa();
console.log(a);
console.log(b);


if(a % 2 == 1){
    var f = 2;
    let g = 1;
}
console.log(f);
console.log(g);