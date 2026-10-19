function rectangleAreaDeclaration(width, height) {
    return width * height
};

console.log(rectangleAreaDeclaration(2, 5));


const rectangleAreaExpression = function (width, height) {
    return width * height
};

console.log(rectangleAreaExpression(2, 5));

const rectangleAreaArrow = (width, height) => {
    return width * height
};

console.log(rectangleAreaArrow(2, 5));