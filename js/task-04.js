// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const decrementBtnEl = document.querySelector("[data-action = 'decrement']");
const incrementBtnEl = document.querySelector("[data-action = 'increment']");
const valueEl = document.querySelector('#value');


decrementBtnEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});
incrementBtnEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})
