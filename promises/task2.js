function getTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Todo request failed: ${response.status}`);
            }
            return response.json();
        });
}

function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(response => {
            if (!response.ok) {
                throw new Error(`User request failed: ${response.status}`);
            }
            return response.json();
        });
}

let allResult;
let raceResult;

Promise.all([getTodo(), getUser()])
    .then(results => {
        allResult = results;
        console.log("Promise.all:", allResult);
    })
    .catch(error => console.log("Error:", error.message));

Promise.race([getTodo(), getUser()])
    .then(result => {
        raceResult = result;
        console.log("Promise.race:", raceResult);
    })
    .catch(error => console.log("Error:", error.message));