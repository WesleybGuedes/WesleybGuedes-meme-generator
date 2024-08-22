const memeText = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});
