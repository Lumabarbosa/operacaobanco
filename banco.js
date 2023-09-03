// propriedades: conta, saldo, tipo de conta, agência

// métodos: buscar saldo, depósito, saque e número da conta
// buscar saldo: deve retornar saldo atual
// depósito: passar valor como parametro e somá-lo ao saldo final
// saque: passar valor como parametro e subtraí-lo ao saldo final
// numero da conta: retorna o numero

const prompt = require('prompt-sync')()

//criando objeto por inicialização de objeto
var banco = new Object()
    banco.agencia = 5290
    banco.conta = 100016;
    banco.tipoConta = "corrente";
    banco.saldo = 1000;


//  depósito
function deposito(valor){
    valor = Number(prompt('Quanto você deseja depositar?'))
    console.log(`Seu saldo atual é de ${banco.saldo + valor}`)

}

//  saque
function saque(quantia){
    quantia = parseFloat(prompt('Quanto você deseja sacar?'))
    if (banco.saldo >= quantia) {
        console.log(`Aguarde a liberação das cédulas. Seu saldo atual é de ${banco.saldo - quantia}`)    
    } else {
        console.log("Não foi possível realizar seu saque. Saldo insuficiente.")
    }
}

console.log('Escolha a ação que deseja realizar:')
console.log('1. Consulta de saldo')
console.log('2. Realizar saque')
console.log('3. Realizar depósito')
console.log('4. Consultar número da conta')
console.log('5. Sair')

let acao = Number(prompt('Digite o número correspondente a ação que deseja realizar:'))

switch (acao){
    case 1:
        console.log(banco.saldo)
        break
    case 2:
        saque()
        break
    case 3:
        deposito()
        break
    case 4:
        console.log(`O número da conta é ${banco.conta}`)
        break
    case 5:
        console.log('Sessão Encerrada.')
        break
    default:
        console.log('Opção inválida')
}
