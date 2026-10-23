# Ready-to-colour pages

Pictures here (PNG, JPG or WebP) show up in the Colouring Studio
(`/games/colouring-studio`) under **Ready to colour**, for every player. No
list to keep: the app finds every picture in this folder (vite.config.ts,
`coloringBook()`). In `npm run dev`, a new picture shows after a reload.

- Black lines on white work best. Each picture is turned into lines when it's
  opened, the same way **Add a page** does it, fitted to a 3:4 page.
- The page is named from the file, minus words like "Coloring Page Of" and
  "For Kids": `Coloring Page Of Cute Espeon For Kids.png` → "Cute Espeon".
- One character per file colours best.
- Pictures committed here ship with the app, so they're on the public site
  once deployed.
