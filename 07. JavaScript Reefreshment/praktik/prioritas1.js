function swapValues(a, b) {
    let temp = a;
    a = b;
    b = temp;

 //   console.log("Nilai setelah ditukar: a =", a, ", b =", b);
}

swapValues(5, 10); 

// let lebih cocok digunakan disini karena variabel temp hanya dibutuhkan didalam fungsi dan bisa diubah. 
// const tidak cocok karena tidak bisa diubah sementara a dan b perlu diubah.
// var bisa digunakan tapi lebih aman let karena var memiliki kelemahan dalam cakupan fungsi dan hoisting.


const reverseFirstTwo = ([a, b]) => {
    return [b, a];
}

//console.log(reverseFirstTwo(['oca', 'rere', 'jemi'])); 

function findLargest (arr) {
    let largest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

//console.log(findLargest([3,2,9,6,4]));

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return 'Error: Division by zero';
        }
    }
};
//console.log(calculator.add(10,5));
//console.log(calculator.subtract(10, 5));
//console.log(calculator.multiply(10, 5));
//console.log(calculator.divide(10, 5));
//console.log(calculator.divide(10, 0));

function greetUser(name) {
    return "Hello, " + name + "!";
}

console.log(greetUser("Oca")); 

const greetUserArrow = (name) => "Hello, " + name + "!";

console.log(greetUserArrow("Rere")); 



