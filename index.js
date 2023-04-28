let estoque = [];

// Função para adicionar um item ao estoque
function adicionarItem(nome, quantidade, preco){
    estoque.push({nome: nome, quantidade: quantidade, preco: preco}); //Adiciona o item ao array estoque
    alert("Item adicionado ao estoque.")
}

// Função para remover um item do estoque
function removerItem(index){
    estoque.splice(index, 1); //Remove o item do array estoque
    alert("Item removido ao estoque.")
}

// Função para exibir estoque 
function exibirEstoque() {
    let lista = "Lista de Itens do Estoque: \n\n";
    estoque.forEach(function(item, indice) {
      lista += `${indice + 1}. ${item.nome} - Quantidade: ${item.quantidade} - Preço: R$ ${item.preco.toFixed(2)} \n`;
    });
    alert(lista);
  }
 
  
//função para limpar estoque
function limparEstoque(){

estoque.forEach(function() {
    estoque = [] 
    alert("Lista limpada");
});
}


     

     

