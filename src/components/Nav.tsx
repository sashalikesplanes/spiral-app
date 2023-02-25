import { Link } from "solid-app-router";
import { Component } from "solid-js";

export const Nav: Component = () => {
  return (
    <nav class="bg-gray-900">
      <ul class="flex items-center justify-around">
        <li class="py-2 px-4 border-green-900 border-r-2 w-full text-center">
          <Link href="/" class="text-green-900 no-underline hover:underline">
            Home
          </Link>
        </li>
        <li class="py-2 px-4 border-green-900 border-l-2 w-full text-center">
          <Link
            href="/account"
            class="text-green-900 no-underline hover:underline"
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};
