function base2(number){
    div = number;
    base = [];
    while (div > 0){
        base.unshift(div % 2);
        div = Math.floor(div/= 2);
    }

    return base.join('');
}


function sortBase2(arr){
    var converted = [];

    for(var i = 0; i < arr.length; i++){
        converted.push(base2(arr[i]));
    }

    
}
