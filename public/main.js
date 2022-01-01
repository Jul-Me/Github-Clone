let user = null;

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

async function searchUser() {
  const searchValue = document.querySelector('.search-field').value;

  const response = await fetch(`https://api.github.com/users/${searchValue}`);
  user = await response.json();

  console.log('data', user);
}
