gsap.registerPlugin(ScrollTrigger);

// Создаем временную шкалу
const tl = gsap.timeline();

// Проверяем, есть ли элементы на странице и не мобильная ли версия
const isMobile = window.innerWidth <= 1200; // или ваш брейкпоинт
const hasHeaderNav = document.querySelector('.header-nav') !== null;
const hasButtonHeader = document.querySelector('.button-header') !== null;

// Анимация логотипа (всегда есть)
tl.fromTo(
  ".header-logo",
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 }
);

// Анимация навигации (только если элемент есть и не мобильная версия)
if (!isMobile && hasHeaderNav) {
  tl.fromTo(
    ".header-nav",
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  );
}

// Анимация кнопки (только если элемент есть и не мобильная версия)
if (!isMobile && hasButtonHeader) {
  tl.fromTo(
    ".button-header",
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 }
  );
}

// Остальные анимации (общие для всех версий)
tl.fromTo(
  ".title-span--about",
  { x: -100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  "<+=0.5" // задержка 0.5 сек после предыдущей анимации
)
.fromTo(
  ".about-wrapper--subtitle",
  { opacity: 0 },
  { opacity: 1, duration: 1 },
  "<+=0.5"
)
.fromTo(
  ".about-container",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 1 },
  "<+=0.5"
);

gsap.fromTo(
  ".basic-wrapper--title",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".basic-wrapper--title", // элемент, который триггерит анимацию
      start: "-=200 center", // когда верх элемента будет в центре экрана
      end: "bottom center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".basic-wrapper--list",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".basic-wrapper--list", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "+=200 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".basic-list--mobile",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".basic-list--mobile", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "+=200 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".add-wrapper--title",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".add-wrapper--title", // элемент, который триггерит анимацию
      start: "-=200 center", // когда верх элемента будет в центре экрана
      end: "bottom center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".add-container",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".add-container", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "+=250 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".add-wrapper--title",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".add-wrapper--title", // элемент, который триггерит анимацию
      start: "-=200 center", // когда верх элемента будет в центре экрана
      end: "bottom center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".choose-wrapper--title",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".choose-wrapper--title", // элемент, который триггерит анимацию
      start: "-=200 center", // когда верх элемента будет в центре экрана
      end: "bottom center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".choose-title",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".choose-title", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "bottom center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".choose-item--one",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".choose-title", // элемент, который триггерит анимацию
      start: "center center", // когда верх элемента будет в центре экрана
      end: "+=200 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".choose-item--two",
  // Начальное состояние (from)
  {
    x: -100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".choose-title", // элемент, который триггерит анимацию
      start: "center center", // когда верх элемента будет в центре экрана
      end: "+=200 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".advice-title",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".advice-title", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "+=200 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".advice-subtitle",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".advice-subtitle", // элемент, который триггерит анимацию
      start: "top center", // когда верх элемента будет в центре экрана
      end: "+=100 center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);

gsap.fromTo(
  ".advice-form",
  // Начальное состояние (from)
  {
    y: 100,
    opacity: 0,
  },
  // Конечное состояние (to) + настройки анимации
  {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".advice-form", // элемент, который триггерит анимацию
      start: "-=100 center", // когда верх элемента будет в центре экрана
      end: "top center", // закончить через 500px скролла после start
      scrub: true, // плавная привязка к скроллу
      once: true,
    },
  }
);
