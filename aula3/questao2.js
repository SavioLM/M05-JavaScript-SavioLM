const prompt = require("prompt-sync")();
console.log(`O username não deve conter "admin", Ter pelo menos 12 caracteres e começar com user@.`)

while (true) {
    
    let username = prompt("Digite seu nome de usuário: ")


    if (username.length >= 12) {
        username = username.toLowerCase()
    }
    else if (username.indexOf("admin") >= 0 ) {
        console.log(`\nERRO! Usuarios não devém conter admin no seu nome\n`);
    }
    else if (username.slice(0, 5) != "user@") {
        console.log(`\nERRO! Usuarios devém conter 'user@' no seu nome\n`);
    }
    else if (username.slice(0, 5) == "user@")  {
        console.log(`\nNome de Usuário válido! Seu nome de usuário é: ${username}`);
        break;
    }
    else {
        console.log(`\nERRO! O nome deve ter pelo menos 12 caracteres\n`);
    }
}