document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.navbar a').forEach(item => {
      item.classList.remove('active');
    });
    link.classList.add('active');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();