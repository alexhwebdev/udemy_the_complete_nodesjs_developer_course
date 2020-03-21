//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------------  Importing Your Own Files 

	/*	E X A M P L E  :  
		const getNotes = function () {
			return 'Your notes...'
		}
		module.exports = getNotes
	*/






//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//-------------------------------------------  Adding a Note

	/*	E X A M P L E  :  */
		const fs = require('fs');

		const getNotes = function () {
			return 'Your notes...'
		}

		const addNote = function ( title, body ) {
			const notes = loadNotes();

			const duplicateNotes = notes.filter( function( note ) {
				// 	if return true, filter will keep that in a new array bc its a duplicate.
				return note.title === title
			})

			//  if no duplicates
			if ( duplicateNotes.length === 0 ) {
				notes.push({
					title: title,
					body: body
				})

				saveNotes( notes );
				console.log( 'New note added!' );
			}
			else {
				console.log('Note title taken!');
			}
		}

		const removeNote = function ( title ) {
			const notes = loadNotes()
			const notesToKeep = notes.filter( function( note ) {
				return note.title !== title
			})
			saveNotes( notesToKeep )
		}

		const saveNotes = function ( notes ) {
			const dataJSON = JSON.stringify( notes )
			fs.writeFileSync( 'notes.json', dataJSON )
		}

		const loadNotes = function () {
			try {
				const dataBuffer = fs.readFileSync( 'notes.json' );
				const dataJSON = dataBuffer.toString();
				return JSON.parse( dataJSON )

			} catch ( e ) {
				return []
			}
		}

		// module.exports = getNotes
		module.exports = {
			getNotes: getNotes,
			addNote: addNote,
			removeNote: removeNote
		}

		// 	> node app.js add --title="t" --body="b"
	


















