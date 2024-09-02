function fibs(number){

    if (number === 0){
        return [];
    }

    if (number === 1){
        return [0];
    }

    if (number === 2){
        return [0, 1];
    }

    if (number === 3) {
        return [0, 1, 1];
    }

    if (number > 2){
        let array = [0, 1, 1];

        for (let i = 3; i < number; i++){
            array.push(array[i-1] + array[i-2]);
        }
        return array;
    }
}

console.log(`fibonacci for loop ` + fibs(8));

function fibsRec(number){
    // Base cases
    if (number === 0){
        return [];
    }

    if (number === 1){
        return [0];
    }

    if (number === 2){
        return [0, 1];
    }

    if (number === 3) {
        return [0, 1, 1];
    }

    // get all Fibonacci numbers up to number - 1
    const previousFibs = fibsRec(number - 1);
    // compute the next fibonacci by adding the previous 2 returned sequences
    const nextFib = previousFibs[previousFibs.length - 1] + previousFibs[previousFibs.length - 2];
    return [...previousFibs, nextFib];
}

console.log(`fibonacci recursion ` + fibsRec(8));