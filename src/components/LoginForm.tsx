import { createStore } from 'solid-js/store';
import { login } from '../lib/auth';
import { setErrors } from './ErrorModal';

export function LoginForm() {
  const [fields, setFields] = createStore<{ username: string; password: string }>({ username: '', password: '' });

  function handleLogin(event: Event): void {
    event.preventDefault();
    login(fields.username, fields.password).catch((e) => {
      setErrors((errors) => [...errors, e.message]);
    });
  }

  return (
    <form class="flex flex-col p-4 gap-4" onsubmit={handleLogin}>
      <input type="text" class="p-4" placeholder="username" onchange={(e) => setFields('username', e.currentTarget.value)} />
      <input type="password" class="p-4" placeholder="password" onchange={(e) => setFields('password', e.currentTarget.value)} />
      <input value="Log In" type="submit" class="bg-gray-900 text-green-900 p-4" />
    </form>
  );
}
