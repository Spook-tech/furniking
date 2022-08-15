function dropdownHandler(e) {
  e.target.closest(".dropdown-menu").classList.toggle("dropdown-menu--active");
  if (e.target.closest(".dropdown-menu").classList.contains("dropdown-menu--active")) {
    setTimeout(function () {
      document.body.addEventListener("click", event => closeDropdown(event, e.target), {
        once: true,
      });
    }, 0);
  }
}

function closeDropdown(e, target) {
  if (
    !e.target.closest("dropdown-menu") ||
    (e.target.closest("dropdown-menu") &&
      e.target.closest("dropdown-menu") != target.closest("dropdown-menu"))
  ) {
    target.closest(".dropdown-menu").classList.remove("dropdown-menu--active");
  }
}

document.querySelectorAll(".dropdown-menu__button").forEach(item => {
  item.addEventListener("click", dropdownHandler);
});