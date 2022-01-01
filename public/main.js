function toggle() {
  const themeIconEl = document.querySelector('.theme-icon');
  const bodyEl = document.querySelector('body');

  if (themeIconEl.innerText === 'dark_mode') {
    themeIconEl.innerText = 'light_mode';
    bodyEl.classList.remove('lightMode');
  } else {
    themeIconEl.innerText = 'dark_mode';
    bodyEl.classList.add('lightMode');
  }
}
