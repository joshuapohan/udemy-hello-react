console.log('Running notes.js');

const fs = require('fs');


var fetchNotes = () => {

	notes = [];

	try{
		var  notesString = fs.readFileSync('notes-data.json');		
		notes = JSON.parse(notesString);
	}catch(e){
		console.log(e);
	}
	return notes;
};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) =>{
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}
	else{
		console.log('Duplicate note found');
	}

};


var getAll = () => {
	return fetchNotes();
};

var removeNote = (title) => {
	var notes = [];
	var titleFound = false;

	notes = fetchNotes();
	notes = notes.filter((note) =>{
		if(note.title === title){
			titleFound = true;
			return false;
		}
		else{
			return true;
		}
	});
	saveNotes(notes);
	if(titleFound){
		console.log('Note ' + title + ' deleted');
	}
	else{
		console.log('Note ' + title + ' not found');	
	}
};

var getNote = (title) =>{
	var notes = [];

	notes = fetchNotes();
	note_list = notes.filter((note) => {
		if(note.title === title){
			return true;
		}
	});
	return note_list;
}

module.exports = {
	addNote,
	getAll,
	removeNote,
	getNote
};

// module.exports = {
// 	addNote: addNote
// };