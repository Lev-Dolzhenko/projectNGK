const header = document.querySelector('.header');
let lastScroll = 0;
let isManualScroll = false; // Флаг для ручного скролла (по кнопке)

// Обработчик клика на scroll-button
document.querySelectorAll(".scroll-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Отменяем стандартное поведение (если нужно)
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Включаем режим "ручного скролла"
      isManualScroll = true;
      
      // Плавный скролл
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Скрываем header
      header.classList.add('hide');

      // Закрываем мобильное меню (если открыто)
      const menu = document.querySelector('.header-nav--mobile');
      const burgerBtn = document.querySelector('.burger-btn');
      
      if (menu?.classList.contains("active")) {
        burgerBtn?.classList.remove("active");
        menu?.classList.remove("active");
        document.body.classList.remove("block");
      }

      // Через 1 секунду возвращаем обычное поведение
      setTimeout(() => {
        isManualScroll = false;
      }, 1000);
    }
  });
});

// Обработчик скролла (с проверкой isManualScroll)
window.addEventListener('scroll', () => {
  if (isManualScroll) return; // Игнорируем скролл после клика на кнопку

  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('hide');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('hide')) {
    header.classList.add('hide');
  } else if (currentScroll < lastScroll && header.classList.contains('hide')) {
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});