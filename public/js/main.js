/*   ACTUALIZAR CUANDO SE ESCRIBE ALGO!!

    $("#html-area").on("change keyup paste", function () {
        updateOutput();
    });
 */

const conceptoValues = [
    "0. El Aventurero",
    "I. El Creador",
    "II. El Mentor",
    "III. El Mártir",
    "IV. El Gobernante",
    "V. El Explorador",
    "VI. El Restaurador",
    "VII. El Tradicionalista",
    "VIII. El Mediador",
    "IX. El Ermitaño",
    "X. El Hereje",
    "XI. El Conquistador",
    "XII. La Abominación",
    "XIII. El Destructor",
    "XIV. El Elegido",
    "XV. El Corruptor",
    "XVI. El Protector",
    "XVII. El Visionario",
    "XVIII. El Fanático",
    "XIX. El Discípulo",
    "XX. El Justo",
    "XXI. El Viajero"
]
const culturaValues = [
    "Borca",
    "Franka",
    "Polen",
    "El Balján",
    "Hibrispania",
    "Purgare",
    "África"
]
const colectivoValues = [
    "Spitalianos",
    "Cronistas",
    "Hellvéticos",
    "Jueces",
    "Clanes",
    "Chatarreros",
    "Neolibios",
    "Azotadores",
    "Anubianos",
    "Jehammedanos",
    "Apocalípticos",
    "Anabaptistas",
    "Pálidos"
]

// KEEP TRACK OF FAITH/WILL AND FOCUS/PRIMAL
const faithText = document.getElementById("faith-text")
const faithValue = document.getElementById("faith-value")
const willpowerText = document.getElementById("willpower-text")
const willpowerValue = document.getElementById("willpower-value")
const focusText = document.getElementById("focus-text")
const focusValue = document.getElementById("focus-value")
const primalText = document.getElementById("primal-text")
const primalValue = document.getElementById("primal-value")

const fillDropdown = function(valuesArray, dropDown) {
    let fragment = document.createDocumentFragment()
    valuesArray.forEach(val => {
        let option = document.createElement("option")
        option.innerHTML = val.toUpperCase()
        option.value = val.toUpperCase()
        fragment.appendChild(option)
    })
    dropDown.appendChild(fragment)
}

window.onload = function() {
    // POPULATE DROPDOWN LISTS
    const culturaDropDown = document.getElementById("cultura")
    const conceptoDropDown = document.getElementById("concepto")
    const colectivoDropDown = document.getElementById("colectivo")

    fillDropdown(conceptoValues, conceptoDropDown)
    fillDropdown(culturaValues, culturaDropDown)
    fillDropdown(colectivoValues, colectivoDropDown)

    // INITIAL STATE OF FAITH AND FOCUS IMPLIES WILL AND PRIMAL ARE DEACTIVATED
    willpowerText.style.setProperty("text-decoration", "line-through")
    willpowerValue.disabled = true

    primalText.style.setProperty("text-decoration", "line-through")
    primalValue.disabled = true
}

const faithOrWill = elem => {
    if (elem.value === "FE") {
        willpowerText.style.setProperty("text-decoration", "line-through")
        willpowerValue.disabled = true
        willpowerValue.value = 0
        faithText.style.setProperty("text-decoration", "none")
        faithValue.disabled = false
    } else {
        willpowerText.style.setProperty("text-decoration", "none")
        willpowerValue.disabled = false
        faithText.style.setProperty("text-decoration", "line-through")
        faithValue.disabled = true
        faithValue.value = 0
    }
}

const focusOrPrimal = elem => {
    if (elem.value === "CONCENTRACIÓN") {
        primalText.style.setProperty("text-decoration", "line-through")
        primalValue.disabled = true
        primalValue.value = 0
        focusText.style.setProperty("text-decoration", "none")
        focusValue.disabled = false
    } else {
        primalText.style.setProperty("text-decoration", "none")
        primalValue.disabled = false
        focusText.style.setProperty("text-decoration", "line-through")
        focusValue.disabled = true
        focusValue.value = 0
    }
}
