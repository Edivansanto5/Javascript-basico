// vamos fazer uma função para calcular um fatorial de um numero

function fatorial(n){
    var produto = 1
    
    while(n > 1){
        
        produto *= n
        n--
       
    }
    return produto
}  console.log('teste');

fatorial(24)