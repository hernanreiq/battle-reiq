var primera_pantalla = document.getElementById('pantalla-1');
var controles = document.getElementById('controles');
var musica = document.getElementById('musica');
musica.src = "audio/musica.mp3";
musica.volume = 0.15;
musica.style.display = "none";

var bienvenida = document.createElement('p');
bienvenida.innerText = "Te doy la bienvenida a mi simulador de una batalla Pokémon";
primera_pantalla.appendChild(bienvenida);

var boton_iniciar = document.createElement('button');
boton_iniciar.innerText = "Vamos a pelear";
primera_pantalla.appendChild(boton_iniciar);


boton_iniciar.addEventListener('click', cambiarPantalla);

function cambiarPantalla() {
    musica.src = "audio/pelea.mp3";
    primera_pantalla.style.display = "none";
    controles.style.display = "block";
    document.getElementById('pantalla-2').style.display = "block";
}