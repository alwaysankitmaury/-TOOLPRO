// home-template.js — loads homepage.html + client JS/CSS
import { LASTMOD } from "./config.js";
import indexHtml from "./homepage.html";
import APPJS from "./client-app-script.js";
import APPCSS from "./client-app-style.js";

// templates-home-template.js — Loads index.html (homepage shell) and links it with /app.css and /app.js

export { APPJS, APPCSS };
// %%V%% = cache-busting version (uses LASTMOD from config.js)
export const html = indexHtml.split("%%V%%").join(LASTMOD);
