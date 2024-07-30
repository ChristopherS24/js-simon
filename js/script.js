function generateNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//creazione 5 numeri random
Numbers = 5;
const randomNumbers = [];
for (let i = 0; i < Numbers; i ++) {
    const Numbers = generateNumbers(1, 100);
    console.log('random numbers:', Numbers, typeof Numbers);
    randomNumbers.push(Numbers);
}
console.log('random numbers:', randomNumbers, typeof randomNumbers);

//input utente
const inputuser = [];
for (let i = 0; i < Numbers; i ++) {
    const questions = prompt('Inserire numero:')
    console.log(`Numero scelto dall'utente:`, questions);
    inputuser.push(questions);
}
console.log('Numeri scelti:', inputuser, typeof inputuser)

//timer
setTimeout(timer, 30000);
function timer() {
    alert('STOP');
}

