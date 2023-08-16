const subscribeBtn = document.querySelector('.btn');
const closeBtn = document.querySelector('.overlay__btn');
const subscribeForm = document.querySelector('.subscribe__form');
const subscribeInput = document.querySelector('.subscribe__input');
const overlay = document.querySelector('.overlay');
const subscribe = document.querySelector('.subscribe');

// validate email
const checkEmail = e => {
  const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regEmail.test(subscribeInput.value);
};

subscribeForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!checkEmail(e)) subscribeForm.classList.add('error');
  if (checkEmail(e)) {
    subscribeForm.classList.remove('error');
    overlay.style.display = 'flex';
    subscribe.style.visibility = 'hidden';
  }
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  subscribeInput.value = '';
  subscribe.style.visibility = 'visible';
});
