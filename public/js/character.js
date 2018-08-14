let localCharacter = new DegenesisChar()

const statValue = e => document.getElementById(e.toString()).value
const attributes = [
    "bodyAttr",
    "agilityAttr",
    "charismaAttr",
    "intellectAttr",
    "psycheAttr",
    "instinctAttr"
]

const updateLocalCharacter = () => {
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
}

const updateCharAttribute = attribute => {
    for (let key in localCharacter[attribute]) {
        statValue(key) === null
            ? (localCharacter[attribute][key] = null)
            : (localCharacter[attribute][key] = Number(statValue(key)))
        console.log(attribute)
    }
}
