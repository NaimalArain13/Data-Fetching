import { UserType } from "@/app/lib/data";
async function ServerComponent() {
  // In server component, we need to provide the base url
  const response = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });
  const userData: UserType[] = await response.json();
  console.log("User Data: ",userData);

  return (
    <div className="grid grid-cols  md:grid-cols-2 p-5 gap-4 ">
      {userData.map((user, index) => (
        <ul
          key={index}
          className="bg-yellow-500 p-5 items-center flex flex-col gap-3"
        >
          <li>User ID: {user.id}</li> 
          <li>Name: {user.name}</li>
          <li>Date of Birth: {user.dob}</li>
        </ul>
      ))}
    </div>
  );
}

export default ServerComponent;
