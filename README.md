# Hono Client Side JavaScript Demo

In the Hono Discord server, ["Stoke" asked about how to use query parameters in his client side JavaScript](https://discord.com/channels/1011308539819597844/1012485912409690122/1267429856791101501).

In this demo, I show two ways to enable this:

1. Using the Hono `html` helper to have the JavaScript inline with HTML.
2. Creating JSX components to separate the JavaScript into separate files.

This [screen recording](https://files.justinnoel.dev/hono-scripts-demo.mp4) will demonstrate both approaches. Sorry, I wasn't able to cleanup the video.

To see code changes, see each of these commits.

1. [Initial Hono Cloudflare Pages template.](https://github.com/justinnoel/hono-scripts-demo/commit/e7be44fb385d78eac0f5ed5f6650ac38f0e6161a)
2. [Simple inline `html` sample](https://github.com/justinnoel/hono-scripts-demo/commit/cdb6005ed1bf35bf5b477205f54a8aac3ead6853)
3. [Using JSX Components](https://github.com/justinnoel/hono-scripts-demo/commit/ff93e93539aa05a6c89dcbbc8f0477ee16237a75)
- NOTE: In the video, I did not go over the changes to the `tsconfig.json` file.
  - `strict` was disabled because the original poster seemed to prefer plain JavaScript.
  - `lib` was changed so TypeScript would recognize `document` and other browser APIs.

## Development Setup
```txt
npm install
npm run dev
```