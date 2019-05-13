"use strict";

// Author: Alex A. Somoza    Date: May 11, 2019

// The event handler and function below will run when the window loads and will run every function, which will set up the window.
window.onload = setUp;

function setUp() {
    clock();
}

// This function creates a real-time clock that will update every second.
function clock() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var session = "AM";

    if (hour == 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;

    setTimeout(clock, 1000);

}