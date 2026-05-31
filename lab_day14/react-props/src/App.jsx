import UserList from "./UserList";

function App() {

  const users = [
    { id: 1, name: "Manas", age: 19 },
    { id: 2, name: "Rahul", age: 20 },
    { id: 3, name: "Ankit", age: 21 }
  ];

  return (
    <div>
      <h1>User List</h1>

      <UserList items={users} />

    </div>
  );
}

export default App;