// as Funções sao blocos de codigos  javascript parametrizado ela podem vim ou nao com  parametros.

function soma( numero){ // define a função com o nome de soma com um parametro numero
    return numero + 2   // ela retorna um valor maior do que foi informado por que esta somando mais 2
}
console.log(soma(4)); // chamando a função e passando um valor 4 mais seu resultado vai ser 6 pois o mesmo soma com mais 2

function media(nota1,nota2,nota3,nota4){
    let soma = nota1 + nota2 + nota3 + nota4;
    let mediaNotas = soma/4
    console.log(mediaNotas);
}

media(3,4,5,6)

// imprimindo as duas reposta das funçoes em so uma linha

let square = function(x){
    return x * x
}

console.log(square(soma(4,5)));
console.log(square(5));