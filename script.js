alert('Boas vindas ao jogo do número secreto');
let ns = parseInt(Math.random() * 100 + 1);
console.log(ns);
let chute;
let tentativas = 1;

while (chute != ns) {
    chute = prompt('Escolha um número entre 1 e 100');

    if (chute == ns) {
        break;
    } else {
        if (chute > ns) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        
        tentativas++;
    }
}

let pts = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${ns} com ${tentativas} ${pts}.`);

