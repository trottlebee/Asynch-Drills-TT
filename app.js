// Asynch Code Drills - TT //

// Async: Now and Later 1-4 //

// let num;

// function message() {
//     console.log("Async isn't scary, I promise....");
//     num = 7;
//     return num;
// }

// message();

// function anotherMessage() {
//     console.log(num * 4 + ' See what I mean?');
// }

// setTimeout(anotherMessage, 2000);



// Async: Callbacks 1-3 //

// function getWords() {
//     console.log('Ipswitch Pitted Prunes');

//     setTimeout(() => {
//         console.log('Rocky')
//     }, 3000)

//     setTimeout(() => {
//         console.log('Bullwinkle')
//     }, 2000)

//     setTimeout(() => {
//     console.log('Boris')
//     }, 1000);
// }

// getWords();



// Async: Callbacks 4-7 //

// function countdown(num, callback) {
//     let time = setInterval(function () {
//         console.log(num);
//         num--

//         if (num <= 0) {
//             clearInterval(time);
//             return callback();
//         }
//     }, 1000)
// }

// function done() {
//     console.log('Your countdown callback is completed....');
// }

// countdown(10, done);




// Async: Promises 1-9 //

// let statement = true;

// let error = 'ERROR!!!!';

// orderChickenSandwich = () => {
//     return new Promise((resolve, reject) => {
//         if (statement === true) {
//             let sandwich = {
//                 sandwich: 'chicken',
//                 veggies: 'lettuce'
//             }
//             resolve(sandwich);
//         } else {
//             reject(error)
//         }
//     })
// }

// let orderFood = orderChickenSandwich();

// orderFood.then(function (resolve) {
//     console.log(resolve);
// }, (error) => {
//     console.log(error)
// })




// Async: Chaining Promises 1-4 //

let number = 1;

chainingPromises = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(number)
        }, 2000)

    }).then((res) => {
        console.log(res);
        return res * 2;

    }).then((res) => {
        setTimeout(() => console.log(res), 2000)
        return res * 4;

    }).then((res) => {
        setTimeout(() => console.log(res), 4000)
        return res * 6;

    }).then((res) => {
        setTimeout(() => console.log(res), 6000);
    });

}

chainingPromises();