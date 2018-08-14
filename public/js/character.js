// Browser won't find DegenesisChar!!

//let character = new DegenesisChar()

const statValue = e => document.getElementById(e).value

const updateLocalCharacter = () => {
    for (let key in localCharacter["bodyAttr"]) {
        localCharacter["bodyAttr"][key] = Number(statValue(key))
    }

    for (let key in localCharacter["agilityAttr"]) {
        localCharacter["agilityAttr"][key] = Number(statValue(key))
    }

    for (let key in localCharacter["charismaAttr"]) {
        localCharacter["charismaAttr"][key] = Number(statValue(key))
    }

    for (let key in localCharacter["intellectAttr"]) {
        localCharacter["intellectAttr"][key] = Number(statValue(key))
    }

    for (let key in localCharacter["psycheAttr"]) {
        localCharacter["psycheAttr"][key] = Number(statValue(key))
    }

    for (let key in localCharacter["instinctAttr"]) {
        localCharacter["instinctAttr"][key] = Number(statValue(key))
    }

    document.getElementById("ego").value = localCharacter.egoValue()
    document.getElementById(
        "sporeInfestations"
    ).value = localCharacter.sporeInfestationsValue()
    document.getElementById(
        "fleshwounds"
    ).value = localCharacter.fleshwoundsValue()
    document.getElementById("trauma").value = localCharacter.traumaValue()
}
