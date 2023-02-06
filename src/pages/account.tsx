import { createSignal, Show } from "solid-js";
import { login, logout, user } from "../lib/auth";

export default function Account() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  return (
    <Show
      when={user()}
      fallback={
        // lets create a login form here
        <form
          class="flex flex-col p-4 gap-4"
          onsubmit={(e) => {
            e.preventDefault();
            login(email(), password());
          }}
        >
          <input
            type="email"
            class="p-4"
            placeholder="email"
            onchange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            class="p-4"
            placeholder="password"
            onchange={(e) => setPassword(e.target.value)}
          />
          <input
            value="submit"
            type="submit"
            class="bg-gray-900 text-green-900 p-4"
          />
        </form>
      }
    >
      <div class="flex flex-col gap-4 items-center p-4">
        <p>Your email: {user()?.email}</p>
        <form
          onsubmit={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <input
            type="submit"
            value="logout"
            class="bg-gray-900 text-green-900 p-4"
          />
        </form>
      </div>
    </Show>
  );
}
