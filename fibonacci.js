const numero = 13; //-->numero informado no código
let a = 0;
let b = 1;
let c;

while (a <= numero) {
  if (a === numero) {
    console.log(`${numero} pertence à sequência de Fibonacci!`);
    break;
  }
  c = a + b;
  a = b;
  b = c;
}

if (a !== numero) {
  console.log(`${numero} não pertence à sequência de Fibonacci!`);
}