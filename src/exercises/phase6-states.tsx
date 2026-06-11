import { useFetch, type User } from "./phase6-data-fetching";

// --- Exercise: Handle all four states explicitly ---
// Render <UserList> using the useFetch hook.
// Handle, IN THE RIGHT ORDER:
//   1. loading  — fetch in flight
//   2. error    — fetch failed
//   3. empty     — fetch succeeded but returned []
//   4. success   — fetch succeeded with users
//
// Rules:
//   - Guard the untrustworthy `data` BEFORE you touch it.
//   - Use early returns (cleaner than nested ternaries here).
//   - After the guards, TypeScript should KNOW data is a User[] — no `!` or `?.` needed.

export function UserList() {
  const state = useFetch<User[]>("/api/users");

  // TODO: your four branches here
  switch (state.status) {
    case "loading":
      return <div>Lets assume this is a skeleton component</div>;
    case "error":
      return <div>Internal server error</div>;
    case "success":
      if (state.data.length === 0) {
        return <div>No Users Yet</div>;
      }
      return (
        <div>
          {state.data.map((user) => (
            <ul key={user.id}>
              <li>{user.email}</li>
              <li>{user.name}</li>
              <li>{user.role}</li>
            </ul>
          ))}
        </div>
      );
    default: {
      const _exhaustive: never = state;
      return _exhaustive;
    }
  }
}
