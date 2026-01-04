function makeExam() {
  const cards = loadData('cards');
  const exam = cards.map(c => c.sentence.replace(c.word, '_____'));
  document.getElementById('exam').innerHTML = exam.join('<br>');
  saveData('exam', exam);
}
