async function runOCR() {
  const file = document.getElementById('image').files[0];
  if (!file) return alert('Upload image');
  const { data } = await Tesseract.recognize(file, 'eng');
  generateFlashcards(data.text);
}
