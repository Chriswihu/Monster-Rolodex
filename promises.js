// const isEqual = new Promise((resolve, reject) => {
//     const x = 5;
//
//     if (x === 5) {
//         resolve("Promise is resolved");
//     } else {
//         reject("Promise is rejected");
//     }
// });
// isEqual
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

const calculate = (x, y, operation) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(operation(x, y));
        } catch (e) {
            reject(new Error(e));
        }
    });
};

const add = (num1, num2) => num1 + num2;
const divide = (num1, num2) => {
    if (num2 === 0) {
        throw new Error("Cannot divide by 0");
    }
    return num1 / num2;
}

calculate(10, 10, add)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));

calculate(10, 5, divide)
    .then(result => console.log(result))
    .catch(err => console.log(err.message));


const getCalculator = async () => {
    try {
        const result = await calculate(10, 0, divide());
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }

}

getCalculator()
console.log("Hello World!");

const postUsers = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                test_header: "This is a test header",
            },
            body:
                {
                    "userId": 1,
                    "id": 1,
                    "title": "Hello World",
                    "body": "Hello World"
                }

        });
        const data = await result.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}

const deleteUsers = async () => {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
        });
        const data = await result.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

postUsers()
// deleteUsers()