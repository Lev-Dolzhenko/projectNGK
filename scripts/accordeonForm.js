document.querySelector('.advice-header--accordeon').addEventListener('click', function() {
  const header = this;
  const content = header.nextElementSibling;
  const isActive = content.classList.contains('active');

  // Закрываем все открытые элементы
  document.querySelectorAll('.radio-items.active').forEach(item => {
    item.style.overflow = 'hidden'; // Блокируем прокрутку во время анимации
    item.classList.remove('active');
  });
  document.querySelectorAll('.advice-header--accordeon.active').forEach(btn => {
    btn.classList.remove('active');
  });

  // Открываем/закрываем текущий
  if (!isActive) {
    content.classList.add('active');
    header.classList.add('active');
    // После завершения анимации возвращаем overflow
    setTimeout(() => content.style.overflow = 'visible', 300);
  }
});