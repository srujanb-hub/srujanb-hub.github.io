__FAQs__

__What do I need to install to develop this project locally?__
You only need a static-file server to develop this site. Minimal requirements and recommended commands for macOS (zsh):
- Install Node.js (includes npm / npx)
    - Using Homebrew - `brew install node`
    - or download LTS from [nodejs site](https://nodejs.org).
- Verify Installation - `node -v && npm -v`
- Start the project by picking one of the options below:
    1. Run without installing anything globally (recommended)
        - `npx http-server -p 8080 -a localhost -c-1 -o` - this runs the same server used in your `{} package.json` dev script and opens the browser.
    2. Install `http-server` as a dev dependency and use your npm script.
        - `npm install --save-dev http-server`
        - `npm run dev`
    3. Install `http-server` globally.
        - `npm install -g http-server`
        - `http-server -p 8080 -a localhost -c-1 -o`
- Notes:
    - when you start with -o flag http://localhost::8080 site will open automatically.
    - If you want automatic page reload on file changes, consider `live-server` or `browser-sync` (e.g: `npm -i -D live-server` and run `npx live-server`).