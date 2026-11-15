// blog.js — blog: CSS, categories, rendering and all 16 posts
import { adUnit, escH, ldJson } from "./config.js";
import { TOOLGUIDES } from "./guides.js";
import { html } from "./home-template.js";
import { TBYSLUG, TOOLS } from "./tools.js";

/* ===== blog-css.js ===== */
// blog-css.js — Blog CSS (injected into blog pages).

/* =====================================================================
   NEW: /blog section (added for AdSense "thin / low value content"
   review). Long-form, original editorial articles related to the
   toolset, plus a listing page. Uses the same layout() shell, LCSS and
   header/footer as every other static page, so nothing else changes.
   ===================================================================== */
export let BLOGCSS = '<style>.art{max-width:72ch;margin:auto}.art h1{margin-bottom:6px}.artmeta{color:var(--mu);font-size:13px;margin:0 0 22px;display:flex;flex-wrap:wrap;gap:10px;align-items:center}.artmeta .av{width:28px;height:28px;border-radius:50%;background:var(--a);color:var(--on);display:inline-flex;align-items:center;justify-content:center;font-weight:800;font-family:var(--hf);font-size:13px;border:2px solid var(--ln)}.art h2{margin-top:30px}.art h3{margin-top:20px;font-family:var(--hf);font-size:18px}.art ul,.art ol{color:var(--tx);opacity:.92;max-width:70ch}.art li{margin:4px 0}.artrelated{background:var(--cd);border:2px solid var(--ln);border-radius:14px;padding:16px 18px;margin:26px 0;box-shadow:4px 4px 0 var(--ln)}.artrelated h3{margin-top:0}.artrelated ul{list-style:none;padding:0;margin:8px 0 0}.artrelated li{margin:4px 0}.blogidx{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;margin-top:20px}.bcard{background:var(--cd);border:2px solid var(--ln);border-radius:14px;padding:16px;box-shadow:4px 4px 0 var(--ln);text-decoration:none;display:block;color:var(--tx)}.bcard:hover{transform:translate(-2px,-2px)}.bcard h3{margin:0 0 6px;font-family:var(--hf);font-size:18px;letter-spacing:-.01em}.bcard p{margin:0;font-size:13px;color:var(--mu)}.bcard .bm{font-size:12px;color:var(--mu);margin-top:10px}</style>';
BLOGCSS = BLOGCSS.replace(/<\/style>$/, ".bchips{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0 4px}.bchips a{border:2px solid var(--ln);border-radius:999px;padding:4px 12px;font-size:13px;text-decoration:none;background:var(--cd);color:var(--tx)}.bchips a.on,.bchips a:hover{background:var(--a);color:var(--on)}.bcat{display:inline-block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--mu);margin-bottom:6px}</style>");

/* ===== blog-categories.js ===== */
// blog-categories.js — Blog categories and which post belongs to which category.

export const BLOGCATS = [
  ["images", "Images and Photos", "Guides on compressing, resizing, converting and sizing pictures, with advice on choosing between JPG, PNG and WebP.", "Pictures are the heaviest part of most web pages and messages. These articles explain how image formats differ, how to shrink a photo without visible damage, and which sizes social platforms expect, so you can prepare images that look sharp and load quickly."],
  ["pdf-documents", "PDF and Documents", "Guides on merging, splitting and tidying PDF files and preparing clean documents for applications.", "Forms, applications and offices still run on PDF files. These articles show how to combine pages, remove or rotate them, and prepare a neat document pack, all without installing software or uploading private papers to a server."],
  ["video", "Video", "Guides on trimming, shrinking and reframing short videos in the browser.", "You do not need desktop editing software for every small video job. These articles cover trimming, compressing and reframing clips for sharing, and explain what to expect when a video is processed inside your browser."],
  ["ai-prompts", "AI and Prompts", "Guides on writing better AI prompts and understanding tokens and API costs.", "Clear prompts get better answers, and tokens decide what AI services cost. These articles explain how to give an AI useful instructions and how to estimate prompt size and running costs before you build or buy."],
  ["money-business", "Money and Business", "Guides on EMI, SIP, GST, discounts and profit margins.", "Loans, investments and prices all come down to a little arithmetic. These articles explain the maths behind EMI, SIP, GST and margins in plain language, with worked examples you can repeat with your own figures."],
  ["text-code-links", "Text, Code and Links", "Guides on text formatting, data formats and QR codes.", "Small formatting details make writing and data easier to read and use. These articles explain text case styles, JSON, Base64 and hashing, and how QR codes work, in terms that non-developers can follow."],
  ["privacy-security", "Privacy and Security", "Guides on keeping files and passwords safe online.", "Private documents and passwords deserve care. These articles explain why processing files in your browser reduces exposure, and how password generators and hashes help protect your accounts."]
];
export const BLOGCATBY = {};
BLOGCATS.forEach(function (c) { BLOGCATBY[c[0]] = c; });
export const BLOGCAT = {
  "compress-images-without-losing-quality": "images", "image-formats-jpg-png-webp-explained": "images", "social-media-image-video-sizes-reference": "images",
  "merge-split-organize-pdf-files": "pdf-documents", "how-to-prepare-a-clean-pdf-resume": "pdf-documents",
  "browser-video-editing-without-installing-software": "video", "how-to-compress-videos-without-ruining-quality": "video",
  "beginners-guide-to-writing-better-ai-prompts": "ai-prompts", "ai-tokens-explained-and-how-to-estimate-api-cost": "ai-prompts",
  "emi-vs-sip-understanding-the-math": "money-business", "gst-discounts-profit-margins-for-small-sellers": "money-business",
  "complete-guide-to-text-case-styles": "text-code-links", "json-base64-hashing-explained-for-non-developers": "text-code-links", "beginners-guide-to-qr-codes": "text-code-links",
  "why-browser-based-tools-are-safer-for-private-files": "privacy-security", "password-security-generators-hashes-explained": "privacy-security"
};

/* ===== blog-post-compress-images-without-losing-quality.js ===== */
// Blog post: compress-images-without-losing-quality
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_compress_images_without_losing_quality = ["compress-images-without-losing-quality",
  "10 Practical Ways to Compress Images Without Losing Quality",
  "A practical guide to shrinking photo file sizes for the web, email and social media while keeping them sharp, using free browser-based tools.",
  "2026-08-03", 7, ["image-compressor", "image-resizer", "jpg-to-png", "image-to-webp"],
  String.raw`<p>A large, uncompressed photo is one of the most common reasons a web page loads slowly, an email bounces back, or a WhatsApp upload takes forever on a weak connection. The good news is that most photos can be made dramatically smaller with almost no visible loss in quality, as long as you understand a few basic ideas about how image compression actually works. This guide walks through ten practical, no-nonsense techniques you can apply today using nothing more than your browser.</p>

<h2>1. Understand the difference between lossy and lossless compression</h2>
<p>Lossless compression (used by formats like PNG) shrinks a file by removing redundant data without throwing away any visual information. Lossy compression (used by JPG and WebP) throws away some detail the human eye is unlikely to notice, which is why it achieves far smaller file sizes. For photographs with lots of color and texture, lossy formats almost always make more sense. For screenshots, logos, or graphics with flat colors and sharp edges, lossless formats preserve crispness better.</p>

<h2>2. Pick the right file format for the job</h2>
<p>JPG remains the safest universal choice for photographs because every device and platform supports it. PNG is better for images that need transparency or have large flat-color areas, like a logo. WebP, a newer format, typically produces smaller files than JPG at the same visual quality and is now supported by virtually every modern browser, which makes it an excellent choice for websites. If you are not sure which to pick, converting a photo with an <a href="/tools/image-to-webp">Image to WebP</a> tool and comparing the resulting size against the JPG version takes only a few seconds.</p>

<h2>3. Resize before you compress</h2>
<p>One of the biggest, most overlooked wins is simply resizing an image to the dimensions it will actually be displayed at. A 4000×3000 pixel photo straight out of a phone camera is massive overkill for a blog post that displays images at 800 pixels wide. Resizing first with a tool like an <a href="/tools/image-resizer">Image Resizer</a> and only then compressing will almost always produce a smaller, cleaner result than compressing the full-size original and scaling it down with CSS later.</p>

<h2>4. Find your "good enough" quality setting</h2>
<p>Most compressors let you choose a quality percentage, typically from around 60 to 95. Above roughly 85%, the visual difference becomes very hard to spot for most photos, but the file size keeps climbing. Below about 50%, you'll start to notice blocky artifacts, especially around sharp edges or text. A quality setting in the 70-80% range is usually the sweet spot for everyday use: barely distinguishable from the original, but a fraction of the size. Try a couple of settings side by side with an <a href="/tools/image-compressor">Image Compressor</a> before settling on one.</p>

<h2>5. Flatten transparency when you don't need it</h2>
<p>A PNG with an alpha (transparency) channel carries extra data even in areas that look fully opaque. If your final image doesn't need transparency, converting it to JPG strips that channel out entirely and often cuts the file size considerably, on top of whatever compression you apply afterward.</p>

<h2>6. Watch out for repeated re-saving</h2>
<p>Because JPG is a lossy format, every time you open a JPG, make a small edit and save it again, a little more detail is lost. If you plan to make several edits, work from the original uncompressed photo each time, make all your changes, and compress only once at the very end, rather than compressing after every small tweak.</p>

<h2>7. Batch similar images with the same settings</h2>
<p>If you're preparing a gallery, a product catalog, or a set of blog illustrations, keeping the resize dimensions and quality percentage consistent across the whole set gives your page a uniform load time and a tidier visual feel. Write your chosen settings down once (for example, "1200px wide, 78% quality, WebP") and reuse them for every image in that batch.</p>

<h2>8. Strip hidden metadata</h2>
<p>Photos taken on phones often carry EXIF metadata: camera model, GPS coordinates, timestamps and more. This information adds to the file size and, more importantly, can unintentionally reveal where a photo was taken. Before sharing a personal photo publicly, running it through a tool like <a href="/tools/remove-photo-metadata-exif">Remove Photo Metadata (EXIF)</a> strips that hidden data while keeping the visible image untouched.</p>

<h2>9. Match compression to the destination</h2>
<p>A photo heading to Instagram, which recompresses everything on upload anyway, doesn't need to be squeezed as hard as one destined for a slow-loading landing page where every kilobyte affects bounce rate. Email attachments have their own practical limits too — many providers start complaining above 20-25MB for a whole message, so a handful of compressed photos will get through far more reliably than a handful of untouched camera originals.</p>

<h2>10. Always keep an original copy</h2>
<p>Compression is a one-way street for lossy formats. Before you resize or compress anything, keep the original file somewhere safe, whether that's your phone's camera roll, a cloud backup, or a dedicated folder. That way, if a future use case needs higher quality or a different crop, you're not stuck working from an already-compressed copy.</p>

<h3>Putting it together</h3>
<p>In practice, a simple workflow covers almost every situation: resize to the dimensions you actually need, choose JPG or WebP for photographs, dial the quality to around 70-80%, strip metadata if the photo is personal, and keep the original safely tucked away. None of these steps require installing software — they can all be done directly in your browser, and your files never leave your device in the process.</p>`
  ];

/* ===== blog-post-merge-split-organize-pdf-files.js ===== */
// Blog post: merge-split-organize-pdf-files
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_merge_split_organize_pdf_files = ["merge-split-organize-pdf-files",
  "How to Merge, Split and Organize PDF Files Like a Pro",
  "A complete walkthrough of combining, splitting, reordering and cleaning up PDF documents using free browser-based tools, with practical tips for common situations.",
  "2026-08-10", 8, ["merge-pdf", "split-extract-pdf-pages", "delete-pdf-pages", "rotate-pdf", "add-page-numbers", "pdf-watermark"],
  String.raw`<p>PDFs are the default format for anything that needs to look the same everywhere: contracts, invoices, resumes, scanned forms, reports. But PDFs are also notoriously fiddly to rearrange once they exist. A page is upside down, two files need to become one, a confidential draft needs five pages removed before it goes out. This guide covers the most common PDF organization tasks and how to handle each one cleanly.</p>

<h2>Combining multiple PDFs into one</h2>
<p>The most frequent request is probably merging: you've scanned three separate pages, or you have a cover letter and a resume as two files, and you need one single document to attach to an email or upload to a portal. A good <a href="/tools/merge-pdf">Merge PDF</a> tool lets you add files one at a time or all together, then reorder them visually before combining, which matters more than it sounds: once merged, fixing the order means starting again, so check the sequence carefully first.</p>
<h3>A quick checklist before merging</h3>
<ul>
<li>Open each file briefly first to confirm it's the correct version — it's easy to grab an old draft by mistake.</li>
<li>Decide on the final page order before you start adding files, rather than figuring it out as you go.</li>
<li>If any file is password protected, remove the password with a trusted PDF tool before attempting to merge it.</li>
</ul>

<h2>Splitting a large PDF into smaller pieces</h2>
<p>Sometimes the opposite problem shows up: a 40-page report where you only need pages 12 through 15 for a specific purpose, or a scanned book that needs to become individual chapters. A <a href="/tools/split-extract-pdf-pages">Split / Extract PDF Pages</a> tool handles this with a simple page range (such as "1-3,5"), letting you pull out exactly the pages you need without touching the rest of the document.</p>

<h2>Removing unwanted pages</h2>
<p>Not every situation calls for extraction — sometimes you just want to delete a blank scanned page, a cover sheet that isn't needed, or an internal page that shouldn't go to an external reader. A dedicated <a href="/tools/delete-pdf-pages">Delete PDF Pages</a> tool is the safer option here compared to extracting everything except the pages you want to remove, especially in a long document where it's easy to lose count.</p>

<h2>Fixing page orientation</h2>
<p>Scanned documents are notorious for ending up sideways or upside down, especially when scanning from a mobile phone camera or a flatbed scanner that was loaded the wrong way. A <a href="/tools/rotate-pdf">Rotate PDF</a> tool applies a 90, 180 or 270 degree turn to every page at once, which is far faster than rotating each page individually in a heavier desktop PDF editor.</p>

<h2>Adding structure: page numbers and watermarks</h2>
<p>Once content is finalized, two small additions make a big difference to how professional a document feels. Page numbers help readers navigate and reference specific sections in discussions or reviews — an <a href="/tools/add-page-numbers">Add Page Numbers</a> tool stamps a number at the bottom of every page automatically. A watermark, meanwhile, is useful when sharing a draft that shouldn't be mistaken for a final version, or when you want a light brand mark across every page; a <a href="/tools/pdf-watermark">PDF Watermark</a> tool lets you set custom text and have it tiled diagonally across each page.</p>

<h2>A sensible order of operations</h2>
<p>When a document needs several of these steps, doing them in the right order saves time and avoids rework:</p>
<ol>
<li>Merge or extract the pages you need first, so you're working with the final set of content.</li>
<li>Delete any remaining unwanted pages.</li>
<li>Reverse or rotate pages so everything reads in the correct direction and order.</li>
<li>Add page numbers once the final page count is locked in — adding them earlier means renumbering if pages are added or removed later.</li>
<li>Apply a watermark last, since it's the one step you might want to redo if you change your mind about the wording.</li>
</ol>

<h2>Common mistakes to avoid</h2>
<ul>
<li><b>Editing the only copy you have.</b> Browser-based PDF tools process your file locally and give you a new, separate output file, but it's still good practice to keep your original PDF untouched somewhere, especially before destructive edits like deleting pages.</li>
<li><b>Forgetting to check the result.</b> Always open the final PDF and skim through it before sending it anywhere important — a page range typo (like "1-3,5" entered as "1-35") can quietly produce a very different document than intended.</li>
<li><b>Ignoring file size.</b> If a PDF is full of high-resolution scanned images and will be emailed, consider whether you actually need print-quality resolution, or whether a smaller, screen-friendly version would be easier for the recipient to download.</li>
</ul>

<h2>When a scanned PDF needs more than reorganizing</h2>
<p>If your PDF started life as a photo of paper rather than digitally created text, you may eventually want to convert specific pages into standalone images (for a presentation slide, for instance) using a PDF to JPG or PDF to PNG tool, rather than fighting with the PDF format directly for a task it wasn't designed for.</p>

<p>None of these tasks require specialized software or technical skill — they're common enough that a good browser-based toolkit, used in the right order, will get a messy folder of PDFs organized in a few focused minutes.</p>`
  ];

/* ===== blog-post-beginners-guide-to-writing-better-ai-prompts.js ===== */
// Blog post: beginners-guide-to-writing-better-ai-prompts
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_beginners_guide_to_writing_better_ai_prompts = ["beginners-guide-to-writing-better-ai-prompts",
  "A Beginner's Guide to Writing Better AI Prompts",
  "Why most AI prompts underperform, and a simple structure you can reuse to get sharper, more useful answers from ChatGPT, Gemini, Claude and other chatbots.",
  "2026-08-17", 8, ["chatgpt-ai-prompt-generator", "ai-prompt-improver", "ai-image-prompt-generator", "summarize-rewrite-prompt"],
  String.raw`<p>Ask an AI chatbot a vague question and you'll usually get a vague, generic answer back. Ask it a specific, well-structured question and the quality jumps noticeably, often without needing a more advanced model at all. The difference almost always comes down to the prompt itself. This guide breaks down what separates a weak prompt from a strong one, and gives you a repeatable structure you can apply to nearly any task.</p>

<h2>Why "write me a blog post" rarely works well</h2>
<p>A request like "write me a blog post about marketing" gives the AI almost nothing to work with: no audience, no angle, no length, no tone, no format. The model has to guess at every one of those decisions, and it will guess generically, because generic is the statistically safest bet across every possible blog post about marketing. The fix isn't to write a longer sentence — it's to fill in the specific gaps the AI is being forced to guess at.</p>

<h2>The five things every good prompt answers</h2>
<ul>
<li><b>Role:</b> Who should the AI act as? "A senior copywriter," "an experienced math teacher," and "a blunt startup advisor" each produce a noticeably different voice and level of assumed knowledge.</li>
<li><b>Task:</b> What exactly do you want done? Be as concrete as possible — "write five Instagram captions" rather than "help with Instagram."</li>
<li><b>Context:</b> What background does the AI need to avoid generic output? Your industry, your audience, constraints, examples of what you like or dislike.</li>
<li><b>Format:</b> How should the answer be structured — bullet points, a table, a numbered list, a short paragraph, JSON for a program to read?</li>
<li><b>Tone:</b> Formal, casual, funny, persuasive, technical? Tone shapes word choice as much as content.</li>
</ul>
<p>Fill in all five and even a short prompt will usually outperform a long, rambling one that's missing several of them. A <a href="/tools/chatgpt-ai-prompt-generator">ChatGPT / AI Prompt Generator</a> is built around exactly this structure, so you're prompted for each piece rather than having to remember the checklist yourself.</p>

<h2>Show, don't just tell</h2>
<p>If you have an example of output you like — a caption style, a tone of voice, a report format from a previous project — pasting a short sample into your prompt and asking the AI to match that style is far more effective than describing the style in abstract terms. "Write it like this example" consistently beats "write it in a punchy, engaging tone," because "punchy" means something slightly different to everyone, including the model.</p>

<h2>Ask the AI to ask you questions first</h2>
<p>For anything moderately complex, adding a line like "before answering, ask me up to three clarifying questions if anything is unclear" changes the whole interaction. Instead of the AI silently guessing at missing details and producing something that misses the mark, it surfaces the gaps explicitly, and you get a chance to fill them in before any real work happens. This single habit prevents a huge share of frustrating back-and-forth revisions.</p>

<h2>Iterate instead of starting over</h2>
<p>If the first response isn't quite right, it's almost always faster to give specific feedback on that response ("make the second paragraph shorter and cut the exclamation marks") than to rewrite your original prompt from scratch. Chatbots retain the conversation context, so small, targeted corrections compound quickly into exactly what you need.</p>

<h2>Turning a rough idea into a structured prompt</h2>
<p>Not every prompt needs to be built field by field. If you already have a rough idea in mind — "something about how to start a YouTube channel" — an <a href="/tools/ai-prompt-improver">AI Prompt Improver</a> can expand that into a properly structured request with built-in instructions to ask clarifying questions and avoid generic advice, saving you the work of structuring it by hand every time.</p>

<h2>Prompting for images and video is a different skill</h2>
<p>Image and video generators respond to a noticeably different style of prompt: short, dense, descriptive phrases rather than full sentences, with explicit mentions of style, lighting, mood and aspect ratio. "A lone traveller walking through a bamboo forest at sunrise, cinematic lighting, slow dolly-in, 16:9" will consistently outperform a flowery paragraph description, because these models respond more to specific visual tags than to narrative prose. An <a href="/tools/ai-image-prompt-generator">AI Image Prompt Generator</a> structures exactly this kind of tag-style prompt for you, including a negative prompt section to exclude common artifacts.</p>

<h2>Keep a personal prompt library</h2>
<p>Once you find a prompt structure that reliably works for a recurring task — weekly social captions, meeting summaries, code review requests — save it somewhere you can quickly find again, swapping in the new specifics each time rather than rebuilding it from memory. Over a few months, this saved library becomes genuinely valuable, often more useful than any single clever one-off prompt.</p>

<h2>A simple template to start from</h2>
<p>If you only remember one structure, use this: "Act as [role]. My task is [specific task]. Here is the relevant context: [details]. Please format the answer as [format] in a [tone] tone. If anything is unclear, ask me up to three questions first." Filling in those five blanks will noticeably improve almost any request you send to an AI chatbot, regardless of which one you use.</p>`
  ];

/* ===== blog-post-browser-video-editing-without-installing-software.js ===== */
// Blog post: browser-video-editing-without-installing-software
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_browser_video_editing_without_installing_software = ["browser-video-editing-without-installing-software",
  "Video Editing in Your Browser: What's Possible Without Installing Software",
  "An honest look at what browser-based video tools can and can't do, and when they're the right choice instead of a full desktop editor.",
  "2026-08-24", 7, ["video-trimmer", "video-compressor", "video-to-reels-shorts-9-16", "add-text-to-video", "video-fade-in-out"],
  String.raw`<p>Desktop video editors like Premiere Pro or DaVinci Resolve are powerful, but they're also overkill for a huge share of everyday video tasks — trimming a clip, cropping it for Reels, adding a caption, slowing a moment down. Modern browsers can now handle a surprising amount of this work directly, using the same camera and media APIs that power video calls, with no installation, no account and no upload to a third-party server. This article covers what's realistically achievable in-browser, and where the limits are.</p>

<h2>How browser-based video editing actually works</h2>
<p>Instead of uploading your video to a server for processing, a browser-based editor draws each frame onto a canvas element in real time, applies effects or crops directly on that canvas, and then re-records the result using the browser's built-in MediaRecorder API. This is why the video has to play through at roughly real speed while it processes — the browser is essentially capturing the edited playback as it happens, rather than crunching through the file instantly the way desktop software with dedicated encoding hardware can.</p>

<h2>What works well in a browser</h2>
<ul>
<li><b>Trimming:</b> cutting a clip down to a specific start and end point, using a <a href="/tools/video-trimmer">Video Trimmer</a>, is one of the most reliable browser-based operations.</li>
<li><b>Cropping for a platform:</b> reframing a landscape video into the vertical 9:16 shape needed for <a href="/tools/video-to-reels-shorts-9-16">Reels and Shorts</a>, or into a square for feed posts, works well because it's a straightforward geometric transform.</li>
<li><b>Simple color filters:</b> black & white, sepia, vivid and similar looks are applied as a CSS-style filter to each frame, which browsers handle efficiently.</li>
<li><b>Speed changes:</b> slow motion and fast-forward effects, by adjusting playback rate during capture.</li>
<li><b>Text overlays and fades:</b> captions and smooth fade-in/fade-out transitions, which only require drawing extra elements on top of each frame.</li>
<li><b>Compression:</b> reducing file size and resolution for easier sharing, by re-encoding at a lower bitrate and width.</li>
</ul>

<h2>What's harder or not realistic in a browser</h2>
<ul>
<li><b>Multi-track timelines:</b> layering several video clips, transitions and audio tracks the way a professional editor does requires a level of timeline management that goes well beyond what a lightweight browser tool is built for.</li>
<li><b>Advanced color grading:</b> fine-grained curves, scopes and LUTs are a desktop-editor specialty.</li>
<li><b>Very long or very high-resolution files:</b> a two-hour 4K video will strain any browser tab's memory; browser tools are at their best with short clips meant for social media, not full-length productions.</li>
<li><b>Precise frame-accurate cuts:</b> real-time canvas capture is good enough for casual content but isn't the right tool when you need to cut exactly on a single frame for professional broadcast work.</li>
</ul>

<h2>Practical tips for better results</h2>
<p>Keep the browser tab in focus and active while a video is processing — rendering on a canvas that's in a background tab can be throttled by the browser to save battery, which slows things down. Trim unnecessary footage before applying other effects, since a shorter clip processes faster through every subsequent step. And if you're stacking several effects (say, trimming, then adding text, then compressing), expect to do each step as a separate pass, downloading and re-uploading between them, since browser tools typically specialize in doing one transformation well rather than chaining several at once.</p>

<h2>Where this fits for most people</h2>
<p>If your task is preparing a short clip for Instagram, cutting a highlight from a longer recording, muting a video before sharing it, or adding a simple caption, browser-based tools genuinely save time: no install, no sign-up, no waiting for a heavy application to open, and the file never has to leave your device to be uploaded to someone else's server. For a serious multi-clip production with a real timeline, color grading and audio mixing, a dedicated desktop editor is still the right tool. Knowing which category your task falls into before you start is the fastest way to avoid picking the wrong tool for the job.</p>

<h2>Getting the best results from a real-time browser tool</h2>
<p>Because the browser is capturing playback in real time rather than crunching the file instantly, a few habits make a noticeable difference to the final quality. Close other demanding tabs and background downloads while a video is rendering, since the browser is sharing CPU and memory with everything else open at that moment. If a result looks choppier than expected, try reducing the output resolution one step and comparing — a slightly smaller export that renders cleanly almost always looks better than a full-resolution one that stutters while being captured. And if you're preparing several short clips for the same campaign, process them one at a time rather than opening several tool tabs simultaneously, since each one competing for the same system resources will slow all of them down together.</p>

<h2>Combining a browser tool with a heavier editor</h2>
<p>These two approaches don't have to be an either-or choice. A common, efficient workflow is to do the rough, repetitive work in the browser — trimming a batch of raw clips down to the interesting sections, muting ones that don't need audio, cropping a landscape recording to a vertical shape — and then bring only the already-trimmed, already-cropped clips into a heavier desktop editor for the final assembly, transitions and color work. This cuts down the amount of large, unedited footage the desktop editor has to load and scrub through, which speeds up that part of the process too.</p>

<h2>A simple decision guide</h2>
<p>If the task can be described in one short sentence — "trim this to 15 seconds," "crop this to vertical," "add a caption at the bottom," "slow this part down" — it's almost always a good fit for a quick browser tool. If the task involves the word "timeline," multiple source clips being layered together, or specific frame-by-frame color correction, it's time to open a dedicated editor instead. Most everyday social media content, in practice, lives firmly in the first category, which is exactly why browser-based video tools have become genuinely useful rather than just a novelty.</p>`
  ];

/* ===== blog-post-emi-vs-sip-understanding-the-math.js ===== */
// Blog post: emi-vs-sip-understanding-the-math
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_emi_vs_sip_understanding_the_math = ["emi-vs-sip-understanding-the-math", // nosec
  "EMI vs SIP: Understanding the Math Behind Your Money",
  "A plain-language explanation of how loan EMIs and SIP investment returns are actually calculated, so the numbers a calculator gives you stop feeling like a black box.",
  "2026-09-01", 8, ["emi-calculator", "sip-calculator", "compound-interest-calculator", "cagr-calculator"],
  String.raw`<p>EMI and SIP are two of the most commonly searched financial terms in India, and for good reason: one determines how much a loan actually costs you, the other determines how a small monthly habit can grow into a meaningful amount over time. Both rely on compound interest, just applied in opposite directions. This article walks through the actual math in plain language, so the numbers a calculator spits out stop feeling like a black box.</p>

<h2>What EMI really means</h2>
<p>EMI stands for Equated Monthly Installment — the fixed amount you pay every month toward a loan until it's fully repaid. "Equated" is the key word: even though the proportion of interest versus principal within each payment changes over the life of the loan, the total payment amount itself stays the same every month, which makes budgeting predictable.</p>
<h3>The formula, explained in words</h3>
<p>The standard EMI formula calculates a fixed monthly payment such that, after the agreed number of months, the loan balance reaches exactly zero, assuming the interest rate stays constant. Early in the loan's life, a larger share of each EMI goes toward interest, because the outstanding balance is still large. As months pass and the balance shrinks, a growing share of each EMI goes toward the principal instead, even though the total payment amount never changes. This is why paying off a loan a few years early saves more in interest than it might initially seem — you're skipping the months where interest still made up a large chunk of the payment.</p>
<p>Plugging a loan amount, interest rate and tenure into an <a href="/tools/emi-calculator">EMI Calculator</a> instantly shows the monthly payment, the total amount paid over the loan's life, and crucially, the total interest paid — which is often a surprisingly large number relative to the amount actually borrowed, especially over longer tenures.</p>

<h2>What SIP really means</h2>
<p>A Systematic Investment Plan (SIP) works in the opposite direction: instead of paying down a fixed debt, you're investing a fixed amount every month, and that amount grows (ideally) through compound returns. The key insight that makes SIPs powerful over long periods is that each month's investment compounds for a different length of time — money invested in month one compounds for the full duration of the SIP, while money invested in the final month barely compounds at all before the SIP ends.</p>
<p>This is why SIP calculators always ask for an expected annual return rate alongside the monthly amount and duration: a <a href="/tools/sip-calculator">SIP Calculator</a> estimates the future value by compounding each monthly contribution for its own remaining time horizon and summing the results, which is a meaningfully different (and more realistic) calculation than simply multiplying the monthly amount by the number of months and adding flat interest.</p>

<h2>Why time matters more than the monthly amount</h2>
<p>A common surprise when playing with a SIP calculator is seeing how much more impact an extra five or ten years has compared to an extra few hundred rupees a month. This happens because compound growth is exponential, not linear — the earlier money goes in, the more compounding cycles it benefits from. A modest SIP started a decade earlier will often outgrow a significantly larger SIP started later, purely because of the extra time compounding had to work.</p>

<h2>Lump sum growth: compound interest in its simplest form</h2>
<p>If EMI and SIP are the monthly-payment versions of these ideas, a <a href="/tools/compound-interest-calculator">Compound Interest Calculator</a> shows the cleanest version: what happens when a single lump sum is left to grow at a fixed rate, compounded a certain number of times per year. The more frequently interest compounds (monthly versus yearly, for instance), the slightly faster the growth, though the difference is usually smaller than people expect — the headline interest rate and the time horizon matter far more than the compounding frequency.</p>

<h2>CAGR: comparing investments that don't grow in a straight line</h2>
<p>Real investments rarely grow at a perfectly steady rate every year — some years are up, some are down. The Compound Annual Growth Rate (CAGR) answers a specific, useful question: "what single constant annual growth rate, applied smoothly, would have taken the starting value to the ending value over this many years?" It smooths out the bumps into one comparable number, which is why a <a href="/tools/cagr-calculator">CAGR Calculator</a> is so often used to compare two investments that had very different year-to-year paths but a similar overall outcome.</p>

<h2>Putting the pieces together</h2>
<p>None of these calculations require you to trust a calculator blindly — understanding the underlying logic means you can sanity-check the numbers yourself. A longer loan tenure lowers the EMI but increases total interest paid, because the loan compounds against you for longer. A longer SIP duration, by contrast, works in your favor for the same underlying reason: compounding has more time to work. The math is the same formula pointed in two different directions, and once that clicks, loan and investment decisions both become a lot less mysterious.</p>`
  ];

/* ===== blog-post-complete-guide-to-text-case-styles.js ===== */
// Blog post: complete-guide-to-text-case-styles
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_complete_guide_to_text_case_styles = ["complete-guide-to-text-case-styles",
  "The Complete Guide to Text Case Styles and When to Use Them",
  "UPPERCASE, Title Case, camelCase, snake_case and more — what each text case style is actually for, with real examples from writing and programming.",
  "2026-09-08", 6, ["text-case-converter"],
  String.raw`<p>Text case feels like a trivial detail until you're staring at a style guide, a variable naming convention, or a URL slug that needs to follow a very specific pattern. Different case styles exist because different contexts have different rules and different readability needs. This guide runs through the most common ones, where each is actually expected, and a few mistakes that are easy to make without realizing it.</p>

<h2>UPPERCASE: for emphasis, not for whole sentences</h2>
<p>Writing in all capital letters is the loudest option available in plain text, which is exactly why it should be used sparingly: a single emphasized word stands out; an entire paragraph in capitals reads as shouting and is genuinely harder to read, since our brains rely partly on the varying shapes of lowercase letters to recognize words quickly. An <a href="/tools/text-case-converter">UPPERCASE Converter</a> is handy for short labels, headers, or acronyms, but it's worth resisting the urge to apply it to entire blocks of body text.</p>

<h2>lowercase: for a casual, understated tone</h2>
<p>All-lowercase text has become a deliberate stylistic choice in casual contexts — social captions, certain brand voices, informal messages — where it signals a relaxed, low-key tone. It's the opposite instinct of uppercase: quieter rather than louder. A <a href="/tools/text-case-converter">lowercase Converter</a> is often used to strip accidental capitalization from pasted text as much as for stylistic effect.</p>

<h2>Title Case: for headlines and proper titles</h2>
<p>Title Case — where most major words are capitalized — is the standard for article headlines, book titles, and formal headings. The exact rule varies slightly between style guides (some capitalize every word of four letters or more; others have more detailed exception lists for articles and prepositions), but a <a href="/tools/text-case-converter">Title Case Converter</a> handles the common version reliably, and is worth a quick manual check afterward for any brand names or acronyms that have unusual capitalization of their own.</p>

<h2>Sentence case: for body text and most everyday writing</h2>
<p>Sentence case — only the first word (and proper nouns) capitalized — is what the vast majority of ordinary writing uses: emails, articles, messages, this very paragraph. It's the default that readers expect for anything meant to be read at length, which is exactly why Title Case or UPPERCASE applied to a whole paragraph looks visually "off" even before a reader consciously notices why.</p>

<h2>camelCase: the programmer's variable name</h2>
<p>In code, spaces inside variable or function names usually aren't allowed, so programming communities developed conventions to join words together while keeping them readable. camelCase joins words with no separator and capitalizes the first letter of every word except the first — <code>firstName</code>, <code>calculateTotalPrice</code>. It's the standard convention in JavaScript, Java and many other languages for variable and function names. A <a href="/tools/text-case-converter">camelCase Converter</a> is useful when converting a human-readable label or a database column name into a matching variable name for code.</p>

<h2>snake_case: readable, especially in Python</h2>
<p>snake_case uses underscores between lowercase words — <code>first_name</code>, <code>calculate_total_price</code> — and is the dominant convention in Python, as well as in many database column names and configuration files. Some developers find it slightly more readable than camelCase because the underscore creates a clearer visual gap than a capital letter does, though this is partly a matter of habit and community convention rather than an objective readability study.</p>

<h2>kebab-case: the convention for URLs and CSS</h2>
<p>kebab-case — lowercase words joined by hyphens, like <code>first-name</code> or <code>blog-post-title</code> — is the standard for URL slugs and CSS class names, mainly because hyphens are allowed in URLs and are treated as word separators by search engines, while underscores and camelCase can sometimes behave inconsistently in links. A <a href="/tools/text-case-converter">kebab-case Converter</a> is genuinely one of the more practically useful case tools, since getting a URL slug wrong can quietly hurt a page's readability and even its SEO.</p>

<h2>A quick reference for everyday use</h2>
<ul>
<li>Writing a headline or article title → Title Case</li>
<li>Writing normal body text → Sentence case (the default, usually no conversion needed)</li>
<li>Naming a JavaScript or Java variable → camelCase</li>
<li>Naming a Python variable or a database column → snake_case</li>
<li>Building a URL slug or a CSS class → kebab-case</li>
<li>Labeling a short header, button or acronym → UPPERCASE, used sparingly</li>
</ul>

<h2>A small but real trap</h2>
<p>Automated case converters work on a mechanical, word-by-word basis, which means proper nouns, brand names and acronyms with unusual capitalization (like "iPhone" or "eBay") will often come out wrong after a bulk conversion. It's worth a quick manual scan of the result any time your original text contains names like these, rather than trusting the conversion blindly for anything that's about to be published.</p>

<h2>aLtErNaTiNg case and other stylistic variants</h2>
<p>Not every case style maps to a formal rule — some exist purely for tone. Alternating case, where letters flip between upper and lowercase character by character, has become shorthand online for a sarcastic or mocking tone, independent of the actual words used. It's a good example of how case alone, with no change to the words themselves, can completely change how a sentence is read by someone scrolling past it, which is part of why case conversion tools get reached for in casual writing and social posts just as often as in formal documents or code.</p>

<h2>Why consistency matters more than any single rule</h2>
<p>Within a single codebase, a single document, or a single brand's style guide, the specific case convention chosen matters far less than using it consistently throughout. A project that mixes camelCase and snake_case for similar kinds of variables, or a document that switches between Title Case and sentence case headings halfway through, creates a subtle but real friction for anyone reading or maintaining it afterward. When joining an existing project or writing for an existing publication, matching whatever convention is already in use is almost always the right call, even if it isn't the convention you'd have personally chosen starting from scratch.</p>`
  ];

/* ===== blog-post-json-base64-hashing-explained-for-non-developers.js ===== */
// Blog post: json-base64-hashing-explained-for-non-developers
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_json_base64_hashing_explained_for_non_developers = ["json-base64-hashing-explained-for-non-developers",
  "JSON, Base64 and Hashing Explained for Non-Developers",
  "Three terms you'll run into constantly around the web and in tech support conversations, explained without assuming you already know how to code.",
  "2026-09-15", 7, ["json-formatter-validator", "base64-encoder", "sha-256-hash-generator", "jwt-decoder"],
  String.raw`<p>If you've ever opened a browser's developer tools out of curiosity, received an error message mentioning "invalid JSON," or been asked to paste a long jumbled string of letters and numbers into a support form, you've bumped into these three concepts. None of them require a programming background to understand at a useful level — they're really just different ways of structuring, encoding or fingerprinting data, each solving a specific, practical problem.</p>

<h2>JSON: a simple, structured way to write down data</h2>
<p>JSON (JavaScript Object Notation) is a text format for representing structured information — think of it as a more rigid, computer-friendly version of a list or a form. A simple example looks like this: a set of key-value pairs, where each key is a label in quotes, followed by a colon, followed by its value, with pairs separated by commas and the whole thing wrapped in curly braces. Lists of items are wrapped in square brackets. Because the format is so simple and strict, almost every programming language and almost every web API uses it to send and receive data.</p>
<p>The strictness is also where things go wrong: a missing comma, an extra comma after the last item, or quote marks used inconsistently will make a JSON document "invalid," and most tools that read it will refuse to process it at all rather than guessing at what was meant. This is why a <a href="/tools/json-formatter-validator">JSON Formatter & Validator</a> is genuinely useful even for non-developers who are just trying to troubleshoot — pasting in a block of JSON and seeing exactly where it breaks is far faster than scanning by eye for a missing character.</p>
<p>A <a href="/tools/json-minifier">JSON Minifier</a> does the opposite job: once a JSON document is correct and ready to be sent somewhere, stripping all the extra spacing and line breaks makes the file smaller and faster to transmit, at the cost of making it harder for a human to read — which is fine, because at that point a human doesn't need to read it anymore.</p>

<h2>Base64: turning data into plain text-safe characters</h2>
<p>Base64 isn't encryption and it isn't compression — it's a way of representing binary data (like an image or a file) using only a limited set of safe, printable characters (letters, numbers, plus a couple of symbols), so that it can be embedded inside things that only understand plain text, such as an email, a URL, or certain parts of a webpage's code. A small image can be converted into a long Base64 text string and embedded directly inside an HTML file, avoiding a separate image file entirely.</p>
<p>Because Base64 is a direct, reversible encoding rather than a secret, anyone can decode it back to the original data with a <a href="/tools/base64-decoder">Base64 Decoder</a> — it provides no privacy or protection whatsoever. If you ever see a long string that starts with something like "data:image/png;base64," that's exactly this encoding in action, and a <a href="/tools/base64-encoder">Base64 Encoder</a> or decoder will convert it back and forth in a click.</p>

<h2>Hashing: a fingerprint, not a code you can reverse</h2>
<p>A hash function takes any input — a password, a file, a sentence — and produces a fixed-length string of characters that acts like a unique fingerprint of that exact input. Change even one character of the input, and the resulting hash looks completely different, with no obvious relationship to the original. Crucially, unlike Base64, a hash cannot be reversed back into the original input — it's a one-way function by design.</p>
<p>This is precisely why websites store password hashes instead of your actual password: when you log in, the site hashes what you typed and compares that hash against the one stored from when you set the password, without ever needing to keep your actual password anywhere. Common hash algorithms you'll see referenced include SHA-1 (now considered weak for security purposes), and the stronger SHA-256 and SHA-512, which a <a href="/tools/sha-256-hash-generator">SHA-256 Hash Generator</a> can compute instantly for any text, which is also a quick way to verify that two copies of a file are byte-for-byte identical, since even a tiny difference produces a wildly different hash.</p>

<h2>JWT: Base64 and hashing working together</h2>
<p>A JSON Web Token (JWT) is a real-world example of several of these ideas combined: it's a compact token, commonly used to prove you're logged in to a website, made up of three Base64-encoded sections separated by dots — a header describing the token, a payload containing the actual claims (like a user ID), and a signature that uses hashing to verify the token hasn't been tampered with. A <a href="/tools/jwt-decoder">JWT Decoder</a> reveals the header and payload instantly, since those parts are only Base64-encoded, not encrypted — which is an important distinction, because it means a JWT should never be used to hide sensitive information, only to verify identity and authorization.</p>

<h2>Why this matters even if you don't write code</h2>
<p>Understanding these three ideas at a basic level makes a surprising number of everyday tech situations less mysterious: why an error message mentions invalid JSON, why a long string of random-looking characters in a URL isn't actually encrypted, and why a website never has to "remember" your actual password to log you in securely. None of it requires writing a line of code — just recognizing what each piece of jumbled-looking text is actually doing.</p>`
  ];

/* ===== blog-post-social-media-image-video-sizes-reference.js ===== */
// Blog post: social-media-image-video-sizes-reference
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_social_media_image_video_sizes_reference = ["social-media-image-video-sizes-reference",
  "Social Media Image & Video Sizes in 2026: A Quick Reference",
  "The current recommended dimensions for Instagram, YouTube, Facebook, LinkedIn, X and WhatsApp, plus practical tips for cropping content to fit without losing the subject.",
  "2026-09-22", 6, ["social-media-image-size-guide", "video-to-square-1-1", "video-to-reels-shorts-9-16", "instagram-grid-splitter"],
  String.raw`<p>Every major platform has its own preferred dimensions for posts, covers, profile photos and video, and those recommendations do shift over time as platforms redesign their apps. Posting an image at the wrong size usually means an awkward crop chosen automatically by the platform rather than by you, which can cut off faces, text or important details. This reference covers the dimensions worth knowing in 2026, along with practical advice for cropping content properly instead of leaving it to chance.</p>

<h2>Instagram</h2>
<ul>
<li><b>Feed post (square or portrait):</b> 1080×1080 for square, or 1080×1350 for the taller 4:5 ratio, which currently takes up more vertical space in the feed.</li>
<li><b>Story / Reel:</b> 1080×1920, a 9:16 vertical ratio.</li>
<li><b>Profile photo:</b> 320×320, though Instagram displays it as a circle, so keep important details away from the corners.</li>
</ul>
<p>A <a href="/tools/video-to-reels-shorts-9-16">Video to Reels / Shorts 9:16</a> tool handles the vertical crop automatically by center-cropping a landscape video, which works well as long as the main subject stays roughly centered in the original footage.</p>

<h2>YouTube</h2>
<ul>
<li><b>Thumbnail:</b> 1280×720, the standard 16:9 widescreen ratio.</li>
<li><b>Channel banner:</b> 2560×1440, though only the center "safe area" is guaranteed to show consistently across devices, so keep your logo and key text well within the middle portion.</li>
<li><b>Shorts:</b> 1080×1920, matching Instagram and TikTok's vertical format.</li>
</ul>

<h2>Facebook</h2>
<ul>
<li><b>Feed post image:</b> 1200×630 displays cleanly across most layouts.</li>
<li><b>Cover photo:</b> 820×312 on desktop, though Facebook crops this differently on mobile, so avoid placing critical text near the very top or bottom edges.</li>
</ul>

<h2>WhatsApp</h2>
<ul>
<li><b>Profile photo:</b> 500×500 is a safe, commonly used size.</li>
<li><b>Status update:</b> 1080×1920, the same vertical format used by Instagram and Snapchat stories.</li>
</ul>

<h2>LinkedIn</h2>
<ul>
<li><b>Feed post image:</b> 1200×627 fits the feed layout cleanly.</li>
<li><b>Banner:</b> 1584×396, a wide, short ratio — keep text centered and large, since this banner displays quite small on mobile.</li>
</ul>

<h2>X (formerly Twitter)</h2>
<ul>
<li><b>Feed post image:</b> 1600×900, a standard 16:9 ratio.</li>
<li><b>Header image:</b> 1500×500.</li>
</ul>

<h2>Pinterest</h2>
<ul>
<li><b>Pin:</b> a taller 2:3 ratio, commonly 1000×1500, performs noticeably better in Pinterest's feed than a square image, since Pinterest's layout rewards vertical content.</li>
</ul>

<h2>Cropping without losing the subject</h2>
<p>Automatic center-cropping tools work by keeping the middle of the frame and trimming the edges, which is why the single most useful habit when shooting or sourcing content is to keep your main subject roughly centered in the original frame whenever you know it will later be reformatted for several platforms. A wide establishing shot with a person off to one side, for example, might crop out that person entirely when squeezed into a vertical 9:16 story.</p>

<h2>Building an Instagram profile grid</h2>
<p>One specific, popular format worth a special mention: a single wide image split across three, six, nine or twelve grid tiles to create a unified panoramic effect across an Instagram profile. Because Instagram displays the most recent post first, tiles need to be uploaded in reverse order (the bottom-right tile of the finished grid posted first) for the final layout to read correctly. An <a href="/tools/instagram-grid-splitter">Instagram Grid Splitter</a> handles the slicing and provides correctly numbered files so the upload order is straightforward to follow.</p>

<h2>Why these numbers change over time</h2>
<p>Platforms periodically redesign their feeds, add new placements (stories, reels, carousels) and adjust how much of an image they show before cropping, which is why dimensions that were correct a couple of years ago sometimes look slightly off today. When in doubt, checking a platform's current official guidelines, or simply uploading a test post to a private or draft space before a real campaign goes live, is the safest way to confirm a specific size still displays the way you expect.</p>

<h2>Designing once, exporting for several platforms</h2>
<p>A practical approach many creators use is to design at the largest size they'll need — usually the 1080×1920 vertical format — and keep the most important content (a face, a headline, a product) within the middle 1080×1080 square of that canvas. That middle square survives being center-cropped down to a square post, while the full vertical canvas works as-is for a story or a Reel, which means one piece of source content covers two or three placements without a separate design pass for each one. The parts to avoid putting near the very top or bottom of a vertical canvas are text and faces, since those are exactly the regions a square or a 4:5 crop will trim away first.</p>

<h2>Video-specific considerations beyond the frame size</h2>
<p>Getting the aspect ratio right is only half the job for video content. Many platforms also auto-play video with the sound off by default, which is why captions or burned-in text have become close to standard for short-form video rather than an optional extra. A <a href="/tools/add-text-to-video">caption</a> that repeats the key point of the audio means a viewer scrolling with the sound off still gets the message in the first second or two, before deciding whether to keep watching with audio on.</p>

<h2>Keeping a personal reference sheet</h2>
<p>Because these numbers do shift periodically, it's worth keeping your own short note of the exact dimensions you use most often for your specific accounts, rather than re-searching from scratch every time. A simple running list — platform, placement, dimensions, last confirmed date — takes a minute to maintain and saves a surprising amount of repeated searching over a year of regular posting.</p>`
  ];

/* ===== blog-post-why-browser-based-tools-are-safer-for-private-files.js ===== */
// Blog post: why-browser-based-tools-are-safer-for-private-files
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_why_browser_based_tools_are_safer_for_private_files = ["why-browser-based-tools-are-safer-for-private-files",
  "Why Browser-Based Tools Are Safer for Your Private Files",
  "How client-side processing actually works, why it matters for privacy, and the questions worth asking before uploading a personal document or photo to any online tool.",
  "2026-09-29", 7, ["image-compressor", "merge-pdf", "pdf-watermark", "remove-photo-metadata-exif"],
  String.raw`<p>Every time you use an online tool to edit a photo, convert a document, or process a file, that file has to go somewhere to be worked on — and where exactly "somewhere" is makes a real difference to your privacy. This article explains the technical difference between server-side and browser-side (client-side) processing, why it matters more than most people realize, and a short set of questions worth asking before trusting any tool with a personal file.</p>

<h2>Two very different models</h2>
<p>A traditional online tool works like this: you upload your file, it travels across the internet to a server owned by the tool's provider, that server does the processing, and the result is sent back down to you. Your file exists, at least briefly, on a computer you don't control, and depending on the provider's practices, it might also be logged, cached, or retained for longer than you'd expect.</p>
<p>A browser-based (client-side) tool works differently: your file never leaves your own device. The processing — resizing an image, merging PDF pages, calculating a hash — happens using JavaScript running directly inside your browser tab, using the same underlying technology that powers interactive web pages generally. The result appears on your screen and can be downloaded straight from your device, without ever being transmitted anywhere.</p>

<h2>Why this distinction matters more for some files than others</h2>
<p>For a quick text formatting task, the stakes of server-side processing are usually low. But for a scanned ID document, a medical form, a financial statement, or a personal photo, the stakes are meaningfully higher — these are exactly the kinds of files where you'd rather not leave a copy sitting on a third party's server, even temporarily, even if that provider has a perfectly reasonable privacy policy. Client-side tools sidestep this concern entirely, because there's simply no server-side copy to worry about in the first place.</p>

<h2>A practical way to check which kind of tool you're using</h2>
<p>You can actually verify this yourself with a simple trick: open your browser's developer tools (usually F12 or right-click → Inspect), switch to the Network tab, and then use the online tool as normal. If the tool is genuinely client-side, you will not see your file being sent out in a network request — only the page's own code and assets loading. If you do see a large upload request fire off right as you select your file, that's a sign the processing is happening on a server somewhere, not purely in your browser.</p>

<h2>What client-side processing can't protect you from</h2>
<p>It's worth being precise about what this privacy benefit does and doesn't cover. Client-side processing means your file isn't transmitted to that tool's server for the core editing task — but it doesn't automatically protect you from:</p>
<ul>
<li>A malicious browser extension that can read page content regardless of where processing happens.</li>
<li>Deliberately sharing or uploading the result afterward, which is a separate choice you make once the tool has finished.</li>
<li>Analytics or advertising scripts on the page tracking that you visited and used the tool, even if they never see the file's actual content.</li>
<li>A device that is itself compromised by malware, since client-side processing only protects data in transit to a third party, not data already on an insecure device.</li>
</ul>

<h2>A quick checklist before uploading something sensitive</h2>
<ol>
<li>Check whether the tool's own description or privacy policy explicitly states that files are processed locally in the browser.</li>
<li>If you're unsure, use the Network tab trick above to check for yourself rather than taking a claim on faith.</li>
<li>Strip identifying metadata (like GPS location embedded in a photo) before sharing a file publicly, using a dedicated metadata-removal tool, regardless of where the processing itself happens.</li>
<li>For anything genuinely sensitive — identity documents, medical records, financial statements — prefer tools that are explicit and specific about local, in-browser processing, rather than tools that are vague about where your file actually goes.</li>
</ol>

<h2>The bigger picture</h2>
<p>Client-side processing is one of the more underrated privacy features of the modern web: it means a useful tool doesn't have to come at the cost of handing a copy of your file to a stranger's server. It's not a silver bullet for every security concern, but for the specific, common worry of "where did my file just go," it genuinely closes the loop — the honest answer, for a properly built browser-based tool, is that it never went anywhere at all.</p>

<h2>Why this is also, quietly, a performance benefit</h2>
<p>Privacy aside, there's a second, more practical upside to client-side processing that's easy to overlook: there's no upload wait, no server queue, and no dependency on the provider's servers being fast or even online at that moment. A photo compression or a PDF merge that happens directly in your browser tends to feel close to instant for small files, since the only real bottleneck is your own device's processing power, not a round trip across the internet and back. For anyone on a slow or unreliable connection, this difference is often more noticeable than the privacy angle, even though the two benefits come from exactly the same underlying design choice.</p>

<h2>A note on browser extensions and shared computers</h2>
<p>One privacy angle worth a specific mention: client-side processing protects your file from the tool's own server, but it does nothing to protect a file from other software already running on the same device, such as a browser extension with broad page-reading permissions, or another person who has access to the same shared or public computer. If you're working with a genuinely sensitive document on a shared or public machine, closing other browser tabs, checking which extensions are installed and active, and clearing your browser's downloads folder afterward are sensible extra steps that sit alongside, rather than replace, the benefit of using a client-side tool in the first place.</p>

<h2>Asking the right question before you upload anything</h2>
<p>The single most useful habit this whole topic boils down to is a short pause before uploading something personal: "where does this file actually go once I hit submit, and does this specific tool need to send it anywhere at all to do its job?" For a huge share of everyday tasks — resizing a photo, merging a couple of PDFs, formatting some text — the honest answer is that the file doesn't need to leave your device at all, and increasingly, well-built tools are designed around exactly that fact rather than defaulting to a server round trip out of habit.</p>`
  ];

/* ===== blog-post-gst-discounts-profit-margins-for-small-sellers.js ===== */
// Blog post: gst-discounts-profit-margins-for-small-sellers
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_gst_discounts_profit_margins_for_small_sellers = ["gst-discounts-profit-margins-for-small-sellers",
  "A Practical Guide to GST, Discounts and Profit Margins for Small Sellers",
  "How to calculate GST correctly in both directions, price a discount without accidentally losing money, and understand profit margin versus markup for a small business.",
  "2026-10-06", 8, ["gst-calculator", "discount-calculator", "profit-loss-calculator", "percentage-calculator"],
  String.raw`<p>If you sell anything, even as a small side business, three numbers come up constantly: how much GST to add or remove from a price, how a discount actually affects your bottom line, and whether a price is genuinely profitable once costs are accounted for. Getting any of these slightly wrong, repeated across dozens or hundreds of transactions, adds up to real money. This guide walks through each calculation in plain terms.</p>

<h2>GST: adding it versus removing it are different calculations</h2>
<p>A surprisingly common mistake is calculating GST the same way regardless of whether you're starting from a price before tax or after tax — but these are genuinely different calculations, not just the same formula run forward and backward.</p>
<h3>Adding GST to a base price</h3>
<p>If a product costs ₹1,000 before tax and GST is 18%, the tax amount is simply 18% of ₹1,000, which is ₹180, making the final price ₹1,180. This part is straightforward multiplication.</p>
<h3>Removing GST from a tax-inclusive price</h3>
<p>Here's where it gets less intuitive: if a product's final, tax-inclusive price is ₹1,180 and GST is 18%, the tax portion is <em>not</em> 18% of ₹1,180 (which would incorrectly give ₹212.40). Instead, the original pre-tax price has to be calculated first by dividing ₹1,180 by 1.18, giving back the original ₹1,000, and the tax amount is the difference between the two. This distinction trips up a lot of people doing quick mental math, which is exactly why a dedicated <a href="/tools/gst-calculator">GST Calculator</a> with both an "add GST" and "remove GST" mode is worth using rather than trying to reverse-engineer the percentage by hand.</p>

<h2>Discounts: a percentage off doesn't mean what people assume</h2>
<p>A "20% off" discount seems simple, but sellers sometimes make a subtle error when trying to work backward from a target discounted price to figure out what the original price needs to be, or when stacking a discount on top of GST in the wrong order. The basic calculation is straightforward with a <a href="/tools/discount-calculator">Discount Calculator</a>: take the original price, calculate the discount amount as a percentage of that original price, and subtract. The part worth double-checking is the order of operations when GST is also involved — generally, whether GST is calculated before or after a discount depends on local tax rules and how the discount is structured (as a price reduction versus a separate coupon), so it's worth confirming the correct sequence for your specific situation rather than assuming.</p>

<h2>Profit margin versus markup: two different percentages people confuse</h2>
<p>This is probably the single most common pricing mistake among small sellers: treating "margin" and "markup" as the same thing, when they're calculated from different bases and give meaningfully different numbers.</p>
<ul>
<li><b>Markup</b> is the percentage added on top of your cost price to arrive at your selling price. If something costs you ₹500 and you sell it for ₹650, your markup is ₹150 on a ₹500 cost, which is a 30% markup.</li>
<li><b>Margin</b> is the percentage of the selling price that is profit. Using the same numbers, your profit of ₹150 is calculated against the ₹650 selling price, not the ₹500 cost, giving roughly a 23% margin.</li>
</ul>
<p>These numbers will always differ (margin is always a smaller percentage than markup, for the same actual profit amount), and confusing the two leads to real pricing mistakes — setting a price expecting a 30% margin when you've actually calculated a 30% markup means your real profit margin is noticeably lower than you think. A <a href="/tools/profit-loss-calculator">Profit & Loss Calculator</a> clears this up by working from your actual cost and selling price directly, showing the real profit amount and percentage rather than requiring you to remember which formula applies.</p>

<h2>A worked example pulling it together</h2>
<p>Say you buy a product for ₹500, want to apply an 18% GST, and plan to sell it at a price that gives you a 25% margin after tax. Working this out requires combining all three ideas: the GST-inclusive cost needs to be calculated first (₹500 × 1.18 = ₹590), and then the selling price needs to be set such that ₹590 represents 75% of that price (since a 25% margin means your cost is 75% of the selling price), giving a target selling price of roughly ₹786.67. Running each of these steps through dedicated calculators, rather than trying to chain the whole formula in your head, dramatically reduces the chance of a small arithmetic slip turning into a mispriced product.</p>

<h2>A quick reference you can reuse</h2>
<ul>
<li>Adding GST to a price: multiply by (1 + GST rate).</li>
<li>Removing GST from a price: divide by (1 + GST rate), don't just subtract the percentage.</li>
<li>Markup = profit ÷ cost price. Margin = profit ÷ selling price. They're never the same number for a given profit amount.</li>
<li>Always double-check whether a discount should be applied before or after tax for your specific tax jurisdiction and discount type.</li>
</ul>
<p>None of this requires advanced math — just being deliberate about which base number (cost price, selling price, or pre-tax price) a given percentage is actually being calculated against, since that's where almost every pricing mistake quietly originates.</p>`
  ];

/* ===== blog-post-password-security-generators-hashes-explained.js ===== */
// Blog post: password-security-generators-hashes-explained
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_password_security_generators_hashes_explained = ["password-security-generators-hashes-explained",
  "Password Generators and Hashes: What Actually Makes a Password Strong",
  "What makes a password resistant to guessing, how password generators create randomness, and why a strong password alone isn't the whole security story.",
  "2026-10-13", 6, ["password-generator", "sha-256-hash-generator", "uuid-generator"],
  String.raw`<p>"Use a strong password" is advice everyone has heard a thousand times, but what actually makes one password stronger than another, and why do security guides keep pushing longer, more random strings instead of clever, memorable phrases? This article breaks down the actual reasoning behind password strength, how a password generator creates genuine randomness, and the parts of account security a strong password alone doesn't cover.</p>

<h2>Why length matters more than complexity rules</h2>
<p>Older password advice focused heavily on complexity rules: at least one capital letter, one number, one symbol. Modern security guidance has shifted toward emphasizing length instead, for a mathematical reason — the number of possible combinations a password could be grows exponentially with each additional character, far more than it grows from adding a symbol requirement to a fixed short length. A random 16-character password made up of just lowercase letters is, in practice, harder to brute-force than an 8-character password stuffed with every type of required symbol, simply because of how combinatorics works at that length difference.</p>

<h2>Why "random" is doing a lot of work in that sentence</h2>
<p>A password's real strength comes from how unpredictable it is to an attacker, not from how it looks to a human. A password like "Password123!" technically satisfies most complexity rules — a capital letter, numbers, a symbol — but it's still extremely weak, because it's one of the first patterns an automated guessing tool will try. True randomness means every character is selected independently and unpredictably, with no pattern, no dictionary word, and no personal detail an attacker could guess from a social media profile.</p>
<p>This is exactly what a proper <a href="/tools/password-generator">Password Generator</a> provides: it uses your browser's cryptographically secure random number generator (not a simple, predictable pseudo-random function) to pick each character independently, which means the result has no hidden pattern for an attacker to exploit, even if they know the password was generated by this specific tool.</p>

<h2>Why you still need a password manager</h2>
<p>The obvious catch with genuinely random passwords is that they're nearly impossible to memorize, which is precisely why they're meant to be paired with a password manager rather than memorized at all. The practical workflow is: generate a long, random, unique password for every account, store all of them in a password manager protected by one strong master password (which is the one password you do need to memorize), and let the manager autofill the rest. Reusing even a strong password across multiple accounts defeats much of the benefit, since a breach at any one of those services then exposes every account using that same password.</p>

<h2>Where hashing fits into password security</h2>
<p>Properly built websites don't store your actual password at all — they store a hash of it, generated using a one-way function (explained in more detail in our guide to <a href="/tools/sha-256-hash-generator">hashing</a>) that can't be reversed back into the original password. When you log in, the site hashes what you just typed and compares it against the stored hash. This means that even if a database is breached, attackers typically get a list of hashes, not plain passwords — though weak, guessable passwords can still sometimes be cracked by hashing every word in a dictionary and comparing the results, which is yet another reason genuine randomness matters so much.</p>

<h2>UUIDs: randomness for a different purpose</h2>
<p>A related but distinct use of randomness shows up in UUIDs (Universally Unique Identifiers) — long, randomly generated strings used by software systems to label things like database records, sessions, or API requests in a way that's virtually guaranteed not to collide with any other generated ID, anywhere, without needing a central authority to coordinate and hand out unique numbers. A <a href="/tools/uuid-generator">UUID Generator</a> serves a software engineering need rather than a security one, but it relies on the same underlying principle: enough genuine randomness makes an accidental collision astronomically unlikely.</p>

<h2>What a strong password doesn't protect you from</h2>
<p>It's worth being realistic about the limits here. A strong, unique password doesn't protect you from a phishing site that tricks you into typing it in directly, from malware already running on your device that logs your keystrokes, or from a service storing passwords insecurely on their end regardless of how strong the password you sent them was. This is exactly why two-factor authentication exists as a second, independent layer — even a perfectly strong password can be compromised through a channel that has nothing to do with password strength itself.</p>

<h2>A simple takeaway</h2>
<p>Length and genuine randomness are what make a password actually hard to guess, not a clever personal phrase or a complexity checklist. Generate long, random, unique passwords for every account, store them in a password manager, and treat two-factor authentication as a necessary second layer rather than an optional extra — strong passwords and good account hygiene work together, not as substitutes for each other.</p>`
  ];

/* ===== blog-post-image-formats-jpg-png-webp-explained.js ===== */
// Blog post: image-formats-jpg-png-webp-explained
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_image_formats_jpg_png_webp_explained = ["image-formats-jpg-png-webp-explained",
  "JPG, PNG or WebP? Choosing the Right Image Format",
  "A clear explanation of the three most common web image formats, what each is best at, and how to convert between them without wasting quality or file size.",
  "2026-10-14", 7, ["jpg-to-png", "png-to-jpg", "image-to-webp", "image-compressor", "image-resizer"],
  String.raw`<p>Every image you save, send or upload has a format, and the format quietly decides how big the file is, how sharp it looks and whether it can have a see-through background. Most people only notice when a form says "JPG only" or a website feels slow. Knowing the basics of the three most common formats lets you pick the right one the first time and avoid needless conversions.</p>
<h2>JPG: the everyday choice for photographs</h2>
<p>JPG, also written JPEG, was designed for photographs. It uses lossy compression, which means it discards fine details that the eye is unlikely to notice in order to make files much smaller. A holiday photo that would take twenty megabytes uncompressed can shrink to a few hundred kilobytes with little visible difference. The weakness is that JPG does not support transparency, and sharp edges such as text or logos can show faint fuzzy artefacts if the quality is set too low. Saving a JPG repeatedly also degrades it further each time, so work from the original whenever you can. A <a href="/tools/png-to-jpg">PNG to JPG</a> converter is the quickest way to make a photo form-friendly.</p>
<h2>PNG: crisp graphics and transparency</h2>
<p>PNG uses lossless compression, so every pixel is preserved exactly. That makes it the best choice for screenshots, diagrams, logos, icons and anything with flat colours and sharp lines. PNG can also store transparency, which allows a logo to sit cleanly on any background colour. The price is size: a PNG photograph can be several times larger than the equivalent JPG. If you need a transparent image, keep it as PNG, and if you only need a picture for a form that rejects PNG, a <a href="/tools/png-to-jpg">converter</a> will flatten the transparent area to white. To go the other way, use <a href="/tools/jpg-to-png">JPG to PNG</a>, remembering that converting does not restore detail that was already lost.</p>
<h2>WebP: smaller files for modern websites</h2>
<p>WebP is a newer format created for the web. It can behave like JPG or like PNG, supporting both lossy and lossless modes and transparency, and it usually produces noticeably smaller files at similar visual quality. All current major browsers display it, which makes it an excellent choice for website images where loading speed matters. Some older software, printers and upload forms still do not accept it, so keep a JPG or PNG copy for those situations. Try the <a href="/tools/image-to-webp">Image to WebP</a> tool and compare the sizes yourself.</p>
<h2>A simple decision guide</h2>
<ul><li>Photograph for a website: WebP, with JPG as a fallback.</li><li>Photograph to email, print or upload to a form: JPG.</li><li>Logo, icon or screenshot: PNG.</li><li>Anything that needs a transparent background: PNG or WebP.</li><li>Long-term archive of an original: keep the untouched original file.</li></ul>
<h2>Size matters as much as format</h2>
<p>Choosing a format is only half of the job. A picture that is far larger than it will be displayed wastes bandwidth in any format. Resize it to the dimensions you really need with an <a href="/tools/image-resizer">Image Resizer</a>, then reduce quality slightly with the <a href="/tools/image-compressor">Image Compressor</a>. In practice these two steps often shrink a file by ninety percent or more while the picture still looks good on screen.</p>
<h2>Common mistakes to avoid</h2>
<ul><li>Converting a small low-quality JPG to PNG and expecting it to look better.</li><li>Compressing the same JPG again and again.</li><li>Using PNG for large photographs on a web page.</li><li>Forgetting to keep an original before experimenting.</li></ul>
<p>Once you remember that JPG is for photos, PNG is for sharp graphics and WebP is for fast websites, most format decisions become automatic, and a few free browser tools handle the conversions without any software to install.</p>`
  ];

/* ===== blog-post-beginners-guide-to-qr-codes.js ===== */
// Blog post: beginners-guide-to-qr-codes
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_beginners_guide_to_qr_codes = ["beginners-guide-to-qr-codes",
  "A Beginner's Guide to QR Codes: Uses, Safety and Good Design",
  "How QR codes work, where they are genuinely useful, how to avoid scams, and the design rules that make a code easy to scan.",
  "2026-10-21", 7, ["qr-code-generator", "utm-link-builder", "whatsapp-link-generator", "url-encoder"],
  String.raw`<p>QR codes spent years as a curiosity before smartphones put a scanner in every pocket. Today they appear on restaurant tables, product packs, bus stops, payment counters and wedding invitations. They are popular because they remove effort: instead of typing a long web address, a person simply points a camera. This guide explains how they work, where they are most useful, how to stay safe and how to make one that scans reliably.</p>
<h2>What is inside a QR code?</h2>
<p>A QR code is a grid of black and white squares that stores a small amount of data, most often a web address. The three large squares in the corners tell the camera where the code is and how it is rotated. The rest of the pattern encodes the text, plus extra error-correction data that lets a scanner recover the content even when part of the code is smudged or covered. Because the information sits inside the pattern itself, a basic QR code does not expire and does not depend on a company to keep working, as long as the page it points to remains online.</p>
<h2>Where QR codes make real sense</h2>
<ul><li><b>Menus and price lists:</b> easy to update without reprinting everything.</li><li><b>Business cards:</b> a scan opens a website, portfolio or chat.</li><li><b>Packaging:</b> link to instructions, warranty registration or recipes.</li><li><b>Events:</b> share schedules, maps and feedback forms.</li><li><b>Classrooms:</b> hand out worksheets and videos quickly.</li><li><b>Messaging:</b> pair a code with a <a href="/tools/whatsapp-link-generator">WhatsApp link</a> so customers can start a chat in one scan.</li></ul>
<h2>Staying safe when scanning</h2>
<p>A QR code hides its destination until it is scanned, which scammers exploit by pasting fake codes over real ones on parking meters, posters and payment stands. Check that a code is not a sticker placed over another, and look at the web address your phone shows before you open it. Be cautious if a page asks for a password, card details or an urgent payment you did not expect. For payments, use the official app of your bank or payment provider rather than a link from an unknown code.</p>
<h2>Designing a code that scans</h2>
<ul><li>Keep the content short. Short links produce simpler patterns that scan faster.</li><li>Use dark modules on a light background, with a clear quiet margin around the code.</li><li>Print at least two centimetres square, and larger for signs viewed from a distance.</li><li>Do not stretch, skew or place the code on a curved or reflective surface.</li><li>Test with more than one phone before printing a large batch.</li></ul>
<h2>Making a code you can measure</h2>
<p>If you use codes in marketing, add tracking parameters to the link first with the <a href="/tools/utm-link-builder">UTM Link Builder</a>, so your analytics show which poster or flyer brought each visitor. Then create the code with the <a href="/tools/qr-code-generator">QR Code Generator</a>, download the PNG and place it in your design. Remember that special characters in a link may need encoding, which the <a href="/tools/url-encoder">URL Encoder</a> can help with.</p>
<h2>Final checklist</h2>
<ol><li>Confirm the destination page loads quickly on a phone.</li><li>Generate the code and scan it yourself.</li><li>Check the printed proof in normal lighting.</li><li>Keep the destination page live for as long as the code is in circulation.</li></ol>
<p>Used thoughtfully, a QR code is a small, free bridge between paper and the web, and a few minutes of testing is all it takes to make it dependable.</p>`
  ];

/* ===== blog-post-how-to-prepare-a-clean-pdf-resume.js ===== */
// Blog post: how-to-prepare-a-clean-pdf-resume
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_how_to_prepare_a_clean_pdf_resume = ["how-to-prepare-a-clean-pdf-resume",
  "How to Prepare a Clean, Professional PDF Resume and Application Pack",
  "A step-by-step workflow for turning your resume, certificates and photos into one tidy PDF that meets upload limits and looks professional.",
  "2026-10-27", 8, ["merge-pdf", "image-to-pdf", "text-to-pdf", "add-page-numbers", "resume-cover-letter-prompt", "image-compressor"],
  String.raw`<p>Many job portals, exam forms and college applications now ask for documents as a single PDF below a certain size. Applicants often lose time on exactly this step: photos of certificates arrive sideways, the file is too large, or pages are in the wrong order. The workflow below shows how to prepare a clean application pack using free browser tools, without installing anything or uploading private documents to a stranger's server.</p>
<h2>Step 1: Write a strong resume first</h2>
<p>Everything starts with the resume itself. Keep it to one or two pages, lead with your most relevant experience, use simple headings and describe achievements with numbers where you can. If you are unsure how to phrase a summary or a set of bullet points, the <a href="/tools/resume-cover-letter-prompt">Resume &amp; Cover Letter Prompt</a> tool builds a clear request you can paste into an AI assistant. Always review what it returns, remove anything untrue and add your own details, because a recruiter will ask about every line.</p>
<h2>Step 2: Turn your resume into a PDF</h2>
<p>If your resume is in a word processor, use its export or print to PDF option, which keeps fonts and layout consistent on every device. If you only have plain text, the <a href="/tools/text-to-pdf">Text to PDF</a> tool creates a simple document. PDFs look the same on any phone or computer, which is why employers prefer them.</p>
<h2>Step 3: Scan certificates properly</h2>
<p>Place each certificate on a plain, flat surface with good light and no shadows. Hold the phone directly above, let the camera focus and fill the frame with the page. Crop away the background so the document edges are visible. Taking two minutes here saves a rejected upload later. Then use <a href="/tools/image-to-pdf">Image to PDF</a> to convert the pictures into pages of a PDF, one image per page, in the order you select them.</p>
<h2>Step 4: Reduce the size if needed</h2>
<p>Phone photos can be several megabytes each, which pushes a pack beyond a typical 2 MB or 5 MB limit. Before converting, shrink each picture with the <a href="/tools/image-compressor">Image Compressor</a> at a quality around 70 to 80 percent. Text on certificates stays readable at this setting while the file size drops sharply. Check at full zoom that names, dates and numbers are still clear.</p>
<h2>Step 5: Merge everything in the right order</h2>
<p>Open <a href="/tools/merge-pdf">Merge PDF</a>, add your resume first, then the supporting documents in the order the application requests. Use the arrow buttons to adjust the order, remove any wrong file and press Merge. Open the result and scroll through every page to confirm that nothing is upside down, cut off or missing.</p>
<h2>Step 6: Finishing touches</h2>
<ul><li>Add page numbers with <a href="/tools/add-page-numbers">Add Page Numbers</a> so reviewers can refer to a specific page.</li><li>Use Rotate PDF or Delete PDF Pages to fix orientation problems or remove blank scans.</li><li>Name the file clearly, for example Firstname-Lastname-Application.pdf.</li><li>Keep a copy of every original document and the final pack.</li></ul>
<h2>A final checklist before you upload</h2>
<ol><li>The file opens correctly on your phone and on a computer.</li><li>Every page is readable and in the correct order.</li><li>The size is below the portal's limit.</li><li>No private information beyond what the application needs is included.</li><li>You have read the instructions on the form once more.</li></ol>
<p>Because QuickToolHub tools process files inside your browser, identity and education documents stay on your device throughout. Good preparation takes about fifteen minutes, and it makes the first impression of your application tidy and professional.</p>`
  ];

/* ===== blog-post-how-to-compress-videos-without-ruining-quality.js ===== */
// Blog post: how-to-compress-videos-without-ruining-quality
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_how_to_compress_videos_without_ruining_quality = ["how-to-compress-videos-without-ruining-quality",
  "How to Make a Video Smaller Without Ruining It",
  "What video file size really depends on, which settings matter most, and a simple step-by-step way to shrink a clip in your browser before sharing it.",
  "2026-10-28", 7, ["video-compressor", "video-trimmer", "mute-video", "video-to-reels-shorts-9-16", "extract-audio-from-video"],
  String.raw`<p>A one-minute clip from a modern phone can easily be 100 MB or more. That is too big for most email services, slow to send over mobile data and heavy to keep on a phone with limited storage. The good news is that a few simple choices can shrink a video a lot while it still looks fine on a phone screen.</p>
<h2>What decides the size of a video file</h2>
<p>File size is mostly bitrate multiplied by time. Bitrate is the amount of data used for each second of video. A clip recorded at 8 megabits per second uses about 1 MB every second, so a 60 second clip is about 60 MB. If you cut the bitrate to 1 megabit per second, the same minute becomes roughly 7 to 8 MB, plus a small amount for sound.</p>
<p>Three things control that bitrate in practice: the resolution (how many pixels in each frame), the quality or bitrate setting the encoder is told to use, and the length of the clip. You can change all three.</p>
<h2>Step 1: Remove what you do not need</h2>
<p>The cheapest way to shrink a video is to make it shorter. Open the <a href="/tools/video-trimmer">Video Trimmer</a>, enter a start and an end time in seconds, and keep only the part that matters. Every second removed is a second you never have to store or send. If the picture is useful but the sound is not, the <a href="/tools/mute-video">Mute Video</a> tool saves a silent copy.</p>
<h2>Step 2: Lower the resolution to match where it will be watched</h2>
<p>A phone screen shows a 720p video very well, and a 480p video is acceptable for casual viewing. Full HD or 4K files are only worth their size if the viewer will watch on a large screen. The <a href="/tools/video-compressor">Video Compressor</a> lets you choose a maximum width of 720p, 480p, 360p or 240p. It only shrinks a video and never enlarges one.</p>
<h2>Step 3: Choose a quality level</h2>
<p>The same tool offers three quality levels called Good, Medium and Small file, which correspond to target bitrates of about 1.5, 0.8 and 0.4 megabits per second. As a rough guide, one minute of video at those levels is about 11 MB, 6 MB and 3 MB, plus audio. Start with 480p and Medium. If the result looks too soft, step up to 720p and Good. If it is still too big, go down to 360p and Small file.</p>
<h2>How the browser tool works, and what to expect</h2>
<p>Tools on QuickToolHub run inside your browser, so the video is not uploaded to a server. To compress, the browser plays your video and records the result as a new file. That means the work takes about as long as the clip itself: a five minute video needs about five minutes. Keep the browser tab open and in the foreground while it works. The output is a WebM file, which plays in browsers and many players such as VLC. Some apps and phones prefer MP4, so check what your destination accepts before you rely on the result.</p>
<h2>Common situations</h2>
<ul><li><b>Sending a clip over chat or email:</b> trim it, then compress at 480p with Medium quality.</li><li><b>Posting a short vertical video:</b> if your footage is landscape, the <a href="/tools/video-to-reels-shorts-9-16">Video to Reels / Shorts 9:16</a> tool crops the centre into a vertical frame. Record vertically when you can, because cropping uses the pixels you already have.</li><li><b>Keeping only the audio of a talk:</b> <a href="/tools/extract-audio-from-video">Extract Audio from Video</a> saves just the sound, which is far smaller than the full video.</li></ul>
<h2>A short checklist</h2>
<ol><li>Trim the clip to what you need.</li><li>Pick the lowest resolution that is still comfortable to watch.</li><li>Start with Medium quality and compare before going lower.</li><li>Preview the finished file from start to end.</li><li>Keep the original in case you need full quality later.</li></ol>
<p>Compression always trades some sharpness for size. A little testing with one short clip will quickly show you the settings that suit your videos.</p>`];

/* ===== blog-post-ai-tokens-explained-and-how-to-estimate-api-cost.js ===== */
// Blog post: ai-tokens-explained-and-how-to-estimate-api-cost
// Format: [slug, title, metaDescription, datePublished (ISO), readMins, relatedToolSlugs[], bodyHTML]
const post_ai_tokens_explained_and_how_to_estimate_api_cost = ["ai-tokens-explained-and-how-to-estimate-api-cost",
  "AI Tokens Explained: How to Estimate Prompt Size and API Cost",
  "A plain-language explanation of tokens, why they decide what AI tools cost, and a worked example of estimating a monthly API bill from your own numbers.",
  "2026-10-28", 7, ["ai-token-counter-estimate", "ai-api-cost-calculator", "ai-prompt-improver", "chatgpt-ai-prompt-generator"],
  String.raw`<p>If you use AI through an app, tokens are mostly invisible. If you build something with an AI API, they are the unit you pay for. Understanding them takes a few minutes and can prevent a surprising bill.</p>
<h2>What is a token?</h2>
<p>AI language models do not read text letter by letter or word by word. They split text into small pieces called tokens. A token can be a whole short word, part of a longer word, a number or a punctuation mark. For ordinary English, a common rule of thumb is that one token is about four characters, or that one word is about 1.3 tokens. Different models split text differently, so this is only an estimate.</p>
<h2>Why tokens matter</h2>
<ul><li><b>Cost:</b> most AI APIs charge per million tokens, with separate prices for input (what you send) and output (what the model writes back). Output is often priced higher than input.</li><li><b>Limits:</b> every model has a maximum number of tokens it can handle in one request, counting your instructions, any documents you include and the reply.</li><li><b>Speed:</b> longer prompts and longer answers take longer to process.</li></ul>
<h2>Estimating the size of a prompt</h2>
<p>Paste your text into the <a href="/tools/ai-token-counter-estimate">AI Token Counter (Estimate)</a>. It shows the number of characters and words and two estimates of the token count: characters divided by four and words multiplied by 1.33. Treat the numbers as a guide, not an exact count. Text in Hindi and other non-English languages usually needs more tokens for the same meaning, so give yourself extra room.</p>
<h2>A worked cost example</h2>
<p>Suppose each request to your app sends 1,000 input tokens and receives 500 output tokens, and you expect 100 requests a day. Imagine example prices of 3 dollars per million input tokens and 15 dollars per million output tokens. These are placeholders for the sum, not the current price of any provider, so always check your provider's pricing page.</p>
<ul><li>Input cost per request: 1,000 x 3 / 1,000,000 = 0.003 dollars</li><li>Output cost per request: 500 x 15 / 1,000,000 = 0.0075 dollars</li><li>Total per request: 0.0105 dollars</li><li>Per day (100 requests): 1.05 dollars</li><li>Per 30 days: 31.50 dollars, or about 2,772 rupees at 88 rupees per dollar</li></ul>
<p>You can try your own figures in the <a href="/tools/ai-api-cost-calculator">AI API Cost Calculator</a>, which uses prices that you enter and an exchange rate that you choose.</p>
<h2>Ways to keep token use under control</h2>
<ol><li><b>Be concise:</b> remove repeated instructions and unnecessary background. Short, clear prompts often work better as well as cost less. The <a href="/tools/ai-prompt-improver">AI Prompt Improver</a> and the <a href="/tools/chatgpt-ai-prompt-generator">ChatGPT / AI Prompt Generator</a> help you structure a prompt so that every sentence earns its place.</li><li><b>Limit the output:</b> ask for a specific length or format, and set a maximum output size if your API allows it.</li><li><b>Send only what is needed:</b> pass the relevant paragraph of a document rather than the whole file.</li><li><b>Match the model to the task:</b> simple jobs such as classification or short rewrites often work on smaller, cheaper models.</li><li><b>Check for caching options:</b> some providers discount repeated input, which helps when many requests start with the same instructions.</li><li><b>Measure real usage:</b> API responses normally report how many tokens were used. Compare the real numbers with your estimate after a few days.</li></ol>
<h2>Keep estimates honest</h2>
<p>An estimate is a planning tool. Real usage depends on the model, the language, formatting such as tables or code, and how long conversations grow. Add a safety margin, set a spending limit in your provider's dashboard and review usage regularly.</p>`];

/* ===== blog-posts-index.js ===== */
// blog-posts-index.js — LIST OF ALL BLOG POSTS (order = order on site).
// To add a new post: create a new file in this folder (copy any existing one), import it below and add it to BLOG.

export const BLOG = [
  post_compress_images_without_losing_quality,
  post_merge_split_organize_pdf_files,
  post_beginners_guide_to_writing_better_ai_prompts,
  post_browser_video_editing_without_installing_software,
  post_emi_vs_sip_understanding_the_math,
  post_complete_guide_to_text_case_styles,
  post_json_base64_hashing_explained_for_non_developers,
  post_social_media_image_video_sizes_reference,
  post_why_browser_based_tools_are_safer_for_private_files,
  post_gst_discounts_profit_margins_for_small_sellers,
  post_password_security_generators_hashes_explained,
  post_image_formats_jpg_png_webp_explained,
  post_beginners_guide_to_qr_codes,
  post_how_to_prepare_a_clean_pdf_resume,
  post_how_to_compress_videos_without_ruining_quality,
  post_ai_tokens_explained_and_how_to_estimate_api_cost,
];

/* ===== blog-render.js ===== */
// blog-render.js — Blog rendering: index page, category pages, post pages, cards, SEO JSON-LD.

export function blogCatLabel(slug) { const c = BLOGCATBY[BLOGCAT[slug]]; return c ? c[1] : ""; }
export function blogChips(active) {
  return '<nav class="bchips" aria-label="Blog categories"><a href="/blog"' + (active ? "" : ' class="on"') + '>All articles</a>'
    + BLOGCATS.map(function (c) { return '<a href="/blog/category/' + c[0] + '"' + (active === c[0] ? ' class="on"' : "") + '>' + escH(c[1]) + '</a>'; }).join("") + '</nav>';
}
export function blogCatBody(c) {
  const posts = BLOG.map(function (b, i) { return BLOGCAT[b[0]] === c[0] ? blogCard(i) : ""; }).join("");
  const tools = {};
  BLOG.forEach(function (b) { if (BLOGCAT[b[0]] === c[0]) b[5].forEach(function (s) { if (TBYSLUG[s] !== undefined) tools[s] = 1; }); });
  const tl = Object.keys(tools).map(function (s) { return '<li><a href="/tools/' + s + '">' + escH(TOOLS[TBYSLUG[s]][2]) + '</a></li>'; }).join("");
  return '<nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/blog">Blog</a> › <span>' + escH(c[1]) + '</span></nav><h1>' + escH(c[1]) + '</h1><p>' + escH(c[3]) + '</p>'
    + blogChips(c[0]) + '<div class="blogidx">' + posts + '</div>'
    + (tl ? '<div class="artrelated"><h3>Tools mentioned in these guides</h3><ul class="dl">' + tl + '</ul></div>' : "");
}
export function blogCatExtra(c, o) {
  const url = o + "/blog/category/" + c[0];
  return ldJson({
    "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", name: c[1], description: c[2], url: url },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: o + "/blog" },
        { "@type": "ListItem", position: 3, name: c[1], item: url } ] }
    ]
  }) + BLOGCSS;
}
export function relatedGuides(i) {
  const t = TOOLS[i];
  const posts = BLOG.filter(function (b) { return b[5].indexOf(t[1]) > -1; }).slice(0, 3);
  const peers = [];
  for (let k = 1; k < TOOLS.length && peers.length < 4; k++) {
    const x = TOOLS[(i + k) % TOOLS.length];
    if (x[0] === t[0] && TOOLGUIDES[x[1]]) peers.push(x);
  }
  if (!posts.length && !peers.length) return "";
  return '<h2>Related guides and articles</h2><ul class="dl">'
    + posts.map(function (b) { return '<li><a href="/blog/' + b[0] + '">' + escH(b[1]) + '</a></li>'; }).join("")
    + peers.map(function (x) { return '<li><a href="/tools/' + x[1] + '">How to use ' + escH(x[2]) + '</a></li>'; }).join("") + '</ul>';
}
export const BLOGBYSLUG = {};
BLOG.forEach(function (b, i) { BLOGBYSLUG[b[0]] = i; });
export function blogWords(html) { return (html.replace(/<[^>]+>/g, " ").match(/\S+/g) || []).length; }
export function blogAuthorInitial() { return "T"; }
export function blogDateStr(iso) { const d = new Date(iso + "T00:00:00Z"); return d.toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }); }
export function blogCard(i) {
  const b = BLOG[i];
  return '<a class="bcard" href="/blog/' + b[0] + '"><span class="bcat">' + escH(blogCatLabel(b[0])) + '</span><h3>' + escH(b[1]) + '</h3><p>' + escH(b[2]) + '</p><div class="bm">' + blogDateStr(b[3]) + ' · ' + b[4] + ' min read</div></a>';
}
export const BLOGDESC = "Original, long-form guides on photo and video editing, PDF organization, AI prompting, GST and loan math, and online privacy — from the team behind QuickToolHub's free tools.";
export const BLOGINDEXBODY = '<h1>QuickToolHub Blog &amp; Guides</h1><p class="mu">Practical, in-depth articles behind the tools — written by the people who build them.</p>'
  + blogChips("") + '<div class="blogidx">' + BLOG.map(function (b, i) { return blogCard(i); }).join("") + '</div>' + adUnit();
export function blogIndexExtra(o) {
  return ldJson({
    "@context": "https://schema.org", "@type": "Blog", name: "QuickToolHub Blog", url: o + "/blog",
    publisher: { "@type": "Organization", name: "QuickToolHub", url: o + "/" },
    blogPost: BLOG.map(function (b) { return { "@type": "BlogPosting", headline: b[1], url: o + "/blog/" + b[0], datePublished: b[3] }; })
  }) + BLOGCSS;
}
export function blogPostBody(i, o) {
  const b = BLOG[i], url = o + "/blog/" + b[0], related = b[5].filter(function (s) { return TBYSLUG[s] !== undefined; });
  const relatedHtml = related.length ? '<div class="artrelated"><h3>Tools mentioned in this guide</h3><ul class="dl">' + related.map(function (s) { const t = TOOLS[TBYSLUG[s]]; return '<li><a href="/tools/' + t[1] + '">' + escH(t[2]) + '</a></li>'; }).join("") + '</ul></div>' : "";
  const idx = BLOGBYSLUG[b[0]], prev = BLOG[idx - 1], next = BLOG[idx + 1];
  const navLinks = '<p class="bc">' + (prev ? '← <a href="/blog/' + prev[0] + '">' + escH(prev[1]) + '</a>' : '') + (prev && next ? ' &nbsp;·&nbsp; ' : '') + (next ? '<a href="/blog/' + next[0] + '">' + escH(next[1]) + '</a> →' : '') + '</p>';
  return '<article class="art"><header><nav class="bc" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/blog">Blog</a> › <span>' + escH(b[1]) + '</span></nav>'
    + '<h1>' + escH(b[1]) + '</h1>'
    + '<div class="artmeta"><span class="av">' + blogAuthorInitial() + '</span><span>QuickToolHub Team</span><span>·</span><time datetime="' + b[3] + '">' + blogDateStr(b[3]) + '</time><span>·</span><span>' + b[4] + ' min read</span>' + (blogCatLabel(b[0]) ? '<span>·</span><a href="/blog/category/' + BLOGCAT[b[0]] + '">' + escH(blogCatLabel(b[0])) + '</a>' : '') + '</div></header>'
    + '<section>' + b[6] + '</section>'
    + relatedHtml
    + '<footer>' + navLinks + '<p class="bc"><a href="/blog">← Back to all guides</a></p></footer></article>';
}
export function blogPostExtra(i, o) {
  const b = BLOG[i], url = o + "/blog/" + b[0];
  return ldJson({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", "@id": url + "#post", headline: b[1], description: b[2], url: url,
        datePublished: b[3], dateModified: b[3], inLanguage: "en",
        author: { "@type": "Organization", name: "QuickToolHub" },
        publisher: { "@type": "Organization", name: "QuickToolHub", url: o + "/" },
        mainEntityOfPage: url
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: o + "/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: o + "/blog" },
          { "@type": "ListItem", position: 3, name: b[1], item: url }
        ]
      }
    ]
  }) + BLOGCSS;
}
