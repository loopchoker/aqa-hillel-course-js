const car1 = {
    brand: "Toyota",
    model: "FJ Cruiser",
    year: 2009
};

const car2 = {
    brand: "Honda",
    model: "Pilot",
    owner: "Ben Gun"
};

const car3 = { ...car1, ...car2 };

console.log(car3);