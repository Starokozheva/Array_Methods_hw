// 1) Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const votedPeople = voters.reduce((acc, value) => {
    if(value.voted) {
        return ++acc;
    } else {
        return acc;
    }
}, 0);

console.log(votedPeople);



// 2) Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];


const totalAmout  = wishlist.reduce((acc, value) => acc + value.price, 0);

console.log(totalAmout);



// 3) Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершеннолетних и несовершеннолетних людей.

const people = [
    {name:'Bob' , age: 15},
    {name:'Jake' , age: 18},
    {name:'Kate' , age: 11},
    {name:'Sam' , age: 20},
    {name:'Phil' , age: 12},
    {name:'Ed' , age: 36},
    {name:'Tami' , age: 9},
    {name: 'Mary', age: 31},
    {name: 'Becky', age: 43},
    {name: 'Joey', age: 10},
    {name: 'Jeff', age: 17},
    {name: 'Zack', age: 29}
];


const adultsPeople = people.reduce((acc, value) => {
    if(value.age >= "18") {
        return ++acc;
    } else {
        return acc;
    }
}, 0);

console.log(adultsPeople);



// 4) Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

const arrOfObjects = [
    {name:'Bob' , age: 23},
    {name:'Jake' , age: 38},
    {name:'Kate' , age: 51},
    {name:'Sam' , age: 20},
    {name:'Phil' , age: 42},
    {name:'Ed' , age: 26},
    {name:'Tami' , age: 13},
    {name: 'Mary', age: 31},
    {name: 'Becky', age: 53},
    {name: 'Joey', age: 40},
    {name: 'Jeff', age: 17},
    {name: 'Zack', age: 29}
];

const peopleOverThirty = arrOfObjects.filter((number) => number.age >= "30");

console.log(peopleOverThirty);