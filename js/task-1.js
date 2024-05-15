// Отримуємо елемент ul#categories
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи li.item всередині ul#categories
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо всі елементи li.item
categoryItems.forEach(item => {
  // Знаходимо і виводимо текст заголовка (тег <h2>)
  const categoryTitle = item.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);
  
  // Знаходимо і виводимо кількість елементів у категорії (усіх <li>, вкладених у <ul>)
  const categoryElements = item.querySelectorAll('ul li');
  console.log(`Elements: ${categoryElements.length}`);
});
