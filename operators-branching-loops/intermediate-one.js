var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        arr[i] = 'FizzBuzz'
    }
    if (arr[i] % 3 === 0) {
        arr[i] = 'Fizz'
    }
    if (arr[i] % 5 === 0) {
        arr[i] = 'Buzz'
    }
}

console.log(arr);