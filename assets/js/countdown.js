var end = new Date('05/22/2015 7:30 PM');
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
var now = new Date();
var distance = end - now;
if (distance < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '<a style="color:#333333; font-weight:bold; text-decoration:none; text-shadow:none;" href="html/programm.html">Zum Programm <i class="fa fa-angle-right"></i> </a>';
return;
}
var days = Math.floor(distance / _day);
var hours = Math.floor((distance % _day) / _hour);
var minutes = Math.floor((distance % _hour) / _minute);
var seconds = Math.floor((distance % _minute) / _second);

if (days !== 1) {
    document.getElementById('countdown').innerHTML =  days + ' <span>Tagen</span> ';
    } else {
        document.getElementById('countdown').innerHTML = days + ' <span>Tag</span> ';
    };

if (hours !== 1) {
    document.getElementById('countdown').innerHTML += hours + ' <span>Stunden</span> ';
    } else {
        document.getElementById('countdown').innerHTML += hours + ' <span>Stunde</span> ';
    };

if (minutes !== 1) {
    document.getElementById('countdown').innerHTML += minutes + ' <span>Minuten</span> ';
    } else {
        document.getElementById('countdown').innerHTML += minutes + ' <span>Minute</span> ';
    };
if (days === 0) {document.getElementById('countdown').innerHTML += seconds + ' <span>Sekunden</span>';};

document.getElementById('countdown').style.fontWeight = "bold";
}
timer = setInterval(showRemaining, 1000);
