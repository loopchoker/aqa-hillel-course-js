function printWithDelay(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

printWithDelay("This was a 3 sec delay!", 3000);