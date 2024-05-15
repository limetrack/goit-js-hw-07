// Отримуємо елементи input і span
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо обробник події input на елемент input
nameInput.addEventListener('input', () => {
  // Очищаємо значення інпуту від пробілів по краях
  const trimmedValue = nameInput.value.trim();

  // Якщо інпут порожній або містить лише пробіли, підставляємо "Anonymous"
  nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
