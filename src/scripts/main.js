'use strict';

document - addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('.header__menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuButton) {
    menuButton.addEventListener('click', () => {
      document.body.classList.toggle('is-menu-open');
    });
  }
});
