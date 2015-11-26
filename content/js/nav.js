var faUpDown = document.getElementsByClassName("arrow");

function displaySubmenuHome() {
	if(document.getElementsByClassName("onHoverAbout")[0].classList.contains("onHoverAboutOpen")) {
		document.getElementsByClassName("onHoverAbout")[0].classList.remove("onHoverAboutOpen");
		faUpDown[1].classList.remove('fa-angle-up');
		faUpDown[1].classList.add('fa-angle-down');
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
}
function displaySubmenuAbout() {
	if(document.getElementsByClassName("onHoverHome")[0].classList.contains("onHoverHomeOpen")) {
		document.getElementsByClassName("onHoverHome")[0].classList.remove("onHoverHomeOpen");
		faUpDown[0].classList.remove('fa-angle-up');
		faUpDown[0].classList.add('fa-angle-down');
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
}

// TypeError: document.getElementById(...) is null
// var submElemIDhome = document.getElementById("submenuHome").addEventListener("click", displaySubmenuHome);