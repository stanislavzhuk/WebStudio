(() => {
	document.addEventListener("DOMContentLoaded", function () {
		const filterButtons = document.querySelectorAll(".filter__btn");
		const projects = document.querySelectorAll(".project__item");

		filterButtons.forEach(function (button) {
			button.addEventListener("click", function () {
				const filterValue = button.getAttribute("data-filter");

				projects.forEach(function (project) {
					const projectClasses = project.classList;
					if (filterValue === "all" || projectClasses.contains(filterValue)) {
						project.style.display = "block";
					} else {
						project.style.display = "none";
					}
				});
			});
		});
	});
})();
