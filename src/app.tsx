import { useRoutes } from 'solid-app-router';
import type { Component } from 'solid-js';
import { Nav } from './components/nav';
import { ErrorModal } from './errors/modal';

import { routes } from './routes';

const App: Component = () => {
  const Routes = useRoutes(routes);

  return (
    <div class="flex flex-col h-full bg-black">
      <ErrorModal />
      <main class="flex-1 h-fit">
        <Routes />
      </main>
      <Nav />
    </div>
  );
};

export default App;
