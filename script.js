const initTabNav = () => {
	const tabmenu = document.querySelectorAll('.js-tabmenu li');
	const tabcontent = document.querySelectorAll('.js-tabcontent section');

	if (tabmenu.length && tabcontent.length) {
		tabcontent[0].classList.add('ativo');

		const activeTab = (index) => {
			tabcontent.forEach((section) => {
				section.classList.remove('ativo');
			});
			tabcontent[index].classList.add('ativo');
		};

		tabmenu.forEach((itemMenu, index) => {
			itemMenu.addEventListener('click', () => {
				activeTab(index);
			});
		});
	}
};
initTabNav();

const initAccordion = () => {
	const accordionList = document.querySelectorAll('.js-accordion dt');

	if (accordionList.length) {
		accordionList[0].classList.add('ativo');
		accordionList[0].nextElementSibling.classList.add('ativo');

		function activeAccordion() {
			this.classList.toggle('ativo');
			this.nextElementSibling.classList.toggle('ativo');
		}

		accordionList.forEach((item) => {
			item.addEventListener('click', activeAccordion);
		});
	}
};
initAccordion();

const initSmoothScroll = () => {
	const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

	function scrollToSection(e) {
		e.preventDefault();
		const href = e.currentTarget.getAttribute('href');
		const section = document.querySelector(href);

		section.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});

		// Forma alternativa
		// const topo = section.offsetTop;
		// window.scrollTo({
		// 	top: topo,
		// 	behavior: 'smooth'
		// });
	}

	linksInternos.forEach((link) => {
		link.addEventListener('click', scrollToSection);
	});
};
initSmoothScroll();
