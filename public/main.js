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
  const searchEl = document.querySelector('.search-field');
  const searchValue = searchEl.value;

  const response = await fetch(`https://api.github.com/users/${searchValue}`);
  const data = await response.json();

  if (data) {
    const notFoundEl = document.querySelector('#not-found');
    const userProfileContainerEl = document.querySelector(
      '#user-profile-container'
    );

    if (data.message === 'Not Found') {
      notFoundEl.classList.remove('hidden');
      userProfileContainerEl.classList.add('hidden');
    } else {
      userProfileContainerEl.classList.remove('hidden');
      notFoundEl.classList.add('hidden');

      appendUserBio(data);
      appendUserStats(data);
      appendUserLinks(data);
    }
  }
}

function appendUserBio(user) {
  const { avatar_url, name, login, created_at, html_url, bio } = user;

  const avatarEl = document.querySelector('#avatar');
  avatarEl.src = avatar_url;

  const nameEl = document.querySelector('#name');
  nameEl.innerText = name || login;

  const joinedEl = document.querySelector('#joined');
  const joinedDate = new Date(created_at);
  const year = joinedDate.getFullYear();
  const month = joinedDate.toLocaleString('default', { month: 'long' });
  const day = joinedDate.getDate();
  joinedEl.innerText = `Joined ${day} ${month} ${year}`;

  const usernameEl = document.querySelector('#username');
  usernameEl.innerText = login;
  usernameEl.href = html_url;
  usernameEl.target = '_blank';

  const bioEl = document.querySelector('#bio');
  bioText = bio && bio.replace(/(\r\n|\n|\r)/gm, '');
  bioEl.innerText = bioText || 'This profile has no bio';
}

function appendUserStats(user) {
  const { followers, following, public_repos } = user;

  const reposEl = document.querySelector('#repos');
  reposEl.innerText = public_repos;

  const followersEl = document.querySelector('#followers');
  followersEl.innerText = followers;

  const followingEl = document.querySelector('#following');
  followingEl.innerText = following;
}

function appendUserLinks(user) {
  const { location, html_url } = user;

  const locationEl = document.querySelector('#location');
  locationEl.innerText = location;

  const profileEl = document.querySelector('#profile');
  profileEl.innerText = html_url;
  profileEl.href = html_url;
  profileEl.target = '_blank';
}
