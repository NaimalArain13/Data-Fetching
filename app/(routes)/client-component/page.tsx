"use client";
import { UserType } from "@/app/lib/data";
import React, { useEffect, useState } from "react";

function ClientComponent() {
  const [users, setUsers] = useState<UserType[]>([]);

  //use hook to fetch data in client component
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("error in fetching data");
      }
      setUsers(data);
    };
    fetchUser();
  }, []); //this empty array identfied that the fetchUser function will invoke only once the page loads

  //to console the updated data (just for practice, not mandatory)
  useEffect(() => {
    console.log("Users Updated", users);
  }, [users]); //this dependency array indicated that run the function on each time the users state updated

  return (
    <div className="grid grid-col md:grid-cols-2 gap-5">
      {users.map((user, index) => (
        <ul
          key={index}
          className="bg-purple-300 flex flex-col gap-3 p-5 item-center"
        >
          <li>User ID: {user.id}</li>
          <li>User ID: {user.name}</li>
          <li>User ID: {user.dob}</li>
        </ul>
      ))}
    </div>
  );
}

export default ClientComponent;
