const fs = require('fs');
const path =require('path');
const dir = process.argv[2];
const SearchStr = process.argv[3];

let amount = 0;

const find = async (dir) => {
    fs.readdir(dir, (err, items) => {
        items.forEach(item => {
            const file = fs.lstatSync(path.join(dir, item));
            if (file.isDirectory()) {
                find(path.join(dir, item));
            } else {
                if (item.includes(SearchStr)) {
                    console.log(item);
                    amount++;
                }
            }

        });
    });
};

find(dir).then(() => {
    console.log(amount);
});

//TODO write unit tests
//TODO make log of outputs
//TODO how to get path where you call this bash script from
