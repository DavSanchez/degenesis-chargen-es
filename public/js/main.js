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

const fillDropdown = function(valuesArray, dropDown) {
    let fragment = document.createDocumentFragment()
    valuesArray.forEach(val => {
        let option = document.createElement("option")
        option.innerHTML = val
        option.value = val
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
}
