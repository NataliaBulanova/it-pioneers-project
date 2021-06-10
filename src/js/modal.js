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