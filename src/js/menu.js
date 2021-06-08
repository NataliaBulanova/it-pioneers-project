(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileBtnRef = document.querySelector('[data-menu]');
    const links = document.querySelectorAll('.header__link');
    const menu = document.querySelector('.mobile-menu');
    // const menuBtnRef1 = document.querySelector('[data-menu-button]');

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);
        mobileBtnRef.classList.toggle("is-open");
        document.body.classList.toggle("modal-open");
        if (menuBtnRef.classList.contains('is-open')) {
            document.getElementsByClassName('header-tab__button')[0].style.display = "none";
        }
        else {document.getElementsByClassName('header-tab__button')[0].style.display = "";}
    });

    links.forEach(link =>
  link.addEventListener('click', () => {
    if (menuBtnRef.classList.contains('is-open')) {
        mobileBtnRef.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        menuBtnRef.classList.remove('is-open');
        document.getElementsByClassName('header-tab__button')[0].style.display = "";
    }
  }),
);
})();