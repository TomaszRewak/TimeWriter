window.addEventListener('keydown', function (e) {
	if (e.keyCode === 32)
		e.preventDefault();
	if (e.keyCode === 9)
		e.preventDefault();
	if (e.ctrlKey && e.keyCode == 65)
		e.preventDefault();
	if (e.ctrlKey && e.keyCode == 83)
		e.preventDefault();
});