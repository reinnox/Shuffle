function getUser() {
  return localStorage.getItem('currentUser');
}

function generateFlashcards(text) {
  const sentences = text.split(/[.!?]/);
  const cards = [];

  sentences.forEach(s => {
    const words = nlp(s).nouns().out('array').slice(0,2);
    words.forEach(w => cards.push({ word: w, sentence: s }));
  });

  saveData('cards', cards);
  renderCards(cards);
}

function saveData(key, value) {
  const user = getUser();
  const users = JSON.parse(localStorage.getItem('users'));
  users[user].data[key] = value;
  localStorage.setItem('users', JSON.stringify(users));
}

function loadData(key) {
  const users = JSON.parse(localStorage.getItem('users'));
  return users[getUser()].data[key] || [];
}

function renderCards(cards) {
  const el = document.getElementById('cards');
  el.innerHTML = cards.map(c => `<div><b>${c.word}</b>: ${c.sentence}</div>`).join('');
}
