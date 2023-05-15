"use strict";

// a = 15;
// console.log(a);

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
  a: 50
};

obj.a = 10;
console.log(obj);


// console.log(name); hoisting использование до объявления
// var name = 'Nata';

{
  let result = 50;
}

// console.log(result); //undefined 


// camelCase - для переменных
// snake_case - для папок и файлов
// UPPER_SNAKE_CASE - для переменных в виде const 
const COLOR_RED = '#F00';
// Kebab-case - каждое слово с маленькой буквы и через дефис
// PascalCase - для классов в JS




// Типы данных
// number
let numbers = 4.6;

console.log(4/0); // infinity
console.log('string' / 9); // NaN

// string
const persone = 'Alex';

// boolean
const bool = true;

// undefined
let und;
console.log(und); // undefined

// null
// console.log(something);


// OBJECT
const object = {
  name: 'joHn', // свойства объекта
  age: 25, // свойства объекта
  isMarried: false // свойства объекта
}

// console.log(object.name);
console.log(object['name']);

 
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', {}];
console.log(arr[0]); // plum.png


// Разница между объектами и массивами
const array = [1, 2, 3];
console.log(array[2]);

array[10] = '345';
// console.log(array[10]);
console.log(array);


const arrObj = {
  0: 1,
  1: 2,
  2: 3,
  abc: { // вложенные структуры
    def: {

    }
  }
}

const b = 'b';

arrObj.b = '1234';
arrObj['c'] = '12'
console.log(arrObj.b);
console.log(arrObj['b']);
console.log(arrObj.c);

console.log(arrObj[0]); // в квадратных скобках, так как мы в ключе записывали числа, иначе-обычным способом через точку


// const objects = {a: 1, b: 2};
const objects = {
  Anna: 500,
  'Alice': 800
};

['Anna', 500, 'Alice', 800] // запись в виде массива

// Способы взаимодействия с пользователем
// alert('Hello');

// const result = confirm("Are you here"); // ответ либо да, дибо нет
// console.log(result); // true or false

// const answer = prompt("вам есть 18?", ""); // ответ prompt всегда строка, чтобы преобразовать можно поставить + перед prompty
// console.log(answer);
// console.log(typeof(answer));
// console.log(answer + 10);

const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);
console.log(typeof(answers));

console.log(typeof(null)); // object


// ИНТЕРПОЛЯЦИЯ
const category = 'toys';

console.log(`https://someurl.com/${category}`);

const user = "Ivan";
// alert(`Привет, ${user}`)

// ОПЕРАТОРЫ JS
console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); //9 

let incr = 10,
    decr = 10;

// incr++; // постфиксная
// decr--;

// ++incr; //префиксная форма записи
// --decr;

console.log(incr++); //10
console.log(--decr); //9

console.log(5%2); //1 возвращение остатка от деления

console.log(2*4 == 8); //true
console.log(2*4 == '8'); //true
console.log(2*4 === '8'); //false

// && 
// ||

const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

console.log(isChecked || isClose);

console.log(isChecked && !isClose);















