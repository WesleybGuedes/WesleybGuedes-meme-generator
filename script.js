const memeText = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');
const insertImage = document.getElementById('meme-insert');
const memeImage = document.getElementById('meme-image');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

insertImage.addEventListener('input', () => {
  memeImage.src = URL.createObjectURL(insertImage.files[0]);
});
