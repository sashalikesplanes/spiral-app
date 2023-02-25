import { Show } from 'solid-js';
import { createStore } from 'solid-js/store';
import { setErrors } from '../errors/modal';
import { currentUser, login, logout } from '../lib/auth';

function LoginForm() {
  const [fields, setFields] = createStore<{ username: string; password: string }>({ username: '', password: '' });

  function tryLogin(event: Event) {
    event.preventDefault();
    login(fields.username, fields.password).catch((e) => {
      setErrors((errors) => [...errors, e.message]);
    });
  }

  return (
    <form class="flex flex-col p-4 gap-4" onsubmit={(e) => tryLogin(e)}>
      <input type="text" class="p-4" placeholder="username" onchange={(e) => setFields('username', e.currentTarget.value)} />
      <input type="password" class="p-4" placeholder="password" onchange={(e) => setFields('password', e.currentTarget.value)} />
      <input value="submit" type="submit" class="bg-gray-900 text-green-900 p-4" />
    </form>
  );
}

export default function Account() {
  return (
    <Show when={currentUser()} fallback={LoginForm}>
      <div class="flex flex-col gap-4 items-center p-4">
        <p>Your username: {currentUser()?.username}</p>
        <form
          onsubmit={(e) => {
            e.preventDefault();
            logout();
          }}
        >
          <input type="submit" value="logout" class="bg-gray-900 text-green-900 p-4" />
        </form>
      </div>
    </Show>
  );
}
