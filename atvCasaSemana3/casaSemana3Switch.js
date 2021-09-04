//Verificar vogal ou consoante com o switch e alert//


let vogal = prompt('Insira uma vogal:');




switch(vogal){
    case 'a': alert('Sim');
    break;
    case 'e': alert('Sim');
    break;
    case 'i': alert('Sim');
    break;
    case 'o': alert('Sim');
    break;
    case 'u': alert('Sim');
    break;
    default: alert('Essa letra não é uma vogal. Por favor, digite uma vogal.');

}

/* Farmacia JS está em promoção. A cada 2 produtos iguais comprados, receba 5 reais de desconto. 
Escreva um programa para auxiliar a farmacia a calcular o valor final do produto.*/

/*LÓGICA DA FARMÁCIA:
1 - Lista dos produtos disponíveis e seus valores
Selecionar produtos desejados
Selecionar quantidade desejada de cada produto
Verificar valor dos produtos selecionados
Verificar quantos ítens iguais foram selecionados
Calcular desconto se houverem 2 ítens do mesmo produto selecionados 
Informar valor final da compra


*/
var produto1 = document.querySelector('#poo');
var produto2 = document.querySelector('#cond');
var valor1 = document.querySelector('#valorSemDesconto');

function calculo() {
var valorProduto1 = (produto1.value * 20).toFixed(2);
var valorProduto2 = (produto2.value * 25).toFixed(2);
var valorQuaseFinal = (Number(valorProduto1) + Number(valorProduto2)).toFixed(2);

if (produto1 == 2 || 3 ) {
    valorQuaseFinal = (valorQuaseFinal - 5);
} else if (produto1 == 4 || 5){
    valorQuaseFinal = (valorQuaseFinal - 10);
} else if (produto2 == 2 || 3){
    valorQuaseFinal = (valorQuaseFinal - 5);
} else if (produto2 == 4 || 5);{
    valorQuaseFinal = (valorQuaseFinal - 10);
}


valor1.textContent = 'R$' + valorQuaseFinal
};









/*
DÚVIDAS:
    Existe alguma forma de quando selecionar o "cancelar" no alert, não aparecer o default? 
    Por que quando são selecionados 4 produtos de cada, o desconto ainda é só 10 reais?
    Quando uso o .toLowerCase() a string passa a só aceitar letra minúsula
*/
