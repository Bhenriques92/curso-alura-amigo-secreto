let listaDeAmigos = [];

function adicionar() {
    let nomeDoAmigo = document.getElementById('nome-amigo');
    let amigos = document.getElementById('lista-amigos');
    if (nomeDoAmigo.value == ''){
        alert('Nomde do amigo não pode estar vazio');
    } else if (listaDeAmigos.includes(nomeDoAmigo.value)) {
        alert('Nome do amigo náo pode ser repetido');
    } else {
        listaDeAmigos.push(nomeDoAmigo.value);
        if(amigos.textContent == ''){
            amigos.textContent = nomeDoAmigo.value;
        } else {
            amigos.textContent = amigos.textContent + ', ' + nomeDoAmigo.value;
        }
        nomeDoAmigo.value = '';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function sortear() {
    if (listaDeAmigos.length >= 4) {
        embaralha(listaDeAmigos);
        let sorteio = document.getElementById('lista-sorteio');
    
        for (let i = 0; i < listaDeAmigos.length; i++){
    
            if (i == listaDeAmigos.length - 1) {
                sorteio.innerHTML =  sorteio.innerHTML + listaDeAmigos [i] + ' --> ' + listaDeAmigos[0] + '<br>'
            } else{
                sorteio.innerHTML =  sorteio.innerHTML + listaDeAmigos [i] + ' --> ' + listaDeAmigos[i + 1] + '<br>'
            }
            
        }  
    } else {
        alert('É necessário ter no mínimo 4 participantes');
    }

}

function reiniciar() {
    listaDeAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}