import { component$ } from '@builder.io/qwik';
import { Form, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <Form
        onSubmit$={() => {
          // BUG: this is never executed, in other frameworks this should be working
          console.log('Form submitted using method GET');
        }}
        class="flex flex-col space-y-2 container mx-auto py-12"
      >
        <label for="">Name</label>
        <input
          type="text"
          name="name"
          class="border p-2"
          placeholder="Write your name"
        />
        <button
          type="submit"
          class="p-2 w-full bg-slate-700 hover:bg-slate-800 text-white transition-colors"
        >
          Submit
        </button>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
