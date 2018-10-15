// var obj = {
// 	name: 'test'
// }

// stringObj = JSON.stringify(obj);
// console.log(typeof(obj));
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name":"test"}';

// var personJSON = JSON.parse(personString);

// console.log(typeof(personJSON));
// console.log(personJSON);

const fs = require('fs');

// var msgObj = {
// 	title:'Test message',
// 	body: 'Haro haro haro'
// };

// fs.appendFile('test.json', JSON.stringify(msgObj), function(error){
// 	if(error){
// 		console.log(error);
// 	}
// });

var noteString = fs.readFileSync('test.json');
var msgObjParse = JSON.parse(noteString);

console.log(msgObjParse.title, msgObjParse.body);