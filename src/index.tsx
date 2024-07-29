import { Hono } from "hono";
import { renderer } from "./renderer";
import { HandleButton } from "./HandleButton";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  const name = c.req.query("name") || "unknown";

  // This will display the name in the server terminal output, not the browser console.
  console.log(name);

  return c.render(
    <>
      <h1>Hello! This is a test app using JSX components 🦖</h1>

      <p>
        <button id="myButton">Click here</button>
      </p>

      <HandleButton name={name} />
    </>
  );
});

export default app;
