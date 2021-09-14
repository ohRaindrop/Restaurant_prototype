// CODE FOR EVENTS
// IDEA: when you click on a "reserve table" button in event section, 
//you go to the form and date will be reminded
const mainEventBtn = document.querySelector("#reserve-event-main");
const secondEventBtn = document.querySelectorAll(".event-reserve");

const eventDate = document.querySelector(".event-date").innerHTML;
const nextEventDate = document.querySelectorAll(".next-event-date");
const date = document.querySelector("#date-label");


function changeDate(changeDate) {
    date.innerText = "date of the event is: " + changeDate;
}

mainEventBtn.addEventListener("click", function () {
    changeDate(eventDate);
})


for (let i = 0; i < secondEventBtn.length; i++) {
    secondEventBtn[i].addEventListener("click", function () {
        changeDate(nextEventDate[i].innerText.toLowerCase());

    });
}


