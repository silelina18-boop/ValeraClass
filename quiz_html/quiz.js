// Обработчики для обеих кнопок
document.getElementById('checkAnswer1').addEventListener('click', function() {
  checkAnswer('book1');
});

document.getElementById('checkAnswer2').addEventListener('click', function() {
  checkAnswer('book2');
});

document.getElementById('checkAnswer3').addEventListener('click', function(){
  checkAnswer('book3')
});

document.getElementById('checkAnswer4').addEventListener('click', function(){
  checkAnswer('song1')
});

document.getElementById('checkAnswer5').addEventListener('click', function(){
  checkAnswer('picture1')
});

function checkAnswer(questionName) {
  const selectedBook = document.querySelector(`input[name="${questionName}"]:checked`);
  
  if (!selectedBook) {
    alert('Пожалуйста, выберите правильный вариант!');
    return;
  }
  
  // Проверка правильности ответа для каждого вопроса
  if ((questionName === 'book1' && selectedBook.value === 'bednye_lyudi') ||
      (questionName === 'book2' && selectedBook.value === 'sevastopolskie rasskazy') || (questionName === 'book3' && selectedBook.value === 'beliy pudel') ||(questionName === 'song1' && selectedBook.value === 'mozart1') || (questionName === 'picture1' && selectedBook.value === 'alexandra_vladimirovna_vasnezova') ) {
    showModal('correctModal');
  } else {
    showModal('wrongModal');
  }
}

// Остальные функции остаются без изменений
function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });
}