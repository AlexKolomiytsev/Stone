var faUpDown = document.getElementsByClassName("arrow");
var faLeftRight = document.getElementsByClassName("arrow768");

function displaySubmenuHome() {
	if(document.getElementsByClassName("onHoverAbout")[0].classList.contains("onHoverAboutOpen")) {
		document.getElementsByClassName("onHoverAbout")[0].classList.remove("onHoverAboutOpen");
		faUpDown[1].classList.remove('fa-angle-up');
		faUpDown[1].classList.add('fa-angle-down');
		faLeftRight[1].classList.remove('fa-angle-right');
		faLeftRight[1].classList.add('fa-angle-left');
	}
	var submElem = document.getElementsByClassName("onHoverHome")[0];
	submElem.classList.toggle('onHoverHomeOpen');
	//console.log(submElem.classList);

	//console.log(faUpDown.classList
	if(faUpDown[0].classList.contains('fa-angle-down')) {
		faUpDown[0].classList.remove('fa-angle-down');
		faUpDown[0].classList.add('fa-angle-up');	
	}
	else {
		faUpDown[0].classList.remove('fa-angle-up');
		faUpDown[0].classList.add('fa-angle-down');	
	}
	if(faLeftRight[0].classList.contains('fa-angle-left')) {
		faLeftRight[0].classList.remove('fa-angle-left');
		faLeftRight[0].classList.add('fa-angle-right');
	}
	else {
		faLeftRight[0].classList.remove('fa-angle-right');
		faLeftRight[0].classList.add('fa-angle-left');
	}
}
function displaySubmenuAbout() {
	if(document.getElementsByClassName("onHoverHome")[0].classList.contains("onHoverHomeOpen")) {
		document.getElementsByClassName("onHoverHome")[0].classList.remove("onHoverHomeOpen");
		faUpDown[0].classList.remove('fa-angle-up');
		faUpDown[0].classList.add('fa-angle-down');
		faLeftRight[0].classList.remove('fa-angle-right');
		faLeftRight[0].classList.add('fa-angle-left');
	}
	var submElem = document.getElementsByClassName("onHoverAbout")[0];
	submElem.classList.toggle('onHoverAboutOpen');

	//var faUpDown = document.getElementsByClassName("arrow");
	//console.log(faUpDown.classList
	if(faUpDown[1].classList.contains('fa-angle-down')) {
		faUpDown[1].classList.remove('fa-angle-down');
		faUpDown[1].classList.add('fa-angle-up');	
	}
	else {
		faUpDown[1].classList.remove('fa-angle-up');
		faUpDown[1].classList.add('fa-angle-down');	
	}
	if(faLeftRight[1].classList.contains('fa-angle-left')) {
		faLeftRight[1].classList.remove('fa-angle-left');
		faLeftRight[1].classList.add('fa-angle-right');
	}
	else {
		faLeftRight[1].classList.remove('fa-angle-right');
		faLeftRight[1].classList.add('fa-angle-left');
	}
}
function displayNav() {
	var navElem = document.getElementsByClassName('nav')[0];
	navElem.classList.toggle('navOpen');
	var trigger = document.getElementsByClassName('trigger')[0];
	if (trigger.classList.contains('fa-bars')) {
		trigger.classList.remove('fa-bars');
		trigger.classList.add('fa-times');
	}
	else {
		trigger.classList.remove('fa-times');
		trigger.classList.add('fa-bars');
	}
}

// TypeError: document.getElementById(...) is null
// var submElemIDhome = document.getElementById("submenuHome").addEventListener("click", displaySubmenuHome);