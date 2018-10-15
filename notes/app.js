console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2];
// console.log(process.argv);
// console.log(argv);

if(command==='add'){
	notes.addNote(argv.title, argv.body);
}
else if(command === 'list'){
	notes.getAll();
}
else if(command === 'remove'){
	notes.removeNote(argv.title);
}
else if(command === 'get'){
	notes.getNote(argv.title);
}
// switch(command){
// 	case 'add':
// 		console.log('addd');
// 		break;
// 	case 'list':
// 		console.log('listt');
// 		break;
// }