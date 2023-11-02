function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр
//   - число.Функція створює стільки < div >, скільки вказано
//    в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим 
// від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const dataCreateBtnEl = document.querySelector('[data-create]');
const dataDestroyBtnEl = document.querySelector('[data-destroy]');
console.dir(inputEl);
let pixelSize = 20;
let amount = 0;

function createBoxes(amount) {


  amount = inputEl.value;
  dataCreateBtnEl.addEventListener('click', () => {


    for (let i = 0; i < amount; i += 1) {
      const boxEl = document.createElement('div');
      boxEl.style.backgroundColor = getRandomHexColor();
      pixelSize += 10;
      boxEl.style.width = pixelSize + 'px';
      boxEl.style.height = pixelSize + 'px';
      boxesEl.append(boxEl);


    }
    inputEl.value = '';
    amount = 0;

  })
}
inputEl.addEventListener('blur', createBoxes)

function destroyBoxes() {
  pixelSize = 20;
  return boxesEl.innerHTML = '';
}
dataDestroyBtnEl.addEventListener('click', destroyBoxes)

