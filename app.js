// const sayhi=require('./util')
// const names=require('./names');
// console.log(names);
// console.log(sayhi);
// sayhi('arman');
// sayhi(names.john);
// sayhi(names.peter);
const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
const newitems= _.flattenDeep(items)
console.log(newitems)
console.log("hello arman")