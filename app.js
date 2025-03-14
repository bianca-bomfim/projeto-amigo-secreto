//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeAmigos =[];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    
    if(nome !== "") {
        nomeAmigos.push(nome);
        console.log(nomeAmigos);
        atualizarLista();
    }else{
        alert('Por favor, insira um nome válido');
    }
        limparCampo();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    nomeAmigos.forEach(nome => { //para percorrer o array (lista)
        let item = document.createElement('li'); 
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (nomeAmigos.length > 0) {
        let sorteado = nomeAmigos[Math.floor(Math.random() * nomeAmigos.length)]; 
        console.log(sorteado);

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>O amigo sorteado é ${sorteado}</li>`;
        
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
    } else {
        alert('Adicione amigos para realizar o sorteio');
    }
}

function limparCampo() {
    document.querySelector('input').value = ''; 
}


