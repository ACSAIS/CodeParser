const fs = require('fs');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

const path = process.argv[2];

fs.readdir(path, (err, items) => {
    console.log(items);

    items.forEach(item => console.log(item));
});
