const menuButton = document.querySelector(".menu-button");
const navLink = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLink.classList.toggle("show-menu"); // no dot here
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const currentTheme = localStorage.getItem('theme');

  // Cek tema yang tersimpan di localStorage saat halaman dimuat
  if (currentTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️'; // Ganti ikon jadi matahari
  }

  themeToggle.addEventListener('click', function() {
      body.classList.toggle('dark-mode');

      // Simpan tema ke localStorage
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('theme', 'dark');
          themeToggle.textContent = '☀️'; // Ganti ikon jadi matahari
      } else {
          localStorage.setItem('theme', 'light');
          themeToggle.textContent = '🌙'; // Ganti ikon jadi bulan
      }
  });
});