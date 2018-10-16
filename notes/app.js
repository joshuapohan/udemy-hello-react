console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2];
// console.log(process.argv);
// console.log(argv);

function printNote(note){
	console.log('');
	console.log('-- Title --');
	console.log(note.title);
	console.log('-- Body --');
	console.log(note.body);
	console.log('');
}

if(command==='add'){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		printNote(note);
	}
	else{
		console.log('Duplicate title found ' + note.title);
	}
}
else if(command === 'list'){
	note_list = notes.getAll();
	for(var i = 0; i < note_list.length; i++){
		printNote(note_list[i]);
	}
}
else if(command === 'remove'){
	notes.removeNote(argv.title);
}
else if(command === 'get'){
	note_list = notes.getNote(argv.title);
	if(note_list.length > 0){
		printNote(note_list[0]);
	}
	else{
		console.log('Note not found');
	}
}
// switch(command){
// 	case 'add':
// 		console.log('addd');
// 		break;
// 	case 'list':
// 		console.log('listt');
// 		break;
// }