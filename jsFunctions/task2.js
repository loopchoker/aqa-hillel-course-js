const isAdult = age => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

console.log(`The person is adult: ${isAdult(25)}`);