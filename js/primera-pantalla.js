var primera_pantalla = document.getElementById('pantalla-1');
var controles = document.getElementById('controles');
var musica = document.getElementById('musica');
musica.src = "audio/musica.mp3";
musica.volume = 0.15;
musica.style.display = "none";

var bienvenida = document.createElement('p');
bienvenida.innerText = "Te doy la bienvenida a mi simulador de batalla";
primera_pantalla.appendChild(bienvenida);

var boton_iniciar = document.createElement('button');
boton_iniciar.innerText = "Vamos a pelear";
primera_pantalla.appendChild(boton_iniciar);

boton_iniciar.addEventListener('click', cambiarPantalla);

function cambiarPantalla() {
    musica.src = "audio/pelea.mp3";
    primera_pantalla.classList.add('no-disponible');
    document.getElementById('pantalla-2').classList.remove('no-disponible');
    setTimeout(function() {
        controles.style.display = "block";
    }, 3);
}

var atacar = document.getElementById('atacar');
var persona_img = document.getElementById('personaje');
var oponente_img = document.getElementById('oponente');

var personaje = {
    salud: 100,
    defensa: 30,
    ataque: 3,
    turno: false,
    atacar: function() {
        oponente.salud = oponente.salud - this.ataque;
    }
};

var oponente = {
    salud: 100,
    defensa: 30,
    ataque: 3,
    turno: false,
    atacar: function() {
        personaje.salud = personaje.salud - this.ataque;
    }
};