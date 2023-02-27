// JSSnack3
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.



const nomi = ['paolo', 'luca', 'luigi', 'carlo', 'pino'];
const cognomi = ['rossi', 'verdi', 'marrone', 'bowie', 'paoli'];
const invitati = [];

for(let i = 0; i < 3; i++){
    let invitato;
    let nomeInvitato = nomi[Math.floor(Math.random()* ((nomi.length - 1)- 0) + 0)];
    let cognomeInvitato = cognomi[Math.floor(Math.random()* ((cognomi.length - 1)- 0) + 0)];
    invitato = `${nomeInvitato} ${cognomeInvitato}`;
    invitati.push(invitato);
}

console.log(invitati);
