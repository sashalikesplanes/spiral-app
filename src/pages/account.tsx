import { Show } from 'solid-js';
import { LoginForm } from '../components/LoginForm';
import { currentUser, logout } from '../lib/auth';

export default function Account() {
  function handleLogout(event: Event): void {
    event.preventDefault();
    logout();
  }

  return (
    <Show when={currentUser()} fallback={LoginForm}>
      <div class="flex flex-col gap-4 items-center p-4">
        <p>Your username: {currentUser()?.username}</p>
        <form onsubmit={handleLogout}>
          <input type="submit" value="Log Out" class="bg-gray-900 text-green-900 p-4" />
        </form>
      </div>
    </Show>
  );
}
