document.addEventListener("DOMContentLoaded", function(event) {
	const btnNav = document.querySelector("nav button");
	const menu = document.getElementById("menu");
	const hamburguer = document.querySelector('.menu-icon');
	btnNav.addEventListener("click", function() {
		if (hasClass(menu, "open")) {
			menu.className = "menu"
			hamburguer.className = "menu-icon";
		} else {
			menu.className = "menu open"
            hamburguer.className = "menu-icon close";
		}
	});

	function hasClass(elemento, classe) {
		return (' ' + elemento.className + ' ').indexOf(' ' + classe + ' ') > - 1;
	}
});
