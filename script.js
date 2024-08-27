const memeText = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const insertImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const memeContainer = document.getElementById('meme-image-container');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

insertImage.addEventListener('input', () => {
  memeImage.src = URL.createObjectURL(insertImage.files[0]);
});

fireButton.addEventListener('click', () => {
  memeContainer.style.border = '3px dashed red';
});

waterButton.addEventListener('click', () => {
  memeContainer.style.border = '5px double blue';
});

earthButton.addEventListener('click', () => {
  memeContainer.style.border = '6px groove green';
});
