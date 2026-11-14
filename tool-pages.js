// tool-pages.js — /tools page, each tool page, homepage extras
import { BLOG, BLOGCSS, blogCard, relatedGuides } from "./blog.js";
import { ADSENSE, HEADBITS, MAIL, adUnit, adsTag, escH, ldJson, ogImg } from "./config.js";
import { TOOLGUIDES, guideHtml } from "./guides.js";
import { html } from "./home-template.js";
import { CATHOW, CATLBL, CATORDER, CATSCHEMA, POPULAR, TBYSLUG, TOOLS, WHY, relatedTools, toolDesc, toolFaqs, toolKind, toolLimits, toolSteps, toolTips, toolTitle, toolUseCases } from "./tools.js";

/* ===== tools-seo-section.js ===== */
// tools-seo-section.js — Unique "About this tool" SEO section for every tool page.

/* =====================================================================
   Extra editorial content (added): unique per-tool section, editorial
   policy page, extra blog posts.
   ===================================================================== */
export function toolSeoSection(i) {
  const t = TOOLS[i], n = escH(t[2]), d = escH(t[3].replace(/[\s.!]+$/, "")), c = t[0], k = toolKind(t);
  const what = {
    ai: n + " is a prompt helper. Instead of staring at an empty chat box, you answer a few simple questions and the tool assembles a complete, well-organised request for an AI model. Good prompts name a role, state the task, give context, set the format and describe the tone, and this tool builds all of those parts for you.",
    photo: n + " works on pictures directly in your browser using the HTML canvas. Your image is decoded, changed pixel by pixel on your own device, and handed back as a new file, so the original stays untouched and nothing is uploaded.",
    video: n + " processes video in real time using your browser's built-in media features. The clip plays through once while each frame is redrawn with your settings and recorded as a new file, which is why you should keep the tab open until it finishes.",
    pdf: n + " edits PDF documents locally with open-source libraries that run in your browser. Pages are copied or changed in memory and saved as a new file, so confidential paperwork does not have to be sent to anyone's server.",
    text: n + " transforms text instantly as you type or paste. It is a small, focused utility meant to replace manual find-and-replace work, copy-paste cleanup and repetitive formatting.",
    dev: n + " is a developer utility that handles a routine data task without installing software. It runs in your browser, so snippets, payloads and strings are processed locally and are never transmitted to ToolsNest.",
    calc: n + " applies a standard formula to the numbers you enter and shows the result at once. Using a calculator avoids mental arithmetic slips and lets you compare several scenarios in seconds.",
    media: n + " uses permissions that your browser controls. When you start it, the browser asks for access to a microphone, camera or screen, and recordings are created and kept on your own device.",
    util: n + " is a quick everyday helper for a small job that does not deserve a separate app. Open it, enter a value or choose an option, and get the answer straight away.",
    social: n + " helps you prepare content and links for social platforms and websites. It saves time on formatting details so you can concentrate on what you want to say."
  }[c] || (n + " is a free online helper.");
  const who = {
    ai: "writers, students, marketers, developers and small business owners who use AI chatbots and image or video generators and want more reliable answers.",
    photo: "bloggers, sellers, students, designers and anyone who needs a picture adjusted for a form, a website or a social post.",
    video: "creators and ordinary phone users who want a quick edit for Reels, Shorts, presentations or family videos without installing an editor.",
    pdf: "students, job seekers, office workers and business owners who handle applications, invoices, scans and reports.",
    text: "writers, editors, students, SEO professionals and data-entry staff who clean up and reshape text.",
    dev: "developers, testers, analysts and learners who debug data, convert formats and generate test values.",
    calc: "households, shop owners, students and professionals who need dependable numbers for money, health, dates and measurements.",
    media: "teachers, meeting hosts, creators and support staff who need a quick recording or capture.",
    util: "anyone who wants a fast answer or a handy generator without signing up for anything.",
    social: "creators, marketers, shop owners and community managers who publish regularly online."
  }[c];
  const ex = {
    ai: "For example, a shopkeeper can describe a product, pick a friendly tone and paste the resulting prompt into any chatbot to receive a ready listing.",
    photo: "For example, a seller can adjust a product photo, shrink it for a marketplace listing and save it in a few clicks.",
    video: "For example, a creator can trim a raw clip, crop it for vertical viewing and add a caption before posting.",
    pdf: "For example, an applicant can merge a resume and certificates into one file that fits a portal's upload rules.",
    text: "For example, an editor can paste a messy column of names and receive them tidy and consistent a moment later.",
    dev: "For example, a developer can paste an API response and immediately see whether the data is well formed.",
    calc: "For example, someone comparing two offers can change a single number and watch how the final figure moves.",
    media: "For example, a teacher can record a quick voice explanation and share the file with students.",
    util: "For example, a friend group can settle a decision fairly with a random pick instead of a long debate.",
    social: "For example, a small business can build a tracked link for each campaign to see which channel brings visitors."
  }[c];
  const rel = relatedTools(i).slice(0, 3).map(function (k2) { return '<a href="/tools/' + TOOLS[k2][1] + '">' + escH(TOOLS[k2][2]) + '</a>'; }).join(", ");
  return '<h2>About ' + n + '</h2><p>' + what + ' In short: ' + d + '.</p>'
    + '<h2>Who is ' + n + ' for?</h2><p>This tool is useful for ' + who + ' ' + ex + '</p>'
    + '<h2>Privacy and reliability</h2><p>' + n + ' needs no account. ' + (c === "calc" ? "Results are estimates and should not replace professional advice." : "Your input is handled inside your own browser and is not stored by ToolsNest.") + ' If something does not work as described, tell us through the <a href="/contact">Contact page</a> and we will look into it. You may also like ' + rel + '.</p>';
}

/* ===== tools-page.js ===== */
// tools-page.js — Builds each /tools/<slug> page (tool block, JSON-LD, SEO extras).

// CHANGED: unique "best for" text for the 10 photo filter pages (shown right under the generic intro line)
export const FILTERX = {
  "black-white-filter": "Black & White removes color so shapes, textures and contrast take center stage. It suits portraits, street photography and architecture, and it can rescue a photo whose background colors are messy or clashing.",
  "sepia-filter": "Sepia gives a classic, nostalgic feel and works best for portraits, family pictures and old-photo looks. Add a slight vignette in the editor for a vintage-album mood.",
  "vintage-filter": "Vintage mixes faded warmth with softened contrast, which suits retro-style posts, travel memories and cafe or street scenes. Lower the saturation slider a little for a more aged look.",
  "warm-filter": "Warm adds golden, sunny tones that flatter skin and food. It is a good pick for golden-hour shots, cozy indoor photos and festive pictures.",
  "cool-filter": "Cool shifts the picture toward blue tones for a calm, crisp mood. It works well for winter scenes, sea and sky photos, tech products and clean, minimal shots.",
  "vivid-filter": "Vivid boosts saturation and contrast for bold colors, which is great for social media posts, nature, flowers and food photos. Go easy on portraits, where skin tones can start to look unnatural.",
  "cinematic-filter": "Cinematic gives a movie-style color grade with slightly muted, moody tones. It works best on wide landscapes, city scenes and dramatic portraits.",
  "sunset-filter": "Sunset pushes the photo toward orange and pink tones, ideal for beach, sky and evening shots, or for adding warmth to a dull daytime picture.",
  "dreamy-filter": "Dreamy adds a soft glow with lifted brightness, suited to couple, wedding and flower photos or a soft aesthetic profile picture. Skip it for photos with fine text or sharp detail.",
  "invert-filter": "Invert flips every color to its opposite to create a negative effect. Use it for artistic edits, poster-style designs or checking how a design looks in reverse, rather than for natural portraits."
};
export function videoNote(t) {
  const st = ' style="border:2px solid var(--ln);border-radius:10px;padding:10px 14px;background:var(--cd);color:var(--tx);max-width:70ch"';
  let s = "";
  if (t[0] === "video" && toolKind(t) === "video") s += '<p' + st + '><b>Before you start:</b> Works best in Chrome or Edge (desktop or Android). Output is WebM. Processing runs in real time, so keep this tab open. iPhone/Safari may not support recording.</p>';
  if (t[1] === "youtube-thumbnail-grabber" || t[1] === "extract-audio-from-video") s += '<p' + st + '><b>Please note:</b> Use only content you own or have permission to use.</p>';
  return s;
}
export function filterNote(t) { return FILTERX[t[1]] ? '<p>' + escH(FILTERX[t[1]]) + '</p>' : ""; }
export function toolBlock(i) {
  const t = TOOLS[i], n = escH(t[2]), li = function (k) { return '<li><a href="/tools/' + TOOLS[k][1] + '">' + escH(TOOLS[k][2]) + '</a></li>'; };
  // CHANGED (AdSense thin-content fix): no ad unit renders inside a tool page that only has the generic autoGuide() content, since that page is not indexed and should carry no ads.
  const hasGuide = !!TOOLGUIDES[t[1]];
  return '<section class="ti" id="toolinfo"><nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/tools">All tools</a> › <a href="/tools#cat-' + t[0] + '">' + CATLBL[t[0]] + '</a> › <span>' + n + '</span></nav>'
    + '<p class="td">' + escH(t[3]) + '</p><p>' + CATHOW[toolKind(t)] + '</p>' + filterNote(t) + videoNote(t) /* CHANGED: filter-specific text */
    
    + '<h2>How to use ' + n + '</h2><ol class="st">' + toolSteps(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ol>'
    + '<h2>Key benefits &amp; practical use cases</h2><p>' + n + ' is built to be quick for everyday situations, not just a one-off demo. Here is where people typically reach for it:</p><ul class="st">' + toolUseCases(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul><ul class="st">' + WHY.map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Tips &amp; best practices</h2><ul class="st">' + toolTips(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Limitations</h2><p>' + n + ' is built to be fast and simple, but it is worth knowing what it does not do:</p><ul class="st">' + toolLimits(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h2>Frequently asked questions</h2>' + toolFaqs(t).map(function (f) { return '<h3>' + escH(f[0]) + '</h3><p>' + escH(f[1]) + '</p>'; }).join("")
    + toolSeoSection(i)
    + guideHtml(t[1])
    + relatedGuides(i)
    + (hasGuide ? adUnit() : "")
    + '<h2>Related tools</h2><ul class="dl">' + relatedTools(i).map(li).join("") + '</ul>'
    + '<h2>More popular tools</h2><ul class="dl">' + POPULAR.filter(function (s) { return TBYSLUG[s] !== i; }).map(function (s) { return li(TBYSLUG[s]); }).join("") + '</ul>'
    + '<p class="bc">Browse by category: ' + CATORDER.map(function (c) { return '<a href="/tools#cat-' + c + '">' + CATLBL[c] + '</a>'; }).join(" · ") + '</p></section>';
}
// CHANGED (note only, no code change): every tool page already gets a WebApplication JSON-LD (name, description, applicationCategory, free offer, operatingSystem Any) from this function, so no duplicate schema was added.
// CHANGED (AdSense thin-content fix): a tool page is only asked to be indexed, and only gets the AdSense script, when it has a hand-written deep guide in TOOLGUIDES. Pages that fall back to the generic autoGuide() template still work exactly the same for visitors, but carry a noindex tag and no ad script, so Google is never shown the large set of near-identical auto-built pages. hasGuide is computed once in buildToolPage and threaded through here.
export function toolExtra(i, o, hasGuide) {
  const t = TOOLS[i], url = o + "/tools/" + t[1], title = toolTitle(t), desc = toolDesc(t);
  const robots = hasGuide ? '<meta name="robots" content="index,follow,max-image-preview:large">' : '<meta name="robots" content="noindex,follow">';
  return HEADBITS + robots + '<meta property="og:site_name" content="ToolsNest"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="' + escH(title) + '"><meta name="twitter:description" content="' + escH(desc) + '">' + ogImg(o)
    + ldJson({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebApplication", "@id": url + "#app", name: t[2], url: url, description: desc,
          applicationCategory: CATSCHEMA[t[0]], operatingSystem: "Any", inLanguage: "en", isAccessibleForFree: true,
          browserRequirements: "Requires JavaScript. Works best in Chrome, Edge or Firefox.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
          publisher: { "@type": "Organization", name: "ToolsNest", url: o + "/" }
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
            { "@type": "ListItem", position: 2, name: "All tools", item: o + "/tools" },
            { "@type": "ListItem", position: 3, name: CATLBL[t[0]], item: o + "/tools#cat-" + t[0] },
            { "@type": "ListItem", position: 4, name: t[2], item: url }
          ]
        }
      ]
    });
}
export function buildToolPage(html, i, o) {
  const t = TOOLS[i], url = o + "/tools/" + t[1], title = escH(toolTitle(t)), desc = escH(toolDesc(t));
  // CHANGED (AdSense thin-content fix): hasGuide = this tool has a hand-written TOOLGUIDES entry, not just the generic autoGuide() fallback. Only such pages are indexed and carry the ad script; every tool page still renders and works identically for the visitor either way.
  const hasGuide = !!TOOLGUIDES[t[1]];
  return html.split("%%O%%").join(o)
    .replace(/<title>[\s\S]*?<\/title>/, function () { return "<title>" + title + "</title>"; })
    .replace(/<meta name="description" content="[^"]*">/, function () { return '<meta name="description" content="' + desc + '">'; })
    .replace(/<link rel="canonical" href="[^"]*">/, function () { return '<link rel="canonical" href="' + url + '">'; })
    .replace(/<meta property="og:title" content="[^"]*">/, function () { return '<meta property="og:title" content="' + title + '">'; })
    .replace(/<meta property="og:description" content="[^"]*">/, function () { return '<meta property="og:description" content="' + desc + '">'; })
    .replace(/<meta property="og:url" content="[^"]*">/, function () { return '<meta property="og:url" content="' + url + '">'; })
    .replace("<!--ADS-->", function () { return (hasGuide ? adsTag() : '<meta name="google-adsense-account" content="' + ADSENSE + '">') + toolExtra(i, o, hasGuide); })
    .replace(/<section class="hero">[\s\S]*?<\/section>/, function () { return '<section class="hero" style="padding:28px 18px 0"><h1 style="font-size:clamp(30px,5vw,52px);max-width:22ch">' + escH(t[2]) + '</h1><div hidden><b id="cnt"></b><input id="q"><div id="qk"></div></div></section>'; })
    .replace(/<div class="mo" id="mo">[\s\S]*?<\/div><\/div><\/div>/, "")
    .replace('<main><div class="chips" id="cats">', function () { return '<style>.mo.inl{display:none;position:static;background:none;padding:0 14px;margin:12px 0 8px;justify-content:center}.mo.inl .mb{max-height:none;margin:0 auto}.mo.inl #cx{display:none}</style><div class="mo inl" id="mo"><div class="mb"><button class="x" id="cx">✕</button><h2 id="mt"></h2><div class="mu" id="md"></div><div id="tb"></div></div></div>' + toolBlock(i) + '<main><div class="chips" id="cats">'; })
    // CHANGED: remove the generic site-wide FAQ section (kept on the homepage, which does not use buildToolPage)
    .replace(/<section class="faq">[\s\S]*?<\/section>/, function () { return ""; });
}

/* ===== tools-hub.js ===== */
// tools-hub.js — /tools page (all tools directory).

export const HUBDESC = "Browse all " + TOOLS.length + " free online tools on ToolsNest: photo, video, PDF, AI prompt, text, developer tools, calculators and more.";
export const HUBBODY = '<h1>All Free Online Tools</h1><p class="mu">' + TOOLS.length + ' tools that run in your browser. No signup, your files stay on your device.</p>'
  + CATORDER.map(function (c) {
    return '<h2 id="cat-' + c + '">' + CATLBL[c] + '</h2><ul>' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a> – ' + escH(t[3]) + '</li>'; }).join("") + '</ul>';
  }).join("") + adUnit();
export function hubExtra(o) {
  return ldJson({
    "@context": "https://schema.org", "@type": "CollectionPage", name: "All Free Online Tools", url: o + "/tools",
    isPartOf: { "@type": "WebSite", name: "ToolsNest", url: o + "/" },
    mainEntity: { "@type": "ItemList", numberOfItems: TOOLS.length, itemListElement: TOOLS.map(function (t, i) { return { "@type": "ListItem", position: i + 1, url: o + "/tools/" + t[1], name: t[2] }; }) }
  });
}

/* ===== tools-home.js ===== */
// tools-home.js — Homepage extras: JSON-LD, "Latest from blog" block and tool directory links.

export function homeExtra(o) {
  const faq = [
    ["Are my files uploaded to a server?", "No. Photos, videos and PDFs are processed directly in your browser, so your files stay on your device."],
    ["Is ToolsNest really free?", "Yes. All tools are free to use. The site is supported by advertising."],
    ["Which browser should I use for the video editor?", "Google Chrome or Microsoft Edge on desktop or Android works best. Video tools run in real time, so keep the tab open until processing finishes. Videos are saved in WebM format."],
    ["Can I use the tools on my phone?", "Yes. The website is mobile friendly and works in modern mobile browsers."],
    ["How can I request a new tool or report a problem?", "Email us at " + MAIL + " or visit the Contact page."]
  ];
  return HEADBITS + '<meta name="robots" content="index,follow,max-image-preview:large"><meta property="og:site_name" content="ToolsNest"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="ToolsNest – Free Online Tools"><meta name="twitter:description" content="Photo editor, video editor, PDF, AI prompt, text and developer tools in your browser.">' + ogImg(o)
    + ldJson({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "WebSite", "@id": o + "/#website", url: o + "/", name: "ToolsNest", description: "Free online photo editor, video editor, PDF tools, AI prompt generators, text and developer tools and calculators.", inLanguage: "en", publisher: { "@id": o + "/#org" } },
        { "@type": "Organization", "@id": o + "/#org", name: "ToolsNest", url: o + "/", email: MAIL },
        { "@type": "FAQPage", mainEntity: faq.map(function (q) { return { "@type": "Question", name: q[0], acceptedAnswer: { "@type": "Answer", text: q[1] } }; }) }
      ]
    });
}
export let HOMELINKS = adUnit() + '<section class="dir" id="all-tools"><h2>All ' + TOOLS.length + ' free online tools</h2><p>Browse every ToolsNest tool by category. Each tool has its own page that you can open, bookmark and share.</p>'
  + CATORDER.map(function (c) {
    return '<h3><a href="/tools#cat-' + c + '">' + CATLBL[c] + '</a></h3><ul class="dl">' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul>';
  }).join("") + '</section>';
// CHANGED: homepage "Latest from our blog" section (added for AdSense "thin / low value content"
// review) — shows real, original editorial content directly on the homepage, not just a tool
// directory, and adds fresh internal links. BLOG/blogCard are only defined above this point, so
// this is appended to HOMELINKS here instead of inside its original declaration.
// CHANGED (AdSense thin-content fix): the blog section is placed ahead of the tool directory on the homepage, with only one ad unit between the two (instead of one ad per section back-to-back), so the first thing a reviewer or visitor sees under the fold is original long-form content, not an ad sandwiched by two directories.
HOMELINKS = '<section class="dir" id="latest-blog">' + BLOGCSS
  + '<h2>Latest from our blog</h2><p>In-depth, original guides behind the tools — written by the ToolsNest team.</p><div class="blogidx">'
  + BLOG.map(function (b, i) { return [b[3], i]; }).sort(function (x, y) { return x[0] < y[0] ? 1 : -1; }).slice(0, 6).map(function (p) { return blogCard(p[1]); }).join("")
  + '</div><p><a href="/blog">Read all articles on the blog →</a></p></section>' + HOMELINKS;
