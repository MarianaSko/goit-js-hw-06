// Напиши скрипт, який:


// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
const categoriesAmount = document.querySelectorAll('#categories > li').length;
console.log('Number of categories:', categoriesAmount);
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const categoriesItems = document.querySelectorAll('.item');

categoriesItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`);
})