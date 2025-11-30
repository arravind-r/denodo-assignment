document.addEventListener("DOMContentLoaded", function () {
	new Splide(".logo-carousal-one", {
		type: "loop",
		perPage: 11,
		breakpoints: {
			1400: { perPage: 9 },
			1024: { perPage: 6 },
			767: { perPage: 4 },
		},
		gap: "1.5rem",
		drag: false,
		pagination: false,
		arrows: false,
		autoScroll: {
			speed: 2,
			pauseOnHover: false,
			pauseOnFocus: false,
		},
	}).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
	new Splide(".logo-carousal-two", {
		direction: "rtl",
		type: "loop",
		perPage: 11,
		breakpoints: {
			1400: { perPage: 9 },
			1024: { perPage: 6 },
			767: { perPage: 4 },
		},
		gap: "1.5rem",
		drag: false,
		pagination: false,
		arrows: false,
		autoScroll: {
			speed: 1.5,
			pauseOnHover: false,
			pauseOnFocus: false,
		},
	}).mount(window.splide.Extensions);
});

document.addEventListener("DOMContentLoaded", function () {
	new Splide(".logo-carousal-three", {
		type: "loop",
		perPage: 11,
		breakpoints: {
			1400: { perPage: 9 },
			1024: { perPage: 6 },
			767: { perPage: 4 },
		},
		gap: "1.5rem",
		drag: false,
		pagination: false,
		arrows: false,
		autoScroll: {
			speed: 1,
			pauseOnHover: false,
			pauseOnFocus: false,
		},
	}).mount(window.splide.Extensions);
});
