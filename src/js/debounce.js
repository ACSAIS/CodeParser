const debounceWrapper = (fn) => {
    let timer = 0;
    return function() {
        if (timer !== 0) {
            clearTimeout(timer);
            timer = 0;
        } else {
            timer = setTimeout(fn, 1000);
        }
    };
};


const test = debounceWrapper(console.log.bind(this, 'hello'));
test();
test();
test();
test();

