// 2.Using Promise

let student;
let result;

function fetchData()
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            student = {
                name: "Manas",
                marks: 65
            };

            console.log("Data Fetched");

            resolve();

        }, 3000);

    });
}

function processData()
{
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            result = student.marks;

            console.log("Data Processed");

            resolve();

        }, 2000);

    });
}

function displayResult()
{
    console.log("Name: " + student.name);
    console.log("Marks: " + result);
}

console.log("Start");

fetchData()
.then(processData)
.then(displayResult)
.catch((error) => {
    console.log(error);
});

console.log("End");