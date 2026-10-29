const users = [
    { name: "Ken", email: "imp@test.com", age: 25 },
    { name: "Richard", email: "zzzyzx@test.com", age: 32 },
    { name: "Helena", email: "jg3334@test.com", age: 19 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}

