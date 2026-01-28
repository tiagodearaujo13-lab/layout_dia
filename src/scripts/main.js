'use strict';

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------
  // 1. Menu Mobile (Funcionalidade básica)
  // --------------------------------------------------------
  const menuBtn = document.querySelector('.header__menu-btn'); // Verifica se tens esta classe no botão do menu
  const nav = document.querySelector('.header__nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('is-active');
      menuBtn.classList.toggle('is-active');
      // Opcional: Bloquear scroll do body quando menu está aberto
      document.body.classList.toggle('no-scroll');
    });
  }

  // Fecha o menu ao clicar num link (HR #6 - UX Mobile)
  const navLinks = document.querySelectorAll('.header__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav && nav.classList.contains('is-active')) {
        nav.classList.remove('is-active');
        if (menuBtn) menuBtn.classList.remove('is-active');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // --------------------------------------------------------
  // 2. Formulário de Contacto (Checklist Tech #11 e #12)
  // --------------------------------------------------------
  const contactForm = document.querySelector('.form'); // Ou a classe específica do teu form

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Impede o envio real (evita erro 405 se não houver backend)

      // Validação Simples (Tech #12 - Não enviar vazio)
      // O HTML5 'required' já ajuda, mas podemos reforçar
      const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error'); // Podes estilizar esta classe no CSS
        } else {
          input.classList.remove('error');
        }
      });

      if (isValid) {
        // Simula envio com sucesso
        alert('Thank you! Your message has been sent.');

        // Limpa o formulário (Tech #11)
        contactForm.reset();

        // Rola para o topo ou recarrega (Tech #11)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Ou use: location.reload(); se preferir recarregar a página
      }
    });
  }
});
