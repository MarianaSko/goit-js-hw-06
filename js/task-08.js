
// Обробка відправлення форми form.login-form повинна 
// відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням 
// про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль
//  і очисти значення полів форми методом reset.

const loginFormEl = document.querySelector('.login-form');
const loginFormInputEls = document.querySelectorAll('input');
const inputValuesObject = {};
const emailInputEl = document.querySelector('[name="email"]');
const passwordInputEl = document.querySelector('[name="password"]');

loginFormEl.addEventListener('submit', event => {
    event.preventDefault();

    if ([...loginFormInputEls][0].value === '' || [...loginFormInputEls][1].value === '') {
        alert('All fields have to be filled');
    } else {
        inputValuesObject.email = emailInputEl.value;
        inputValuesObject.password = passwordInputEl.value;
        console.log(inputValuesObject);
    }


    loginFormEl.reset();
})