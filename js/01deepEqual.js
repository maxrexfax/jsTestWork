//1\. Напишите функцию deepEqual для проверки двух обьектов на идентичность.

function deepEqual( x, y ) {
    if ( x === y ) return true;
    // if both x and y are null or undefined and exactly the same

    if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false;
    // if they are not strictly equal, they both need to be Objects

    if ( x.constructor !== y.constructor ) return false;
    // they must have the exact same prototype chain, the closest we can do is
    // test there constructor.

    for ( var p in x ) {
        if ( ! x.hasOwnProperty( p ) ) continue;

        if ( ! y.hasOwnProperty( p ) ) return false;

        if ( x[ p ] === y[ p ] ) continue;

        if ( typeof( x[ p ] ) !== "object" ) return false;

        if ( ! deepEqual( x[ p ],  y[ p ] ) ) return false;
    }

    for ( p in y )
        if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) )
            return false;

    return true;
}

if (deepEqual({name: 'test'}, {name: 'test'})) {
    console.log('TRUE!');
} else {
    console.log('FALSE!');
}
if (deepEqual({name: 'test'}, {name: 'test1'})) {
    console.log('TRUE!');
} else {
    console.log('FALSE!');
}
if (deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}})) {
    console.log('TRUE!');
} else {
    console.log('FALSE!');
}
if (deepEqual({name: 'test'}, {name: 'test', age: 10})) {
    console.log('TRUE!');
} else {
    console.log('FALSE!');
}


