// Browser won't find DegenesisChar!!

//let character = new DegenesisChar()

const statValue = e => document.getElementById(e).value

const updateLocalCharacter = () => {
    localCharacter.bodyAttr.body = Number(statValue("body"))
    localCharacter.bodyAttr.athletics = Number(statValue("athletics"))
    localCharacter.bodyAttr.brawl = Number(statValue("brawl"))
    localCharacter.bodyAttr.force = Number(statValue("force"))
    localCharacter.bodyAttr.melee = Number(statValue("melee"))
    localCharacter.bodyAttr.stamina = Number(statValue("stamina"))
    localCharacter.bodyAttr.toughness = Number(statValue("toughness"))

    localCharacter.agilityAttr.agility = Number(statValue("agility"))
    localCharacter.agilityAttr.crafting = Number(statValue("crafting"))
    localCharacter.agilityAttr.dexterity = Number(statValue("dexterity"))
    localCharacter.agilityAttr.navigation = Number(statValue("navigation"))
    localCharacter.agilityAttr.mobility = Number(statValue("mobility"))
    localCharacter.agilityAttr.projectiles = Number(statValue("projectiles"))
    localCharacter.agilityAttr.stealth = Number(statValue("stealth"))

    localCharacter.charismaAttr.charisma = Number(statValue("charisma"))
    localCharacter.charismaAttr.arts = Number(statValue("arts"))
    localCharacter.charismaAttr.conduct = Number(statValue("conduct"))
    localCharacter.charismaAttr.expression = Number(statValue("expression"))
    localCharacter.charismaAttr.leadership = Number(statValue("leadership"))
    localCharacter.charismaAttr.negotiation = Number(statValue("negotiation"))
    localCharacter.charismaAttr.seduction = Number(statValue("seduction"))

    localCharacter.intellectAttr.intellect = Number(statValue("intellect"))
    localCharacter.intellectAttr.artifactLore = Number(
        statValue("artifactLore")
    )
    localCharacter.intellectAttr.engineering = Number(statValue("engineering"))
    localCharacter.intellectAttr.focus = Number(statValue("focus"))
    localCharacter.intellectAttr.legends = Number(statValue("legends"))
    localCharacter.intellectAttr.medicine = Number(statValue("medicine"))
    localCharacter.intellectAttr.science = Number(statValue("science"))

    localCharacter.psycheAttr.psyche = Number(statValue("psyche"))
    localCharacter.psycheAttr.cunning = Number(statValue("cunning"))
    localCharacter.psycheAttr.deception = Number(statValue("deception"))
    localCharacter.psycheAttr.domination = Number(statValue("domination"))
    localCharacter.psycheAttr.faith = Number(statValue("faith"))
    localCharacter.psycheAttr.reaction = Number(statValue("reaction"))
    localCharacter.psycheAttr.willpower = Number(statValue("willpower"))

    localCharacter.instinctAttr.instinct = Number(statValue("instinct"))
    localCharacter.instinctAttr.empathy = Number(statValue("empathy"))
    localCharacter.instinctAttr.orienteering = Number(statValue("orienteering"))
    localCharacter.instinctAttr.perception = Number(statValue("perception"))
    localCharacter.instinctAttr.primal = Number(statValue("primal"))
    localCharacter.instinctAttr.survival = Number(statValue("survival"))
    localCharacter.instinctAttr.taming = Number(statValue("taming"))

    document.getElementById("ego").value = localCharacter.egoValue()
    document.getElementById(
        "sporeInfestations"
    ).value = localCharacter.sporeInfestationsValue()
    document.getElementById(
        "fleshwounds"
    ).value = localCharacter.fleshwoundsValue()
    document.getElementById("trauma").value = localCharacter.traumaValue()
}
