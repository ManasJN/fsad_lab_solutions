//1.Using Callback Functions
let student;
let result;

function fetchData(callback)
{
    setTimeout(() => {

        student = {
            name: "Manas",
            marks: 65
        };

        console.log("Data Fetched");

        callback();

    }, 3000);
}

function processData(callback)
{
    setTimeout(() => {

        result = student.marks;

        console.log("Data Processed");

        callback();

    }, 2000);
}

function displayResult()
{
    console.log("Name: " + student.name);
    console.log("Marks: " + result);
}

console.log("Start");

fetchData(() => {

    processData(() => {

        displayResult();

    });

});

console.log("End");