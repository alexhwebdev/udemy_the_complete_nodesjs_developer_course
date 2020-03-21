//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------  Importing Node.js Core Modules
	
	/* 	E X A M P L E  :  > node app.js
		const fs = require('fs');
		fs.writeFileSync('notes.txt', 'My name is Alex,');
		fs.appendFileSync('notes.txt', ' I live in LA');
	*/





//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------------  Importing Your Own Files 

	/* 	E X A M P L E  :  > node app.js  
		const name = require('./utils.js')
		// const name = 'Andrew'
		console.log('name: ', name)
	 */
	




//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------------  Importing Your Own Files 

	/*	E X A M P L E  :  
		const add = require('./utils.js')
		const sum = add(4, -2)
		console.log(sum)
	*/



//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------------  Importing Your Own Files 

	/*	E X A M P L E  :  
		const getNotes = require('./notes.js')
		const msg = getNotes()
		console.log(msg)
	*/





//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//-----------------------------------  Importing npm Modules

	/*	E X A M P L E  :  
		//	https://www.npmjs.com/package/validator
		const validator = require('validator')
		const getNotes = require('./notes.js')

		const msg = getNotes()
		console.log(msg)

		console.log( validator.isEmail('alexhong38@gmail.com') )
		console.log( validator.isURL('alexhong38@gmail.com') )
	*/





//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//---------------------------------------  Printing in Color

	/*  E X A M P L E  :  
		const validator = require('validator')			//	https://www.npmjs.com/package/validator
		const chalk = require('chalk')							//	https://www.npmjs.com/package/chalk
		const getNotes = require('./notes.js')

		const msg = getNotes()
		console.log(msg)

		console.log( validator.isEmail('alexhong38@gmail.com') )
		console.log( validator.isURL('alexhong38@gmail.com') )

		const greenMsg = chalk.bold.inverse.green('Success!')
		console.log( greenMsg )
	*/



//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  3  :  Nodes.js Module System (Notes App)
//--------------------------  Global npm Modules and nodemon

	/*  E X A M P L E  :  
		const validator = require('validator')			//	https://www.npmjs.com/package/validator
		const chalk = require('chalk')							//	https://www.npmjs.com/package/chalk
		const getNotes = require('./notes.js')

		const msg = getNotes()
		console.log(msg)

		// console.log( validator.isEmail('alexhong38@gmail.com') )
		// console.log( validator.isURL('alexhong38@gmail.com') )

		const greenMsg = chalk.bold.inverse.yellow('Success!')
		console.log( greenMsg )
 	*/








//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//--------------------------------  Getting Input from Users

	/*		E X A M P L E  :  
		const chalk = require('chalk')
		const getNotes = require('./notes.js')

		const msg = getNotes()
		console.log(msg)

		// const greenMsg = chalk.bold.inverse.yellow('Success!')
		const greenMsg = chalk.blue.inverse.bold('Success!')
		console.log( greenMsg )

		// console.log('process : ', process)
		// console.log('process.argv : ', process.argv)
		console.log('process.argv[2] : ', process.argv[2])
		// > node app.js Alex


		// 	'process.argv[2]' the 2 is the 3rd 'add' command that is run like so :
		// 	> node app.js add
		const command = process.argv[2]
		console.log('process.argv : ', process.argv)

		if (command === 'add') {
			console.log('Adding note!')
		} 
		else if ( command === 'remove' ) {
			console.log('Removing Notes!')
		}

		// > node app.js add --title="this is my title"
	*/






//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//---------------------  Argument Parsing with Yargs: Part 1

	/*		E X A M P L E  :  
		const chalk = require('chalk')
		const yargs = require('yargs')
		const getNotes = require('./notes.js')


		console.log('process.argv : ', process.argv)
		console.log('yargs.argv : ', yargs.argv)
		// 	RUN : > node app.js
		// 	RUN : > node app.js add --title="Things to buy"

		// 	RUN : > node app.js --version
		// 	RUN : > node app.js --help

		if (command === 'add') {
			console.log('Adding note!')
		} 
		else if ( command === 'remove' ) {
			console.log('Removing Notes!')
		}


		// 	Customize yargs version :
		yargs.version('1.1.0');
		console.log( yargs.argv );
	*/


	//------------------------------------------------------

	/*		E X A M P L E  :  
		// 	Customize yargs version :
		yargs.version('1.1.0');

		// 	Create add command :
		yargs.command({
			command: 'add',
			describe: 'Add a new note',
			handler: function() {
				console.log('Adding a new note!')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'remove',
			describe: 'Remove a note',
			handler: function() {
				console.log('Removing the note')
			}
		})

		// 	Create lsit command :
		yargs.command({
			command: 'list',
			describe: 'List your notes',
			handler: function() {
				console.log('Listing out all notes')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'read',
			describe: 'Read a notes',
			handler: function() {
				console.log('Reading a note')
			}
		})

		// 	add, remove, read, list
		console.log( yargs.argv )

		// 	> node app.js --help
		// 	> node app.js add
	*/






//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//---------------------  Argument Parsing with Yargs: Part 2

	/*		E X A M P L E  :  
		const chalk = require('chalk')
		const yargs = require('yargs')
		const getNotes = require('./notes.js')


		// 	Customize yargs version :
		yargs.version('1.1.0');

		// 	Create add command :
		yargs.command({
			command: 'add',
			describe: 'Add a new note',
			builder: {
				title: {
					describe: 'Note title',
					demandOption: true,
					type: 'string'
				},
				body: {
					describe: 'Note body',
					demandOption: true,
					type: 'string'
				}
			},
			handler: function( argv ) {
				// console.log('Adding a new note!', argv)
				console.log('Title: ' + argv.title)
				console.log('Body: ' + argv.body)
			}
		})
		// 	> node app.js add --title="Shopping list"

		// 	Create remove command :
		yargs.command({
			command: 'remove',
			describe: 'Remove a note',
			handler: function() {
				console.log('Removing the note')
			}
		})

		// 	Create lsit command :
		yargs.command({
			command: 'list',
			describe: 'List your notes',
			handler: function() {
				console.log('Listing out all notes')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'read',
			describe: 'Read a notes',
			handler: function() {
				console.log('Reading a note')
			}
		})

		// 	add, remove, read, list
		// console.log( yargs.argv ) 	// 	produces same results
		yargs.parse()									// 	produces same results

		// 	> node app.js --help
		// 	> node app.js add
	*/






//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//------------------------------------  Storing Data w/ JSON

	// 	T H I S   L E S S O N
	// - save notes data to 'file system'.


	/*		E X A M P L E  :  
		const chalk = require('chalk')
		const yargs = require('yargs')
		const getNotes = require('./notes.js')


		// 	Customize yargs version :
		yargs.version('1.1.0');

		// 	Create add command :
		yargs.command({
			command: 'add',
			describe: 'Add a new note',
			builder: {
				title: {
					describe: 'Note title',
					demandOption: true,
					type: 'string'
				},
				body: {
					describe: 'Note body',
					demandOption: true,
					type: 'string'
				}
			},
			handler: function( argv ) {
				// console.log('Adding a new note!', argv)
				console.log('Title: ' + argv.title)
				console.log('Body: ' + argv.body)
			}
		})
		// 	> node app.js add --title="Shopping list"

		// 	Create remove command :
		yargs.command({
			command: 'remove',
			describe: 'Remove a note',
			handler: function() {
				console.log('Removing the note')
			}
		})

		// 	Create lsit command :
		yargs.command({
			command: 'list',
			describe: 'List your notes',
			handler: function() {
				console.log('Listing out all notes')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'read',
			describe: 'Read a notes',
			handler: function() {
				console.log('Reading a note')
			}
		})

		// 	add, remove, read, list
		// console.log( yargs.argv ) 	// 	produces same results
		yargs.parse()									// 	produces same results

		// 	> node app.js --help
		// 	> node app.js add
	*/






//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//-------------------------------------------  Adding a Note

	/*		E X A M P L E  :  
		const chalk = require('chalk')
		const yargs = require('yargs')
		const notes = require('./notes.js')


		// 	Customize yargs version :
		yargs.version('1.1.0');

		// 	Create add command :
		yargs.command({
			command: 'add',
			describe: 'Add a new note',
			builder: {
				title: {
					describe: 'Note title',
					demandOption: true,
					type: 'string'
				},
				body: {
					describe: 'Note body',
					demandOption: true,
					type: 'string'
				}
			},
			handler: function( argv ) {
				// console.log('Adding a new note!', argv)
				// console.log('Title: ' + argv.title)
				console.log('Body: ' + argv.body)

				notes.addNote( argv.title, argv.body )
			}
		})
		// 	> node app.js add --title="Shopping list"

		// 	Create remove command :
		yargs.command({
			command: 'remove',
			describe: 'Remove a note',
			handler: function() {
				console.log('Removing the note')
			}
		})

		// 	Create lsit command :
		yargs.command({
			command: 'list',
			describe: 'List your notes',
			handler: function() {
				console.log('Listing out all notes')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'read',
			describe: 'Read a notes',
			handler: function() {
				console.log('Reading a note')
			}
		})

		// 	add, remove, read, list
		// console.log( yargs.argv ) 	// 	produces same results
		yargs.parse()									// 	produces same results

		// 	> node app.js --help
		// 	> node app.js add
	*/
	








//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
//-  S E C T I O N  4  :  File System and Command Line Args ( Notes App )  
//-----------------------------------------  Removing a Note

	/*		E X A M P L E  :  */
		const chalk = require('chalk')
		const yargs = require('yargs')
		const notes = require('./notes.js')


		// 	Customize yargs version :
		yargs.version('1.1.0');

		// 	Create add command :
		yargs.command({
			command: 'add',
			describe: 'Add a new note',
			builder: {
				title: {
					describe: 'Note title',
					demandOption: true,
					type: 'string'
				},
				body: {
					describe: 'Note body',
					demandOption: true,
					type: 'string'
				}
			},
			handler: function( argv ) {
				// console.log('Adding a new note!', argv)
				// console.log('Title: ' + argv.title)
				console.log('Body: ' + argv.body)

				notes.addNote( argv.title, argv.body )
			}
		})
		// 	> node app.js add --title="Shopping list"

		// 	Create remove command :
		yargs.command({
			command: 'remove',
			describe: 'Remove a note',
			builder: {
				title: {
					describe: 'Note title',
					demandOption: true,
					type: 'string'
				}
			},
			handler: function( argv ) {
				notes.removeNote( argv.title )
			}
		})

		// 	Create lsit command :
		yargs.command({
			command: 'list',
			describe: 'List your notes',
			handler: function() {
				console.log('Listing out all notes')
			}
		})

		// 	Create remove command :
		yargs.command({
			command: 'read',
			describe: 'Read a notes',
			handler: function() {
				console.log('Reading a note')
			}
		})

		// 	add, remove, read, list
		// console.log( yargs.argv ) 	// 	produces same results
		yargs.parse()									// 	produces same results

		// 	> node app.js --help
		// 	> node app.js add









































