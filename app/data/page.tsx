import { Suspense, use } from "react";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  //   await delay(5000);
  return res.json();
}

function UsersList() {
  const users = use(fetchUsers());

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default function DataPage() {
  return (
    <div className="p-3">
      <h2>Users (use + Suspense)</h2>

      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
