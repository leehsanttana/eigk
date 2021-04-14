const btn_menu = document.querySelector('[data-menu="button"]');
const menu = document.querySelector('[data-menu="list"] ul');

function showMenu() {
  btn_menu.classList.toggle('active');
  menu.classList.toggle('active');
}

function activeShowMenu() {
  btn_menu.addEventListener('click', showMenu);
}

activeShowMenu();

function scrollInternalLink() {
  const links = document.querySelectorAll('nav a[href^="#"]');
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }

  function scrollToPosition(to) {
    window.scroll({
      top: to,
      behavior: 'smooth',
    });
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 60;
    scrollToPosition(to);
    btn_menu.classList.remove('active');
    menu.classList.remove('active');
  }

  links.forEach((links, i) => {
    links.addEventListener('click', scrollToIdOnClick);
  });
}

scrollInternalLink();
