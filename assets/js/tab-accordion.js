(function () {
	const root = document.querySelector("#project-tabs");
	if (!root) return;

	const tabs = root.querySelectorAll(".c-tabs__tab");
	const headers = root.querySelectorAll(".c-tabs__accordion-header");
	const contents = root.querySelectorAll(".c-tabs__content");

	// default state
	setTab(0);
	openAccordion(0);

	// desktop tab
	function setTab(index) {
		tabs.forEach((t) => t.classList.remove("c-tabs__tab--active"));
		contents.forEach((c) => c.classList.remove("c-tabs__content--active"));

		tabs[index].classList.add("c-tabs__tab--active");
		contents[index].classList.add("c-tabs__content--active");
	}

	// mobile accordion
	function openAccordion(index) {
		contents.forEach((c, i) => {
			if (i === index) {
				c.classList.add("c-tabs__content--open");
				c.style.maxHeight = c.scrollHeight + "px";
			} else {
				c.classList.remove("c-tabs__content--open");
				c.style.maxHeight = "0";
			}
		});
	}

	// binding
	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => setTab(index));
	});

	headers.forEach((header, index) => {
		header.addEventListener("click", () => openAccordion(index));
	});
})();
