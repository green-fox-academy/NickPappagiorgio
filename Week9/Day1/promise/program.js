'use strict';
require('es6-promise');

// 2. - Fullfill a promise
// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(fulfill, 300, 'FULFILLED!')
// });
// promise.then(console.log);


// 3. - Reject a promise
// let promise = new Promise(function (fulfill, reject) {
//   setTimeout(() => reject(new Error ('REJECTED!')), 300)
// });
// function onReject(error) {
//   console.log(error.message);
// }
// promise.then('valami', onReject);


// 4. - To reject or not to reject
// let promise = new Promise(function (fulfill, reject) {
//   fulfill('I FIRED');
//   reject(new Error('I DID NOT FIRE'));
// });
// function onReject(error) {
//   console.log(error.message);
// }
// promise.then(console.log, onReject);


// 5. - Always asynchronous
// let promise = new Promise(function (fulfill, reject) {
//   fulfill('PROMISE VALUE');
// });
// promise.then(console.log);

// console.log('MAIN PROGRAM');


// 6. - Shortcuts
// let promise = Promise.reject(new Error('SECRET VALUE'));

// promise.catch(function (err) {
//   console.error('THERE IS AN ERROR!!!');
//   console.error(err.message);
// });