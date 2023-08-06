const body = document.querySelector('body');

function handleBurger() {
  const menuButton = document.querySelector('.header__menu-burger');
  const menuMobile = document.querySelector('.header__menu-mobile');
  const menuWrapper = document.querySelector('.header__menu-wrapper');
  const navLinks = document.querySelectorAll('.header__menu-link');
  navLinks.forEach((link) => link.addEventListener('click', toggleMenu));

  menuButton.addEventListener('click', toggleMenu);

  menuWrapper.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menuWrapper.style.display === 'block'
      ? ((menuWrapper.style.display = 'none'), (body.style.overflow = 'auto'))
      : ((menuWrapper.style.display = 'block'), (body.style.overflow = 'hidden'));
    menuMobile.classList.toggle('active');
  }
}

handleBurger();
