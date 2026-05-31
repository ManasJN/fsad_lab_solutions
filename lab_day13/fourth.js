//4. Fetch JSON Data from Public API

async function fetchUsers()
{
    try
    {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let data = await response.json();

        console.log(data);

        data.forEach(user => {

            console.log("Name: " + user.name);
            console.log("Email: " + user.email);

        });

    }
    catch(error)
    {
        console.log("Error:", error);
    }
}

fetchUsers();