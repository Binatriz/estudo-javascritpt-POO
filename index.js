import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new ContaCorrente;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente;
conta2.agencia = 102;
conta2.cliente = cliente2;

console.log(contaCorrenteRicardo._saldo);

contaCorrenteRicardo.depositar(1000);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(-1);

conta2.depositar(135);
conta2.sacar(7);

let valor = 200;
const valorSacado = contaCorrenteRicardo.sacar(200);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
console.log(conta2);

contaCorrenteRicardo.transferir(valor, conta2);
console.log(contaCorrenteRicardo);
console.log(conta2);
