document.querySelectorAll('.accordion-header--basic').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling; // .accordion-content--basic

    if (content.classList.contains('active')) {
      content.classList.remove('active');
      header.classList.remove('active'); // убрать поворот
    } else {
      // Если нужен только один открытый:
      document.querySelectorAll('.accordion-content--basic.active').forEach(openContent => {
        openContent.classList.remove('active');
      });
      document.querySelectorAll('.accordion-header--basic.active').forEach(openHeader => {
        openHeader.classList.remove('active');
      });

      content.classList.add('active');
      header.classList.add('active'); // добавить поворот
    }
  });
});
