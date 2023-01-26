import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({
    // json() retorna uma Response()
    users: [
      { id: 1, name: "Fabio" },
      { id: 2, name: "Vedovelli" },
    ],
  });
}

export default function () {
  const { users } = useLoaderData();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
