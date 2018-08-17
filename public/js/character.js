let localCharacter = new DegenesisChar()

const attributes = [
    "bodyAttr",
    "agilityAttr",
    "charismaAttr",
    "intellectAttr",
    "psycheAttr",
    "instinctAttr"
]

const pots = ["pot1", "pot2", "pot3", "pot4", "pot5", "pot6"]

const id = e => document.getElementById(e)

const updateLocalCharacter = () => {
    // UPDATING BASICS
    localCharacter.name = id("nombre").value
    localCharacter.age = Number(id("edad").value)
    localCharacter.rank = id("rango").value
    localCharacter.experience = Number(id("experiencia").value)
    localCharacter.sex = id("sexo").value
    localCharacter.height = Number(id("altura").value)
    localCharacter.weight = Number(id("peso").value)
    localCharacter.dinars = Number(id("dinares-lc").value)
    localCharacter.culture = id("cultura").value
    localCharacter.concept = id("concepto").value
    localCharacter.cult = id("colectivo").value

    //UPDATING ATTRIBUTES AND ORIGINS
    attributes.forEach(updateAttributeSkills)
    updateAttributeSkills("origins")

    localCharacter.calculateCondition()

    id("ego").innerHTML = Number(localCharacter.condition.ego)
    id("sporeInfestations").innerHTML = Number(
        localCharacter.condition.sporeInfestations
    )
    id("fleshwounds").innerHTML = Number(localCharacter.condition.fleshwounds)
    id("trauma").innerHTML = Number(localCharacter.condition.trauma)

    // UPDATING POTENTIALS
    pots.forEach(updatePotentials)

    // WRITE OUTPUT
    writeOutput()
}

const updateAttributeSkills = attribute => {
    for (let key in localCharacter[attribute]) {
        if (id(key.toString()).value === "") {
            localCharacter[attribute][key] = null
        } else {
            localCharacter[attribute][key] = Number(id(key.toString()).value)
        }
    }
}

const updatePotentials = pot => {
    localCharacter["potentials"][pot].name = id(pot.toString()).value
    localCharacter["potentials"][pot].level = Number(id(pot.toString() + "-level").value)
}

const outputSkills = attribute => {
    let output = []
    for (let key in localCharacter[attribute]) {
        if (localCharacter[attribute][key] && key !== attribute.substring(0, attribute.length-4)){
            output.push(`${skillsSpanish[key]} ${localCharacter[attribute][key] + localCharacter[attribute][attribute.substring(0, attribute.length-4)]}D`)
        }
    }
    return output.join(", ")
}

const outputOrigins = e => {
    let output = []
    for (let key in localCharacter["origins"]) {
        if (localCharacter["origins"][key]) {
            output.push(`${skillsSpanish[key]} ${localCharacter["origins"][key]}D`)
        }
    }
    return output.join(", ")
}

const outputPotentials = e => {
    let output = []
    for (let key in localCharacter["potentials"]){
        if (localCharacter["potentials"][key].name) {
            console.log("Entramos en condición")
            output.push(`${localCharacter["potentials"][key].name} ${(localCharacter["potentials"][key].level) ? localCharacter["potentials"][key].level : ""}`)
        }
    }
    return output.join(", ")
}



const writeOutput = e => {
    let outSkills = attributes.map(outputSkills).filter(e => e !== "").join(", ")
    let outOrigins = outputOrigins()
    let outPotentials = outputPotentials()
    let focusOrPrimal = (localCharacter.intellectAttr.focus === null) ? "Primordial" : "Concentración"
    let outAttacks = "",
        outDefense = "",
        outProtections = ""

    id("stats-area").innerHTML = `<h1 class="text-uppercase">${localCharacter.name}</h1>
    <hr class="my-4">
    <span class="lead">PERFIL</span><br>
    <b>ARQUETIPO:</b> ${localCharacter.culture}, ${localCharacter.concept}, ${
    localCharacter.cult
}, Rango <span class="text-capitalize">${localCharacter.rank}</span><br>
    <b>ATRIBUTOS:</b> CUE ${localCharacter.bodyAttr.body}, AGI ${
    localCharacter.agilityAttr.agility
}, CAR ${localCharacter.charismaAttr.charisma}, INT ${
    localCharacter.intellectAttr.intellect
}, PSI ${localCharacter.psycheAttr.psyche}, INS ${
    localCharacter.instinctAttr.instinct
}<br>
<b>HABILIDADES:</b> <span class="text-capitalize" id="out-skills">${outSkills}</span><br>
<b>TRASFONDOS:</b> <span class="text-capitalize" id="out-origins">${outOrigins}</span>
        <br>
<b>POTENCIALES:</b> <span class="text-capitalize" id="out-potentials">${outPotentials}</span><br>
<b>INICIATIVA:</b> ${localCharacter.psycheAttr.psyche +
        localCharacter.psycheAttr.reaction}D, ${
    localCharacter.condition.ego
} Puntos de Ego (${focusOrPrimal})<br>
<b>ATAQUE:</b> <span class="text-capitalize" id="out-attacks">${outAttacks}</span><br>
<b>DEFENSA:</b> <span class="text-capitalize" id="out-defense">${outDefense}</span><br>
<b>MOVIMIENTO:</b> ${localCharacter.bodyAttr.body +
        localCharacter.bodyAttr.athletics}D<br>
<b>PROTECCIÓN:</b> <span class="text-capitalize" id="out-protection">${outProtections}</span><br>
<b>CONDICIÓN:</b> Infestación de Esporas ${
    localCharacter.condition.sporeInfestations
}, Heridas
Superficiales ${localCharacter.condition.fleshwounds}, Trauma ${
    localCharacter.condition.trauma
}<br>
<hr class="my-4">`
}
