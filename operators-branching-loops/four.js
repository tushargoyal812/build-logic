var num1 = 0;
var num2=1;
var sum;
for (let i = 0; i <= 20; i++) {
    console.log(num1)
    sum=num1+num2;
    num1=num2;
    num2=sum;
}