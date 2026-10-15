const number = 5;
let i;
console.log("----------via for--------");
for (i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
}

i = 1; //counter reset

console.log("----------via while--------");
while (i <= 10) {
    console.log(`${number} X ${i} = ${number * i}`);
    i++;
}