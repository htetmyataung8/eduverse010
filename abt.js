const links = document.querySelectorAll('.nav-link');
const currentUrl = window.location.pathname;

links.forEach(link => {
  if (link.getAttribute('href') === currentUrl) {
    link.classList.add('active');
  }
});

const toggleButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

toggleButton.addEventListener("click", () => {
// Toggle the menu visibility
document.body.classList.toggle("show-mobile-menu");

});

menuCloseButton.addEventListener("click", () => toggleButton.click
());