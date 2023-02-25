import { createSignal, For, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
export const [errors, setErrors] = createSignal<string[]>([]);

export const ErrorModal = () => {
  return (
    <Show when={errors().length > 0}>
      <Portal>
        <div class="absolute top-10 inset-x-5 bg-gray-700 rounded-lg p-5 border-green-900 border-2">
          <h1 class="text-2xl font-bold">Error</h1>
          <For each={errors()}>{(error) => <p class="mt-4">{error}</p>}</For>
          <button class="mt-4 p-4 bg-gray-900 text-green-900" onclick={() => setErrors([])}>
            Close
          </button>
        </div>
      </Portal>
    </Show>
  );
};
