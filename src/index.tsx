import { Hono } from 'hono'
import { html, raw } from 'hono/html'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  const name = c.req.query('name') || "unknown"

  // This will display the name in the server terminal output, not the browser console.
  console.log(name)

  return c.render(<>
    <h1>Hello! This is a test app 🦖</h1>

    <p>
      <button id='myButton'>Click here</button>
    </p>

    {html`
      <script>
          document.addEventListener('DOMContentLoaded', function() { 
            document.getElementById('myButton').addEventListener('click', function() {
              alert("Hi ${raw(name)}!");
            })
          })
      </script>
    `}
  </>)
})

export default app
