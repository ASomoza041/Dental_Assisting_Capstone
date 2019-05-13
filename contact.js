"use strict";

// Author: Alex Somoza   Date: May 12, 2019


// The event handler and function below will run when the window loads and will run every function, which will set up the window.
window.onload = start;

function start() {
    setbackground();
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



//This function generates a random number every 5 seconds and whatever that number is it will change the background color to the corresponding color.
function setbackground() {
    window.setTimeout("setbackground()", 5000);

    var index = Math.round(Math.random() * 9);

    var ColorValue = "FFFFFF";

    if (index == 1)
        ColorValue = "FFCCCC";
    if (index == 2)
        ColorValue = "CCAFFF";
    if (index == 3)
        ColorValue = "A6BEFF";
    if (index == 4)
        ColorValue = "99FFFF";
    if (index == 5)
        ColorValue = "D5CCBB";
    if (index == 6)
        ColorValue = "99FF99";
    if (index == 7)
        ColorValue = "FFFF99";
    if (index == 8)
        ColorValue = "FFCC99";
    if (index == 9)
        ColorValue = "CCCCCC";

    document.getElementsByTagName("html")[0].style.backgroundColor = "#" + ColorValue;

}


//The code below is to create and validate the contact form. We do this through creating and appending elements, as well as setting type attributes in JavaScript.

var form = document.getElementById("form");
var createform = document.createElement('form');
form.appendChild(createform);

var heading = document.createElement('h2');
heading.innerHTML = "Contact US!";
createform.appendChild(heading);

var line = document.createElement('hr');
createform.appendChild(line);


//Adding fieldset element
var fieldset = document.createElement("fieldset");
fieldset.setAttribute("id", "field1")
createform.appendChild(fieldset);

//legend for fieldset1
var legend = document.createElement("legend");
legend.innerHTML = "User Information"
fieldset.appendChild(legend);

//p to hold Fname
var p1 = document.createElement("p");
p1.setAttribute("class", "inputs");
fieldset.appendChild(p1);


var fnLabel = document.createElement("label");
fnLabel.setAttribute("for", "fName");
fnLabel.innerHTML = "First Name:"
p1.appendChild(fnLabel);

var fName = document.createElement("input");
fName.setAttribute("id", "fName");
p1.appendChild(fName);


//p to hold Lname
var p2 = document.createElement("p");
p2.setAttribute("class", "inputs");
fieldset.appendChild(p2);

var lnLabel = document.createElement("label");
lnLabel.setAttribute("for", "lName");
lnLabel.innerHTML = "Last Name:"
p2.appendChild(lnLabel);

var lName = document.createElement("input");
lName.setAttribute("id", "lName");
p2.appendChild(lName);


//p to hold email
var p3 = document.createElement("p");
p3.setAttribute("class", "inputs");
fieldset.appendChild(p3);

var emaillabel = document.createElement("label");
emaillabel.setAttribute("for", "email");
emaillabel.innerHTML = "E-mail:"
p3.appendChild(emaillabel);

var email = document.createElement("input");
email.setAttribute("id", "email");
email.setAttribute("type", "email");
p3.appendChild(email);


//p to hold rating slider
var p4 = document.createElement("p");
p4.setAttribute("class", "inputs");
fieldset.appendChild(p4);

var rangelabel = document.createElement("label");
rangelabel.setAttribute("for", "range");
rangelabel.innerHTML = "Rate our website!(Left=0   Right=10)"
p4.appendChild(rangelabel);

var range = document.createElement("input");
range.setAttribute("id", "range");
range.setAttribute("type", "range");
range.setAttribute("min", "1");
range.setAttribute("max", "10");
range.setAttribute("step", "1");
range.setAttribute("value", "5");
p4.appendChild(range);


//p to hold user message
var p5 = document.createElement("p");
p5.setAttribute("class", "inputs");
fieldset.appendChild(p5);

var messgelabel = document.createElement("label");
messgelabel.setAttribute("for", "message");
messgelabel.innerHTML = "Questions, Comments, or Concerns:"
p5.appendChild(messgelabel);

var message = document.createElement("textarea");
message.setAttribute("id", "message");
message.setAttribute("rows", "5");
message.setAttribute("cols", "50");
p5.appendChild(message);


var submitelement = document.createElement('input');
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);