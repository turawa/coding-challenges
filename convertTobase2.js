function base2(number){
    div = number;
    base = [];
    while (div > 0){
        base.unshift(div % 2);
        div = Math.floor(div/= 2);
    }

    return base.join('');
}


console.log(base2(1));  // 1
console.log(base2(2));  // 10
console.log(base2(3));  // 11
console.log(base2(4));  // 100
console.log(base2(5));  // 101
console.log(base2(6));  // 110
console.log(base2(7));  // 111
console.log(base2(8));  // 1000
console.log(base2(9));  // 1001
console.log(base2(10)); // 1010
console.log(base2(11)); // 1011
console.log(base2(12)); // 1100
console.log(base2(13)); // 1101
console.log(base2(14)); // 1110
console.log(base2(15)); // 1111
console.log(base2(16)); // 10000