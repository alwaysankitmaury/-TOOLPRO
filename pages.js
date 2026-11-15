// pages.js — About, Contact, Privacy, Terms, Disclaimer, Editorial, How to Use
import { escH } from "./config.js";
import { CATLBL, CATORDER, TBYSLUG, TOOLS, WHY, toolFaqs, toolLimits, toolSteps, toolTips, toolUseCases } from "./tools.js";

/* ===== pages-common.js ===== */
// pages-common.js — Shared bits for the legal pages.

export const UPDATED = '<p class="mu">Last updated: October 2026</p>';

/* ===== pages-terms.js ===== */
// pages-terms.js — Terms & Conditions page content.

export const TERMS = String.raw`<h1>Terms &amp; Conditions</h1>` + UPDATED + String.raw`
<p>Welcome to QuickToolHub. By accessing or using this website you agree to these Terms and Conditions. If you do not agree, please do not use the site.</p>
<h2>1. Use of the tools</h2><p>QuickToolHub provides free online tools for personal and commercial use. You agree to use them lawfully and in a way that does not harm the site or other users.</p>
<h2>2. Your content</h2><p>You are responsible for the files and text you process. Only use content that you own or have permission to use. Files are processed in your browser and are not stored by us.</p>
<h2>3. Prohibited activities</h2><ul><li>Using the tools to infringe copyright or other rights, or for any illegal purpose</li><li>Attempting to hack, overload, scrape or disrupt the website</li><li>Using the site to create misleading, harmful or abusive content</li></ul>
<h2>4. No warranty</h2><p>The tools and content are provided "as is" and "as available", without warranties of any kind. We do not guarantee that results will be accurate, complete or error-free, or that the site will always be available. Always keep a backup of your original files.</p>
<h2>5. Limitation of liability</h2><p>To the fullest extent permitted by law, QuickToolHub and its owner are not liable for any loss or damage arising from your use of, or inability to use, the website or its tools.</p>
<h2>6. Advertising and third-party links</h2><p>The site may display advertisements and links to third-party websites. We are not responsible for their content or practices.</p>
<h2>7. Intellectual property</h2><p>The design, code and original content of QuickToolHub belong to us. Third-party names and trademarks belong to their respective owners.</p>
<h2>8. Changes</h2><p>We may change these Terms or the site at any time. Continued use after changes means you accept the updated Terms.</p>
<h2>9. Governing law</h2><p>These Terms are governed by the laws of India.</p>
<h2>10. Contact</h2><p>Questions about these Terms? Email <a href="mailto:{{MAIL}}">{{MAIL}}</a>.</p>`;

/* ===== pages-about.js ===== */
// pages-about.js — About Us page content.

export const ABOUT = String.raw`<h1>About QuickToolHub</h1><p class="mu">Free online tools that run in your browser</p>
<p>QuickToolHub is a free collection of online tools for everyday work: a photo editor with filters, a video editor with effects and motion, PDF tools, AI prompt generators, text and developer utilities, calculators and more. Everything is designed to be fast, simple and free to use, without registration.</p>
<h2>What you can do on QuickToolHub</h2>
<ul><li><b>Photo tools:</b> filters, resize, crop, compress, convert, meme maker, passport photo, watermark and more.</li><li><b>Video tools:</b> trim, filters, slow motion, zoom and shake effects, fade, text, compress, Reels/Shorts crop and photo slideshows.</li><li><b>PDF tools:</b> merge, split, rotate, delete pages, page numbers, watermark and PDF to image.</li><li><b>AI prompt tools:</b> ready-made prompt generators for ChatGPT, Gemini, Claude, image and video AI, plus token and cost calculators.</li><li><b>Text and developer tools:</b> case converters, JSON, Base64, hashes, regex tester and many more.</li><li><b>Calculators:</b> EMI, SIP, GST, BMI, age, percentage and unit converters.</li></ul>
<h2>Privacy first</h2><p>Our tools process your files directly inside your own browser. Your photos, videos and PDFs are not uploaded to our servers. Read the full details in our <a href="/privacy-policy">Privacy Policy</a>.</p>
<h2>Why is it free?</h2><p>QuickToolHub is supported by advertising, which allows us to keep every tool free for everyone. We keep adding new tools and improving existing ones based on user feedback.</p>
<h2>Who is behind QuickToolHub</h2><p>QuickToolHub is built and maintained by an independent developer based in India. The project started from a simple frustration: everyday jobs like merging two PDFs, shrinking a photo or checking a loan payment often send you to websites full of pop-ups, forced signups and watermarks. QuickToolHub aims to be the opposite: clean, quick and respectful of your time and your files.</p>
<h2>How we work</h2><ul><li>Each tool is tested on desktop and mobile before it is published.</li><li>Guides and articles are written for QuickToolHub and explain what a tool does and where its limits are.</li><li>Calculators use standard formulas and always say that results are estimates.</li><li>We fix reported problems quickly and keep improving the tools.</li></ul><p>Read more in our <a href="/editorial-policy">Editorial Policy</a>, or browse our <a href="/blog">blog and guides</a> and the <a href="/how-to-use">How to Use</a> page.</p>
<h2>Get in touch</h2><p>Have a suggestion, found a bug or want a new tool? Email us at <a href="mailto:{{MAIL}}">{{MAIL}}</a> or visit our <a href="/contact">Contact page</a>.</p>`;

/* ===== pages-contact.js ===== */
// pages-contact.js — Contact Us page content.

export const CONTACT = String.raw`<h1>Contact Us</h1><p class="mu">We would love to hear from you</p>
<div class="box"><p class="mu" style="margin:0 0 4px">Email</p><a class="big" href="mailto:{{MAIL}}">{{MAIL}}</a></div>
<h2>What you can write to us about</h2>
<ul><li>Bug reports or a tool that is not working properly</li><li>Ideas and requests for new tools</li><li>Questions about our Privacy Policy or Terms</li><li>Copyright or content removal requests</li><li>Advertising, partnership and business enquiries</li></ul>
<h2>To help us reply faster</h2><p>Please mention the name of the tool, the device and browser you are using (for example "Android, Chrome"), and a short description of the problem. A screenshot is very helpful.</p>
<p>We read every message and will reply as soon as we can.</p>`;

/* ===== pages-disclaimer.js ===== */
// pages-disclaimer.js — Disclaimer page content.

export const DISCLAIMER = String.raw`<h1>Disclaimer</h1>` + UPDATED + String.raw`
<h2>General information</h2><p>The tools and information on QuickToolHub are provided for general purposes only. While we work to keep everything accurate and working, we make no guarantee about completeness, reliability or suitability for any particular purpose.</p>
<h2>Calculators</h2><p>Results from the EMI, SIP, GST, interest, BMI, age and other calculators are estimates. They are not financial, tax, legal or medical advice. Please consult a qualified professional before making important decisions.</p>
<h2>Files and media</h2><p>Always check the output of PDF, photo and video tools before using or sharing it, and keep copies of your originals. Video tools run in real time in your browser and results depend on your device and browser.</p>
<h2>Trademarks and affiliation</h2><p>YouTube, Instagram, Facebook, WhatsApp and other names mentioned on this site are trademarks of their respective owners. QuickToolHub is not affiliated with or endorsed by them. You are responsible for respecting the copyright and terms of any content you use.</p>
<h2>Advertising</h2><p>This website may display advertisements from Google AdSense and other partners. We are not responsible for the content of third-party ads or sites.</p>
<h2>Contact</h2><p>Questions? Email <a href="mailto:{{MAIL}}">{{MAIL}}</a>.</p>`;

/* ===== pages-editorial.js ===== */
// pages-editorial.js — Editorial Policy page content.

export const EDITORIAL = String.raw`<h1>Editorial Policy</h1><p class="mu">How we build tools and write guides</p>
<p>QuickToolHub is an independent project that publishes free online tools together with plain-language guides. This page explains how we decide what to build, how we check our work and how we handle mistakes, so that visitors and advertisers know what to expect from us.</p>
<h2>Our purpose</h2><p>We build small, fast utilities that solve everyday problems: converting a file, formatting data, calculating a payment, preparing a prompt. Each tool should do one clear job well, work on phones and desktops, and respect your privacy by processing files inside your browser wherever that is technically possible.</p>
<h2>How we write guides and articles</h2><ul><li>Every guide is written for people, not search engines. We explain what a tool does, how to use it step by step, where it helps and where its limits are.</li><li>We use plain English, concrete examples and realistic numbers instead of vague claims.</li><li>We do not copy articles from other websites. Content is written specifically for QuickToolHub.</li><li>We avoid promising results that a tool cannot deliver, and we say clearly when output is only an estimate.</li></ul>
<h2>Accuracy and testing</h2><p>Before a tool is published we test it with typical and unusual inputs on desktop and mobile browsers. Calculators use standard published formulas. When we learn that a result is wrong, a rule has changed or a platform has updated its requirements, we correct the tool or the text and update the Last updated date where one is shown.</p>
<h2>Financial, health and legal topics</h2><p>Some calculators relate to money, health or taxes. They are provided for general information and education only. They are not financial, tax, medical or legal advice, and they cannot replace a qualified professional who knows your situation.</p>
<h2>Advertising and independence</h2><p>QuickToolHub is supported by advertising, including Google AdSense. Ads are clearly separate from our content, and advertisers do not influence what we write or how a tool works. We do not publish paid reviews or sponsored rankings.</p>
<h2>Corrections and feedback</h2><p>If you find a mistake, have an idea for a new tool or want something removed, email <a href="mailto:{{MAIL}}">{{MAIL}}</a> or use our <a href="/contact">Contact page</a>. We read every message and fix confirmed errors as soon as we can.</p>
<h2>Your responsibility</h2><p>Please review the output of any tool before relying on it, keep backups of important files and follow the laws, platform rules and copyrights that apply to your own content. See our <a href="/terms">Terms</a>, <a href="/privacy-policy">Privacy Policy</a> and <a href="/disclaimer">Disclaimer</a> for details.</p>`;

/* ===== pages-how-to-use.js ===== */
// pages-how-to-use.js — "How to Use" page content.

/* =====================================================================
   NEW: /how-to-use guide page (added for AdSense "thin / low value
   content" review). Reuses the same per-tool step/FAQ generators that
   already power each /tools/<slug> page, so the content here is unique,
   substantial and stays in sync automatically. Nothing else on the site
   is changed by this block.
   ===================================================================== */
// One representative tool per main category (covers the examples the user asked for: Image to PDF, EMI Calculator, JSON Converter, Color Code Converter, plus the rest of the toolset).
export const GUIDE_SLUGS = ["image-to-pdf", "photo-editor-studio", "video-trimmer", "chatgpt-ai-prompt-generator", "word-counter", "json-formatter-validator", "color-code-converter", "emi-calculator", "screen-recorder", "qr-code-generator", "hashtag-generator", "merge-pdf", "image-compressor", "gst-calculator", "video-compressor", "image-resizer"].filter(function (s) { return TBYSLUG[s] !== undefined; });
export function howToSection(slug) {
  const i = TBYSLUG[slug], t = TOOLS[i], n = escH(t[2]);
  return '<div class="box" id="guide-' + t[1] + '"><h2 style="margin-top:0">' + n + '</h2><p class="td">' + escH(t[3]) + '</p>'
    + '<h3>How to use ' + n + '</h3><ol class="st">' + toolSteps(t).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ol>'
    + '<h3>Features &amp; benefits</h3><ul class="st">' + toolUseCases(t).slice(0, 2).concat(WHY).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>Tips</h3><ul class="st">' + toolTips(t).slice(0, 2).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>Limitations</h3><ul class="st">' + toolLimits(t).slice(0, 2).map(function (s) { return '<li>' + escH(s) + '</li>'; }).join("") + '</ul>'
    + '<h3>FAQs</h3>' + toolFaqs(t).map(function (f) { return '<p><b>' + escH(f[0]) + '</b><br>' + escH(f[1]) + '</p>'; }).join("")
    + '<p><a href="/tools/' + t[1] + '">Open ' + n + ' →</a></p></div>';
}
export const HOWTOTOC = '<p class="mu">Jump to a guide: ' + GUIDE_SLUGS.map(function (s) { const t = TOOLS[TBYSLUG[s]]; return '<a href="#guide-' + t[1] + '">' + escH(t[2]) + '</a>'; }).join(" · ") + '</p>';
export const HOWTOCATS = '<h2>Browse the guide for every tool</h2><p>Every one of our ' + TOOLS.length + ' tools has its own page with its own step-by-step "How to use" guide, features and FAQs. Pick any tool below to open its guide directly.</p>'
  + CATORDER.map(function (c) {
    return '<h3 id="cat-' + c + '">' + CATLBL[c] + '</h3><ul class="dl">' + TOOLS.filter(function (t) { return t[0] === c; }).map(function (t) { return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul>';
  }).join("");
export const HOWTO = String.raw`<h1>How to Use QuickToolHub</h1><p class="mu">Step-by-step guides, features and FAQs for our tools</p>
<p>QuickToolHub has more than ` + TOOLS.length + String.raw` free online tools for photos, videos, PDFs, AI prompts, text, developer work and everyday calculations. This page walks you through how to use some of our most popular tools, what they are useful for, and answers to common questions. Every individual tool page also has its own guide and FAQs, which you can reach from the links below or from the <a href="/tools">All Tools</a> page.</p>`
  + HOWTOTOC + GUIDE_SLUGS.map(howToSection).join("") + HOWTOCATS
  + String.raw`<h2>Still have a question?</h2><p>Email us at <a href="mailto:{{MAIL}}">{{MAIL}}</a> or visit our <a href="/contact">Contact page</a> and we will help.</p>`;

/* ===== pages-privacy.js ===== */
// pages-privacy.js — Privacy Policy page content.

export const PRIVACY = String.raw`<h1>Privacy Policy</h1>` + UPDATED + String.raw`
<p>This Privacy Policy explains how QuickToolHub ("we", "us", "our") collects, uses and protects information when you use our website. By using the site you agree to this policy.</p>
<h2>1. Information we collect</h2>
<ul><li><b>No accounts:</b> we do not ask you to register and we do not collect your name, phone number or address.</li><li><b>Your files stay with you:</b> photos, videos, PDFs and text you use in our tools are processed locally in your browser. They are not uploaded to or stored on our servers.</li><li><b>Log data:</b> like most websites, our hosting provider (Cloudflare) may automatically record technical data such as IP address, browser type, device, pages visited and time of visit, for security and performance.</li><li><b>Messages you send:</b> if you email us, we keep your email address and message only to reply to you.</li></ul>
<h2>2. Cookies and local storage</h2><p>We store small items in your browser, such as your light/dark theme choice and whether you have dismissed our cookie notice. Advertising partners may also set cookies, as explained below. You can delete or block cookies in your browser settings.</p>
<h2>3. Advertising (Google AdSense)</h2>
<p>We may show ads served by Google and other third-party vendors. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website or other websites.</p>
<p>Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.</p>
<p>You can opt out of personalised advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a>. You can also opt out of some third-party vendors' use of cookies for personalised advertising at <a href="https://www.aboutads.info" target="_blank" rel="noopener">www.aboutads.info</a>. To learn how Google uses data when you use partner sites, see <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>
<p>If you are in the European Economic Area, the United Kingdom or Switzerland, ads are shown according to your consent choices.</p>
<h2>4. Third-party services</h2><p>To work, the site loads open-source libraries (such as jsPDF, pdf-lib, PDF.js, QRCode.js and JSZip) from the cdnjs content delivery network, loads fonts from Google Fonts, and is hosted on Cloudflare. The YouTube Thumbnail tool loads public images from YouTube servers. Some tools ask your browser for permission to use your camera, microphone or screen; this data is processed on your device and is not sent to us. These third parties have their own privacy policies.</p>
<p>We use Google Analytics to understand, in aggregate, how visitors use the site (for example pages viewed and device type). Google Analytics uses cookies and may collect your IP address and browsing information. You can opt out with the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics opt-out browser add-on</a>.</p>
<h2>5. Children's privacy</h2><p>QuickToolHub is not directed to children under 13 and we do not knowingly collect personal information from children.</p>
<h2>6. Your rights</h2><p>Depending on where you live, you may have the right to access, correct or delete personal data we hold about you. Since we collect very little data, please email us and we will help.</p>
<h2>7. Security</h2><p>Processing files inside your browser keeps your content on your device. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>
<h2>8. Changes to this policy</h2><p>We may update this policy from time to time. The "Last updated" date above shows the latest version.</p>
<h2>9. Contact</h2><p>Questions about this policy? Email <a href="mailto:{{MAIL}}">{{MAIL}}</a>.</p>`;

/* ===== pages-index.js ===== */
// pages-index.js — PAGES map: URL path -> [title, description, body]. Add new static pages here.

export const PAGES = {
  "/about": ["About Us", "Learn about QuickToolHub, a free collection of online photo, video, PDF, text and developer tools that run in your browser.", ABOUT],
  "/contact": ["Contact Us", "Contact QuickToolHub for support, feedback, tool requests or business enquiries.", CONTACT],
  "/privacy-policy": ["Privacy Policy", "How QuickToolHub handles your data, cookies and Google AdSense advertising.", PRIVACY],
  "/terms": ["Terms and Conditions", "Terms and conditions for using the QuickToolHub website and tools.", TERMS],
  "/disclaimer": ["Disclaimer", "Disclaimer for the tools, calculators and information on QuickToolHub.", DISCLAIMER]
};
PAGES["/how-to-use"] = ["How to Use", "Step-by-step guides, features and FAQs for QuickToolHub's free online photo, video, PDF, AI prompt, text, developer and calculator tools.", HOWTO];
PAGES["/editorial-policy"] = ["Editorial Policy", "How QuickToolHub builds free online tools, writes guides, checks accuracy, handles advertising and accepts corrections.", EDITORIAL];
