// CODE FOR EVENTS
// event-date, next-event-date
// IDEA: when you click on a "reserve table" button in event section, 
//you go to the form and date will be reminded
const mainEventBtn = document.querySelector("#reserve-event-main");
const secondEventBtn = document.querySelectorAll(".event-reserve");

const eventDate = document.querySelector(".event-date").innerHTML;
const nextEventDate = document.querySelectorAll(".next-event-date");
const date = document.querySelector("#date-label");


function changedate(changeDate) {
    date.innerText = "date of the event is:" + changeDate;
}

mainEventBtn.addEventListener("click", function () {
    changedate(eventDate);
})


/*for (i = 0; i > secondEventBtn.length; i++) {
    secondEventBtn.addEventListener("click", function () {
        changedate(nextEventDate[i]);
    });
} */


