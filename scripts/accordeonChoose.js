document.querySelectorAll(".choose-header--accordion").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.closest(".choose-item");
    const content = header.nextElementSibling;
    const isActive = item.classList.contains("active");

    // Закрываем все открытые элементы
    document.querySelectorAll(".choose-item.active").forEach((activeItem) => {
      if (activeItem !== item) {
        activeItem.classList.remove("active");
        activeItem
          .querySelector(".choose-content--accordion")
          .classList.remove("active");
        activeItem
          .querySelector(".choose-header--accordion")
          .classList.remove("active");
      }
    });

    // Переключаем текущий элемент
    item.classList.toggle("active", !isActive);
    content.classList.toggle("active", !isActive);
    header.classList.toggle("active", !isActive);
  });
});
