function mergeArray(a, b) {
    console.log(a.length)
    for (let i = 0; i < b.length; i++) {
        a[i + 3] = b[i];
    }
    console.log(a)
}

mergeArray([1, 3, 5], [2, 4, 6, 8])