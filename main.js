// CODE FOR TABS
const tabcontent = document.querySelectorAll(".tabcontent");
for (let tabc in tabcontent) {
    tabc.style.display = "none";
}

let tablinks = document.querySelectorAll(".tablinks");
for (let tabl in tablinks) {
    tabl.replace(" active-tab", "");
}

// IDEA: take selected element, add active and displat content
document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";

// CODE FOR EVENTS
// IDEA: when you click on a "reserve table" button in event section, you go to the form and date will be automatically filled
const reserveForm = document.querySelector("#reservation-form");
const mainEvent = document.querySelector();

