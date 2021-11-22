// select items
const anchorLinks = document.querySelectorAll('a[href^="#"]');
const navLinks = document.querySelectorAll(".nav__links");
const navIcons = document.querySelectorAll(".nav__icon");
const navbar = document.querySelector("nav");

//smooth scroll
anchorLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId =
    event.currentTarget.getAttribute("href") === "#"
      ? "home"
      : event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((link2) => {
      link2.classList.remove("nav__links--active");
    });
    link.classList.add("nav__links--active");
  });
});

navIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    navLinks.forEach((icon2) => {
      icon2.classList.remove("nav__icon--active");
    });
    link.classList.add("nav__icon--active");
  });
});
