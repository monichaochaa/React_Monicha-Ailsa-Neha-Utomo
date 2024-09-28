/*async function fetchData() {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 301 , name: "Product Oca R", price: 1000 };
            resolve(data); 
        }, 2000); 
    });
}

async function getData() {
    try {
        const result = await fetchData(); 
        console.log("Data berhasil diambil:", result);
    } catch (error) {
        console.error("Terjadi error:", error);
    }
}

getData(); 
*/


class Person {
    constructor(name, age) {
        // Properti name dan age
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("Oca", 20);
const person2 = new Person("Rere", 21);

person1.introduce(); 
person2.introduce(); 