const inputCheck = document.querySelectorAll(".seat-ticket-item input");

if (inputCheck.length > 0) {
	inputCheck.forEach((item) => {
		item.addEventListener("change", (e) => {
			if (e.target.checked === true) {
				e.target.parentNode.classList.add("active");
			} else {
				e.target.parentNode.classList.remove("active");
			}
		});
	});
}
