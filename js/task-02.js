const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
const ingredientsList = document.querySelector('#ingredients')
for (const ingredient of ingredients) {

  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item');
  console.log(ingredientsItem)
  ingredientsList.append(ingredientsItem)
}
