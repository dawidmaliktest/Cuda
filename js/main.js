(function() {
	var circles = document.querySelectorAll('.circle-progress');

	function setProgress(element) {
		var text = element.querySelector('.percent'),
			circle = element.querySelector('.progress'),

			radius = element.querySelector('svg').clientWidth * 0.455,
			percent = element.dataset.pct,
			PI2 = 6.28318530718,
			result = PI2 * radius * (percent / 100);

		text.innerHTML = percent;
		circle.setAttribute('stroke-dasharray', result + ' 1000%');
	}

	for (var i = circles.length - 1; i >= 0; i--) {
		setProgress(circles[i]);
	}
})();