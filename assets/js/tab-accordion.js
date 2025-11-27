const tabs = document.querySelectorAll(".tab");
const headers = document.querySelectorAll(".accordion-header");
const contents = document.querySelectorAll(".content");

/* Default state */
showTab(0);
openAccordion(0);

/* -------- Desktop Tabs -------- */
function showTab(index) {
	tabs.forEach((t) => t.classList.remove("active"));
	contents.forEach((c) => c.classList.remove("active"));

	tabs[index].classList.add("active");
	contents[index].classList.add("active");
}

/* -------- Mobile Accordion -------- */
function openAccordion(index) {
	contents.forEach((c, i) => {
		if (i === index) {
			c.classList.add("open");
			c.style.maxHeight = c.scrollHeight + "px";
		} else {
			c.classList.remove("open");
			c.style.maxHeight = "0px";
		}
	});
}

/* Desktop tab clicks */
tabs.forEach((tab, i) => tab.addEventListener("click", () => showTab(i)));

/* Mobile accordion clicks */
headers.forEach((header, i) =>
	header.addEventListener("click", () => openAccordion(i))
);
