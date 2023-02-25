import PocketBase, { Admin, ClientResponseError, Record } from 'pocketbase';
import { createSignal } from 'solid-js';

const pb = new PocketBase('http://127.0.0.1:8090');

/**
 * User store for currentUser, keep set user private
 */
const [getUser, setUser] = createSignal<Record | Admin | null>(null);
export const currentUser = getUser;

pb.authStore.onChange((token, model) => {
  setUser(model);
}, true);

/**
 * Throws if invalid username and password
 * @param username
 * @param password
 */
export const login = async (username: string, password: string) => {
  try {
    await pb.collection('users').authWithPassword(username, password);
  } catch (e) {
    if (e instanceof ClientResponseError && e.isAbort) {
      return;
    } else throw e;
  }
};

export const logout = async () => {
  pb.authStore.clear();
  setUser(null);
};
