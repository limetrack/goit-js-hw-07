<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>
<div id="boxes"></div>

<script>
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  const controls = document.querySelector('#controls');
  const input = controls.querySelector('input');
  const createButton = controls.querySelector('button[data-create]');
  const destroyButton = controls.querySelector('button[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100');
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const elements = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '5px';
      elements.push(box);
    }
    boxesContainer.innerHTML = ''; // Очищуємо попередні елементи
    boxesContainer.append(...elements); // Додаємо нові елементи
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = ''; // Очищуємо контейнер
  }
</script>
