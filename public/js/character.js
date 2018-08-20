/* eslint-disable no-unused-vars, no-undef */

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
const weapons = ["weapon1", "weapon2", "weapon3"]
const protections = ["protection1", "protection2"]

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

    // UPDATING CONDITION
    localCharacter.calculateCondition()

    id("ego").innerHTML = Number(localCharacter.condition.ego)
    id("sporeInfestations").innerHTML = Number(
        localCharacter.condition.sporeInfestations
    )
    id("fleshwounds").innerHTML = Number(localCharacter.condition.fleshwounds)
    id("trauma").innerHTML = Number(localCharacter.condition.trauma)

    // UPDATING POTENTIALS
    pots.forEach(updatePotentials)

    // UPDATING EQUIPMENT
    weapons.forEach(updateWeapon)
    protections.forEach(updateProtection)

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
    // prettier-ignore
    localCharacter["potentials"][pot].level = Number(id(pot.toString() + "-level").value)
}

const updateWeapon = weapon => {
    localCharacter["weapons"][weapon].name = id(
        weapon.toString() + "-name"
    ).value
    localCharacter["weapons"][weapon].attackType = id(
        weapon.toString() + "-attack"
    ).value

    localCharacter["weapons"][weapon].handling = Number(
        id(weapon.toString() + "-handling").value
    )

    switch (localCharacter["weapons"][weapon].attackType) {
    case "brawl":
        localCharacter["weapons"][weapon].actionNumber = Number(
            localCharacter["bodyAttr"]["body"] +
                    localCharacter["bodyAttr"]["brawl"] +
                    localCharacter["weapons"][weapon].handling
        )
        break
    case "melee":
        localCharacter["weapons"][weapon].actionNumber = Number(
            localCharacter["bodyAttr"]["body"] +
                    localCharacter["bodyAttr"]["melee"] +
                    localCharacter["weapons"][weapon].handling
        )
        break
    case "projectiles":
        localCharacter["weapons"][weapon].actionNumber = Number(
            localCharacter["agilityAttr"]["agility"] +
                    localCharacter["agilityAttr"]["projectiles"] +
                    localCharacter["weapons"][weapon].handling
        )
        break
    default:
        break
    }

    localCharacter["weapons"][weapon].distance = Number(
        id(weapon.toString() + "-distance").value
    )
    localCharacter["weapons"][weapon].damage = Number(
        id(weapon.toString() + "-damage").value
    )
    localCharacter["weapons"][weapon].charges = Number(
        id(weapon.toString() + "-charges").value
    )
    localCharacter["weapons"][weapon].properties = id(
        weapon.toString() + "-properties"
    ).value
}

const updateProtection = protection => {
    localCharacter["protections"][protection].name = id(
        protection.toString() + "-name"
    ).value
    localCharacter["protections"][protection].armor = Number(
        id(protection.toString() + "-armor").value
    )
    localCharacter["protections"][protection].defense = Number(
        id(protection.toString() + "-defense").value
    )
    localCharacter["protections"][protection].properties = id(
        protection.toString() + "-properties"
    ).value
}

const outputSkills = attribute => {
    let output = []
    for (let key in localCharacter[attribute]) {
        // prettier-ignore
        if (localCharacter[attribute][key] && key !== attribute.substring(0, attribute.length - 4)) {
            output.push(`${skillsSpanish[key]} ${localCharacter[attribute][key] + localCharacter[attribute][attribute.substring(0, attribute.length - 4)]}D`)
        }
    }
    return output.join(", ")
}

const outputOrigins = e => {
    let output = []
    for (let key in localCharacter["origins"]) {
        // prettier-ignore
        if (localCharacter["origins"][key]) {
            output.push(`${skillsSpanish[key]} ${localCharacter["origins"][key]}D`)
        }
    }

    // prettier-ignore
    return output.length
        ? `<b>TRASFONDOS:</b> <span class="text-capitalize" id="out-origins">${output.join(", ")}</span><br>`
        : ""
}

const outputPotentials = e => {
    let output = []
    for (let key in localCharacter["potentials"]) {
        // prettier-ignore
        if (localCharacter["potentials"][key].name !== "") {
            output.push(`${localCharacter["potentials"][key].name} ${localCharacter["potentials"][key].level
                ? localCharacter["potentials"][key].level
                : ""
            }`)
        }
    }

    // prettier-ignore
    return output.length
        ? `<b>POTENCIALES:</b> <span class="text-capitalize" id="out-potentials">${output.join(", ")}</span><br>`
        : ""
}

const outputAttacks = e => {
    let output = []
    let attackActionNumber = 0
    let chargesString = ""
    for (let key in localCharacter["weapons"]) {
        if (localCharacter["weapons"][key].name !== "") {
            attackActionNumber = localCharacter["weapons"][key].actionNumber
            if (localCharacter["weapons"][key].charges > 0) {
                chargesString = `, ${
                    localCharacter["weapons"][key].charges
                } Cargas`
            }
            output.push(
                `${
                    localCharacter["weapons"][key].name
                }, ${attackActionNumber}D, Distancia ${
                    localCharacter["weapons"][key].distance
                }m, Daño ${
                    localCharacter["weapons"][key].damage
                }${chargesString}`
            )
        }
    }

    // prettier-ignore
    return output.length
        ? (`<b>ATAQUE:</b> <span class="text-capitalize" id="out-attacks">${output.join("; ")}</span><br>`)
        : ""
}

const outputDefense = e => {
    let faithOrWill =
        localCharacter.psycheAttr.faith === null ? "Voluntad" : "Fe"
    let faithOrWillValue =
        localCharacter.psycheAttr.faith === null
            ? localCharacter.psycheAttr.psyche +
              localCharacter.psycheAttr.willpower
            : localCharacter.psycheAttr.psyche + localCharacter.psycheAttr.faith
    let brawl = localCharacter.bodyAttr.body + localCharacter.bodyAttr.brawl
    let brawlHandling = []
    let melee = localCharacter.bodyAttr.body + localCharacter.bodyAttr.melee
    let meleeHandling = []
    let mobility =
        localCharacter.agilityAttr.agility + localCharacter.agilityAttr.mobility
    let shieldBonus = 0

    // CALCULATE THE MAX VALUE BETWEEN MELEE + MELEE WEAPONS, BRAWL + BRAWL WEAPONS or MOBILITY
    for (let key in localCharacter["weapons"]) {
        switch (localCharacter["weapons"][key].attackType) {
        case "melee":
            meleeHandling.push(
                Number(localCharacter["weapons"][key].handling)
            )
            break
        case "brawl":
            brawlHandling.push(
                Number(localCharacter["weapons"][key].handling)
            )
            break
        default:
            break
        }
    }
    let attack = melee + Math.max(...meleeHandling)
    let meleeDefense = "Bloqueo"

    if (
        brawl + Math.max(...brawlHandling) >
        melee + Math.max(...meleeHandling)
    ) {
        attack = brawl + Math.max(...brawlHandling)
    }
    if (melee + Math.max(...meleeHandling) < mobility) {
        meleeDefense = "Esquiva"
        attack = mobility
    }

    // ¿HAY ESCUDO?
    for (let key in localCharacter["protections"]) {
        if (localCharacter["protections"][key].defense > shieldBonus) {
            shieldBonus += localCharacter["protections"][key].defense
        }
    }

    // prettier-ignore
    return `<b>DEFENSA:</b> <span class="text-capitalize" id="out-defense">Pasiva 1; Activa cuerpo a cuerpo (${meleeDefense}), ${attack + shieldBonus}D; Activa a distancia, Movilidad ${localCharacter.agilityAttr.mobility + shieldBonus}D; Mental (${faithOrWill}) ${faithOrWillValue}D</span><br>`
}

// TODO
const outputProtections = e => {
    let protections = [{
        name: "Nada",
        armor: 0
    }]

    for (let key in localCharacter["protections"]) {
        if (localCharacter["protections"][key].name !== "") {
            protections.push({name: localCharacter["protections"][key].name, armor: localCharacter["protections"][key].armor})
        }
    }
    protectionFinal =
        Math.max(protections) >= 4
            ? Math.max(protections)
            : protections.reduce((a, b) => a + b, 0)

    // prettier-ignore
    return `<b>PROTECCIÓN:</b> <span class="text-capitalize" id="out-protection">${protections.name}; Armadura ${protections.value}</span><br>`
}

const writeOutput = e => {
    let outRank = localCharacter.rank
        ? `, Rango <span class="text-capitalize">${localCharacter.rank}`
        : ""
    let outSkills = attributes
        .map(outputSkills)
        .filter(e => e !== "")
        .join(", ")
    let outOrigins = outputOrigins()
    let outPotentials = outputPotentials()
    let focusOrPrimal =
        localCharacter.intellectAttr.focus === null
            ? "Primordial"
            : "Concentración"
    let outAttacks = outputAttacks()
    let outProtections = outputProtections()
    let outDefense = outputDefense()

    // COULD WE PUT THIS MORE ELEGANTLY WITH createDocumentFragment() AND appendChild() ??? (See dropdown population in main.js)

    // prettier-ignore
    id("output-area").innerHTML = `
    <div id="stats-area" class="container"><h1 class="text-uppercase">${localCharacter.name}</h1>
    <hr class="my-4">
    <span class="lead">PERFIL</span><br>
    <b>ARQUETIPO:</b> ${localCharacter.culture}, ${localCharacter.concept}, ${localCharacter.cult}${outRank}</span><br>
    <b>ATRIBUTOS:</b> CUE ${localCharacter.bodyAttr.body}, AGI ${localCharacter.agilityAttr.agility}, CAR ${localCharacter.charismaAttr.charisma},
    INT ${localCharacter.intellectAttr.intellect}, PSI ${localCharacter.psycheAttr.psyche}, INS ${localCharacter.instinctAttr.instinct}<br>
    <b>HABILIDADES:</b> <span class="text-capitalize" id="out-skills">${outSkills}</span><br>
    ${outOrigins}
    ${outPotentials}
    <b>INICIATIVA:</b> ${localCharacter.psycheAttr.psyche + localCharacter.psycheAttr.reaction}D, ${localCharacter.condition.ego} Puntos de Ego (${focusOrPrimal})<br>
    ${outAttacks}
    ${outDefense}
    <b>MOVIMIENTO:</b> ${localCharacter.bodyAttr.body + localCharacter.bodyAttr.athletics}D<br>
    ${outProtections}
    <b>CONDICIÓN:</b> Infestación de Esporas ${localCharacter.condition.sporeInfestations}, Heridas Superficiales ${localCharacter.condition.fleshwounds}, Trauma ${localCharacter.condition.trauma}<br>
    <hr class="my-4"></div>
    `
}
