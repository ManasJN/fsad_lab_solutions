//3. promise and async await
let student;
let result;

function fetchData()
{
    return new Promise((resolve) => {

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
    return new Promise((resolve) => {

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

async function main()
{
    console.log("Start");

    await fetchData();

    await processData();

    displayResult();

    console.log("End");
}

main();