# Insta Clone (Minimal)

A minimal static Instagram-like feed built with plain HTML, CSS and JavaScript.

## Overview
This project renders a simple feed from a JS data array and demonstrates DOM rendering, layout and basic styling.

## Features
- Renders posts from the `posts` array in `index.js`.
- Dynamic injection into the DOM elements `header` and `mainSection`.
- Responsive-ish layout using simple CSS.

## Files
- `index.html` — main HTML file (loads CSS and JS)
- `index.css` — styling for header, posts and layout
- `index.js` — data and rendering logic
- `images/` — assets used by the UI

## Usage
1. Open `index.html` in a browser.
2. Optionally run a local server for proper asset loading:
   ```sh
   npx http-server .