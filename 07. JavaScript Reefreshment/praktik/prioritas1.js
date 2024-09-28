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

console.log(reverseFirstTwo(['oca', 'rere', 'jemi'])); 
