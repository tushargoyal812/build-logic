function findMin(a, b, c, d) {
    if (a < b && a < c && a < d) {
        return a
    } else if (b < a && b < c && b < d) {
        return b
    } else if (c < a && c < b && c < d) {
        return c;
    } else if (d < a && d < b && d < c) {
        return d
    }
}

var min = findMin(14,2,25,3)

console.log(min)