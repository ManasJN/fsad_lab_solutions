function UserList(props) {

  return (
    <ul>

      {props.items.map((user) => (

        <li key={user.id}>
          {user.name} - {user.age}
        </li>

      ))}

    </ul>
  );
}

export default UserList;