// um objeto e uma coleção de pares  nome/valores ou uma string para mapa de valores
// vejamos como e um  objeto em javascript

var book =  {
    title:'JavaScript',
    subtittle:'javascript basico ao avançado vol 5',
    quantidadePagina:1290
}

// Agora vamos mostra todos os atributos desse objeto
console.log(book);

// agora vamos querer ver somente um atributo especifico
console.log(book.subtittle);

// agora vamos inserir um novo atributo
book.autor = 'flaguim moral'

console.log(book.autor);

console.log(book);