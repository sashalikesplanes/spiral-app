import { Admin, Record } from 'pocketbase';
import { createSignal } from 'solid-js';
import { pb } from './pb';

const [getUser, setUser] = createSignal<Record | Admin | null>(null);
export const currentUser = getUser;

pb.authStore.onChange((token, model) => {
  console.log('auth store change to ', model);
  setUser(model);
});

/**
 * Throws if invalid username and password
 * @param username
 * @param password
 */
export const login = async (username: string, password: string) => {
  await pb.collection('users').authWithPassword(username, password);
};

export const logout = async () => {
  pb.authStore.clear();
  setUser(null);
};
