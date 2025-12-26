// Плавная прокрутка
document.querySelectorAll('.site-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Анимация кнопки
const hireBtn = document.querySelector('.btn');
hireBtn.addEventListener('mouseenter', () => hireBtn.style.transform = 'scale(1.05)');
hireBtn.addEventListener('mouseleave', () => hireBtn.style.transform = 'scale(1)');

// Автоматический год
document.getElementById('year').textContent = new Date().getFullYear();

// Меню для мобильных
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.site-nav ul');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
