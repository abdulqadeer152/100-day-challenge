"use strict";
function makesandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log(" " + element));
    console.log('enjoy your sandwish\n');
}
makesandwich(['Ham', 'cheese', 'lettuce']);
makesandwich(['peanot', 'cheese', 'jelly']);
makesandwich(['butter', 'cheese', 'turkey']);
