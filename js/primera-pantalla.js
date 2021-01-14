var primera_pantalla = document.getElementById('pantalla-1');
var controles = document.getElementById('controles');
var anuncios = document.getElementById('anuncios');
var alerta = document.getElementById('alerta');

/* CONFIGURACION INICIAL DE LA MUSICA DEL JUEGO */
var musica = document.getElementById('musica');
musica.src = "audio/musica.mp3";
musica.volume = 0.15;
musica.style.display = "none";

/* MENSAJE PANTALLA DE INICIO */
var bienvenida = document.createElement('p');
bienvenida.innerText = "Te doy la bienvenida a mi simulador de batalla";
primera_pantalla.appendChild(bienvenida);

/* CREANDO EL BOTON QUE CAMBIARA DE PANTALLA */
var boton_iniciar = document.createElement('button');
boton_iniciar.innerText = "Vamos a pelear";
primera_pantalla.appendChild(boton_iniciar);
boton_iniciar.addEventListener('click', cambiarPantalla);

/* FUNCION PARA HACER EL CAMBIO DE PANTALLA */
function cambiarPantalla() {
    musica.src = "audio/pelea.mp3";
    primera_pantalla.classList.add('no-disponible');
    document.getElementById('pantalla-2').classList.remove('no-disponible');
    setTimeout(function() {
        controles.style.display = "block";
    }, 3);
}
/* BOTONES DE LOS CONTROLES */
var atacar = document.getElementById('atacar');
var aumentar_fuerza = document.getElementById('aumentar-fuerza');
var aumentar_salud = document.getElementById('aumentar-salud');
var rendirse = document.getElementById('rendirse');

/* ESTATUS DE LOS PERSONAJES */
var salud_personaje = document.getElementById('salud-personaje');
var fuerza_personaje = document.getElementById('fuerza-personaje');
var salud_oponente = document.getElementById('salud-oponente');
var fuerza_oponente = document.getElementById('fuerza-oponente');

/* FIGURA DEL PERSONAJE Y EL OPONENTE EN LA PANTALLA */
var persona_img = document.getElementById('personaje');
var oponente_img = document.getElementById('oponente');

/* OBJETOS DE LAS CARACTERISTICAS DEL PERSONAJE Y DEL OPONENTE */
var personaje = {
    salud: 100,
    ataque: 3,
    turno: true,
    atacar: function() {
        anuncios.innerHTML = mensajes_personaje[0];
        this.turno = false;
        oponente.turno = true;
        persona_img.classList.add('personaje-ataca');
        setTimeout(function() {
            anuncios.innerHTML = "";
            persona_img.classList.remove('personaje-ataca');
        }, 5000);
        oponente.salud = oponente.salud - personaje.ataque;
        salud_oponente.innerHTML = oponente.salud;
    },
    aumentarFuerza: function() {
        anuncios.innerHTML = mensajes_personaje[1];
        setTimeout(function() {
            anuncios.innerHTML = "";
        }, 5000);
        this.ataque += Math.ceil(Math.random() * 5);
        fuerza_personaje.innerHTML = this.ataque;
        this.turno = false;
        oponente.turno = true;
    },
    aumentarSalud: function() {
        anuncios.innerHTML = mensajes_personaje[2];
        setTimeout(function() {
            anuncios.innerHTML = "";
        }, 5000);
        this.salud += Math.ceil(Math.random() * 5);
        salud_personaje.innerHTML = this.salud;
        this.turno = false;
        oponente.turno = true;
    }
};

var oponente = {
    salud: 100,
    ataque: 3,
    turno: false,
    atacar: function() {
        anuncios.innerHTML = mensajes_oponente[0];
        oponente_img.classList.add('oponente-ataca');
        controles.classList.add('controles-inactivos');
        setTimeout(function() {
            anuncios.innerHTML = "";
            controles.classList.remove('controles-inactivos');
            oponente_img.classList.remove('oponente-ataca');
        }, 5000);
        personaje.salud = personaje.salud - oponente.ataque;
        salud_personaje.innerHTML = personaje.salud;
        this.turno = false;
        personaje.turno = true;
    },
    aumentarFuerza: function() {
        this.ataque += Math.ceil(Math.random() * 5);
        fuerza_oponente.innerHTML = this.ataque;
        this.turno = false;
        personaje.turno = true;
    },
    aumentarSalud: function() {
        anuncios.innerHTML = mensajes_oponente[2];
        setTimeout(function() {
            anuncios.innerHTML = "";
        }, 5000);
        this.salud += Math.ceil(Math.random() * 5);
        salud_oponente.innerHTML = this.salud;
        this.turno = false;
        personaje.turno = true;
    }
};

/* ACCION DE ATACAR CON EL PERSONAJE */
atacar.addEventListener('click', function() {
    if (personaje.turno) {
        if ((Math.ceil(Math.random() * 10)) == 3) {
            anuncios.innerHTML = mensajes_personaje[3];
            personaje.turno = false;
            oponente.turno = true;
            setTimeout(function() {
                anuncios.innerHTML = "";
            }, 5000);
        } else {
            personaje.atacar();
        }
    } else {
        alerta.innerText = "No es tu turno";
        setTimeout(function() {
            alerta.innerText = "";
        }, 5000);
    }
});

aumentar_fuerza.addEventListener('click', function() {
    if (personaje.turno) {
        personaje.aumentarFuerza();
    } else {
        alerta.innerText = "No es tu turno";
        setTimeout(function() {
            alerta.innerText = "";
        }, 5000);
    }
});

aumentar_salud.addEventListener('click', function() {
    if (personaje.turno) {
        personaje.aumentarSalud();
    } else {
        alerta.innerText = "No es tu turno";
        setTimeout(function() {
            alerta.innerText = "";
        }, 5000);
    }
});

/* MENSAJES PARA EL OPONENTE Y EL PERSONAJE CUANDO ESTE ACTUANDO */
var mensajes_oponente = [
    'El oponente decidió atacar',
    'El oponente aumentó su fuerza',
    'El oponente recuperó salud',
    'El oponente falló su ataque'
];

var mensajes_personaje = [
    'Estas atacando',
    'Has aumentado tu fuerza',
    'Has recuperado tu salud',
    'Tu ataque falló'
];

/* ACCIONES DEL OPONENTE */
function accionesOponente() {

}