# resume.thoemmy.com

Personal calling-card page of Thomas Kopitsch, served via GitHub Pages.

## Structure

- `index.html` – the content, as plain semantic HTML (readable without JavaScript, by search engines and by link previews)
- `main.js` – optional typewriter effect: empties the text in `#resume` and types it back in
- `styles.css` – styling, terminal look
- `fonts/` – self-hosted Share Tech font (SIL OFL 1.1), so no third-party requests are made

No build step and no dependencies: edit `index.html`, commit, done.

## Editing content

Everything inside `<article id="resume">` is typed line by line. A "line" is any `h1`, `h2`, `h3`, `p` or `li`
(see `LINE_SELECTOR` in `main.js`). Links inside a line are typed as well.

When updating the content, also keep the `<title>`, the `description` / `og:*` meta tags and the JSON-LD block
in the `<head>` in sync.

## Typing behaviour

- Speed is controlled by `LOADING_DELAY`, `CHAR_DELAY` and `LINE_DELAY` in `main.js`.
- Visitors can skip with the "skip" button, `Esc`, `Enter` or `Space`.
- The animation only plays on the first visit (remembered in `localStorage`) and never for visitors with
  "reduce motion" enabled or without JavaScript.

To see the animation again locally, run `localStorage.removeItem("resume-seen")` in the browser console.

## Credits

Typewriter idea based on [this codepen](https://codepen.io/Gothburz/pen/YyLMVx) by
[Gothburz](https://github.com/gothburz).
