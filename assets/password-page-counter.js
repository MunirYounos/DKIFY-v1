let counterWrapper = document.querySelector('.counter_wrapper');
let counterEndText = document.getElementById('endText');
const dateId = document.getElementById('counter');
let eventDate = dateId.getAttribute('data-date');
function updateTimer(at, someId) {
future = Date.parse(at);
now = new Date();
diff = future - now;

if(diff >= 0){
days = Math.floor(diff / (1000 * 60 * 60 * 24));
hours = Math.floor(diff / (1000 * 60 * 60));
mins = Math.floor(diff / (1000 * 60));
secs = Math.floor(diff / 1000);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
d = addZero(days);
h = addZero(hours - days * 24);
m = addZero(mins - hours * 60);
s = addZero(secs - mins * 60);

someId.innerHTML = `
<span class="counter-number">${d}<br><span class="timer-text">Dage</span></span><span class="counter-number">${h}<br><span class="timer-text">Timer</span></span><span class="counter-number">${m}<br><span class="timer-text">Minutter</span></span><span class="counter-number">${s}<br><span class="timer-text">Sekunder</span></span>
`
}else {
someId.innerHTML = `<p></p>${counterEndText.innerHTML}<p></p>`;
}
}
setInterval('updateTimer(eventDate, dateId )', 1000);