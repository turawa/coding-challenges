function base2(number){
    div = number;
    base = [];
    while (div > 0){
        base.unshift(div % 2);
        div = Math.floor(div/= 2);
    }

    return base.join('');
}


console.log(base2(8));
console.log(base2(1));
console.log(base2(2));
console.log(base2(3));
console.log(base2(4));
console.log(base2(5));
console.log(base2(6));
console.log(base2(7));
console.log(base2(9));
console.log(base2(10));
console.log(base2(11));
console.log(base2(12));
console.log(base2(13));
console.log(base2(14));
console.log(base2(15));
console.log(base2(16));