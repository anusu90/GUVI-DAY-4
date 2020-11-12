isPrime = (string) => {
    let num_array = string.split(' ').map(v=>parseInt(v));

    function isPrime2 (n){
        if (n===1 || n=== 0){
            return false;
        } else if (n===2){
            return true;
        } else {
            for(i=2;i<=Math.sqrt(n);i++){
                if(n%i===0){
                    return false;
                }
            }
        }
        return true;
    }

    filered_number = num_array.filter(isPrime2);
    console.log(filered_number);
    return (filered_number.join(' '));   
}

// l = '3 4 5 6'
// console.log(isPrime(l));

isOdd = (string) => {
    let num_array = string.split(' ').map(v=>parseInt(v));
    filered_number = num_array.filter(v => v%2 !== 0);
    console.log(filered_number);
    return (filered_number.join(' ')); 
}



findSum = (string) => {
    let num_array = string.split(' ').map(v=>parseInt(v));
    sum = num_array.reduce((a,c) => a+c);
    console.log(sum);
    return sum;
}

rotateArray = (string) => {
    let temp = string.split(','), temp2 =[];
    let num_array = temp[0].split(' ').map(v => parseInt(v));
    let n = num_array .length;
    let k = parseInt(temp[1])%(num_array.length);

    //lets start rotating

    for (i =0; i < n; i++){
        (i+k< n )? temp2[i+k]=num_array[i]: temp2[i + k - n] = num_array[i];
    }
    console.log(temp2);
    return (temp2.join(' '));
}

removeDuplicates = (string) => {
    let num_array = string.split(' ').map(v => parseInt(v));
    let numSet = new Set (num_array);
    let newArray = Array.from (numSet);
    console.log(newArray);
    return(newArray.join(' '));
}


titleCaps = (string) => {
    let inString = string.split(' ')
    let outString = inString.reduce((a,c) => {
        return a + ' ' + c[0].toUpperCase() + c.slice(1)
    }, '');

    console.log(outString);
    return outString;

}

arrayMedian = (string) => {
    let temp = string.split(',');
    let array1 = temp[0].split(' ').map(v => parseInt(v));
    let array2 = temp[1].split(' ').map(v => parseInt(v));
    let finalArray = [...array1,...array2].sort((a,b)=>a-b), n=finalArray.length;
    let median = (finalArray[(n/2)] + finalArray[(n/2)-1])/2;
    console.log(median);

    return median;
}


findPalindrome = (string) => {
    let n = string.length, array =[];
    function isPalindrome (x) {
        return (x === x.split('').reverse().join(''))
    }

    for (i=1; i<=n; i++){
        temp = string;
        for (j=0;j<=n-i;j++){
            temp = string.slice(j,j+i);
            array.push(temp)
        }
    }
    palindromes = array.filter(v => (isPalindrome(v) && v.length > 1)).join(' ');
    console.log(palindromes);

    return palindromes;
}

// console.log(arrayMedian('1 12 15 26 38,2 13 17 30 45'));