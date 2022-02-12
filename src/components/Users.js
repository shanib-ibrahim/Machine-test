import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const usersData = useSelector((state) => state.user.users);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name </th>
            <th>Last Name </th>
            <th>Email </th>
            <th>Profile Photo</th>
          </tr>
        </thead>

        <tbody>
          {Object.keys(usersData).length !== 0
            ? usersData.data.map((user) => (
                <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar} alt={user.first_name} />
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
