import { html, raw } from "hono/html";

export const HandleButton = ({ name }) => html`
  <script>
    // This adds the handleButton function to the HTML document
    ${raw(handleButton)};

    // This calls the handleButton function and passes the name as a string
    handleButton("${raw(name)}");
  </script>
`;

function handleButton(name) {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myButton").addEventListener("click", function () {
      alert("Hi " + name + "!");
    });
  });
}
