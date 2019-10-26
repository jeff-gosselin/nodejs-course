const path = require('path');

// Base file name
console.log(__filename); // /Users/meghangosselin/Apps/node_course/reference/path_demo.js
console.log(path.basename(__filename)); // path_demo.js

// Directory name
console.log(__dirname); // /Users/meghangosselin/Apps/node_course/reference
console.log(path.dirname(__filename)); // /Users/meghangosselin/Apps/node_course/reference

// File extension
console.log(path.extname(__filename)); // .js

// Create Path Object
console.log(path.parse(__filename)); // results in an object shown below:
    // {
    //     root: '/',
    //     dir: '/Users/meghangosselin/Apps/node_course/reference',
    //     base: 'path_demo.js',
    //     ext: '.js',
    //     name: 'path_demo'
    // }

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); // /Users/meghangosselin/Apps/node_course/reference/test/hello.html