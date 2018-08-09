class DegenesisChar {
    constructor() {
        this.cuerpo = {
            valor: 1,
            atletismo: 0,
            cuerpoACuerpo: 0,
            fuerza: 0,
            pelea: 0,
            resistencia: 0,
            vigor: 0
        }
        this.agilidad = {
            valor: 1,
            conducir: 0,
            destreza: 0,
            fabricar: 0,
            movilidad: 0,
            proyectiles: 0,
            sigilo: 0
        }
        this.carisma = {
            valor: 1,
            arte: 0,
            conducta: 0,
            expresion: 0,
            liderazgo: 0,
            negociacion: 0,
            seduccion: 0
        }
        this.intelecto = {
            valor: 1,
            artefactos: 0,
            concentracion: 0,
            ciencia: 0,
            ingenieria: 0,
            leyendas: 0,
            medicina: 0
        }
        this.psique = {
            valor: 1,
            astucia: 0,
            dominacion: 0,
            enganio: 0,
            fe: 0,
            reaccion: 0,
            voluntad: 0
        }
        this.instinto = {
            valor: 1,
            doma: 0,
            empatia: 0,
            orientacion: 0,
            percepcion: 0,
            primordial: 0,
            supervivencia: 0
        }
        this.origenes = {
            aliados: 0,
            autoridad: 0,
            red: 0,
            renombre: 0,
            recursos: 0,
            secretos: 0
        }
        this.condicion = {
            ego: function() {
                this.psique.fe
                    ? (this.psique.valor + this.psique.fe) * 2
                    : (this.psique.valor + this.psique.voluntad) * 2
            },
            infestacionEsporas: function() {
                this.intelecto.concentracion
                    ? (this.intelecto.valor + this.intelecto.concentracion) * 2
                    : (this.instinto.valor + this.instinto.primordial) * 2
            },
            heridasSuperficiales:
                (this.cuerpo.valor + this.cuerpo.resistencia) * 2,
            trauma: this.cuerpo.valor + this.psique.valor
        }
        this.potenciales = new Array()
        this.equipo = {
            armas: new Array(),
            proteccion: new Array(),
            otros: new Array()
        }
    }
}

class Potencial {
    constructor(nombre, nivel) {
        this.nombre = nombre
        this.nivel = nivel
    }
}

class Arma {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class Proteccion {
    constructor(nombre) {
        this.nombre = nombre
    }
}

class Equipo {
    constructor(nombre) {
        this.nombre = nombre
    }
}

/* Exports to use with Node.js ¿? */

module.exports = DegenesisChar
module.exports = Potencial
module.exports = Arma
module.exports = Proteccion
module.exports = Equipo