function calculateResult(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (isNaN(num1) || isNaN(num2)) {
            reject("Please enter valid numbers.");
            return;
        }

        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    reject("Division by zero is not allowed.");
                    return;
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                reject("Invalid operation.");
                return;
        }
        resolve(result);
    });
}

function getInputs() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    return { num1, num2, operation };
}

function updateResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Result: ${result}`;
}

function updateError(error) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Error: ${error}`;
}

function performCalculation() {
    const { num1, num2, operation } = getInputs();

    calculateResult(num1, num2, operation)
        .then(result => {
            updateResult(result);
        })
        .catch(error => {
            updateError(error);
        });
}