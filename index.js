import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente('Ricardo', 11122233309);

const cliente2 = new Cliente('Fabricia', 88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);

const conta2 = new ContaCorrente(102, cliente2);

console.log(contaCorrenteRicardo._saldo);

contaCorrenteRicardo.depositar(1000);

let valor = 200;
const valorSacado = contaCorrenteRicardo.sacar(200);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
console.log(conta2.cliente);

contaCorrenteRicardo.transferir(valor, conta2);
console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);
