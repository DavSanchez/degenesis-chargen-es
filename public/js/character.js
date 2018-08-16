let localCharacter = new DegenesisChar()

const attributes = [
    "bodyAttr",
    "agilityAttr",
    "charismaAttr",
    "intellectAttr",
    "psycheAttr",
    "instinctAttr",
    "origins"
]

const pots = ["pot1", "pot2", "pot3", "pot4", "pot5", "pot6"]

const updateLocalCharacter = () => {
    // UPDATING BASICS
    localCharacter.name = document.getElementById("nombre").value
    localCharacter.age = Number(document.getElementById("edad").value)
    localCharacter.rank = document.getElementById("rango").value
    localCharacter.experience = Number(
        document.getElementById("experiencia").value
    )
    localCharacter.sex = document.getElementById("sexo").value
    localCharacter.height = Number(document.getElementById("altura").value)
    localCharacter.weight = Number(document.getElementById("peso").value)
    localCharacter.dinars = Number(document.getElementById("dinares-lc").value)
    localCharacter.culture = document.getElementById("cultura").value
    localCharacter.concept = document.getElementById("concepto").value
    localCharacter.cult = document.getElementById("colectivo").value

    //UPDATING ATTRIBUTES AND ORIGINS
    attributes.forEach(updateCharAttribute)

    localCharacter.calculateCondition()

    document.getElementById("ego").innerHTML = Number(
        localCharacter.condition.ego
    )
    document.getElementById("sporeInfestations").innerHTML = Number(
        localCharacter.condition.sporeInfestations
    )
    document.getElementById("fleshwounds").innerHTML = Number(
        localCharacter.condition.fleshwounds
    )
    document.getElementById("trauma").innerHTML = Number(
        localCharacter.condition.trauma
    )

    // UPDATING POTENTIALS
    pots.forEach(updatePotentials)

    //TEST
    // document.getElementById("stats-area").innerHTML = JSON.stringify(
    //     localCharacter,
    //     null,
    //     2
    // )

    // WRITE OUTPUT
    writeOutput()
}

const updateCharAttribute = attribute => {
    for (let key in localCharacter[attribute]) {
        if (document.getElementById(key.toString()).value === "") {
            localCharacter[attribute][key] = null
        } else {
            localCharacter[attribute][key] = Number(
                document.getElementById(key.toString()).value
            )
        }
    }
}

const updatePotentials = pot => {
    if (document.getElementById(pot).value !== "") {
        localCharacter["potentials"][pot] = new Potential(
            document.getElementById(pot.toString()).value,
            document.getElementById(pot.toString() + "-level").value
        )
    }
}

const writeOutput = e => {
    
}
