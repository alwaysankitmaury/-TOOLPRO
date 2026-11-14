// tools.js — tools categories, THE TOOLS LIST (186 tools), auto text for tool pages
import { pickRotated } from "./config.js";

/* ===== tools-categories.js ===== */
// tools-categories.js — Tool categories: labels, order, schema types and how-to text per category.

export const CATLBL = { ai: "AI Prompt Tools", photo: "Photo Tools", video: "Video Tools", pdf: "PDF Tools", text: "Text Tools", dev: "Developer Tools", calc: "Calculators", media: "Audio & Camera Tools", util: "Utility Tools", social: "Social Media & SEO Tools" };
export const CATORDER = ["ai", "photo", "video", "pdf", "text", "dev", "calc", "media", "util", "social"];
export const CATTAIL = { ai: "Free AI Prompt Tool", photo: "Free Online Photo Tool", video: "Free Online Video Tool", pdf: "Free Online PDF Tool", text: "Free Online Text Tool", dev: "Free Developer Tool", calc: "Free Online Calculator", media: "Free Online Audio & Camera Tool", util: "Free Online Utility", social: "Free Social Media Tool" };
export const CATSCHEMA = { ai: "UtilitiesApplication", photo: "MultimediaApplication", video: "MultimediaApplication", pdf: "BusinessApplication", text: "UtilitiesApplication", dev: "DeveloperApplication", calc: "UtilitiesApplication", media: "MultimediaApplication", util: "UtilitiesApplication", social: "SocialNetworkingApplication" };
export const CATHOW = {
  ai: "Fill in the fields, generate your prompt and paste it into ChatGPT, Gemini, Claude or any other AI tool.",
  photo: "Choose a photo from your device, adjust the options and download the result. Your image is processed in your browser and is not uploaded.",
  video: "Choose a video or photos from your device, pick the options and let it process in your browser. Works best in Chrome or Edge.",
  pdf: "Select your PDF or images, set the options and download the finished file. Files are processed locally in your browser.",
  text: "Type or paste your text and the result appears right away. Copy it with one click.",
  dev: "Paste your input, run the tool and copy the output. Everything is processed locally in your browser.",
  calc: "Enter your numbers and get instant results. Results are estimates and not financial, tax or medical advice.",
  media: "Allow the browser permission when asked, record or listen, then save the result. Audio and video stay on your device.",
  util: "Enter your values or choose the options and get the result straight away. No signup is needed.",
  social: "Paste your link or text, choose the options and copy the result for your posts and profiles."
};

/* ===== tools-data.js ===== */
// tools-data.js — THE TOOLS LIST. Add / edit / remove a tool here: [category, url-slug, name, description].

// [category, url slug, tool name, description] in the same order as the tools registered in the page script
export const TOOLS = [
  ["pdf","image-to-pdf","Image to PDF","Combine photos into one PDF (one image per page)."],
  ["pdf","merge-pdf","Merge PDF","Join two or more PDF files into one. Add files one by one or together, then set the order."],
  ["pdf","split-extract-pdf-pages","Split / Extract PDF Pages","Keep only the pages you want (e.g. 1-3,5)."],
  ["pdf","delete-pdf-pages","Delete PDF Pages","Remove unwanted pages from a PDF."],
  ["pdf","reverse-pdf-pages","Reverse PDF Pages","Reverse the page order."],
  ["pdf","rotate-pdf","Rotate PDF","Rotate all pages."],
  ["pdf","add-page-numbers","Add Page Numbers","Print page numbers at the bottom."],
  ["pdf","pdf-watermark","PDF Watermark","Add a text watermark on every page (English letters)."],
  ["pdf","text-to-pdf","Text to PDF","Turn typed text into a PDF."],
  ["pdf","pdf-information","PDF Information","Pages, file size and page dimensions."],
  ["pdf","pdf-to-png","PDF to PNG","Convert every PDF page into a PNG image (ZIP)."],
  ["pdf","pdf-to-jpg","PDF to JPG","Convert every PDF page into a JPG image (ZIP)."],
  ["photo","photo-editor-studio","Photo Editor Studio","Filter presets (Black & White, Sepia, Vintage, Warm, Cool, Vivid, Cinematic, Sunset, Dreamy, Invert), brightness, contrast, blur, vignette, rotate and flip."],
  ["photo","jpg-to-png","JPG to PNG","Convert JPG images to PNG."],
  ["photo","png-to-jpg","PNG to JPG","Convert PNG images to JPG."],
  ["photo","image-to-webp","Image to WebP","Convert images to modern WebP."],
  ["photo","image-compressor","Image Compressor","Reduce image size. Lower quality = smaller file."],
  ["photo","image-resizer","Image Resizer","Resize by width and/or height (leave one blank to keep ratio)."],
  ["photo","image-cropper","Image Cropper","Crop a rectangle (X, Y, width, height in pixels)."],
  ["photo","rotate-image","Rotate Image","Rotate by 90, 180 or 270 degrees."],
  ["photo","flip-mirror-image","Flip / Mirror Image","Flip a photo horizontally or vertically."],
  ["photo","add-border-to-image","Add Border to Image","Add a colored frame around a photo."],
  ["photo","round-image-corners","Round Image Corners","Make rounded or circular images (PNG)."],
  ["photo","image-watermark","Image Watermark","Add text watermark on your photo."],
  ["photo","meme-maker","Meme Maker","Add top and bottom meme text."],
  ["photo","pixelate-image","Pixelate Image","Pixel / mosaic effect to hide details."],
  ["photo","passport-photo-maker","Passport Photo Maker","Crop to passport / visa size at 300 DPI."],
  ["photo","favicon-generator","Favicon Generator","Make a square favicon PNG from any image."],
  ["photo","photo-to-pencil-sketch","Photo to Pencil Sketch","Turn a photo into a pencil sketch."],
  ["photo","image-to-base64","Image to Base64","Convert an image to a Base64 data URL."],
  ["photo","base64-to-image","Base64 to Image","Paste Base64 text and get the image."],
  ["photo","color-palette-extractor","Color Palette Extractor","Find the main colors of a photo (click to copy)."],
  ["video","video-trimmer","Video Trimmer","Cut a part of your video (start to end)."],
  ["video","video-filters","Video Filters","Apply a color filter to your video."],
  ["video","video-motion-effects","Video Motion Effects","Zoom in, zoom out, camera shake or pulse motion in one tool."],
  ["video","slow-motion-video","Slow Motion Video","Slow your video down."],
  ["video","fast-forward-video","Fast Forward Video","Speed your video up."],
  ["video","mute-video","Mute Video","Remove sound from a video."],
  ["video","extract-audio-from-video","Extract Audio from Video","Get the audio track as a WebM file."],
  ["video","flip-mirror-video","Flip / Mirror Video","Mirror your video left-right."],
  ["video","rotate-video","Rotate Video","Rotate a video by 90, 180 or 270 degrees."],
  ["video","add-text-to-video","Add Text to Video","Show a caption on the bottom of the video."],
  ["video","video-fade-in-out","Video Fade In / Out","Smooth fade from and to black."],
  ["video","video-compressor","Video Compressor","Make the video smaller (lower size and quality)."],
  ["video","video-to-square-1-1","Video to Square 1:1","Center-crop for Instagram posts."],
  ["video","video-to-reels-shorts-9-16","Video to Reels / Shorts 9:16","Center-crop to vertical video."],
  ["video","video-to-landscape-16-9","Video to Landscape 16:9","Center-crop to widescreen."],
  ["video","video-frame-capture","Video Frame Capture","Pause the video and save any frame as an image."],
  ["video","video-information","Video Information","Duration, resolution and size of a video."],
  ["video","photo-slideshow-video-fade","Photo Slideshow Video (Fade)","Turn your photos into a video with fade motion."],
  ["video","photo-zoom-motion-video","Photo Zoom Motion Video","Turn your photos into a video with zoom motion."],
  ["video","photo-slide-transition-video","Photo Slide Transition Video","Turn your photos into a video with slide motion."],
  ["media","screen-recorder","Screen Recorder","Record your screen with sound."],
  ["media","voice-recorder","Voice Recorder","Record audio from your microphone."],
  ["media","camera-photo-capture","Camera Photo Capture","Take a webcam photo with a filter."],
  ["media","text-to-speech","Text to Speech","Your browser reads the text aloud."],
  ["media","speech-to-text","Speech to Text","Speak and get written text (works in Chrome)."],
  ["text","word-counter","Word Counter","Words, characters, sentences, paragraphs and reading time."],
  ["text","text-case-converter","Text Case Converter","Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case, kebab-case or aLtErNaTiNg."],
  ["text","sort-shuffle-lines","Sort & Shuffle Lines","Sort lines A-Z or Z-A, or shuffle them into a random order."],
  ["text","remove-extra-spaces","Remove Extra Spaces","Clean double spaces and tabs."],
  ["text","remove-line-breaks","Remove Line Breaks","Join all lines into one paragraph."],
  ["text","add-line-numbers","Add Line Numbers","Number every line."],
  ["text","reverse-text","Reverse Text","Reverse all characters."],
  ["text","reverse-words","Reverse Words","Reverse the order of words."],
  ["text","remove-duplicate-lines","Remove Duplicate Lines","Keep only unique lines."],
  ["text","slug-generator","Slug Generator","Make SEO friendly URL slugs."],
  ["text","text-to-binary","Text to Binary","Convert text to binary code."],
  ["text","binary-to-text","Binary to Text","Decode binary code to text."],
  ["text","text-to-morse-code","Text to Morse Code","Convert text to Morse code."],
  ["text","morse-code-to-text","Morse Code to Text","Decode Morse code (use / between words)."],
  ["text","rot13-cipher","ROT13 Cipher","Encode or decode with ROT13."],
  ["text","lorem-ipsum-generator","Lorem Ipsum Generator","Dummy text. Type the number of paragraphs."],
  ["social","fancy-text-generator","Fancy Text Generator","Stylish fonts for Instagram bio, captions and names."],
  ["text","extract-emails","Extract Emails","Find all email addresses in text."],
  ["text","extract-urls","Extract URLs","Find all links in text."],
  ["text","extract-numbers","Extract Numbers","Find all numbers in text."],
  ["social","hashtag-generator","Hashtag Generator","Turn keywords or a caption into hashtags."],
  ["text","number-to-words","Number to Words","Indian system (Lakh, Crore). Type a number."],
  ["text","roman-numeral-converter","Roman Numeral Converter","Number to Roman or Roman to number."],
  ["dev","json-formatter-validator","JSON Formatter & Validator","Beautify and validate JSON."],
  ["dev","json-minifier","JSON Minifier","Compress JSON to one line."],
  ["dev","json-to-csv","JSON to CSV","Convert a JSON array to CSV."],
  ["dev","csv-to-json","CSV to JSON","Convert CSV (first row = headers) to JSON."],
  ["dev","base64-encoder","Base64 Encoder","Encode text to Base64."],
  ["dev","base64-decoder","Base64 Decoder","Decode Base64 text."],
  ["dev","url-encoder","URL Encoder","Encode text for URLs."],
  ["dev","url-decoder","URL Decoder","Decode URL-encoded text."],
  ["dev","html-escape","HTML Escape","Convert special characters to HTML entities."],
  ["dev","html-unescape","HTML Unescape","Convert HTML entities back to text."],
  ["dev","css-minifier","CSS Minifier","Remove spaces and comments from CSS."],
  ["dev","sha-1-hash-generator","SHA-1 Hash Generator","Create a SHA-1 hash of any text."],
  ["dev","sha-256-hash-generator","SHA-256 Hash Generator","Create a SHA-256 hash of any text."],
  ["dev","sha-512-hash-generator","SHA-512 Hash Generator","Create a SHA-512 hash of any text."],
  ["dev","regex-tester","Regex Tester","First line: /pattern/flags. Next lines: the text to test."],
  ["dev","jwt-decoder","JWT Decoder","Decode the header and payload of a JWT."],
  ["dev","unix-timestamp-converter","Unix Timestamp Converter","Timestamp to date, or date to timestamp."],
  ["dev","number-base-converter","Number Base Converter","Decimal, binary, octal and hex (0x.. / 0b.. allowed)."],
  ["dev","color-code-converter","Color Code Converter","HEX to RGB to HSL. Type #ff8800 or rgb(255,136,0)."],
  ["dev","uuid-generator","UUID Generator","Generate random UUIDs."],
  ["dev","password-generator","Password Generator","Strong random password."],
  ["calc","scientific-calculator","Scientific Calculator","Type: 25*4+sqrt(81), sin(30), 2^10, 15%4, pi*2"],
  ["calc","percentage-calculator","Percentage Calculator","Find X% of a number."],
  ["calc","percentage-change","Percentage Change","Increase or decrease between two values."],
  ["calc","what-percent-is-x-of-y","What Percent Is X of Y","Find what percentage one number is of another."],
  ["calc","emi-calculator","EMI Calculator","Monthly loan EMI, total interest and total payment."],
  ["calc","sip-calculator","SIP Calculator","Future value of monthly SIP investment."],
  ["calc","compound-interest-calculator","Compound Interest Calculator","Growth of a lump sum investment."],
  ["calc","simple-interest-calculator","Simple Interest Calculator","Interest = P × R × T / 100."],
  ["calc","gst-calculator","GST Calculator","Add or remove GST from an amount."],
  ["calc","discount-calculator","Discount Calculator","Final price after discount."],
  ["calc","profit-loss-calculator","Profit & Loss Calculator","Profit or loss percentage."],
  ["calc","bmi-calculator","BMI Calculator","Body Mass Index."],
  ["calc","age-calculator","Age Calculator","Exact age in years, months and days."],
  ["calc","date-difference-calculator","Date Difference Calculator","Days between two dates."],
  ["calc","tip-bill-split","Tip & Bill Split","Split a bill with tip."],
  ["calc","temperature-converter","Temperature Converter","Celsius, Fahrenheit and Kelvin."],
  ["calc","length-converter","Length Converter","Convert between m, km, cm, mm, mile, yard, foot, inch."],
  ["calc","weight-converter","Weight Converter","Convert between kg, g, mg, quintal, ton, lb, oz."],
  ["calc","area-converter","Area Converter","Convert between sq m, sq ft, sq yard, acre, hectare, sq km."],
  ["calc","data-storage-converter","Data Storage Converter","Convert between B, KB, MB, GB, TB."],
  ["calc","speed-converter","Speed Converter","Convert between km/h, m/s, mph, knot."],
  ["util","qr-code-generator","QR Code Generator","Create a QR code for any text or link."],
  ["util","stopwatch","Stopwatch","Simple stopwatch."],
  ["util","countdown-timer","Countdown Timer","Set minutes and get a beep at zero."],
  ["util","random-name-picker","Random Name Picker","One name per line. Picks a random winner."],
  ["util","coin-dice-random-number","Coin, Dice & Random Number","Flip a coin, roll a dice or pick a number."],
  ["util","css-gradient-generator","CSS Gradient Generator","Copy-ready CSS gradient."],
  ["util","css-box-shadow-generator","CSS Box Shadow Generator","Copy-ready box-shadow CSS."],
  ["util","glassmorphism-css-generator","Glassmorphism CSS Generator","Frosted glass effect CSS."],
  ["util","css-border-radius-generator","CSS Border Radius Generator","Set each corner separately."],
  ["util","color-picker","Color Picker","Pick a color and get HEX and RGB."],
  ["social","youtube-thumbnail-grabber","YouTube Thumbnail Grabber","See and open the thumbnail images of a YouTube video link."],
  ["social","youtube-embed-code-generator","YouTube Embed Code Generator","Paste a YouTube link, get the iframe embed code."],
  ["social","youtube-timestamp-link","YouTube Timestamp Link","Link that starts a video at a given second."],
  ["social","whatsapp-link-generator","WhatsApp Link Generator","Create a wa.me chat link with a message."],
  ["social","utm-link-builder","UTM Link Builder","Add campaign tracking to a URL."],
  ["social","seo-meta-tag-generator","SEO Meta Tag Generator","Title, description and Open Graph tags."],
  ["ai","chatgpt-ai-prompt-generator","ChatGPT / AI Prompt Generator","Build a clear, structured prompt for ChatGPT, Gemini, Claude or any AI chatbot."],
  ["ai","ai-prompt-improver","AI Prompt Improver","Paste a rough idea and get a better, structured prompt."],
  ["ai","ai-image-prompt-generator","AI Image Prompt Generator","Prompts for Midjourney, DALL·E, Gemini, Leonardo, Ideogram and more."],
  ["ai","ai-video-prompt-generator","AI Video Prompt Generator","Prompts for Veo, Sora, Runway, Kling, Pika and other AI video tools."],
  ["ai","youtube-video-script-prompt","YouTube Video Script Prompt","Get a full video script, title ideas and description from your AI."],
  ["ai","instagram-reel-script-prompt","Instagram Reel Script Prompt","Short-form script with hook, scenes, captions and hashtags."],
  ["ai","instagram-caption-prompt","Instagram Caption Prompt","Prompt to get catchy captions for any post."],
  ["ai","blog-post-seo-article-prompt","Blog Post / SEO Article Prompt","Prompt to write a complete SEO-friendly article."],
  ["ai","email-writer-prompt","Email Writer Prompt","Prompt for professional emails, follow-ups and replies."],
  ["ai","resume-cover-letter-prompt","Resume & Cover Letter Prompt","Prompt to build a strong resume summary or cover letter."],
  ["ai","code-writer-prompt","Code Writer Prompt","Prompt to get clean, working code from an AI."],
  ["ai","debug-my-code-prompt","Debug My Code Prompt","Prompt to find and fix bugs quickly."],
  ["ai","study-explain-prompt","Study & Explain Prompt","Prompt to understand any topic easily or make notes."],
  ["ai","product-description-prompt","Product Description Prompt","Prompt for e-commerce and marketplace listings."],
  ["ai","business-name-slogan-prompt","Business Name & Slogan Prompt","Prompt to brainstorm brand names, slogans and domains."],
  ["ai","linkedin-post-prompt","LinkedIn Post Prompt","Prompt for engaging LinkedIn posts."],
  ["ai","interview-preparation-prompt","Interview Preparation Prompt","Prompt for mock interview questions and model answers."],
  ["ai","summarize-rewrite-prompt","Summarize & Rewrite Prompt","Prompt to summarise, simplify or rewrite any text."],
  ["ai","ai-logo-design-prompt","AI Logo Design Prompt","Prompt for AI logo generators."],
  ["ai","travel-itinerary-prompt","Travel Itinerary Prompt","Prompt to plan a trip day by day."],
  ["ai","quiz-lesson-plan-prompt","Quiz & Lesson Plan Prompt","Prompt for teachers and students to create quizzes."],
  ["ai","ai-token-counter-estimate","AI Token Counter (Estimate)","Estimate tokens, words and characters of a prompt for ChatGPT, Gemini or Claude."],
  ["ai","ai-api-cost-calculator","AI API Cost Calculator","Estimate cost of AI API usage from your own token prices."],
  ["text","text-diff-checker","Text Diff Checker","Compare two texts line by line. Put ===== on its own line between them."],
  ["text","quick-text-summarizer","Quick Text Summarizer","Picks the most important sentences from a long text."],
  ["text","readability-score-checker","Readability Score Checker","Flesch reading ease and grade level of your English text."],
  ["text","keyword-density-checker","Keyword Density Checker","Find the most used words for SEO."],
  ["dev","markdown-to-html-converter","Markdown to HTML Converter","Convert Markdown (headings, bold, italic, links, lists) to HTML."],
  ["text","text-repeater","Text Repeater","Repeat any text many times."],
  ["social","upside-down-text","Upside Down Text","Flip text upside down for bios and chats."],
  ["social","emoji-picker","Emoji Picker","Click any emoji to copy it."],
  ["social","social-media-image-size-guide","Social Media Image Size Guide","Common image and video sizes for Instagram, YouTube, Facebook, WhatsApp, LinkedIn and X."],
  ["dev","robots-txt-generator","Robots.txt Generator","Create a robots.txt file for your website."],
  ["photo","remove-photo-metadata-exif","Remove Photo Metadata (EXIF)","Strip location, camera and other hidden data from a photo before sharing."],
  ["photo","blur-image","Blur Image","Blur a whole photo (useful for backgrounds)."],
  ["photo","image-to-ascii-art","Image to ASCII Art","Turn a photo into text art."],
  ["social","instagram-grid-splitter","Instagram Grid Splitter","Split one photo into 3 × 1-4 tiles (ZIP) to make a profile grid."],
  ["util","typing-speed-test","Typing Speed Test","Check your typing speed (WPM) and accuracy."],
  ["util","spin-the-wheel","Spin the Wheel","Add options (one per line) and spin to pick a random winner."],
  ["calc","fd-calculator","FD Calculator","Fixed deposit maturity amount."],
  ["calc","rd-calculator","RD Calculator","Recurring deposit maturity (quarterly compounding)."],
  ["calc","cagr-calculator","CAGR Calculator","Compound annual growth rate of an investment."],
  ["calc","calorie-bmr-tdee-calculator","Calorie (BMR / TDEE) Calculator","Estimate daily calorie needs."],
  ["calc","fuel-cost-calculator","Fuel Cost Calculator","Trip fuel cost from distance, mileage and fuel price."],
  ["calc","cgpa-to-percentage","CGPA to Percentage","Convert CGPA to percentage (CBSE style, multiply by 9.5)."],
  ["calc","marks-percentage-calculator","Marks Percentage Calculator","Percentage from marks obtained."],
  ["calc","hourly-to-salary-calculator","Hourly to Salary Calculator","Convert hourly pay to daily, monthly and yearly income."],
  ["calc","aspect-ratio-calculator","Aspect Ratio Calculator","Find the ratio of a screen or photo and a matching new size."]
];
export const REDIRECTS = {"black-white-filter":"photo-editor-studio","sepia-filter":"photo-editor-studio","vintage-filter":"photo-editor-studio","warm-filter":"photo-editor-studio","cool-filter":"photo-editor-studio","vivid-filter":"photo-editor-studio","cinematic-filter":"photo-editor-studio","sunset-filter":"photo-editor-studio","dreamy-filter":"photo-editor-studio","invert-filter":"photo-editor-studio","black-white-video-filter":"video-filters","sepia-video-filter":"video-filters","vintage-video-filter":"video-filters","cinematic-video-filter":"video-filters","vivid-video-filter":"video-filters","uppercase-converter":"text-case-converter","lowercase-converter":"text-case-converter","title-case-converter":"text-case-converter","sentence-case-converter":"text-case-converter","camelcase-converter":"text-case-converter","snake-case-converter":"text-case-converter","kebab-case-converter":"text-case-converter","alternating-converter":"text-case-converter","sort-lines-a-z":"sort-shuffle-lines","sort-lines-z-a":"sort-shuffle-lines","shuffle-lines":"sort-shuffle-lines","zoom-in-effect-motion":"video-motion-effects","zoom-out-effect-motion":"video-motion-effects","camera-shake-effect":"video-motion-effects","pulse-beat-effect":"video-motion-effects"};
export const TBYSLUG = {};
TOOLS.forEach(function (t, i) { TBYSLUG[t[1]] = i; });

/* ===== tools-helpers.js ===== */
// tools-helpers.js — Auto-generated text for every tool page (title, steps, FAQs, tips, use-cases, limits).

// CHANGED: added for AdSense review — a deterministic per-tool position within its own category/kind, used to rotate which subset of the (now larger) category bullet pool each tool's page shows, so sibling tools in the same category stop rendering identical "use cases" / "tips" blocks verbatim.
export const KIND_INDEX = {};
export function buildKindIndex() {
  const counters = {};
  TOOLS.forEach(function (t) {
    const k = toolKind(t);
    if (counters[k] === undefined) counters[k] = 0;
    KIND_INDEX[t[1]] = counters[k];
    counters[k]++;
  });
}
buildKindIndex();
export function toolTitle(t) {
  const a = t[2] + " – " + CATTAIL[t[0]] + " | QuickToolHub";
  if (a.length <= 60) return a;
  const b = t[2] + " – Free Online | QuickToolHub";
  return b.length <= 60 ? b : t[2] + " | QuickToolHub";
}
export function toolDesc(t) {
  const d = t[3].replace(/[\s.!]+$/, "");
  const a = t[2] + " – " + d + ". Free online, no signup, runs in your browser.";
  if (a.length <= 160) return a;
  const b = t[2] + " – " + d + ". Free, no signup.";
  if (b.length <= 160) return b;
  return (t[2] + " – " + d + ".").slice(0, 160);
}
export function relatedTools(i) {
  const c = TOOLS[i][0], r = [];
  TOOLS.forEach(function (t, k) { if (k !== i && t[0] === c) r.push(k); });
  r.sort(function (a, b) { return Math.abs(a - i) - Math.abs(b - i) || a - b; });
  return r.slice(0, 8);
}
export function toolKind(t) {
  if (t[0] === "ai" && /Token Counter|Improver/.test(t[2])) return "text";
  if (t[0] === "ai" && /Cost Calculator/.test(t[2])) return "calc";
  if (t[0] === "video" && /Information|Frame Capture/.test(t[2])) return "util";
  return t[0];
}
export function toolSteps(t) {
  const n = t[2];
  const S = {
    ai: ["Open " + n + " and fill in the fields, such as your role, task and context.", "Choose the tone, format and language you want.", "Click Generate Prompt and read the result.", "Copy it into ChatGPT, Gemini, Claude or any other AI tool, then refine it with a follow-up message."],
    photo: ["Click the file box and choose a photo from your device.", "Set the options or sliders shown for " + n + " and check the preview.", "Press Apply if the tool has that button.", "Download the finished image to your device."],
    video: ["Click the file box and choose a video (or photos) from your device.", "Set the options shown for " + n + ".", "Press Start and keep the browser tab open while it processes.", "Preview the result and download it."],
    pdf: ["Choose one or more PDF files (or images) from your device.", "Set the options shown for " + n + ", such as page numbers or text.", "Click the action button and wait a moment.", "Download the finished PDF."],
    text: ["Type or paste your text into the box, or fill in the fields shown.", n + " runs as you type; you can also press the Run button.", "Check the result in the output box.", "Click Copy result and paste it where you need it."],
    dev: ["Paste your code, data or text into the box, or fill in the fields shown.", "Run " + n + " (it also updates as you type).", "Check the output for errors or the converted result.", "Copy the output and use it in your project."],
    calc: ["Enter your values in the fields.", "Choose any options such as units, rates or time period.", "Press Calculate (or Convert) to see the result.", "Copy the result or change a value and try again."],
    media: ["Open " + n + " and, if asked, allow the browser permission it needs.", "Press the start, speak or capture button.", "Stop when you are done and preview the result.", "Download or copy the result."],
    util: ["Open " + n + " and enter your values or choose the options.", "Press the action button to see the result.", "Check the output on screen.", "Copy or download it if you need to save it."],
    social: ["Paste your link or text, or choose the options shown for " + n + ".", "Press the button to generate the result.", "Check the output.", "Copy it and use it in your posts, bio or website."]
  };
  return S[toolKind(t)] || S[t[0]];
}
export function toolFaqs(t) {
  const n = t[2], c = t[0], k = toolKind(t), q = [];
  q.push(["Is " + n + " free to use?", n + " is completely free on QuickToolHub. No signup is needed, there is no daily limit and QuickToolHub adds no watermark of its own."]);
  const who = { photo: "photos", video: "videos and photos", pdf: "PDF files and images", media: "recordings, camera images and screen captures" }[c];
  if (n === "Speech to Text") q.push(["Is my voice sent to QuickToolHub?", "QuickToolHub does not receive or store your voice. Your browser captures the audio, and in Chrome speech recognition is usually handled by the browser's own speech service under its privacy policy."]);
  else if (who) q.push(["Are my " + who + " uploaded when I use " + n + "?", "No. " + n + " runs inside your browser, so your " + who + " stay on your device and are not sent to QuickToolHub servers."]);
  else q.push(["Is the text I enter into " + n + " stored anywhere?", "No. Processing happens in your browser and QuickToolHub does not store what you type, paste or generate."]);
  const K = {
    photo: ["Which image formats work with " + n + "?", "Common formats such as JPG, PNG and WebP work in modern browsers. If a photo does not load, convert it to JPG or PNG first and try again."],
    video: ["Which browser works best for " + n + "?", "Chrome or Edge on desktop or Android work best. Tools that process video run in real time, so keep the tab open until they finish. Results are saved in WebM format."],
    pdf: ["Is there a file size or page limit for " + n + "?", "QuickToolHub sets no limit of its own. Very large PDFs depend on your device memory because everything is processed in your browser."],
    text: ["Is there a text length limit for " + n + "?", "QuickToolHub does not set one. Very long text depends on your browser and the speed of your device."],
    dev: ["Is it safe to paste code or data into " + n + "?", "Processing happens locally in your browser and nothing is sent to QuickToolHub. Still, avoid pasting real passwords or secret keys into any online tool."],
    calc: ["How accurate is " + n + "?", "Results are estimates based on the standard formula and the numbers you enter. They are not financial, tax or medical advice, so confirm important decisions with a qualified professional."],
    ai: ["Which AI tools can I use the result of " + n + " with?", "Any chatbot or generator, such as ChatGPT, Gemini and Claude for text, or image and video AI tools for visual prompts. Always review and edit the AI output before you use it."],
    media: ["Why does my browser ask for permission when I use " + n + "?", "If a tool needs your microphone, camera or screen, your browser asks first. You can deny or revoke the permission at any time in the browser settings."],
    util: ["Do I need to install anything to use " + n + "?", "No. " + n + " works directly in modern browsers such as Chrome, Edge, Firefox and Safari, with no app or plugin."],
    social: ["Is " + n + " affiliated with Instagram, YouTube or WhatsApp?", "No. QuickToolHub is independent and is not affiliated with or endorsed by any social network. Always follow the rules of the platform you post on."]
  };
  q.push(K[k] || K[c]);
  q.push(["Does " + n + " work on my phone?", (c === "video" && k === "video") ? "The page opens on phones, but recording works only in browsers that support it: Chrome or Edge on Android or desktop. iPhone and Safari may not support it." : "Yes. The page is mobile friendly and works in modern mobile browsers."]);
  return q;
}
// CHANGED: added for AdSense "thin / low value content" review — per-category practical use cases and tips, used on every tool page
export function toolUseCases(t) {
  const k = toolKind(t);
  // CHANGED: pool expanded from 4 to 8 items per category, and each tool page now shows a 4-item ROTATING slice (via KIND_INDEX) rather than the identical 4 items every time — this is what cuts the measured text overlap between sibling tools in the same category.
  const U = {
    ai: ["Draft a ready-to-use prompt in under a minute instead of guessing how to phrase a request to ChatGPT, Gemini or Claude.", "Keep a consistent tone and structure across many prompts for a team, a classroom or a content calendar.", "Turn a vague idea into a specific brief with role, context, format and tone already filled in.", "Reuse the same prompt pattern for similar recurring tasks, such as weekly social captions or lesson plans.", "Hand a junior teammate a ready-made brief instead of explaining the same request from scratch each time.", "Standardise how your whole team asks an AI for help, so results don't vary wildly between people.", "Save a well-performing prompt as a template and swap in new details for the next similar task.", "Get past a blank-page moment by having the structure (role, task, format, tone) already decided for you."],
    photo: ["Prepare product photos, profile pictures or social posts without installing Photoshop or a mobile app.", "Quickly test a look or crop before committing to it in a heavier desktop editor.", "Resize or convert images to match a platform's exact size or format requirement, such as a thumbnail or a listing photo.", "Work through several images one at a time between browser tabs while keeping full control of each result.", "Fix a single photo fast on a phone browser without downloading a separate editing app.", "Prepare a batch of similar images with the same consistent look before uploading them anywhere.", "Try an edit non-destructively, since the original file on your device is never changed.", "Get an image into the right shape or size for a form, a resume or an online application."],
    video: ["Trim, caption or re-colour short clips for Reels, Shorts and TikTok without exporting to desktop software.", "Prepare a raw phone recording for a quick social post or a presentation.", "Add a simple motion effect for marketing or personal videos without learning a full video editor.", "Test an edit quickly, then redo it with different settings in seconds if it doesn't look right.", "Shrink a clip enough to send over chat or email without losing the moment it is meant to show.", "Clean up a screen recording or lecture clip before sharing it with a class or a team.", "Reframe an existing landscape clip for a vertical feed instead of reshooting it.", "Make a quick before/after style edit to compare two settings side by side."],
    pdf: ["Combine scanned pages, invoices or reports into a single file before emailing or submitting them.", "Clean up a PDF (remove pages, rotate, add page numbers) before printing or sharing it with a client.", "Convert PDF pages into images for a presentation, a webpage or a social post.", "Add a watermark to protect a document you are sharing for review before it is finalised.", "Pull just the pages you need out of a long report instead of sending the whole file.", "Fix a document a portal rejected because a page was sideways or in the wrong place.", "Prepare a tidy application pack from several separate scanned documents.", "Get a document ready to print by checking page order and orientation first."],
    text: ["Reformat pasted text (case, spacing, line breaks) before pasting it into an email, a CMS or a spreadsheet.", "Clean up notes, transcripts or scraped content before using them somewhere else.", "Generate quick reference text such as slugs, Lorem Ipsum or encoded strings for testing a design or a form.", "Check basic text statistics before submitting an assignment, an article or a caption that has a length limit.", "Fix inconsistent capitalisation in a list pasted from a spreadsheet or a supplier sheet.", "Tidy up a block of text copied from a PDF or a website before publishing it elsewhere.", "Prepare sample or placeholder text while a design or layout is still being built.", "Quickly check a draft against a word or character limit before you submit it."],
    dev: ["Debug an API response, a token or a hash without opening a terminal or installing a library.", "Convert between data formats (JSON, CSV, Base64) when moving data between two different tools or systems.", "Validate formatting before committing code or sending a payload to an endpoint.", "Quickly generate test data such as UUIDs or passwords while building or testing an app.", "Inspect a confusing value from a log file or browser console without writing a script for it.", "Check a regular expression against sample lines before putting it into production code.", "Spot-check a configuration file for a syntax mistake before deploying it.", "Create quick throwaway test values for a demo or a QA session."],
    calc: ["Compare loan or investment options side by side before making a financial decision.", "Estimate a bill, a discount or a tax amount on the spot while shopping, invoicing or negotiating.", "Check your numbers against a second source before trusting a quote you received from somewhere else.", "Plan a budget or a personal goal (fitness, savings, grades) using a straightforward, transparent formula.", "Settle a quick disagreement about a calculation during a meeting or a family discussion.", "Sanity-check a figure a salesperson or agent quoted you before signing anything.", "Work out a few what-if scenarios before committing to a number.", "Get a rough answer fast without opening a spreadsheet for a single calculation."],
    media: ["Record a quick voice note, screen walkthrough or webcam clip without separate recording software.", "Capture a short tutorial or bug report to share with a teammate or a client.", "Practice a presentation and listen back to it before the real meeting or interview.", "Convert speech to text for notes, captions or a rough transcript.", "Make a short demo recording to explain a problem instead of writing a long message.", "Record a quick voice memo to capture an idea before you forget it.", "Capture a webcam photo for a profile or an ID-style picture without a separate camera app.", "Get a rough transcript of something you said out loud to turn into notes later."],
    util: ["Handle a quick one-off task (a QR code, a timer, a random pick) without downloading an app you'll only use once.", "Prototype a CSS effect such as a gradient, shadow or glass look before writing it into a real project.", "Settle a decision with friends, family or a class using a wheel or a dice roll.", "Grab an exact color code directly from a picker instead of guessing a hex value.", "Generate a one-off value (a password, a UUID, a QR code) without installing a dedicated app.", "Test a small design idea in isolation before wiring it into a bigger project.", "Keep a group activity fair by letting a random tool make the call instead of a person.", "Get an exact code or value you can paste straight into a stylesheet or a form."],
    social: ["Prepare hashtags, captions or links before scheduling a post across one or more platforms.", "Check image and video dimensions before exporting content for a specific platform.", "Create tracking links to see which channel is actually sending you traffic.", "Generate a stylised bio, caption or chat link for Instagram, WhatsApp and other profiles.", "Put together a batch of hashtags or captions ahead of a week of scheduled posts.", "Check a size or format requirement before uploading content to a specific platform.", "Build a link people can tap to start a chat or open a page directly, with no extra typing.", "Prepare a small, repeatable piece of social content without opening a design tool."]
  };
  const pool = U[k] || U[t[0]] || U.util;
  const idx = KIND_INDEX[t[1]] || 0;
  return pickRotated(pool, idx, 4);
}
export function toolTips(t) {
  const k = toolKind(t);
  // CHANGED: pool expanded from 4 to 8 items per category, with a rotating 4-item slice per tool (see toolUseCases above for why).
  const P = {
    ai: ["Be specific about your audience and goal; a vague prompt usually gets a vague answer back.", "Tell the AI the exact output format you want (bullets, a table, JSON) so you don't have to reformat the answer yourself.", "Keep a short library of your best-performing prompts so you are not rewriting them from scratch every time.", "Always review and fact-check anything an AI gives you before you publish or send it to someone else.", "Give the AI a short example of the style you want; a sample often works better than a long description.", "Ask the AI to list its assumptions so you can correct any that are wrong before it goes further.", "Break a big request into smaller steps if the first answer feels too generic.", "Tell the AI who the final reader is; the same facts read very differently for a beginner versus an expert."],
    photo: ["Keep a copy of your original photo before heavy edits, in case you want to go back to it later.", "For web use, JPG or WebP at around 70-85% quality usually looks fine and loads far faster than a full-size PNG.", "Apply color and filter edits before resizing an image, since resizing first can change how a filter looks.", "Check your result at full size, not just the small preview, before you download it.", "Good lighting in the original photo matters more than any filter applied afterward.", "Avoid stacking too many effects on one photo, since each pass can soften detail a little.", "Check text and faces are not cut off after cropping or resizing before you finalise the image.", "Compare the edited version next to the original before deciding it is an improvement."],
    video: ["Trim unnecessary footage first; a shorter clip processes and exports noticeably faster.", "Keep the browser tab active (and your laptop plugged in) while a video tool renders, especially for longer clips.", "Test your settings on a short clip before applying the same settings to a long one.", "Export at the resolution you'll actually use (for example 1080p for Reels) rather than always picking the highest setting.", "Check the audio levels in the preview, not just the picture, before you download the result.", "Close other heavy browser tabs while a video is processing to avoid it slowing down.", "Keep a backup of the original clip until you're sure the edited version is the one you want.", "Record in good light to begin with; no browser filter fixes footage that was too dark."],
    pdf: ["Check the page order carefully after merging; it is much easier to fix before you send the file.", "Keep an unedited backup of any PDF before you rotate, delete pages from, or watermark it.", "For scanned documents, a higher-resolution scan gives a cleaner result when converting pages to images.", "Add page numbers or a watermark as one of the last steps, after you've finished reordering and trimming pages.", "Open the finished PDF once, start to end, before you send or submit it anywhere important.", "Name files clearly before merging so you don't lose track of which document is which.", "Check the file size limit of the portal you're uploading to before you finalise the document.", "Flatten or finish one change at a time rather than making several edits in one pass."],
    text: ["Paste a small sample first to confirm the tool does what you expect before you run it on a long document.", "Combine tools in sequence (for example, remove extra spaces, then sort lines) for cleaner final results.", "Keep your original text saved somewhere else until you are happy with the converted version.", "For case converters, remember that names, abbreviations or brand names may still need a manual fix afterward.", "Scan the converted output once before pasting it somewhere public or permanent.", "Remove hidden formatting from pasted web content before converting, since it can affect the result.", "Run a long document through in smaller sections if your browser feels slow.", "Keep a plain-text copy of anything important before heavy reformatting."],
    dev: ["Never paste real passwords, API keys or personal data into any online tool, including this one.", "Validate your JSON or data structure before you minify it, so any errors are easier to spot while they're still readable.", "Keep hashes and encoded values paired with a short note of what algorithm or encoding you used.", "Test a regex pattern against a few different sample lines, not just one, before you rely on it.", "Use sample or dummy data when testing a tool publicly rather than real production values.", "Double check the exact format (case-sensitivity, delimiters) a receiving system expects before you convert to it.", "Keep a copy of the original data until you've confirmed the converted version is correct.", "Re-run a check after any change to the input, since a small edit can change the result a lot."],
    calc: ["Treat every result as an estimate for planning purposes, not as a guarantee from a bank, employer or tax authority.", "Double-check the units you entered (months vs. years, a percentage vs. a decimal); a small mismatch changes the result a lot.", "For loans and investments, compare more than one scenario (different tenures or rates) before deciding.", "Keep a quick note of the inputs you used so you can compare two calculations fairly later on.", "Re-enter the numbers from scratch if a result looks surprising, rather than assuming the tool is wrong.", "Ask what fees or rounding rules a real offer includes that a simple formula does not.", "Round only at the very end of a multi-step calculation to avoid small errors adding up.", "Use the same assumptions across two calculations if you want to compare them fairly."],
    media: ["Do a short test recording first to check your microphone or camera levels before the real take.", "Close other tabs that use the camera or microphone to avoid permission conflicts.", "Record in a quiet, well-lit space for noticeably clearer audio and video.", "Save your recording right after you stop it, since an accidentally closed browser tab can lose unsaved media.", "Check your browser's permission settings if a recording tool does not start as expected.", "Keep sentences short and pause between them if you plan to convert speech to text afterward.", "Test playback immediately after recording so you can redo it while the moment is still fresh.", "Use a wired connection or quiet room when recording something important, rather than relying on noise cancellation alone."],
    util: ["Bookmark the tools you use often so you can jump straight back to them next time.", "For CSS generators, copy the code into your project and adjust the values slightly to match your exact design.", "Use the color picker alongside your design tool to keep colors consistent across a whole project.", "For random pickers, type every option exactly as it should appear, since a typo will show up in the result.", "Double check a generated value (a code, a link, a QR code) once before relying on it.", "Keep the inputs you used written down if you might need to recreate the same result later.", "Test a generated snippet in a small, safe place before pasting it into a live project.", "Treat quick utilities as a starting point you can tweak, not a final, unchangeable answer."],
    social: ["Match hashtags to your niche and audience size rather than only picking the most popular, overused ones.", "Keep a platform image-size guide handy, since exact sizes are updated from time to time by each platform.", "Build a separate tracking link for each channel so you actually know what is driving results.", "Preview how a caption looks on mobile before posting, since line breaks can display differently there.", "Test a link or code once yourself before sharing it publicly.", "Keep captions and hashtags in a simple document so you can reuse the ones that perform well.", "Check a platform's current rules before relying on an older size or format guideline.", "Space out identical hashtag sets across posts instead of reusing the exact same list every time."]
  };
  const pool = P[k] || P[t[0]] || P.util;
  const idx = KIND_INDEX[t[1]] || 0;
  return pickRotated(pool, idx, 4);
}
// CHANGED: added for AdSense review — honest, category-specific limitations for every tool page, so the page states what the tool does NOT do, not only what it does.
export function toolLimits(t) {
  const k = toolKind(t), n = t[2];
  // CHANGED: the first bullet always names the tool (n) and is category-wide true, so it stays fixed per page; the remaining 3 are now a rotating slice of a 7-item pool per category (same rotation approach as toolUseCases/toolTips) so sibling tools in a category don't show identical limitation text.
  const L = {
    ai: [n + " only drafts a prompt. It does not call any AI model itself, so you still need to paste the result into ChatGPT, Gemini, Claude or another chatbot to get an answer.", "The prompt is a starting point. Results from any AI tool can be inaccurate or biased, so review and fact-check the output before you rely on it or publish it.", "It cannot guarantee a specific style or length from every AI model, since different models follow instructions differently.", "It does not store or remember your previous prompts between visits.", "It cannot verify facts inside the prompt itself; any figures or claims you type in are not checked.", "It does not know which AI model you will paste the prompt into, so results can still vary between tools.", "It will not stop an AI from giving a wrong or made-up answer; that risk depends on the AI tool you use, not this prompt."],
    photo: [n + " works on one image at a time and does not batch-process a whole folder.", "It cannot restore detail that is already missing from a blurry or heavily compressed source photo.", "Very large images (for example multi-megapixel scans) depend on your device's memory and may be slow on older phones.", "It does not recognise faces, objects or text in the photo, so edits are applied to the whole image equally.", "It does not remove people, objects or backgrounds automatically; it only applies the adjustment described on this page.", "It cannot guess colours or details that were never captured in the original photo.", "Results can look slightly different across screens, since brightness and colour vary by device."],
    video: [n + " processes video in real time inside your browser, so a five-minute clip takes about five minutes to finish, it is not instant.", "It works best in Chrome or Edge; some browsers, especially on iPhone, may not support the recording feature it needs.", "Very long or very high-resolution videos can run out of memory in the browser tab.", "The output is saved as WebM, so some apps or older devices may need a separate conversion to MP4 before they accept it.", "It cannot fix shaky footage or poor lighting that was already present in the original recording.", "Background apps or a sleeping tab can interrupt processing, so the tab needs to stay open and active.", "It does not upload or back up your video anywhere; closing the tab before it finishes loses the result."],
    pdf: [n + " works on the whole document at once; it does not let you edit the text inside a PDF page.", "Password-protected or heavily secured PDFs may need to be unlocked elsewhere before this tool can open them.", "Scanned PDFs are treated as images, so this tool does not run text recognition (OCR) on them.", "Very large PDFs (hundreds of pages or large embedded images) depend on your device's memory and browser speed.", "It cannot recover a corrupted or damaged PDF file.", "It does not add digital signatures or legal certification to a document.", "Formatting from the original file (fonts, layout) is preserved as-is and cannot be redesigned here."],
    text: [n + " works on plain text only; it does not keep bold, italics, colours or other formatting from a word processor.", "It processes exactly what you paste, so hidden characters copied from a web page can sometimes affect the result.", "Very long text (many thousands of words) may be slower on older phones.", "It does not check grammar, facts or meaning, only the specific transformation it is built for.", "It cannot tell whether the content itself is accurate, only reformat the characters you give it.", "Proper nouns, brand names and abbreviations may need a manual fix after an automatic conversion.", "It does not translate meaning between languages unless that is specifically what the tool is built to do."],
    dev: [n + " runs a single, specific operation; it is not a full code editor or IDE.", "Very large inputs (large JSON files, big data sets) depend on your browser's memory and may slow down.", "It does not validate business logic or security of your code, only the narrow format or value it processes.", "Never paste real passwords, private keys or production secrets into this or any online tool.", "It cannot guarantee compatibility with every system that will later read the converted value.", "It does not run or execute your code; it only transforms the specific value or format shown on this page.", "Results depend on standard rules for the format; a non-standard or malformed input may give an unexpected result."],
    calc: [n + " gives an estimate based on the standard formula and the numbers you enter; it is not financial, tax, medical or legal advice.", "It does not know your full financial or personal situation, so always confirm important decisions with a qualified professional.", "Real-world offers from banks, employers or institutions may include fees, rounding or rules this calculator does not account for.", "Results change if you change any input, so double-check the numbers you typed before relying on the output.", "It cannot predict future rates, markets or policy changes; it only calculates from the numbers you provide today.", "It does not save your calculation history between visits.", "Regional rules and formulas can vary, so always confirm figures against your local authority or provider."],
    media: [n + " needs your browser's permission to use the microphone, camera or screen, and will not work if that permission is denied.", "Recording quality depends on your device's hardware, not on this tool.", "It does not edit or enhance the recording afterward beyond what is described on this page.", "Very long recordings use more memory and may be slower to save on older devices.", "It cannot remove background noise or improve a recording made in a noisy environment.", "Closing the browser tab during a recording will lose any unsaved audio or video.", "It does not transcribe or translate recordings unless that is specifically what the tool does."],
    util: [n + " is a lightweight, single-purpose helper; it does not save your data between visits unless stated otherwise.", "It does not connect to other apps or accounts, so results have to be copied out manually.", "Very large inputs may be slower on older phones or browsers.", "It is meant for quick, everyday use rather than large-scale or automated workflows.", "It cannot guarantee a generated code or link will work forever if the destination it points to changes.", "It does not check whether a result meets a specific official or legal requirement.", "Results are generated fresh each time and are not stored or retrievable later."],
    social: [n + " prepares text, links or tags; it does not post anything to your accounts automatically.", "It cannot guarantee how a platform will display or rank your content, since each platform's algorithm changes over time.", "It does not access your social media account or any private data.", "Always check a platform's current rules and size guidelines, since these can change without notice.", "It cannot guarantee engagement, reach or follower growth from using the generated content.", "It does not check whether a hashtag or caption breaks a specific platform's community guidelines.", "Dimensions and formats shown are general guidance and should be confirmed against the platform's current help pages."]
  };
  const pool = L[k] || L[t[0]] || L.util;
  const idx = KIND_INDEX[t[1]] || 0;
  return [pool[0]].concat(pickRotated(pool.slice(1), idx, 3));
}
export const WHY = ["Free to use with no signup and no installation", "Runs in your browser, so QuickToolHub does not upload your files", "Quick results on desktop and mobile", "Part of a growing set of " + TOOLS.length + " free tools you can use in one place"];
export const POPULAR = ["merge-pdf", "image-compressor", "emi-calculator", "chatgpt-ai-prompt-generator", "qr-code-generator", "json-formatter-validator", "word-counter", "photo-editor-studio"].filter(function (s) { return TBYSLUG[s] !== undefined; });
