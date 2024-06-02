import React from "react";
import { useSelector } from "react-redux";

function UserData() {
  const user = useSelector((state) => state.user.userData);
  // const userData = localStorage.getItem('userData')
  return (
    <div>
      {/* UserData: {JSON.stringify(userData)} */}
      <ul>
        <li>User Data = {JSON.stringify(user)}</li>
      </ul>
    </div>
  );
}

export default UserData;
