(() => {
    const refs = {
        open_ModalBtn: document.querySelector('[data1-modal-open]'),
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.open_ModalBtn.addEventListener('click', toggleModal);
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);


    function toggleModal() {
        document.body.classList.toggle("modal-open");
        refs.modal.classList.toggle('is-hidden');
    }

})();

{
    const refsMap = {
        openModalBtn: document.querySelector('[data-modal-open-map]'),
        closeModalBtn: document.querySelector('[data-modal-close-map]'),
        modal: document.querySelector('[data-modal-map]'),
    };

    refsMap.openModalBtn.addEventListener('click', toggleModal);
    refsMap.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open-map");
        refsMap.modal.classList.toggle('is-hidden-map');
    }
}