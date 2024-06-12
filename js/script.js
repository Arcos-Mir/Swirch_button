window.onload = () => {
    const toggleSwitch = document.getElementById("switch");
    const toggleSwitchText = toggleSwitch.querySelector("p");
    const body = document.body;

    toggleSwitch.onclick = () => {
        if (body.style.backgroundColor == "") {
            body.style.backgroundColor = "black"; /* cambia el color de fondo a negro */
            toggleSwitch.style.backgroundColor = "white"; /* cambia el fondo del switch a blanco */
            toggleSwitchText.innerHTML = "Encender"; /* cambia el texto del switch a Encender */
            toggleSwitchText.style.color = "black"; /* cambia el color de la letra a negro */
        } else if (body.style.backgroundColor == "white") {
            body.style.backgroundColor = "black"; /* cambia el color de fondo a negro */
            toggleSwitch.style.backgroundColor = "white"; /* cambia el fondo del switch a blanco */
            toggleSwitchText.innerHTML = "Encender"; /* cambia el texto del switch a Encender */
            toggleSwitchText.style.color = "black"; /* cambia el color de la letra a negro */
        }else {
            body.style.backgroundColor ="white";
            toggleSwitch.style.backgroundColor = "black";
            toggleSwitchText.innerHTML = "Apagar";
            toggleSwitchText.style.color = "white";
        }
    }
}