function setUpScrolling(scrollButtons) {
	for (var i = 0; i < scrollButtons.length; i++) {
		scrollButtons[i].onclick = function() {
			scrollTo(document.body, this.getAttribute("href").split("#")[1], 200);
			return false;
		};
	}
}

function scrollTo(element, to, duration) {
	var locationTo = document.getElementById(to).offsetTop - 50;
	if (duration <= 0) {
		return;
	}
	var difference = locationTo - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		if (element.scrollTop === locationTo) {
			return;
		}
		scrollTo(element, to, duration - 10);
	}, 10);
}

window.onload = function() {
	var target = document.getElementsByClassName("scroll-buttons");
	var refs = target[0].getElementsByTagName("a");
	setUpScrolling(refs);
}