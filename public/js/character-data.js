class DegenesisChar {
    constructor() {
        this.bodyAttr = {
            body: 1,
            athletics: 0,
            melee: 0,
            force: 0,
            brawl: 0,
            toughness: 0,
            stamina: 0
        }
        this.agilityAttr = {
            agility: 1,
            navigation: 0,
            dexterity: 0,
            crafting: 0,
            mobility: 0,
            projectiles: 0,
            stealth: 0
        }
        this.charismaAttr = {
            charisma: 1,
            arts: 0,
            conduct: 0,
            expression: 0,
            leadership: 0,
            negotiation: 0,
            seduction: 0
        }
        this.intellectAttr = {
            intellect: 1,
            artifactLore: 0,
            focus: 0,
            science: 0,
            engineering: 0,
            legends: 0,
            medicine: 0
        }
        this.psycheAttr = {
            psyche: 1,
            cunning: 0,
            domination: 0,
            deception: 0,
            faith: 0,
            reaction: 0,
            willpower: 0
        }
        this.instinctAttr = {
            instinct: 1,
            taming: 0,
            empathy: 0,
            orienteering: 0,
            perception: 0,
            primal: 0,
            survival: 0
        }
        this.origins = {
            allies: 0,
            authority: 0,
            network: 0,
            renown: 0,
            resources: 0,
            secrets: 0
        }
        this.condition = {
            ego: 2,
            sporeInfestations: 2,
            fleshwounds: 2,
            trauma: 2
        }
        this.potentials = new Array()
        this.equipment = {
            weapons: new Array(),
            protections: new Array(),
            other: new Array()
        }
    }

    calculateCondition() {
        this.condition.ego =
            this.intellectAttr.focus === null
                ? (this.instinctAttr.instinct + this.instinctAttr.primal) * 2
                : (this.intellectAttr.intellect + this.intellectAttr.focus) * 2
        this.condition.sporeInfestations =
            this.psycheAttr.faith === null
                ? (this.psycheAttr.psyche + this.psycheAttr.willpower) * 2
                : (this.psycheAttr.psyche + this.psycheAttr.psyche) * 2
        this.condition.fleshwounds =
            (this.bodyAttr.body + this.bodyAttr.toughness) * 2
        this.condition.trauma = this.bodyAttr.body + this.psycheAttr.psyche
    }
}

class Potential {
    constructor(nombre, nivel) {
        this.nombre = nombre
        this.nivel = nivel
    //this.descripcion = descripcion
    }
}

class Weapon {
    constructor(nombre) {
        this.nombre = nombre
    //this.descripcion = descripcion
    }
}

class Protection {
    constructor(nombre) {
        this.nombre = nombre
    //this.descripcion = descripcion
    }
}

class Equipment {
    constructor(nombre) {
        this.nombre = nombre
    //this.descripcion = descripcion
    }
}
