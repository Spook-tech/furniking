const tabs = document.querySelectorAll(".tabs");
tabs.forEach((tabs, index) => {
  let itemList = Array.from(tabs.querySelectorAll(".tabs__item"));
  let tabList = Array.from(tabs.querySelectorAll(".tabs__tab"));
  if (itemList.length != tabList.length) {
    console.log("wrong count of tabs/blocks");
  } else {
    tabs.dataset.tabNumber = index;

    for (let i = 0; i < itemList.length; i++) {
      itemList[i].dataset.index = i;
      tabList[i].dataset.index = i;
    }

    tabs.querySelectorAll(".tabs__tab")[0].classList.add("tabs__tab--active");
    tabs.querySelectorAll(".tabs__item")[0].classList.add("tabs__item--active");

    tabs.querySelector(".tabs__items").addEventListener("click", function (e) {
      if (!e.target.closest(".tabs__item")) return;

      e.target
        .closest(".tabs")
        .querySelector(".tabs__tab--active")
        .classList.remove("tabs__tab--active");
      e.target
        .closest(".tabs")
        .querySelector(
          ".tabs__tab[data-index='" + e.target.closest(".tabs__item").dataset.index + "']"
        )
        .classList.add("tabs__tab--active");

      e.target
        .closest(".tabs")
        .querySelector(".tabs__item--active")
        .classList.remove("tabs__item--active");
      e.target
        .closest(".tabs")
        .querySelector(
          ".tabs__item[data-index='" +
            e.target.closest(".tabs__item").dataset.index +
            "']"
        )
        .classList.add("tabs__item--active");
    });
  }
});
