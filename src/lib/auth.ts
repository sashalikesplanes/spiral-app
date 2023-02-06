import { Admin, Record } from "pocketbase";
import { createSignal } from "solid-js";
import { pb } from "./pb";

const userSignal = createSignal<Record | Admin | null>(null);

export const user = userSignal[0];
const setUser = userSignal[1];

export const currentUser = user;
pb.authStore.onChange((token, model) => {
  console.log("auth store change to ", model);
  setUser(model);
});

export const login = async (username: string, password: string) => {
  console.log("the password is", password);
  console.log("starting login with ", username, password);
  try {
    const authData = await pb

      .collection("users")
      .authWithPassword(username, password);

    setUser(authData.record);
  } catch (e) {
    console.error("Failed to authenticate: ", e);
  }
};

export const logout = async () => {
  await pb.authStore.clear();
  setUser(null);
};
