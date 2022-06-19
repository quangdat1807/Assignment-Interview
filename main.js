// Fibonacci
printFibonacci(7);
function printFibonacci(number) {
    var n1 = 0, n2 = 1, temp = 0;
    var listFibonacci = [];

    for (let i = 0; i <= number; i++) {
        listFibonacci.push(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        //(i =0) listFibonacci =[0], temp = 1; => n1 = 1 => n2= 1;
        //(i = 1) listFibonacci =[0, 1], temp = 2; => n1 = 1; => n2= 2;
        //(i = 2) listFibonacci =[0, 1, 1], temp = 3; => n1 = 2; => n2 = 3;
        //(i = 3) listFibonacci =[0, 1, 1, 2], temp = 5; => n1 = 3; n2 = 5;
        //(i = 4) listFibonacci =[0, 1, 1, 2, 3], temp = 8; => n1 = 5; => n2 = 8;
        //(i = 5) listFibonacci =[0, 1, 1, 2, 3, 5], temp = 13; => n1 = 8; => n2 = 13;
        //(i = 6) listFibonacci =[0, 1, 1, 2, 3, 5, 8], temp = 21; => n1 = 13; n2 = 21;
        //(i = 7) listFibonacci =[0, 1, 1, 2, 3, 5, 8, 13], temp = 34; => n1 = 21; n2 = 31;
    }
    console.log(listFibonacci.toString());
}

// Second-highest
var arrayNumber = [100, 14, 46, 47, 94, 94, 52, 86, 36, 94, 89];
bubbleSort(arrayNumber);
function bubbleSort(arrayNumber) {
    var arrLength = arrayNumber.length;
    for (var i = arrLength; i >= 0; i--) {
        for (var j = 1; j <= i; j++) {
            if (arrayNumber[j - 1] < arrayNumber[j]) {
                var temp = arrayNumber[j - 1];
                arrayNumber[j - 1] = arrayNumber[j];
                arrayNumber[j] = temp;
            }
        }
        /* i = arrayNumber.length; j = 1 
            if (arrayNumber[j - 1] < arrayNumber[j]) => false => for j = 2; j = 3; ...j = 11
            (Thỏa điều kiện if => i) */
    }
    console.log("second-highest = " + arrayNumber[1]);
}

// check Armstrong number
checkArmstrongNumber(153);
function checkArmstrongNumber(number) {
    var temp = number.toString();
    var count = temp.length;
    var sum = 0;
    for (let i = 0; i < count; i++) {
        const element = Math.pow(temp[i], count);
        sum += element;

    };
    if (sum === number) {
        console.log(sum + " = " + number + " = Armstrong Number")
    } else {
        console.log(sum + " ≠ " + number + " ≠ Armstrong Number")
    }
}

// Check palindrome
palindrome(89);
function palindrome(input) {
    var str = input.toString();
    const revArray = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }
    if (revArray.join('').includes(str) == true) {
        console.log(input + " is a palindrome");
    } else {
        console.log(input + " is not a palindrome");
    }
}

// Count Letters
countLetters("HelloHello")
function countLetters(str) {
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i]);
        count(arr, str[i]);
    }
}

function count(arr, target) {
    let counter = 0;
    for (studentAge of arr) {
        if (studentAge == target) {
            counter++;
        }
    }
    console.log(studentAge, counter);
}