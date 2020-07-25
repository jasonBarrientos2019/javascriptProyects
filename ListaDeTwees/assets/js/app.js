//variables
const listaTwees = document.getElementById("lista-tweets")


//eventListeners
eventListener();
function eventListener() {
    document.querySelector("#formulario").addEventListener('submit',agregarTweet);
    //borrar teweets

    listaTwees.addEventListener('click',borrarTweet)
}


//funciones
function agregarTweet(e) {
    
    e.preventDefault()

    const tweet= document.getElementById('tweet').value;

    //crear boto de eliminar
    const botonBorrar =document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';

    const li= document.createElement('li');
    li.innerText= tweet;
    //añade el boton de borrrar
    li.appendChild(botonBorrar);

    //añade el teweet a la lsita 
    listaTwees.appendChild(li);



}

function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className==='borrar-tweet') {
        e.target.parentElement.remove();
    }
}