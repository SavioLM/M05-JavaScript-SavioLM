const prompt = require("prompt-sync")();
let email = prompt("Digite seu email: ");

function verifica_email (email){
    
    let local = email.indexOf("@");
    let verificar = email.slice(local);
    
    if (verificar == "@gmail.com") {
        let usuario = email.slice(0, local);
        console.log(`O e-mail contém o domínio '${verificar}'`);
        console.log(`Nome de usuário: ${usuario}`);
    }
    else {
        console.log(`O e-mail não contém o domínio '@gmail.com'`);
        console.log(`O e-mail contém o domínio: ${verificar}`);
    }
}

verifica_email(email);