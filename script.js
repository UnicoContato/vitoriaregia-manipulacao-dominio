document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HEADER DINÂMICO (Some ao descer, aparece ao subir) ---
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Rolando para baixo
            header.classList.add('header-hidden');
            header.classList.remove('header-visible');
        } else {
            // Rolando para cima
            header.classList.remove('header-hidden');
            header.classList.add('header-visible');
        }
        
        // Adiciona sombra se não estiver no topo
        if (scrollTop > 0) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }

        lastScrollTop = scrollTop;
    });

    // --- 2. MENU MOBILE ---
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menuMobile = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('#mobile-menu a');

    btnMobile.addEventListener('click', () => {
        menuMobile.classList.toggle('hidden');
    });

    // Fechar menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuMobile.classList.add('hidden');
        });
    });

    // --- 3. MODAL DE POLÍTICA DE PRIVACIDADE ---
    const modal = document.getElementById('privacy-modal');
    const btnOpenModal = document.getElementById('privacy-btn');
    const btnCloseModal = document.getElementById('close-modal');
    const overlay = document.getElementById('modal-overlay');

    function toggleModal() {
        modal.classList.toggle('hidden');
    }

    btnOpenModal.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    btnCloseModal.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);

    // --- 4. ANIMAÇÃO DE SCROLL REVEAL ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Para animar apenas uma vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-element');
    fadeElements.forEach(el => observer.observe(el));

});