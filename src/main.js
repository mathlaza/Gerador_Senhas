import { nanoid } from 'nanoid';
import './style.css';

const passwordBtnEl = document.querySelector('.bt1');
const displayPasswordEl = document.querySelector('span');
const copyBtn = document.querySelector('.bt2');
const tamanho = document.querySelector('.size');

passwordBtnEl.addEventListener('click', () => {
  const selectorValue = tamanho.value;
  const randomPassword = nanoid(selectorValue);
  displayPasswordEl.innerHTML = randomPassword;
});

copyBtn.addEventListener('click', () => {
  const password = displayPasswordEl.innerHTML;
  navigator.clipboard.writeText(password);
  console.log(password);
});
