import { useRoutes } from "solid-app-router";
import type { Component } from "solid-js";
import { Nav } from "./components/nav";

import { routes } from "./routes";

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="flex flex-col h-full bg-black">
      <main class="flex-1 h-fit">
        <Routes />
      </main>
      <Nav />
    </div>
  );
};

export default App;
