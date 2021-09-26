function getTriangle(...args) {
    var sum = args[0] + args[1] + args[2];
    if (sum === 180) {
        if (args[0] === args[1] && args[1] === args[2] && args[0] === args[2]) {
            console.log("equilateral triangle")
        } else if (args[0] === args[1] || args[1] === args[2] || args[2] === args[0]) {
            console.log("isosceles triangle")
        }else {
            console.log("scalene")
        }
    } else {
        console.log("not a triangle")
    }
}

getTriangle(60,10 ,110)