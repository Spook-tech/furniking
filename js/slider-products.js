document.querySelectorAll(".tab").forEach(tab => {
  for (let i = 0; i < tab.querySelectorAll(".tab__products-page").length; i++) {
    let paginationBullet = document.createElement("div");
    paginationBullet.className = "tab__pagination-bullet";
    paginationBullet.dataset.number = i;

    let img = document.createElement("img");
    img.src = "./images/trending/bullet.svg";
    paginationBullet.append(img);

    tab.querySelector(".tab__pagination").append(paginationBullet);
    tab
      .querySelector(".tab__pagination")
      .firstElementChild.classList.add("tab__pagination-bullet--active");

    tab.addEventListener("click", function (e) {
      if (!e.target.closest(".tab__pagination-bullet")) return;
      tab.firstElementChild.firstElementChild.style.marginLeft =
        "-" + e.target.closest(".tab__pagination-bullet").dataset.number + "00%";
      e.target
        .closest(".tab__pagination-bullet")
        .parentElement.querySelector(".tab__pagination-bullet--active")
        .classList.remove("tab__pagination-bullet--active");
      e.target
        .closest(".tab__pagination-bullet")
        .classList.add("tab__pagination-bullet--active");
    });
  }
}); 