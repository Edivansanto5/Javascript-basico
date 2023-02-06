/*introduçaõ oao javascript do basico ao avançado começando pelo basico dessa linguagem */
// PRIMEIRO VAMOS COMEÇAR COM O BASICO

var x = 'hello wold'
console.log(x);

// DECLARANDO UM OBJETO DE LIVROS DA WEB
var livrosWeb = {linguagemMarcacao:'HTML5',linguagemEstilo:'CSS3',linguagemProgramacao:'JavaScript',framework:'Vue.js'}

// IMPRIMINDO TODO O OBJETO
console.log(livrosWeb)
console.log(' ');

// IMPRIMINDO SOMENTE O LIVRO DE ESTILO
console.log('Livro de estilo',livrosWeb.linguagemEstilo);
console.log(' ');

// IMPRIMINDO SOMENTE O LIVRO DE FRAMEWORK
console.log('Livro de Framework',livrosWeb.framework);


// AGORA VAMOS FAZER UMA FUNÇÃO PARA CALCULAR O FATORIAL DE QUALQUER NUMERO

function fatorial (n){
 
    for(var i = n - 1; i >= 1; i--)
        n *= i
    return n

}
console.log(fatorial(5))
// vxcvxcv

function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
factorial(5);
console.log(factorial(10))
