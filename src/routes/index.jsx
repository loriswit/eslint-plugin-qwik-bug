import { component$ } from "@builder.io/qwik"
import { routeLoader$ } from "@builder.io/qwik-city"

export const useLoremIpsum = routeLoader$(async () => {
  const response = await fetch("https://loripsum.net/api")
  return await response.text()
})

export default component$(() => {
  const loreIpsum = useLoremIpsum()
  return (
    <>
      <h1>Hi 👋</h1>
      <div dangerouslySetInnerHTML={loreIpsum.value} />
    </>
  );
});

export const head = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
}
