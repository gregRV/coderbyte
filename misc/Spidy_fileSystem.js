/*
Create a virtual file system library/module

- See files (ls)
- Make directory (mkdir)
- Create file (touch)
- Change directory (cd)

- abstract how files are stored to allow more options (in memory is default)

- remember where current location is (can execute commands in other dirs)
*/

/////////////////
// fileSystem.js
/////////////////
var module = {};

var currentDir = '/';
var files = {
    '/': []
};

// create module/object to be exported
module.exports = {

    // add our 'ls' (see files) function to the module
    ls: function() {
        return files[currentDir];
    },

    // > mkdir demo/
    mkdir: function(dirName) {
        // at this current dir
        // use dirName as key and init with an empty list
        files[currentDir][dirName] = [];
    }
};




// TESTS
console.log( Array.isArray(module.exports.ls()) === true );

module.exports.mkdir('demo');
console.log( Array.isArray(files['/']['demo']) === true );