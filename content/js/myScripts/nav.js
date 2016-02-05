window.addEventListener("load", function() {

	var faUpDown = document.getElementsByClassName("arrow");
	var faLeftRight = document.getElementsByClassName("arrow768");


	// :::::::::: display submenu 'Home' ::::::::::
	var submenu768Home = document.getElementById('submenu768Home');
	var submenuHome = document.getElementById('submenuHome');
	submenu768Home.addEventListener("click", displaySubmenuHome);
	submenuHome.addEventListener("click", displaySubmenuHome);

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

		if(faUpDown[0].classList.contains('fa-angle-down')) {
			faUpDown[0].classList.remove('fa-angle-down');
			faUpDown[0].classList.add('fa-angle-up');
			try {
				var navBlock = document.getElementsByClassName('folioNav')[0];
				navBlock.classList.remove('folioNavZindex');
			}
			catch (ex) {}
		}
		else {
			faUpDown[0].classList.remove('fa-angle-up');
			faUpDown[0].classList.add('fa-angle-down');
			try {
				var navBlock = document.getElementsByClassName('folioNav')[0];
				navBlock.classList.add('folioNavZindex');
			}
			catch (ex) {}

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
	//:::::::::: display submenu 'About' ::::::::::
	var submenu768About = document.getElementById('submenu768About');
	var submenuAbout = document.getElementById('submenuAbout');
	submenu768About.addEventListener("click", displaySubmenuAbout);
	submenuAbout.addEventListener("click", displaySubmenuAbout);


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
			try {
				var navBlock = document.getElementsByClassName('folioNav')[0];
				navBlock.classList.remove('folioNavZindex');
			}
			catch (ex) {}
		}
		else {
			faLeftRight[1].classList.remove('fa-angle-right');
			faLeftRight[1].classList.add('fa-angle-left');
			try {
				var navBlock = document.getElementsByClassName('folioNav')[0];
				navBlock.classList.add('folioNavZindex');
			}
			catch (ex) {}
		}
	}


	// :::::::::: display trigger ::::::::::
	var trigger = document.getElementsByClassName('trigger')[0];
	trigger.addEventListener("click", displayNav);

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
	// :::::::::: StickyNav ::::::::::
	var nav = document.getElementsByClassName('navcol')[0];
	var stickyHeader = document.getElementsByClassName('static-nav')[0];
	var sourceNavPosition = nav.getBoundingClientRect().bottom + window.pageYOffset;
	function isStickyNavigation() {
		if (window.pageYOffset > sourceNavPosition) {
			stickyHeader.classList.add('isStickyNav');
		}
		else {
			stickyHeader.classList.remove('isStickyNav');
		}
	}
	window.addEventListener("scroll", isStickyNavigation);
});

