function logger(text) {
    console.log(text)
}


/* logger('hello')
logger('ciao')
logger('szia') */

logger('this is my first logger function')

function logTheSumTwoNumbers(x,y) { /* camelCase */
/*  let x = 1
    let y = 2 */

    console.log(x+y);
}

/* logTheSumTwoNumbers(1,2); */

function sumOfTwoNumbers(x,y) {
    let sum = 0;
    sum = x + y;

    return sum;
}

logger(sumOfTwoNumbers(10, 5))