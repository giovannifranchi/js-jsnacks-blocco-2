// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let sum = 0;

for(let i = 0; i < 5; i++){
    let addendum = Number(prompt('Enter a number', ''));
    sum += addendum;
}

console.log(sum);


// let sum = 0;

// let counter = 0;

// while(counter < 5){
//     let addendum = Number(prompt('Enter a number', ''));
//     sum += addendum;
//     counter++;
// }

// console.log(sum);


