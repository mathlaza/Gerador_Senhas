import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('.bt1');
const displayPasswordEl = document.querySelector('span');
const copyBtn = document.querySelector('.bt2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

copyBtn.addEventListener('click', () => {
  const password = displayPasswordEl.innerHTML;
  navigator.clipboard.writeText(password);
  console.log(password);
});
