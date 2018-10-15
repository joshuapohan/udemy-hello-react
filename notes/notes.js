console.log('Running notes.js');

var addNote = (title, body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var removeNote = (title) => {
	console.log('Removing log', title);
};

var getNote = (title) =>{
	console.log('Getting note', title);
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