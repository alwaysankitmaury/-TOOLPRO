// guides.js — long guides for tools
import { escH } from "./config.js";
import { KIND_INDEX, TBYSLUG, TOOLS, toolFaqs, toolKind, toolLimits, toolSteps, toolTips, toolUseCases } from "./tools.js";

/* ===== guides-store.js ===== */
// guides-store.js — TOOLGUIDES object + addG() helper. Guide files below fill it.

/* =====================================================================
   TOOL GUIDES (added): long-form editorial guides shown under each of
   16 main tools. Rendered by guideHtml(slug) inside toolBlock().
   ===================================================================== */
export const TOOLGUIDES = {};
/* ===== EXTRA TOOL GUIDES (batch 3): PDF, Image, Video, Calculators, Developer ===== */
export function addG(slug, ov, steps, feats, tips, faq) { TOOLGUIDES[slug] = { ov: ov, steps: steps, feats: feats, tips: tips, faq: faq }; }

/* ===== guides-main-guides.js ===== */
// guides-main-guides.js — Hand-written long guides for the main tools (batch 1).

TOOLGUIDES["word-counter"] = {
  ov: [
    `A word counter looks like a very small utility, but it solves a problem that almost every writer, student, marketer and office worker meets sooner or later: knowing exactly how long a piece of text is. Essays have minimum and maximum lengths, meta descriptions are cut off after roughly 155 characters, social captions have hard limits, and clients often pay by the word. Counting by eye is slow and unreliable, and the counter built into a word processor is not always available when you are working in an email box, a CMS, a chat window or a notes app.`,
    `This Word Counter works instantly inside your browser. Paste or type your text and it reports words, characters with and without spaces, sentences, paragraphs and an estimated reading time at an average adult speed of about 200 words per minute. Because processing happens locally, your draft is never uploaded, which matters when the text is an unpublished article, a confidential report or a personal letter. It is free, needs no signup and works on phones as well as desktops.`
  ],
  steps: [
    `Open the tool and click inside the text box.`,
    `Type your text, or paste it from a document, email or web page.`,
    `The counts update as you type, and you can also press Run to refresh them.`,
    `Read the number of words and characters to compare against your target length.`,
    `Use the sentence and paragraph counts to judge structure, for example whether a section is one long block or several short ones.`,
    `Edit your text, watch the numbers change, and press Copy result if you want to paste the statistics into a report.`
  ],
  feats: [
    `Students: check that an essay or assignment meets the required word range before submitting.`,
    `SEO writers: keep meta descriptions near 150 to 160 characters and titles under about 60 characters.`,
    `Social media managers: stay inside limits for captions, bios and posts on different platforms.`,
    `Freelancers: verify the length of a delivered article when you are paid per word.`,
    `Speakers: use the reading time estimate to plan a talk, since spoken pace is usually 130 to 160 words per minute.`,
    `Translators and editors: compare the length of a source text and its translation quickly.`
  ],
  tips: [
    `Decide whether your target counts characters with spaces or without, because platforms differ.`,
    `Remember that different tools split words slightly differently around hyphens and numbers, so allow a small margin when you are right at a limit.`,
    `Remove headings, captions or reference lists before counting if your brief excludes them.`,
    `Paste plain text where possible, since hidden formatting from web pages can add stray line breaks that change paragraph counts.`,
    `Use the sentence count together with words per sentence to spot overly long sentences that hurt readability.`,
    `Keep an unedited copy of your text before heavy trimming to hit a limit.`
  ],
  faq: [
    [`How does the tool decide what a word is?`, `A word is any group of characters separated by spaces, tabs or line breaks. Hyphenated terms such as well-known count as one word, and numbers count as words too. Word processors can differ by a handful of words on long documents because of how they treat symbols.`],
    [`Is my text saved or sent anywhere?`, `No. The counting runs in your own browser, so the text stays on your device and ToolsNest does not store it. You can safely check private drafts.`],
    [`How is reading time calculated?`, `Reading time divides the word count by 200, an average silent reading speed for adults, and rounds up to the next minute. It is an estimate, because technical or unfamiliar material is read more slowly.`],
    [`Does it work for Hindi or other languages?`, `Yes for counting words and characters, because those rely on spaces and length. Sentence detection looks for common punctuation such as full stops, question marks and exclamation marks, so languages that use other sentence endings may give less precise sentence counts.`]
  ]
};
TOOLGUIDES["title-case-converter"] = {
  ov: [
    `Text case sounds trivial until you have to fix a long list of headings, a column of product names pasted in all capitals, or a variable name that must follow a strict programming convention. Retyping every letter by hand is slow and creates mistakes. A case converter changes the capitalization of whole blocks of text in one step, so you can focus on the content instead of the formatting.`,
    `The Title Case Converter turns any text into Title Case, where the main words start with a capital letter, which is the usual style for headlines, article titles, book names and slide headings. It belongs to a family of ToolsNest converters that also cover UPPERCASE, lowercase, Sentence case, camelCase, snake_case and kebab-case. Everything runs in your browser, nothing is uploaded, and the result appears as you type so you can copy it straight into your document, CMS or code editor.`
  ],
  steps: [
    `Open the converter and paste or type your text into the box.`,
    `The converted text appears in the result area immediately.`,
    `Read the output once, paying attention to names, brands and abbreviations.`,
    `Click Copy result to place it on your clipboard.`,
    `Paste it into your document, spreadsheet, web page or code file.`,
    `If you need another style, open the matching converter from the related tools list and repeat.`
  ],
  feats: [
    `Bloggers and editors: format headlines and subheadings consistently across a whole site.`,
    `E-commerce sellers: clean up product titles that arrive in all capitals from a supplier sheet.`,
    `Developers: switch names between camelCase, snake_case and kebab-case when moving data between systems.`,
    `Students: tidy up the headings of reports and presentations quickly.`,
    `Data entry teams: normalise names and city lists pasted from different sources.`,
    `Social media users: prepare clean captions and profile text without retyping.`
  ],
  tips: [
    `Always scan the result for proper nouns, since automatic conversion treats every word the same way.`,
    `Brand names with unusual capitals such as iPhone or eBay may need a manual fix afterwards.`,
    `Use sentence case for long body text, because Title Case on whole paragraphs looks odd and is harder to read.`,
    `Pick one style guide for your site or document and apply it everywhere for consistency.`,
    `For URLs and CSS class names choose kebab-case, and for Python variables choose snake_case.`,
    `Keep the original text until you have checked the converted version.`
  ],
  faq: [
    [`Does Title Case capitalize every single word?`, `This tool capitalizes the first letter of each word and lowercases the rest, which is the simple and predictable version. Some style guides keep small words such as of, the or and in lowercase, so you may want to adjust those by hand for formal publications.`],
    [`What is the difference between camelCase and snake_case?`, `Both join words without spaces. camelCase capitalizes each word after the first, such as firstName, and is common in JavaScript and Java. snake_case uses lowercase words joined by underscores, such as first_name, and is common in Python and databases.`],
    [`Will it change numbers or symbols?`, `Numbers and symbols are left as they are. Only letters are affected, so phone numbers, prices and punctuation keep their original form.`],
    [`Is there a limit on text length?`, `ToolsNest sets no limit. Very large texts depend on your device and browser speed, but normal articles convert instantly.`]
  ]
};
TOOLGUIDES["password-generator"] = {
  ov: [
    `Weak and reused passwords are one of the most common reasons accounts get broken into. People tend to choose names, dates and simple patterns because they are easy to remember, and attackers use automated tools that try exactly those guesses first. A properly random password removes the pattern completely, so there is nothing for a guessing program to exploit.`,
    `The ToolsNest Password Generator creates a random password of the length you choose, with or without symbols. It uses your browser's cryptographically secure random number generator rather than a simple predictable function, and the password is created on your device, not on a server. That means it is never sent, logged or stored by ToolsNest. Pair it with a password manager so you can use a different long password for every account without having to memorize any of them.`
  ],
  steps: [
    `Open the tool and set the length. Sixteen characters is a good starting point, and longer is stronger.`,
    `Choose whether to include symbols. Keep them on unless a website refuses them.`,
    `Click Generate to create a new password.`,
    `Click Copy to place the password on your clipboard.`,
    `Paste it into the sign-up or change-password form, then save it in your password manager.`,
    `Generate a fresh password for every different account instead of reusing one.`
  ],
  feats: [
    `Creating strong passwords for email, banking, social media and shopping accounts.`,
    `Setting up Wi-Fi router passphrases that are hard to guess.`,
    `Producing temporary passwords for new team members or test accounts.`,
    `Generating secret keys and tokens for development and testing.`,
    `Replacing old passwords after a data breach notice.`,
    `Helping family members move away from easy passwords like birthdays.`
  ],
  tips: [
    `Length matters more than clever tricks. A random sixteen character password is far stronger than a short one full of substitutions.`,
    `Never reuse a password across sites, because one breach then exposes every account.`,
    `Store passwords in a reputable password manager, not in a text file or a note on your phone.`,
    `Turn on two-factor authentication wherever it is offered, as a second layer in case a password leaks.`,
    `If a site limits symbols, increase the length to compensate.`,
    `Do not share passwords by chat or email, and never type them into links sent by strangers.`
  ],
  faq: [
    [`Is the generated password stored by ToolsNest?`, `No. The password is produced inside your browser and never leaves your device, so ToolsNest cannot see or save it.`],
    [`How long should my password be?`, `For important accounts such as email and banking, use at least sixteen random characters. For less sensitive accounts twelve is a sensible minimum. The longer the password, the more guesses an attacker needs.`],
    [`Why is a random password better than one I make up?`, `Human-made passwords follow patterns, such as a word followed by a number. Attackers try those patterns first. A random password has no pattern, so the only option left is brute force, which becomes impractical as length grows.`],
    [`Can I remember these passwords?`, `Not easily, and you are not meant to. Use a password manager to remember them for you, and memorize only the one strong master password that unlocks the manager.`]
  ]
};
TOOLGUIDES["text-repeater"] = {
  ov: [
    `Sometimes you need the same piece of text many times: a placeholder to fill a layout, a test string to check how a form handles long input, a pattern for a design mockup, or a line repeated for a fun chat message. Copying and pasting by hand works for five repeats but becomes tedious and error prone at fifty or five hundred.`,
    `The Text Repeater does it in one click. Enter your text, choose how many times it should repeat and pick a separator such as a new line, a space, a comma or nothing at all. The result is ready to copy immediately. It is useful for developers testing limits, designers filling prototypes, teachers preparing practice sheets, and anyone who needs repetition without manual effort. The tool runs locally in your browser, so nothing you type is uploaded.`
  ],
  steps: [
    `Type or paste the text you want to repeat into the Text field.`,
    `Enter the number of repetitions. The tool allows up to 1,000.`,
    `Choose a separator: new line, space, comma or none.`,
    `Click Repeat to generate the output.`,
    `Check the result in the box below.`,
    `Click Copy and paste it where you need it.`
  ],
  feats: [
    `Developers: create long strings to test input limits, database fields and layout overflow.`,
    `Designers: fill cards, tables and text areas with realistic amounts of content.`,
    `Teachers: prepare handwriting or typing practice lines.`,
    `Marketers: build repeated hashtags or keyword lists for quick drafts.`,
    `Testers: simulate large clipboard or form submissions.`,
    `Everyday users: create playful repeated messages for friends.`
  ],
  tips: [
    `Add a trailing space or newline inside the text itself if you want a separator that the dropdown does not offer.`,
    `Start with a small number to check the format, then increase it.`,
    `Use the comma separator when you need a quick list that can be pasted into a spreadsheet or code array.`,
    `For layout tests, repeat a long word without spaces to see how your design handles overflow.`,
    `Very large outputs may slow older phones, so keep repetitions reasonable.`,
    `Do not use repeated text as filler on a live website, since search engines value original content.`
  ],
  faq: [
    [`What is the maximum number of repeats?`, `The tool repeats up to 1,000 times in one run, which is plenty for testing and design work while keeping your browser responsive.`],
    [`Can I repeat multiple lines?`, `The input is repeated exactly as typed, so a text block with several lines will be repeated as a block. Choose the new line separator to put each copy on its own line.`],
    [`Is my text uploaded?`, `No. Repetition happens in your browser and ToolsNest does not receive the text.`],
    [`Can I use the output in code?`, `Yes. With the comma separator you can wrap the result in brackets to make a quick array, or use new lines for line-based test data.`]
  ]
};
TOOLGUIDES["base64-encoder"] = {
  ov: [
    `Base64 is a way of writing data using only 64 safe, printable characters: letters, numbers and two symbols. It exists because many systems, such as email, URLs, JSON and certain HTML attributes, are designed for plain text and can corrupt raw binary data. By converting bytes into Base64 text, a small image, a file or a string can travel safely through those systems and be turned back into the original later.`,
    `This guide covers both the Base64 Encoder and the Base64 Decoder on ToolsNest. The encoder converts ordinary text, including accented and non-English characters, into Base64. The decoder reverses the process and shows the original text. Both run entirely in your browser, so the data you paste is not uploaded. It is important to remember that Base64 is an encoding, not encryption. Anyone can decode it in a second, so it must never be used to hide passwords or private information.`
  ],
  steps: [
    `Open the Base64 Encoder if you want to convert text, or the Base64 Decoder if you already have an encoded string.`,
    `Paste your text or Base64 string into the input box.`,
    `The result appears automatically, or press Run to refresh it.`,
    `If the decoder shows an error, check for missing characters, extra spaces or a cut-off string.`,
    `Click Copy result to copy the output.`,
    `Paste it into your code, configuration file, API request or document.`
  ],
  feats: [
    `Developers: inspect values from API responses, headers and configuration files.`,
    `Embedding small images or fonts directly into CSS and HTML as data URLs.`,
    `Debugging tokens, since the parts of a JWT are Base64 encoded.`,
    `Preparing text for transport through systems that only accept plain text.`,
    `Learning how encoding works, with instant input and output side by side.`,
    `Quickly decoding a suspicious looking string to see what it contains before trusting it.`
  ],
  tips: [
    `Never treat Base64 as a security measure. Use real encryption for secrets.`,
    `Encoded output is about one third larger than the input, so avoid encoding big files for web pages.`,
    `Watch for URL-safe Base64, which replaces plus and slash with dash and underscore. Convert them back before decoding if needed.`,
    `Remove line breaks and spaces from pasted strings that were wrapped by an email program.`,
    `Do not paste real passwords or private keys into any online tool, including this one.`,
    `Check that decoded text looks readable. Garbled output usually means the data was binary, not text.`
  ],
  faq: [
    [`Is Base64 the same as encryption?`, `No. Base64 only changes how data is written. It has no key and no secrecy, so anyone can reverse it. Use encryption such as AES when you need privacy.`],
    [`Why does the string end with equals signs?`, `The equals signs are padding. Base64 works in groups of three bytes, and padding fills the final group so the length stays correct.`],
    [`Does it support Hindi and emoji?`, `Yes. The encoder converts text to UTF-8 bytes first, so characters from any language and emoji are handled correctly.`],
    [`Why does my decode attempt fail?`, `The usual causes are a missing character, extra spaces, a string that is not Base64 at all, or URL-safe characters that need to be converted back first.`]
  ]
};
TOOLGUIDES["base64-decoder"] = TOOLGUIDES["base64-encoder"];
TOOLGUIDES["json-formatter-validator"] = {
  ov: [
    `JSON is the standard format that websites, mobile apps and APIs use to exchange data. It is simple for machines but hard for people to read when it arrives as one long line, and it is unforgiving: a missing comma or an extra quotation mark makes the whole document invalid. Finding such a mistake by eye in a few thousand characters is frustrating.`,
    `The JSON Formatter and Validator takes raw JSON, checks that it is valid and, if it is, rewrites it with clean indentation so the structure is easy to follow. If something is wrong, you get an error message instead of silent failure, which tells you there is a problem to fix. It runs locally in your browser, so API responses and configuration data are not uploaded. Developers, testers, analysts and students use it daily to debug responses, tidy configuration files and learn how nested data is organised.`
  ],
  steps: [
    `Copy the JSON from your API client, log file, browser tool or document.`,
    `Paste it into the input box of the tool.`,
    `The formatted version appears right away with two-space indentation.`,
    `If you see an error, look for missing commas, trailing commas, single quotes or unquoted keys and fix them.`,
    `Click Copy result to copy the neat JSON.`,
    `Use the JSON Minifier from the related tools when you need to compress it back to one line.`
  ],
  feats: [
    `Debugging API responses during development and testing.`,
    `Validating configuration files before deploying them.`,
    `Reading deeply nested data from exports and logs.`,
    `Preparing readable examples for documentation and tutorials.`,
    `Finding syntax mistakes quickly in hand-written JSON.`,
    `Teaching beginners how objects, arrays and values fit together.`
  ],
  tips: [
    `JSON requires double quotes around keys and strings. Single quotes are not valid.`,
    `Remove trailing commas after the last item, which is a very common mistake.`,
    `Comments are not allowed in standard JSON, so delete them before validating.`,
    `Never paste data containing real passwords, tokens or customer details into any online tool.`,
    `Minify JSON before sending it over the network if size matters, and format it only for reading.`,
    `If your data is a list of records, the JSON to CSV tool can turn it into a spreadsheet-friendly file.`
  ],
  faq: [
    [`What does valid JSON mean?`, `Valid JSON follows strict syntax rules: keys and strings in double quotes, values separated by commas, objects in curly braces, arrays in square brackets, and no trailing commas or comments.`],
    [`Why do I get an error for data that looks fine?`, `Small details usually cause it, such as a single quote, a trailing comma, an unquoted key or invisible characters copied from a web page. Retype the suspicious part or check around the position mentioned in the error.`],
    [`Does formatting change my data?`, `No. Only whitespace is changed. Keys, values and order stay the same, so formatted and minified versions mean exactly the same thing.`],
    [`Is there a size limit?`, `ToolsNest sets none, but very large files depend on your device memory. For multi-megabyte files use a desktop editor.`]
  ]
};
TOOLGUIDES["image-compressor"] = {
  ov: [
    `Large images slow down websites, fill up email attachments and take forever to upload on a weak mobile connection. A photo straight from a modern phone can easily be several megabytes, far more than a blog post, a profile picture or a marketplace listing needs. Reducing the file size without making the picture look bad is one of the most useful everyday tasks online.`,
    `The Image Compressor converts your picture to a compressed JPG at the quality you choose. Lower quality produces a smaller file, and a setting around 70 to 80 percent usually keeps the image looking good while cutting its size dramatically. The tool shows a preview and the final size, and your photo is processed inside your browser, so it is never uploaded to a server. That makes it a safe choice for personal pictures and documents.`
  ],
  steps: [
    `Click the file box and choose a photo from your device.`,
    `Set the quality value between 10 and 100. Start with 70.`,
    `Click Apply and wait for the preview.`,
    `Check the preview and the reported dimensions and size.`,
    `If the picture looks too soft, raise the quality, or lower it if the file is still too large.`,
    `Click Download to save the compressed image.`
  ],
  feats: [
    `Website owners: speed up pages by shrinking blog and product images.`,
    `Job seekers and students: meet size limits on upload forms for photos and documents.`,
    `Email users: fit several pictures under attachment limits.`,
    `Sellers: prepare listing photos that load quickly on mobile.`,
    `Social media users: reduce huge camera photos before sharing.`,
    `Anyone short on phone storage: keep a lighter copy of large pictures.`
  ],
  tips: [
    `Resize the picture to the real display size first with the Image Resizer, then compress. This usually saves the most space.`,
    `Do not compress the same JPG again and again, since each save loses a little detail.`,
    `Keep the original file as a backup.`,
    `Use PNG only for graphics with transparency or flat colors, and JPG or WebP for photographs.`,
    `Compare results at different quality values and pick the lowest one that still looks good.`,
    `Remove location data with the metadata tool before sharing personal photos.`
  ],
  faq: [
    [`Will compression reduce image quality?`, `Yes, a little. The tool uses lossy JPG compression. At 70 to 85 percent the difference is hard to notice in most photos, while the file becomes much smaller.`],
    [`Is my photo uploaded?`, `No. Compression happens inside your browser, so the picture stays on your device.`],
    [`Why did a PNG become a JPG?`, `The tool outputs JPG because it compresses photographs best. Transparent areas become white. Use the Image to WebP tool if you need a modern format.`],
    [`What quality should I choose?`, `For websites try 70 to 80. For printing or archiving use 90 or higher. For very small files try 50, but check for blocky edges.`]
  ]
};
TOOLGUIDES["image-resizer"] = {
  ov: [
    `Different places need different image sizes. A passport portal may want a specific width, a blog layout may display pictures at 800 pixels, and a social post may need a square. Uploading a huge photo and letting the website shrink it wastes bandwidth and slows loading, while stretching a small photo makes it blurry. Resizing to the right dimensions fixes both problems.`,
    `The Image Resizer lets you set a new width, a new height, or both. If you fill in only one, the other is calculated automatically so the picture keeps its original proportions and nothing looks stretched. The result is previewed and downloaded as a PNG file. The work happens in your browser, so your images are not sent to ToolsNest or anyone else.`
  ],
  steps: [
    `Choose an image from your device.`,
    `Enter a width, a height, or both in pixels. Leave one empty to keep the aspect ratio.`,
    `Click Apply and check the preview and the pixel size shown.`,
    `If the proportions look wrong, clear one field and try again.`,
    `Click Download to save the resized image.`,
    `Run the Image Compressor afterwards if you also need a smaller file size.`
  ],
  feats: [
    `Preparing pictures for blogs, online stores and landing pages.`,
    `Meeting exact pixel requirements on application and government forms.`,
    `Creating thumbnails and profile pictures.`,
    `Reducing large phone photos before emailing.`,
    `Making images consistent in size for a gallery or catalog.`,
    `Enlarging a small image slightly for a presentation slide.`
  ],
  tips: [
    `Fill in only one dimension unless you really need a new shape, to avoid distortion.`,
    `Scaling down gives clean results, while scaling up beyond about twice the size makes images soft.`,
    `Resize first and compress last for the smallest good-looking file.`,
    `To change the shape instead of the size, use the Image Cropper.`,
    `Write down the dimensions you use so every picture in a project matches.`,
    `Keep the original image in case you need a bigger version later.`
  ],
  faq: [
    [`How do I keep the proportions?`, `Enter only the width or only the height. The tool calculates the other value from the original ratio.`],
    [`Can I make an image bigger?`, `Yes, but enlarging cannot add detail that is not there, so large increases look blurry. It works best for small adjustments.`],
    [`What file format do I get?`, `The resized image downloads as a PNG, which keeps quality and transparency. Use the compressor if you want a smaller JPG.`],
    [`Are my pictures uploaded?`, `No. Resizing happens locally in your browser and nothing is transmitted to ToolsNest.`]
  ]
};
TOOLGUIDES["qr-code-generator"] = {
  ov: [
    `A QR code is a square barcode that a phone camera can read in a moment. It can hold a website address, a line of text, a Wi-Fi sign-in detail, a payment link or a contact page. Restaurants use them for menus, shops use them on posters and packaging, and event organizers print them on tickets and flyers. They save people from typing long web addresses and make offline material interactive.`,
    `The ToolsNest QR Code Generator creates a code for any text or link and lets you download it as a PNG image. It runs in your browser, so the address or text you enter is not uploaded. There is no watermark, no expiry and no account required. Because the code contains your data directly instead of pointing to a tracking service, it keeps working as long as the destination you linked to stays online.`
  ],
  steps: [
    `Type or paste the web address or text into the box. Include https:// for websites.`,
    `Click Generate to draw the QR code.`,
    `Scan it with your phone camera to check that it opens the right page.`,
    `Click Download PNG to save the image.`,
    `Place it on your poster, card, menu, packaging or slide.`,
    `Test the printed version before producing a large batch.`
  ],
  feats: [
    `Restaurants and cafes: link to a digital menu.`,
    `Businesses: put a QR code on visiting cards pointing to a website or WhatsApp chat.`,
    `Teachers: share a worksheet or video with a class quickly.`,
    `Events: link to a registration or location page.`,
    `Shops: connect packaging to product guides or reviews pages.`,
    `Personal use: share a Wi-Fi page, a portfolio or a social profile.`
  ],
  tips: [
    `Keep the content short. The less data, the simpler and easier to scan the code.`,
    `Use dark code on a light background with plenty of empty margin around it.`,
    `Print it at least two centimetres wide so cameras can read it.`,
    `Never print a code until you have scanned it with more than one phone.`,
    `Use a link you control. If the page disappears, the code stops being useful.`,
    `For campaigns, add tracking parameters with the UTM Link Builder before generating the code.`
  ],
  faq: [
    [`Does the QR code expire?`, `No. The data is stored in the pattern itself, so it never expires. It stops being useful only if the page you linked to goes offline.`],
    [`Is it free for commercial use?`, `Yes. You can use the generated image on products, posters and marketing material.`],
    [`Why will my code not scan?`, `Common reasons are low contrast, a very small print size, a crowded design or too much text. Make the code larger and use dark on light colours.`],
    [`Is my link uploaded to a server?`, `No. The code is drawn inside your browser. ToolsNest does not receive the text you enter.`]
  ]
};
TOOLGUIDES["length-converter"] = {
  ov: [
    `People meet different measurement systems all the time. A product listing may give inches while your tape measure shows centimetres, a road sign may show miles while your map app shows kilometres, and a recipe, a blueprint or a school problem may mix units. Doing the arithmetic in your head is easy to get wrong, especially with less familiar units like yards or nautical measures.`,
    `The Length Converter changes a value between metres, kilometres, centimetres, millimetres, miles, yards, feet and inches in one step. Enter the number, choose the unit you have and the unit you want, and the answer appears immediately. The same layout is used by the weight, area, data storage and speed converters on ToolsNest, so once you know one you know them all. It is free, works on mobile, and does everything locally in your browser.`
  ],
  steps: [
    `Type the value you want to convert in the Value field.`,
    `Choose the starting unit in the From dropdown.`,
    `Choose the target unit in the To dropdown.`,
    `Click Calculate to see the converted result.`,
    `Copy the answer with the Copy button if you need it elsewhere.`,
    `Change any field and calculate again to compare other units.`
  ],
  feats: [
    `Shopping online: convert sizes of furniture, screens and clothing measurements.`,
    `Travel: change miles to kilometres for distances and road trips.`,
    `Students: check homework and science problems that mix units.`,
    `Construction and interiors: convert between feet, inches and metres for plans.`,
    `Sports: compare running or swimming distances.`,
    `Engineering and DIY: switch between millimetres and inches for parts and tools.`
  ],
  tips: [
    `Double check the From and To units before reading the result, since swapping them is the most common mistake.`,
    `For work that needs accuracy, keep extra decimal places until the final step.`,
    `Remember the basics: one inch is 2.54 centimetres and one mile is about 1.609 kilometres.`,
    `Convert everything to one unit before adding or comparing several measurements.`,
    `Write the unit next to every number so the result is never ambiguous.`,
    `For areas, use the Area Converter, because squared units cannot be converted with a length factor.`
  ],
  faq: [
    [`How accurate is the converter?`, `It uses exact standard conversion factors, such as 0.3048 metres per foot, and shows results rounded to two decimal places for readability.`],
    [`Can I convert square or cubic units here?`, `No. Use the Area Converter for square units, because a square foot is not simply twelve times a square inch.`],
    [`Does it work offline?`, `Once the page is loaded the calculation runs in your browser, so it keeps working even if the connection drops.`],
    [`Which units are included?`, `Metre, kilometre, centimetre, millimetre, mile, yard, foot and inch.`]
  ]
};
TOOLGUIDES["emi-calculator"] = {
  ov: [
    `An EMI, or Equated Monthly Instalment, is the fixed amount you pay each month to repay a loan with interest. Home, car, education and personal loans all work this way. Before signing, it helps to know not only the monthly payment but also the total interest you will pay over the life of the loan, since a lower EMI stretched over a longer tenure often costs far more in the end.`,
    `The EMI Calculator asks for three numbers: the loan amount, the annual interest rate and the tenure in years. It then shows your monthly EMI, the total payment and the total interest. It uses the standard reducing-balance formula that banks use, so the answer is a reliable estimate for planning. The calculation runs in your browser and nothing you enter is stored. Results are estimates and not financial advice, because actual offers include processing fees, taxes and rate changes.`
  ],
  steps: [
    `Enter the loan amount in rupees.`,
    `Enter the yearly interest rate offered by the lender.`,
    `Enter the tenure in years. For months, divide by twelve.`,
    `Click Calculate.`,
    `Read the monthly EMI, total payment and total interest.`,
    `Change the tenure or amount and recalculate to compare options before choosing.`
  ],
  feats: [
    `Comparing offers from different banks by trying each interest rate.`,
    `Deciding how much loan you can comfortably afford each month.`,
    `Seeing how a longer tenure lowers the EMI but raises total interest.`,
    `Planning a down payment by testing smaller loan amounts.`,
    `Checking a lender's quoted EMI to make sure it looks fair.`,
    `Teaching students how loans and compound interest work.`
  ],
  tips: [
    `As a rule of thumb keep total EMIs under about 40 percent of your monthly income.`,
    `Always look at total interest, not just the EMI, when comparing tenures.`,
    `Remember that processing fees, insurance and taxes are usually extra.`,
    `Floating rates can change, so test your budget with a rate one or two points higher.`,
    `Part-prepayments reduce the principal and can save a lot of interest.`,
    `Confirm the final figures with your lender's official schedule.`
  ],
  faq: [
    [`How is EMI calculated?`, `The formula is P x r x (1+r)^n divided by ((1+r)^n - 1), where P is the loan amount, r the monthly interest rate and n the number of months.`],
    [`Why is total interest so high on long loans?`, `Interest is charged on the outstanding balance every month. With a long tenure the balance stays high for longer, so interest adds up.`],
    [`Will my bank's EMI be exactly the same?`, `It should be very close. Small differences can come from rounding, fees, rate type or the date the first payment starts.`],
    [`Does this include GST or processing fees?`, `No. It calculates principal and interest only. Ask your lender for the full list of charges.`]
  ]
};
TOOLGUIDES["merge-pdf"] = {
  ov: [
    `Many everyday tasks end with a single PDF: a job application with a resume and certificates, an insurance claim with several scanned pages, a school assignment made of separate sections, or an invoice bundle for an accountant. When the pieces are separate files, forms often reject them and recipients find them confusing. Combining them into one tidy document solves both problems.`,
    `The Merge PDF tool joins two or more PDF files into a single file. You can add files one at a time or select several together, then change their order with the up and down buttons or remove any by mistake before merging. Everything is processed inside your browser, so your private documents are not uploaded to ToolsNest. There is no page limit set by the tool, no watermark and no account to create.`
  ],
  steps: [
    `Click the file box and choose your first PDF.`,
    `Add more files. You can choose them together or come back and add one by one.`,
    `Use the up and down arrows to put the files in the correct order, and the cross to remove any wrong file.`,
    `Click Merge PDFs.`,
    `Wait for the progress message to show that all files are merged.`,
    `Open the downloaded merged.pdf and scroll through it to confirm the order and pages.`
  ],
  feats: [
    `Job seekers: combine a resume, cover letter and certificates into one upload.`,
    `Students: join assignment sections and appendices.`,
    `Finance and admin staff: bundle invoices or statements for a client.`,
    `Legal and insurance work: merge scanned forms and supporting documents.`,
    `Small businesses: assemble brochures and price lists.`,
    `Personal records: keep related papers, such as a family set of documents, in one file.`
  ],
  tips: [
    `Check the order before merging, because it is easier than fixing it afterwards.`,
    `Rotate sideways scans with the Rotate PDF tool before merging.`,
    `Use Delete PDF Pages afterwards to remove a blank or duplicate page.`,
    `Keep your original files as backups.`,
    `If the result is too large to email, reduce the image sizes in the source scans.`,
    `Password protected PDFs may need to be unlocked first.`
  ],
  faq: [
    [`Are my PDFs uploaded?`, `No. Merging happens locally in your browser, so the files never leave your device.`],
    [`Is there a limit on the number of files?`, `ToolsNest sets no limit. Very large files depend on the memory of your device.`],
    [`Will merging reduce quality?`, `No. The pages are copied as they are, so text, images and layout stay the same.`],
    [`Can I change the order after adding files?`, `Yes. Use the arrow buttons next to each file before pressing Merge.`]
  ]
};
TOOLGUIDES["image-to-pdf"] = {
  ov: [
    `Phone cameras have become the most common scanner. People photograph bills, certificates, handwritten notes and forms, but then discover that many portals and email recipients want a single PDF instead of a pile of pictures. Turning images into a PDF makes sharing easier, keeps the pages in order and is usually the format that official systems expect.`,
    `The Image to PDF tool combines your photos into one PDF with one image per page. Each page uses the size of its picture, so nothing is cropped or stretched. Select several images together, convert and download. Processing happens in your browser, which means sensitive pictures such as identity documents do not have to be uploaded to a server. The tool is free, needs no signup and adds no watermark.`
  ],
  steps: [
    `Click the file box and select one or more images. Hold Ctrl or Shift, or tap multiple photos on mobile.`,
    `Check that the images are chosen in the order you want the pages.`,
    `Click Create PDF.`,
    `Wait a moment while the pages are built.`,
    `Open the downloaded PDF and check each page.`,
    `If needed, use Merge PDF or Delete PDF Pages to adjust the final document.`
  ],
  feats: [
    `Turning photographed documents into one shareable file.`,
    `Submitting certificates and ID proofs on application portals.`,
    `Making a PDF portfolio from design or photography samples.`,
    `Sending receipts and bills as one attachment.`,
    `Creating handouts from slide screenshots.`,
    `Archiving handwritten notes in a single file.`
  ],
  tips: [
    `Take photos in good light, flat and straight on, to get clean pages.`,
    `Crop away backgrounds first with the Image Cropper.`,
    `Compress very large photos beforehand so the PDF stays small.`,
    `Name or number the files in the order you want, such as page-1, page-2.`,
    `Check text is readable at full size before sending anything important.`,
    `Remove location data from photos with the metadata tool before sharing.`
  ],
  faq: [
    [`Which image formats can I use?`, `Common formats such as JPG, PNG and WebP work in modern browsers. If a file does not load, convert it to JPG or PNG first.`],
    [`Does the PDF keep the original quality?`, `Images are placed at their original pixel size and saved with high JPEG quality, so they stay sharp for reading and printing.`],
    [`Can I change the page order?`, `Pages follow the order of the selected files. Rename the files or select them again in the order you want.`],
    [`Is there a file size limit?`, `ToolsNest sets none. Large batches depend on your device memory, so split very big sets into two PDFs and join them with Merge PDF.`]
  ]
};
TOOLGUIDES["color-code-converter"] = {
  ov: [
    `Colours are written in different ways depending on where you work. Designers use HEX codes like #ff8800, CSS often uses rgb values, and many design systems use HSL because it describes hue, saturation and lightness in a way that is easier to adjust by hand. Moving between formats manually means doing base conversion and trigonometry-like maths that nobody wants to do.`,
    `The Color Code Converter takes a colour in HEX or RGB form and shows the same colour as HEX, RGB and HSL together. Type #ff8800 or rgb(255,136,0) and read all three results in a moment. It is useful for web designers, developers, social media creators and anyone matching brand colours across tools. The conversion happens in your browser, and you can copy the result straight into CSS, a design file or a document.`
  ],
  steps: [
    `Type a colour in the box, for example #ff8800 or rgb(255,136,0).`,
    `The converted values appear immediately, or press Run.`,
    `Read the HEX, RGB and HSL lines.`,
    `Click Copy result to copy all three.`,
    `Paste the format you need into your stylesheet or design app.`,
    `Use the Color Picker tool if you want to choose a colour visually first.`
  ],
  feats: [
    `Matching a brand colour given as HEX to an RGB value required by a tool.`,
    `Writing CSS with HSL so you can create lighter or darker variants easily.`,
    `Checking colours from screenshots or design mockups.`,
    `Preparing consistent palettes for slides, posters and social posts.`,
    `Teaching students how screens mix red, green and blue light.`,
    `Documenting design tokens for a development team.`
  ],
  tips: [
    `Use six-digit HEX values with or without the hash sign.`,
    `To make a colour lighter or darker, raise or lower the lightness number in HSL.`,
    `Keep enough contrast between text and background colours for readability.`,
    `Save your main brand colours in all three formats in one document.`,
    `Remember that colours can look different on different screens and in print.`,
    `Use the Color Palette Extractor to find colours from a photo first.`
  ],
  faq: [
    [`What is the difference between HEX, RGB and HSL?`, `HEX and RGB both describe amounts of red, green and blue, written in hexadecimal or decimal. HSL describes hue as a colour wheel angle, plus saturation and lightness percentages.`],
    [`Can I enter shorthand HEX like #f80?`, `Please use the full six-digit form such as #ff8800. Shorthand is not accepted by this tool.`],
    [`Does it support transparency?`, `No. The tool converts solid colours. For transparency add an alpha value yourself in CSS, such as rgba.`],
    [`Are the values exact?`, `HEX and RGB are exact. HSL values are rounded to whole numbers, so converting back may differ by one step.`]
  ]
};
TOOLGUIDES["sha-256-hash-generator"] = {
  ov: [
    `A hash is a short fixed-length fingerprint of any piece of data. Feed in a sentence, a password or the contents of a file and a hash function produces a string of letters and numbers. Change even one character of the input and the output looks completely different, and nobody can work backwards from the hash to the original. This makes hashes ideal for checking that data has not been changed.`,
    `The SHA-256 Hash Generator creates a 64-character hexadecimal fingerprint of any text using the SHA-256 algorithm, which is part of the SHA-2 family and is widely used for integrity checks, digital signatures and software downloads. ToolsNest also offers SHA-1 and SHA-512. The hash is computed in your browser using its built-in cryptography support, so the text you enter is not uploaded. It is a handy utility for developers, students and anyone verifying data.`
  ],
  steps: [
    `Type or paste your text into the input box.`,
    `The SHA-256 hash appears automatically, or press Run.`,
    `Compare the hash with the value published by a trusted source if you are verifying something.`,
    `Click Copy result to copy the hash.`,
    `Use the hash in your code, documentation or checksum list.`,
    `Try changing one letter to see how the whole hash changes.`
  ],
  feats: [
    `Verifying that two pieces of text are exactly identical.`,
    `Creating checksums for documentation and tests.`,
    `Learning how hashing works in security courses.`,
    `Generating identifiers derived from content.`,
    `Checking values used in APIs and signatures.`,
    `Comparing against published hashes for small text-based data.`
  ],
  tips: [
    `Remember that even a trailing space or line break changes the hash.`,
    `Hashing is not encryption. You cannot decode a hash back to the text.`,
    `Do not use plain SHA-256 to store passwords. Real systems use slow salted algorithms such as bcrypt or Argon2.`,
    `Prefer SHA-256 or SHA-512 over SHA-1, which is no longer considered safe for security.`,
    `Never paste secret keys or real passwords into any online tool.`,
    `Use lowercase hexadecimal when comparing, since most tools output lowercase.`
  ],
  faq: [
    [`Can a SHA-256 hash be reversed?`, `No. It is a one-way function. Attackers can only guess inputs and compare, which is why long random passwords matter.`],
    [`Why is the output always 64 characters?`, `SHA-256 produces 256 bits, which are written as 64 hexadecimal characters no matter how short or long the input is.`],
    [`Can I hash a file with this tool?`, `This tool hashes the text you type or paste. For files, use a checksum tool on your computer.`],
    [`Is my text sent anywhere?`, `No. Hashing is done by your browser, so ToolsNest never receives the text.`]
  ]
};
TOOLGUIDES["bmi-calculator"] = {
  ov: [
    `Body Mass Index, or BMI, is a quick number that compares your weight with your height. It is widely used by doctors, schools and fitness programs as a first screening measure to see whether a person falls in a lower, typical or higher weight range. It is simple, free and needs no equipment beyond a scale and a tape measure.`,
    `The BMI Calculator takes your weight in kilograms and your height in centimetres and divides weight by height in metres squared. It then shows your BMI and the usual category: underweight, normal weight, overweight or obese. The calculation runs in your browser, and nothing you enter is stored or shared. BMI is only a general indicator. It does not measure body fat, muscle, age, sex or health, so treat the result as a starting point for a conversation with a qualified professional, not as a diagnosis.`
  ],
  steps: [
    `Enter your weight in kilograms.`,
    `Enter your height in centimetres.`,
    `Click Calculate.`,
    `Read your BMI value and the category shown below it.`,
    `Compare it with the ranges: below 18.5, 18.5 to 24.9, 25 to 29.9 and 30 or above.`,
    `Recalculate with other numbers to see how a weight goal would change the result.`
  ],
  feats: [
    `A quick check at the start of a fitness plan.`,
    `Tracking changes over several months.`,
    `Helping parents and teachers understand general ranges for adults.`,
    `Preparing numbers to discuss with a doctor or dietitian.`,
    `Setting a realistic weight goal for a given height.`,
    `Learning how weight and height relate.`
  ],
  tips: [
    `Weigh yourself at the same time of day for comparable readings.`,
    `Measure height without shoes, standing straight.`,
    `Remember that athletes and muscular people can have a high BMI without excess fat.`,
    `Children, teenagers, older adults and pregnant women need different guidelines.`,
    `Use waist measurement and other health checks alongside BMI.`,
    `Speak to a doctor before making major diet or exercise changes.`
  ],
  faq: [
    [`What is a healthy BMI range?`, `For most adults, a BMI from 18.5 to 24.9 is classed as normal weight under common guidelines. Some regions use slightly different cut-offs for Asian populations.`],
    [`Is BMI accurate for everyone?`, `No. It ignores muscle mass, bone structure and fat distribution, so it can mislead for athletes, older people and others.`],
    [`Is this medical advice?`, `No. The result is an estimate for general information. Please consult a qualified health professional for advice.`],
    [`Is my data saved?`, `No. The calculation happens in your browser and ToolsNest does not keep your numbers.`]
  ]
};

/* ===== guides-guide-more.js ===== */
// guides-guide-more.js — Extra paragraphs added to some tool guides.

export const GUIDEMORE = {
"text-repeater": [`A practical example shows why the tool matters. Suppose you are building a comment box that must accept 500 characters. Typing that much by hand to test the limit takes a minute and teaches you nothing. With the repeater you type a short phrase, repeat it a hundred times, paste the result into the box and immediately see what happens at, below and above the limit. The same approach helps you check how a table cell wraps long content, how a notification looks with a huge message, or whether a database column truncates silently.`,`Repetition is also a gentle way to explore text patterns. Teachers use repeated words for spelling drills, while designers repeat a sentence to compare how different fonts and line spacings look across a full paragraph. Because you can choose the separator, the same output can serve as a line-by-line list, a space-separated paragraph or a comma-separated array for quick prototyping.`],
"json-formatter-validator": [`To see how useful validation is, imagine receiving a response from a payment or weather API that fails in your app with an unhelpful message. Pasting the raw response here immediately tells you whether the problem is the data itself or your code. Once formatted, you can follow the nesting: which keys belong to which object, where an array starts and how many items it holds. That visual structure is often enough to spot a missing field or an unexpected null value.`,`The tool is equally helpful for people who only read JSON occasionally. Marketers exporting analytics data, testers checking a mock server and students learning web development all meet JSON in the wild. A formatted view turns an intimidating wall of text into something that reads almost like an outline, and validation gives immediate, honest feedback before the data is used anywhere important.`],
"image-compressor": [`It helps to understand what happens behind the slider. JPG compression divides the picture into small blocks and stores each block in a simplified form. A higher quality keeps more detail in every block, while a lower quality discards finer variations in colour and sharpness that the eye barely notices. Smooth areas such as sky compress very well, while busy textures like grass or fabric need a higher setting to avoid visible artefacts.`,`Real-world savings can be dramatic. A four megabyte phone photo often becomes a few hundred kilobytes at quality 70, and combined with resizing to a sensible width it can drop below 150 kilobytes. That difference decides whether a web page loads in one second or five on a mobile network, and whether a form accepts your upload on the first try.`],
"image-resizer": [`Understanding pixels makes resizing less mysterious. An image is a grid of coloured dots, and its width and height in pixels decide how much information it holds. Screens show images at a certain size, so sending a 4000 pixel wide photo to a layout that shows it at 800 pixels wastes most of the data. Resizing down removes only the data nobody will see, which is why it is the first step in any image optimisation routine.`,`Aspect ratio is the other key idea. A photograph with a 4:3 ratio stays undistorted only if width and height change by the same proportion. Entering just one dimension lets the tool preserve that ratio automatically. Fill in both only when a form demands an exact size, and consider cropping first so important parts of the image are not squeezed or stretched.`],
"qr-code-generator": [`QR codes became popular because they bridge the physical and digital worlds with almost no effort. A person standing in front of a poster can open a page in two seconds without typing. For businesses this means shorter customer journeys, and for individuals it means sharing a portfolio, a playlist or a map location with a quick scan.`,`The pattern also contains error correction, so a code can still be read when slightly dirty or partly covered. Even so, good habits matter: choose a destination that works well on a phone screen, shorten very long links, and check the page loads quickly on mobile data. A QR code is only as good as the experience it leads to, so treat the landing page as part of the design.`],
"length-converter": [`A few reference points make conversions easier to sanity-check. One kilometre is about 0.62 miles, one metre is about 3.28 feet, and one foot is exactly 30.48 centimetres. A marathon is 42.195 kilometres, which is just over 26 miles, and a standard door is roughly two metres or about six and a half feet tall. Keeping such anchors in mind helps you notice when a result looks wrong because a unit was chosen incorrectly.`,`The metric system is based on powers of ten, so moving between millimetres, centimetres, metres and kilometres only shifts the decimal point. Imperial units such as inches, feet, yards and miles use irregular factors like 12 and 1,760, which is exactly where a converter saves time and prevents arithmetic slips in homework, shopping and planning.`],
"emi-calculator": [`Consider an example to see the effect of tenure. A loan of five lakh rupees at nine percent for five years has a monthly EMI near 10,380 rupees and costs roughly 1.23 lakh in interest. Stretch the same loan to ten years and the EMI drops to about 6,333 rupees, but total interest rises to around 2.6 lakh. The lower monthly burden feels comfortable, yet you pay more than twice as much for the privilege.`,`That trade-off is the main reason to run several scenarios before accepting an offer. Try a slightly higher EMI with a shorter tenure, compare lenders with different rates and see how a larger down payment shrinks the loan. Using the calculator this way turns a confusing financial product into a set of clear numbers you can discuss confidently with a bank officer.`],
"merge-pdf": [`Behind the scenes, each PDF is a collection of pages with their own fonts, images and layout instructions. Merging copies those pages into one new document in the order you specify, so the appearance of every page is preserved. Because the tool works with pages rather than re-drawing them, text remains selectable and searchable where it was before.`,`Good preparation makes a merged file professional. Name files so you recognise them in the list, decide where a cover page, index or signature page should sit, and check page orientation. After merging, add page numbers so readers can refer to a specific page, and consider a watermark if the document is a draft. These small finishing touches make a bundle of loose files feel like one deliberate document.`],
"image-to-pdf": [`A good scan starts before the file is created. Place the paper on a plain, contrasting surface, switch on room lighting without glare, hold the phone parallel to the page and let the camera focus before shooting. Crop edges afterwards so every page fills the frame. Pages made this way look neat when combined and remain readable when printed.`,`Image to PDF is also useful beyond documents. Photographers can assemble a contact sheet or portfolio, teachers can turn board photos into a handout, and shop owners can create a catalogue from product pictures. Since each page matches the size of its image, mixing portrait and landscape pictures works naturally and no photo is forced into an awkward frame.`],
"color-code-converter": [`Knowing how each format works makes you faster. A HEX code such as #ff8800 is three pairs of hexadecimal digits for red, green and blue, so ff, 88 and 00 mean full red, medium green and no blue, giving a bright orange. RGB writes the same amounts as numbers from 0 to 255. HSL instead says where the colour sits on the colour wheel, how vivid it is and how light or dark it is.`,`HSL is especially friendly for design work. To create a hover colour for a button, keep the hue and saturation and reduce lightness by ten percent. To build a palette, rotate the hue by fixed steps. Having HEX, RGB and HSL side by side lets you pick whichever format your stylesheet, design tool or brand guide requires without recalculating.`],
"sha-256-hash-generator": [`Hashes appear in many everyday technologies. Software download pages publish a checksum so you can confirm that the file was not corrupted or tampered with. Version control systems identify content through hashes, and blockchains link records by including the hash of the previous block. In each case the idea is the same: a tiny fingerprint stands in for a large piece of data.`,`Playing with the tool builds intuition. Hash the word hello, then hello with a capital H, and notice that the outputs share nothing in common. This avalanche effect is a deliberate property of good hash functions. It is why a single changed character can be detected, and why storing only the fingerprint reveals nothing useful about the original text.`],
"bmi-calculator": [`The formula is simple: BMI equals weight in kilograms divided by height in metres squared. A person who weighs 70 kilograms and is 170 centimetres tall has a BMI of about 24.2, which falls in the normal range. The same weight at 160 centimetres gives roughly 27.3, which is in the overweight range, showing how strongly height affects the result.`,`Because BMI is a screening tool, doctors usually combine it with waist circumference, blood pressure, blood tests, activity level and family history. Think of the number as one data point on a trend line rather than a verdict. If it changes in a direction you did not expect, a professional can tell you whether it matters and what, if anything, to do next.`],
"title-case-converter": [`A short example demonstrates the value. A supplier sheet might list products as MEN'S COTTON POLO SHIRT, BLUE and LADIES RUNNING SHOES. Run through Title Case they become Men's Cotton Polo Shirt, Blue and Ladies Running Shoes, which look far more professional in a store listing. Doing this for five hundred rows by hand would take an afternoon, while the converter handles a pasted column in a moment.`]
};

/* ===== guides-more-guides.js ===== */
// guides-more-guides.js — Hand-written long guides (batch 2).

/* ===== More tool guides (batch 2) ===== */
TOOLGUIDES["profit-loss-calculator"] = {
  ov: [
    `Every seller, from a street vendor to an online store owner, needs to know one thing after each sale: did I actually make money? It sounds obvious, but profit is easy to misjudge when costs are spread across purchase price, packing, delivery, platform fees and tax. A quick, reliable calculation removes guesswork and stops you from selling at a loss without realising it.`,
    `The Profit & Loss Calculator compares your cost price with your selling price and tells you the exact amount gained or lost and the percentage of the cost that this represents. Enter two numbers, press Calculate, and read the answer instantly. The calculation happens in your browser and nothing is saved, so you can test as many price ideas as you like. It is useful for shopkeepers, resellers, freelancers pricing a service, students learning commercial maths and anyone negotiating a deal.`
  ],
  more: [
    `The formula is straightforward. Profit equals selling price minus cost price. When the result is negative it is called a loss. The percentage shown by this tool is calculated on the cost price, which is the convention taught in school and used in most trade discussions in India. For example, buying an item for 500 rupees and selling it for 650 gives a profit of 150 rupees, which is 30 percent of the cost. Selling the same item for 450 gives a loss of 50 rupees, or 10 percent.`,
    `It helps to separate profit percentage from margin. Margin is calculated on the selling price, so the same 150 rupee profit is about 23 percent margin on a 650 rupee sale. Both are correct, but they answer different questions, and mixing them up is a common reason sellers misprice products. Always check which one your supplier, platform or accountant is using.`
  ],
  steps: [
    `Enter the cost price, meaning everything you paid to acquire or make the item.`,
    `Enter the selling price you charged or plan to charge.`,
    `Click Calculate.`,
    `Read whether the result is a profit or a loss and by how much.`,
    `Check the percentage against your target, for example 20 percent over cost.`,
    `Adjust the selling price and recalculate until the result matches your goal.`
  ],
  feats: [
    `Pricing products for a shop, market stall or online marketplace.`,
    `Checking whether a discount still leaves a profit.`,
    `Comparing suppliers by calculating the return on each.`,
    `Teaching profit and loss problems in school and college.`,
    `Reviewing monthly sales to find items that lose money.`,
    `Negotiating bulk deals with a clear minimum price.`
  ],
  tips: [
    `Include all costs in the cost price: shipping, packaging, platform fees and returns.`,
    `Do not forget GST. Use the GST Calculator to separate tax from your real revenue.`,
    `Test a few discount levels before running a sale, using the Discount Calculator.`,
    `Track slow-moving stock, because money tied up in unsold items is a hidden cost.`,
    `Round prices to attractive numbers only after you confirm they still give a healthy profit.`,
    `Keep a record of your calculations so you can compare months.`
  ],
  faq: [
    [`How do I calculate profit percentage?`, `Subtract the cost price from the selling price, divide the result by the cost price and multiply by 100. The tool does this for you automatically.`],
    [`What is the difference between profit and margin?`, `Profit percentage is based on cost price, while margin is based on selling price. For the same sale, margin is always a smaller number than profit percentage.`],
    [`Does the tool include tax or fees?`, `No. It uses only the two numbers you type. Add your extra costs into the cost price for a realistic result.`],
    [`Can I use it for loss calculations?`, `Yes. If the selling price is lower than the cost price, the tool reports a loss and its percentage.`]
  ]
};
TOOLGUIDES["youtube-embed-code-generator"] = {
  ov: [
    `Embedding a video means showing it directly on your own web page so visitors can play it without leaving your site. Blogs, online courses, product pages and portfolios use this all the time. The usual method is to copy an iframe snippet from YouTube, but the share menu hides it, and it is easy to grab the wrong link format when all you have is a short youtu.be address or a Shorts URL.`,
    `The YouTube Embed Code Generator accepts a normal watch link, a short link, a Shorts link or an embed link and extracts the 11-character video ID. It then produces a clean iframe code that you can paste into HTML, a CMS, a website builder or a documentation page. Everything runs in your browser and no video is downloaded, copied or hosted by ToolsNest. The video continues to be served by YouTube, and you must respect its terms and the rights of the creator.`
  ],
  more: [
    `An iframe is simply a window into another page. The code produced here points that window to the YouTube embed address of your video, with a standard 560 by 315 pixel size, which has a 16 by 9 shape suitable for most layouts. You can change the width and height numbers to make it larger or smaller, or wrap it in a responsive container so it scales on mobile screens.`,
    `Embedding is better than uploading the video yourself for most websites. YouTube handles streaming, adaptive quality and device compatibility, which saves your hosting bandwidth and keeps pages light. It also means views count toward the original video, which helps the creator. Just remember that private or deleted videos will not play, and videos whose owners disable embedding will show an error.`
  ],
  steps: [
    `Open the video on YouTube and copy its address from the browser bar or the Share button.`,
    `Paste the link into the tool.`,
    `The iframe code is generated immediately, or press Run.`,
    `Click Copy result.`,
    `Paste the code into the HTML or the custom code block of your page.`,
    `Save the page and preview it to confirm the video plays.`
  ],
  feats: [
    `Bloggers adding tutorials and reviews to posts.`,
    `Teachers building course pages with lecture videos.`,
    `Businesses placing product demos on landing pages.`,
    `Developers testing embeds in templates.`,
    `Portfolio owners showing showreels.`,
    `Documentation writers adding walkthroughs to help centres.`
  ],
  tips: [
    `Place the video near the text that explains it, and add a short written summary for readers who cannot play audio.`,
    `Make the container responsive so it fits phone screens.`,
    `Avoid embedding many videos on one page, which slows loading.`,
    `Only embed videos you have the right to show, and keep the original title and credit.`,
    `Check that embedding is allowed for the video, since some owners disable it.`,
    `Add a meaningful title attribute for accessibility.`
  ],
  faq: [
    [`Which link formats work?`, `Standard watch links, youtu.be short links, Shorts links, embed links and a bare 11-character video ID all work.`],
    [`Does this download the video?`, `No. The tool only builds the embed code. The video is streamed by YouTube.`],
    [`Why does my embedded video show an error?`, `The video may be private, deleted, age-restricted or set by its owner to disallow embedding.`],
    [`Can I change the size?`, `Yes. Edit the width and height numbers in the code, or place the iframe in a responsive wrapper.`]
  ]
};
TOOLGUIDES["gst-calculator"] = {
  ov: [
    `Goods and Services Tax is part of almost every purchase and invoice in India, yet people often calculate it wrongly. The mistake is usually in the direction: adding tax to a base price is simple multiplication, but taking tax out of a price that already includes it is a different calculation. Errors of this kind lead to wrong invoices, confused customers and mismatched accounts.`,
    `The GST Calculator handles both directions. Choose the amount, pick a rate of 5, 12, 18 or 28 percent, and select whether to add GST to a base price or remove GST from a tax-inclusive price. It shows the tax amount and the final figure. The tool runs in your browser, stores nothing and is meant for quick estimates. Rates and rules can change and may differ for specific goods, so check official sources or ask a tax professional for filing and compliance.`
  ],
  more: [
    `When adding GST, the tax equals the amount multiplied by the rate divided by 100, and the total is the amount plus the tax. For 1,000 rupees at 18 percent, GST is 180 and the total is 1,180. When removing GST, you cannot subtract 18 percent from 1,180, because the tax was calculated on the smaller original amount. Instead divide by 1.18 to get 1,000, and the tax is the difference of 180.`,
    `In many transactions the tax is split equally into CGST and SGST for sales inside a state, or charged as IGST for sales between states. The total rate is the same either way, so this calculator gives you the combined figure. If you need the split, simply halve the tax amount for CGST and SGST.`
  ],
  steps: [
    `Enter the amount in rupees.`,
    `Select the GST rate from the dropdown.`,
    `Choose Add GST if your amount is before tax, or Remove GST if it already includes tax.`,
    `Click Calculate.`,
    `Read the GST amount and the final value.`,
    `Copy the result into your invoice or sheet.`
  ],
  feats: [
    `Small businesses preparing quotations and invoices.`,
    `Shoppers checking how much of a bill is tax.`,
    `Freelancers quoting prices with and without GST.`,
    `Accountants cross-checking figures quickly.`,
    `Students learning how indirect tax works.`,
    `Sellers setting a tax-inclusive price for marketplaces.`
  ],
  tips: [
    `Confirm the correct rate for your product or service before calculating.`,
    `Use Remove GST when a price tag says inclusive of all taxes.`,
    `Keep amounts in rupees with two decimals on invoices.`,
    `Do not apply discounts and tax in the wrong order. Follow your invoice rules.`,
    `Save a record of tax collected for filing returns.`,
    `Treat the tool as a helper, not a replacement for professional advice.`
  ],
  faq: [
    [`Why is removing GST not just subtracting the percentage?`, `Because the percentage was originally applied to the smaller pre-tax amount. You must divide the inclusive price by one plus the rate to reverse it.`],
    [`Which GST rates are included?`, `The tool offers 5, 12, 18 and 28 percent, which cover the common slabs.`],
    [`Does it show CGST and SGST separately?`, `It shows the total GST. For intra-state sales you can divide that amount equally between CGST and SGST.`],
    [`Is this an official tax tool?`, `No. It is an estimator. Check government notifications or consult a professional for official rates and filing.`]
  ]
};
TOOLGUIDES["sip-calculator"] = {
  ov: [
    `A Systematic Investment Plan lets you invest a fixed amount at regular intervals, usually every month, in a mutual fund. It builds discipline, avoids the stress of timing the market and lets you start with small sums. Because each instalment is invested for a different length of time and returns compound, the final value is not a simple multiplication, which is why a calculator is so useful.`,
    `The SIP Calculator estimates the future value of your plan from three inputs: monthly investment, expected yearly return and the number of years. It shows how much you invested, the estimated returns and the total value. The numbers are projections based on a constant assumed rate, whereas real market returns vary and are not guaranteed. The tool runs in your browser, stores nothing and is educational, not investment advice.`
  ],
  more: [
    `The calculation treats each monthly payment as growing at the monthly equivalent of your annual rate. Money invested in the first month compounds for the longest time and contributes the most growth, while the last instalment barely grows. This is why starting early matters more than investing larger amounts later.`,
    `Try a comparison. Investing 5,000 rupees a month for ten years at an assumed 12 percent grows to roughly 11.6 lakh from 6 lakh invested. Extend the period to twenty years and the value rises to nearly 50 lakh from 12 lakh invested. Doubling the time more than quadruples the outcome, which shows the power of compounding and patience.`
  ],
  steps: [
    `Enter the monthly amount you plan to invest.`,
    `Enter an expected annual return. Use a cautious figure.`,
    `Enter the number of years.`,
    `Click Calculate.`,
    `Read the invested amount, estimated returns and total value.`,
    `Try different amounts and durations to build a plan that fits your goal.`
  ],
  feats: [
    `Planning savings for a house, education or retirement.`,
    `Comparing the effect of ten, fifteen and twenty years.`,
    `Deciding how much to raise your SIP each year.`,
    `Teaching children about compounding.`,
    `Checking a distributor's promised returns for realism.`,
    `Setting realistic expectations before investing.`
  ],
  tips: [
    `Use conservative return assumptions. Higher numbers make projections look better than reality.`,
    `Increase your SIP when your income rises.`,
    `Stay invested through market ups and downs for long goals.`,
    `Compare different funds using the CAGR Calculator on past values.`,
    `Remember that fund charges and taxes reduce actual returns.`,
    `Speak with a registered adviser before making investment decisions.`
  ],
  faq: [
    [`Are SIP returns guaranteed?`, `No. Mutual fund returns depend on markets and can be lower or negative. The tool uses a constant rate only for illustration.`],
    [`What return rate should I assume?`, `There is no right answer. Many people test several values, such as 8, 10 and 12 percent, to see a range.`],
    [`Does it include taxes and fund expenses?`, `No. It shows gross estimated growth. Actual results will be lower after costs and taxes.`],
    [`Why does a longer period help so much?`, `Returns earn further returns, so growth accelerates over time. Early instalments benefit the most.`]
  ]
};
TOOLGUIDES["age-calculator"] = {
  ov: [
    `Knowing someone's exact age sounds easy until a form asks for it in years, months and days, or you need to check eligibility for an exam, a job, a pension or a school admission as of a specific date. Subtracting birth years in your head gives a rough answer but fails around birthdays, and months of different lengths make day counts tricky.`,
    `The Age Calculator takes a date of birth and shows your exact age in years, months and days, the total number of days lived, and the number of days left until your next birthday. It uses your device date, runs entirely in your browser and stores nothing, so your date of birth stays private. It is handy for application forms, school records, birthday planning and curiosity.`
  ],
  more: [
    `The calculation works by subtracting dates part by part. If the current day of the month is smaller than the birth day, the tool borrows days from the previous month. If the current month is smaller, it borrows twelve months from the year. This is the same method used manually on official forms and gives the answer people expect.`,
    `Eligibility rules often depend on age on a particular date, such as the first of January of the exam year. This calculator uses today as the reference. For a past or future cut-off date, use the Date Difference Calculator with the birth date and the cut-off date and read the day totals.`
  ],
  steps: [
    `Click the Date of birth field and pick the date from the calendar.`,
    `Click Calculate.`,
    `Read your age in years, months and days.`,
    `Check total days lived for fun or records.`,
    `See how many days remain until your next birthday.`,
    `Change the date to calculate another person's age.`
  ],
  feats: [
    `Filling forms that ask for exact age.`,
    `Checking age limits for exams and jobs.`,
    `Planning birthday celebrations and reminders.`,
    `Tracking a baby's growth in months and days.`,
    `Comparing the ages of family members.`,
    `Finding the number of days between two life events with the Date Difference tool.`
  ],
  tips: [
    `Enter the date of birth exactly as on official documents.`,
    `For cut-off date eligibility, use the Date Difference Calculator.`,
    `Remember that leap years add an extra day in February.`,
    `Double check month and day order when your device uses a different date format.`,
    `Keep a record of age calculations used in applications.`,
    `Do not share personal dates on public websites unnecessarily.`
  ],
  faq: [
    [`Is my date of birth stored?`, `No. The calculation happens in your browser and ToolsNest does not receive or save it.`],
    [`How are months calculated?`, `Complete months since your last birthday are counted, with days borrowed from the previous month when needed.`],
    [`Can I calculate age on a past date?`, `This tool uses today. For another date, use the Date Difference Calculator.`],
    [`Does it handle leap years?`, `Yes. The browser date system accounts for leap years automatically.`]
  ]
};
TOOLGUIDES["percentage-calculator"] = {
  ov: [
    `Percentages appear everywhere: discounts in shops, marks in exams, interest on loans, growth in reports and nutritional labels on food. Many people can estimate ten or fifty percent mentally but get stuck with numbers like 17.5 percent of 2,340. A calculator removes the chance of slips and speeds up everyday decisions.`,
    `The Percentage Calculator finds X percent of any number. Enter the percentage and the value, press Calculate, and the answer appears instantly. It is paired on ToolsNest with the Percentage Change and What Percent Is X of Y tools, so you can handle the three most common percentage questions in one place. Everything runs locally in your browser and nothing is stored.`
  ],
  more: [
    `The idea is simple: a percentage is a fraction of one hundred. To find 15 percent of 800, multiply 800 by 15 and divide by 100, which gives 120. The same logic works in reverse for questions like what percent 120 is of 800, which is 120 divided by 800 times 100, or 15 percent.`,
    `Percentage change is slightly different. If a price rises from 100 to 125, the increase is 25 percent of the original. If it then falls from 125 back to 100, that is a decrease of 20 percent, not 25, because the base has changed. Understanding which number is the base prevents many everyday errors in budgeting and reports.`
  ],
  steps: [
    `Enter the percentage you want to find, for example 18.`,
    `Enter the value you want to take it from, for example 2,500.`,
    `Click Calculate.`,
    `Read the answer shown below the button.`,
    `Use Percentage Change if you are comparing an old and new value.`,
    `Use What Percent Is X of Y when you know two numbers and want the ratio.`
  ],
  feats: [
    `Calculating discounts and sale prices.`,
    `Working out marks, scores and attendance.`,
    `Computing tips, commission and tax amounts.`,
    `Checking interest and growth in reports.`,
    `Splitting budgets by percentage.`,
    `Helping students with maths homework.`
  ],
  tips: [
    `Identify the base number first. Percentages always refer to a base.`,
    `Remember that increasing and then decreasing by the same percentage does not return to the start.`,
    `Convert percentages to decimals by dividing by 100 for use in spreadsheets.`,
    `Round only at the end of multi-step calculations.`,
    `Check results with simple benchmarks like 10 and 50 percent.`,
    `Use the Discount Calculator for shopping and the GST Calculator for tax.`
  ],
  faq: [
    [`How do I find a percentage of a number?`, `Multiply the number by the percentage and divide by 100. The tool does it automatically.`],
    [`What is the difference between percentage and percentage points?`, `Going from 10 percent to 12 percent is a rise of two percentage points, but a 20 percent increase relative to the original rate.`],
    [`Can I enter decimals?`, `Yes. Values such as 7.5 percent work.`],
    [`Is the result rounded?`, `Results show up to two decimal places.`]
  ]
};
TOOLGUIDES["uuid-generator"] = {
  ov: [
    `A UUID, or universally unique identifier, is a 128-bit value written as 32 hexadecimal characters in five groups, such as 123e4567-e89b-42d3-a456-426614174000. Software uses UUIDs as labels for database records, files, sessions and API requests because they can be generated anywhere, at any time, without checking with a central server, and the chance of two being identical is vanishingly small.`,
    `The UUID Generator creates five random version 4 UUIDs each time you press the button, using your browser's secure random generator. They are generated on your device and are not stored or logged by ToolsNest. Developers use them for test data, mock records, temporary keys and unique file names, and students use them to learn how identifiers work.`
  ],
  more: [
    `Version 4 UUIDs are based on random numbers. Of the 128 bits, six are fixed to mark the version and variant, leaving 122 random bits. That gives about 5.3 undecillion possible values. Even if a company generated a billion IDs per second for decades, a collision would remain extremely unlikely.`,
    `UUIDs are not secrets and are not designed for security by themselves. They are good for uniqueness, but anyone who learns one can use it. If you need an unguessable token for access control, use a dedicated secret generation method and keep it private. Also note that random UUIDs are not sorted by time, which may affect database index performance in very large tables.`
  ],
  steps: [
    `Open the tool.`,
    `Click Generate to create five new UUIDs.`,
    `Read the list in the result box.`,
    `Click Copy to place them on your clipboard.`,
    `Paste them into your code, test data, spreadsheet or configuration.`,
    `Click Generate again for a fresh set.`
  ],
  feats: [
    `Creating primary keys for test databases.`,
    `Naming uploaded files without clashes.`,
    `Generating request or correlation IDs for logs.`,
    `Seeding mock data for demos.`,
    `Producing unique identifiers in distributed systems.`,
    `Learning about identifier formats.`
  ],
  tips: [
    `Do not use UUIDs as passwords or secret keys.`,
    `Store them as native UUID or binary types in databases when possible to save space.`,
    `Keep a consistent format, lowercase with hyphens, across systems.`,
    `For time-ordered IDs consider newer versions designed for sorting.`,
    `Never hand-edit UUIDs, since this can break the version bits.`,
    `Use the Password Generator for secrets instead.`
  ],
  faq: [
    [`Can two UUIDs be the same?`, `In theory yes, but the probability with version 4 is so tiny that it is treated as impossible in practice.`],
    [`Which version does this tool create?`, `Version 4, which is random-based.`],
    [`Are the UUIDs saved by ToolsNest?`, `No. They are created in your browser and never leave your device.`],
    [`Can I generate more than five?`, `Each press creates five. Press again and combine the lists if you need more.`]
  ]
};
TOOLGUIDES["jwt-decoder"] = {
  ov: [
    `A JSON Web Token is a compact string that many websites and APIs use to prove who you are after you log in. It looks like three blocks of random characters separated by dots, but it is actually structured data. Developers often need to peek inside a token to see which user it belongs to, which permissions it carries or when it expires, especially when debugging a login problem.`,
    `The JWT Decoder reads the first two parts of a token, the header and the payload, and shows them as readable formatted JSON. It runs entirely in your browser, so the token is not sent to ToolsNest. Importantly, decoding does not verify the signature, so it cannot tell you whether the token is genuine. Treat real tokens as passwords and avoid pasting live production tokens into any website.`
  ],
  more: [
    `The three parts are the header, the payload and the signature. The header states the signing algorithm and token type. The payload carries claims such as the subject identifier, issuer, issued-at time and expiry time, usually written as Unix timestamps. Both parts are only Base64URL encoded, which is why anyone can read them. The signature is created with a secret or private key and is what actually proves integrity.`,
    `Common claims include sub for the subject, iat for issued at, exp for expiry and aud for the audience. Convert exp and iat to dates with the Unix Timestamp Converter to see whether a token has expired. If a login keeps failing, an expired or wrongly scoped token is one of the first things to check.`
  ],
  steps: [
    `Copy the JWT from your browser storage, request header or log.`,
    `Paste it into the input box.`,
    `The header and payload are displayed automatically.`,
    `Check claims such as exp, iat, sub and roles.`,
    `Convert timestamps with the Unix Timestamp tool if needed.`,
    `Remove or revoke the token if you pasted a live one by mistake.`
  ],
  feats: [
    `Debugging authentication in web and mobile apps.`,
    `Checking expiry times of access tokens.`,
    `Inspecting claims and roles during development.`,
    `Learning how token-based login works.`,
    `Comparing tokens issued by different providers.`,
    `Support engineers diagnosing user login issues.`
  ],
  tips: [
    `Never trust a token just because it decodes. Always verify the signature on the server.`,
    `Do not store sensitive data in a JWT payload, since it is readable by anyone.`,
    `Use short expiry times for access tokens.`,
    `Prefer test tokens when using online tools.`,
    `Check for stray spaces or line breaks when decoding fails.`,
    `Rotate secrets if a token has been exposed.`
  ],
  faq: [
    [`Does decoding verify the token?`, `No. Verification needs the secret or public key and is done on the server.`],
    [`Why can I read the payload without a key?`, `Because it is only Base64URL encoded, not encrypted.`],
    [`Is my token uploaded?`, `No. Decoding happens locally in your browser, but you should still avoid pasting live production tokens.`],
    [`What does an invalid JWT error mean?`, `The string does not have the expected dot-separated structure or contains characters that cannot be decoded.`]
  ]
};
TOOLGUIDES["uuid-generator"].more.push(`In practice, developers meet UUIDs in many places without noticing. A mobile app may give every note a UUID so that notes created offline on two phones never clash when they sync later. A web service may attach a UUID to each request so that a single failed call can be traced through logs from the browser to the database. Cloud storage systems often rename uploaded files to UUIDs to avoid two users overwriting each other's files. Seeing a few examples side by side in this tool helps you recognise the pattern: eight characters, three groups of four and a final group of twelve, with the digit 4 at the start of the third group marking the random version.`);
TOOLGUIDES["percentage-calculator"].more.push(`Here are a few worked examples you can try straight away. To find a 15 percent tip on a 1,240 rupee restaurant bill, enter 15 and 1,240 and read 186. To see how much a 30 percent discount takes off a 2,499 rupee jacket, enter 30 and 2,499 for a saving of about 749.70. To find the marks equal to 72 percent of 650, enter 72 and 650 to get 468. Repeating such quick checks builds confidence, and they are also a good way to double-check a figure shown on a bill, a payslip or an exam result before you rely on it.`);

/* ===== guides-extra-guides.js ===== */
// guides-extra-guides.js — Hand-written guides (batch 3): PDF, Image, Video, Calculators, Developer tools.

/* ---------- PDF ---------- */
addG("split-extract-pdf-pages",
  [`Not every page of a PDF needs to travel with the rest. You may only need the page with a signature, three chapters of a long report, or the pages of a scanned book that belong to one topic. Sending the whole file wastes time and sometimes shares information you did not mean to share.`,
   `The Split / Extract PDF Pages tool keeps exactly the pages you list and saves them as a new file called extracted.pdf. You type a range such as 1-3,5, which means pages 1, 2, 3 and 5. The work happens in your browser using an open-source PDF library, so the document is not uploaded to ToolsNest, and your original file is never changed.`],
  [`Click the file box and choose your PDF.`, `In the Pages field type the pages you want, for example 1-3,5 or 7.`, `Click Run and wait for the Done message.`, `Open the downloaded extracted.pdf and scroll through it to confirm the right pages are there.`, `If you need several separate parts, run the tool again with a different range each time.`],
  [`Send only the relevant pages of a long contract or report.`, `Pull one filled form out of a big scanned bundle.`, `Cut a scanned book into chapters by running the tool several times.`, `Make a smaller file by dropping pages full of large images.`],
  [`Page numbers mean the physical position in the file (first page = 1), not the numbers printed on the paper.`, `The order of your list is the order of the output, so 5,1-3 gives page 5 first and then pages 1, 2 and 3. This is a quick way to reorder.`, `Page numbers larger than the document are ignored, so check the result if the page count surprises you.`, `Keep the original PDF as a backup before you share the extracted copy.`, `To delete pages instead of keeping them, use the Delete PDF Pages tool.`],
  [[`What does 1-3,5 mean?`, `A dash means a range and a comma separates items. 1-3,5 keeps pages 1, 2, 3 and 5.`], [`Is the original PDF changed?`, `No. The tool reads your file and creates a new one. Your original stays exactly as it was.`], [`Why do I see Invalid page range?`, `None of the numbers you typed matched a page in the file, or the format was not understood. Use digits, dashes and commas only, for example 2-4,6.`]]);
addG("delete-pdf-pages",
  [`Scanned documents often contain a blank back side, a fax cover sheet or a page you simply do not want the other person to see. Opening a heavy PDF editor just to remove one page is slow, and many free editors add watermarks to the result.`,
   `The Delete PDF Pages tool removes the pages you list and saves the rest as pages-deleted.pdf. Type something like 2,4-5 to remove pages 2, 4 and 5. Processing is done locally in your browser, so private paperwork is not sent to ToolsNest, and the original file is left untouched.`],
  [`Choose your PDF file.`, `Type the pages to delete, for example 2,4-5.`, `Click Run.`, `Open pages-deleted.pdf and check that only the unwanted pages are gone.`, `Run the tool again if you spot another page to remove.`],
  [`Remove blank scan pages before emailing a file.`, `Take a cover sheet or internal notes page out of a document you are sharing.`, `Trim a long PDF so it fits an upload size limit.`, `Clean up a merged file after joining several documents.`],
  [`The tool will not delete every page. At least one page must remain, otherwise you will see an error.`, `Double-check the page numbers against the physical page position, not the printed page numbers.`, `Repeated numbers are handled safely, so typing 2,2 only removes page 2 once.`, `If you want to keep only a few pages, the Split / Extract tool is faster than listing everything to delete.`, `After deleting, add fresh page numbers with the Add Page Numbers tool if the old ones are now out of order.`],
  [[`Can I undo a deletion?`, `Your original file is not modified, so simply use it again. The tool only saves a new copy.`], [`Why can I not delete all pages?`, `A PDF with zero pages is not a valid document, so the tool stops with an error.`], [`Does deleting pages reduce the file size?`, `Usually yes, especially when the removed pages contain large images. The saving depends on how the file was created.`]]);
addG("rotate-pdf",
  [`Pages that come out sideways or upside down are one of the most common problems with phone scans and old scanner settings. Reading them on screen is awkward and many portals reject files that look wrong.`,
   `The Rotate PDF tool turns every page by 90, 180 or 270 degrees and saves the result as rotated.pdf. The angle is added to whatever rotation the page already has. Everything runs in your browser, so the file is not uploaded.`],
  [`Choose the PDF you want to fix.`, `Pick the angle: 90 degrees turns pages clockwise, 180 flips them upside down and 270 turns them anticlockwise.`, `Click Run.`, `Open rotated.pdf and check every page.`, `If some pages were correct before, see the tip below about mixed orientation.`],
  [`Fix a whole scan that was captured sideways.`, `Prepare a landscape document for reading on a phone.`, `Correct a PDF before merging it with other files.`, `Repair a file that a portal refuses because the pages look wrong.`],
  [`The tool rotates all pages together. If only one page is wrong, extract that page with Split / Extract, rotate it, and join the pieces again with Merge PDF.`, `Rotating twice by 90 degrees gives the same result as 180 degrees, so you can correct a mistake by running the tool again.`, `Check that text is readable after rotation, not just that the page looks upright.`, `Rotate before adding page numbers or a watermark so they sit at the correct edge.`, `Keep the original as a backup.`],
  [[`Which angle do I choose for a page that is upside down?`, `Choose 180 degrees.`], [`Does rotation lower the quality?`, `No. Only the page orientation setting changes. The content is not re-drawn.`], [`Can I rotate just one page?`, `Not directly. Extract the page, rotate it and merge it back, as described in the tips.`]]);
addG("add-page-numbers",
  [`Long documents are much easier to discuss when every page has a number. Teachers, managers and reviewers can say look at page 14 instead of scrolling and describing. Many applications also ask for numbered pages in a single PDF.`,
   `The Add Page Numbers tool prints a plain number in the centre of the bottom edge of every page, starting from 1, and saves the result as numbered.pdf. It does not upload your file, because the PDF is processed in your browser.`],
  [`Choose your PDF.`, `Click Run.`, `Wait for the Done message.`, `Open numbered.pdf and scroll to the bottom of a few pages to confirm the numbers are visible and not covering any text.`, `If the page order is wrong, fix it first and run the tool again on the corrected file.`],
  [`Number a merged application pack before you upload it.`, `Add references to a report you will review with others.`, `Make a printed handout easier to follow.`, `Prepare legal or academic style documents.`],
  [`Do all merging, deleting and reordering first. If you change the pages afterwards, the numbers will no longer match.`, `The tool numbers every page including the cover. If the cover should not be counted, extract the pages after the cover and number only those.`, `The number is plain text in a small size. Pages with dense content at the very bottom may need a visual check.`, `Run the tool once only. Running it twice prints two numbers on top of each other.`, `The tool does not support formats like Page 1 of 10 or Roman numerals.`],
  [[`Where is the number placed?`, `At the bottom centre of each page.`], [`Can I start from a number other than 1?`, `Not in this tool. It always starts at 1.`], [`Will my original file be changed?`, `No. You receive a new file called numbered.pdf.`]]);
addG("pdf-watermark",
  [`A watermark tells readers what a document is: a draft, a confidential copy or a sample. It also makes casual reuse of a file less tempting.`,
   `The PDF Watermark tool writes your text diagonally across every page in light grey with transparency, and saves the file as watermarked.pdf. It uses a standard font, so only English letters, digits and common punctuation are supported. Processing happens locally in your browser.`],
  [`Choose your PDF.`, `Type the watermark text, for example DRAFT or CONFIDENTIAL.`, `Click Run.`, `Open watermarked.pdf and look at several pages to confirm the text is readable but not blocking the content.`, `Change the wording and run again on the original file if you want a different result.`],
  [`Mark a document as DRAFT before sharing it for review.`, `Label a sample copy so it is not mistaken for the final version.`, `Add the word CONFIDENTIAL to internal reports.`, `Brand a file with a short name before sending it to clients.`],
  [`Keep the text short. The size follows the page width, so a long sentence can run off the edge of the page.`, `Use English letters only. Other scripts such as Hindi cannot be drawn with this font and will cause an error.`, `A watermark is a visual label, not security. It can be removed with PDF editing software, so do not rely on it to protect sensitive files.`, `Always apply it to a copy so you still have a clean original.`, `Add the watermark last, after merging, deleting and numbering pages.`],
  [[`Can I use my own logo?`, `No. This tool supports text watermarks only.`], [`Why do I get an error with Hindi text?`, `The built-in font does not contain Devanagari characters. Use English letters or add the label in a full PDF editor.`], [`Does it add a watermark of ToolsNest?`, `No. Only the text you type is added.`]]);
addG("text-to-pdf",
  [`Sometimes you just want a quick, clean PDF from a few paragraphs: a short letter, notes, a list or a rule sheet. Opening a word processor for that is slower than it needs to be.`,
   `The Text to PDF tool places your typed or pasted text onto A4 pages with margins and automatic line wrapping, adds new pages as needed, and downloads toolsnest-text.pdf. It uses a standard font, so it is designed for English text, and everything happens in your browser.`],
  [`Type or paste your text into the box.`, `Click Create PDF.`, `Your browser downloads toolsnest-text.pdf.`, `Open the file and check the line breaks and page breaks.`, `Edit the text and create the PDF again if anything needs changing.`],
  [`Create a simple letter or declaration that must be submitted as PDF.`, `Save notes or a checklist as a shareable file.`, `Turn a copied email into a PDF record.`, `Prepare plain text documents for printing.`],
  [`Use English letters. Hindi and other scripts are not supported by the built-in font and may appear as broken characters.`, `For Hindi text, write it in a notes app, take a screenshot and convert the image using the Image to PDF tool.`, `The tool prints plain text. It has no bold, headings, tables or images.`, `Very long text creates many pages. Preview the PDF before sending it.`, `Keep your source text saved separately so you can edit and recreate the PDF.`],
  [[`What page size is used?`, `A4 with margins on all sides.`], [`Can I change the font or size?`, `Not in this tool. It uses a fixed default style so the result stays simple.`], [`Does it support Hindi?`, `No. Use the screenshot and Image to PDF method described in the tips.`]]);
addG("pdf-to-jpg",
  [`Sometimes a PDF page has to become a picture: for a presentation slide, a web page, a social post, or an upload form that only accepts images. Taking screenshots loses quality and takes time.`,
   `The PDF to JPG tool renders every page of your PDF as a JPG picture and packs them into a ZIP file named pdf-pages-jpg.zip, with pictures named page-1.jpg, page-2.jpg and so on. You choose High, Medium or Low quality, which controls the render scale and therefore the pixel size of the pictures. The rendering happens in your browser with PDF.js, so your file is not uploaded.`],
  [`Choose your PDF.`, `Pick the quality. High gives the sharpest pages, Low gives the smallest files.`, `Click Convert and watch the page counter.`, `When it finishes, a ZIP file downloads with all pages inside.`, `Unzip it and open the images to check text readability.`],
  [`Put a single PDF page into a slide or blog post.`, `Share pages on messaging apps as pictures.`, `Meet upload forms that accept only JPG.`, `Create thumbnails for a document preview.`],
  [`JPG is best for pages with photos. For text-heavy pages, the PNG version of the tool keeps edges slightly crisper.`, `Use High for printing or zooming, and Low for quick sharing.`, `Very large PDFs use a lot of memory. Split them with Split / Extract first if the browser slows down.`, `Pages get a white background, so transparent PDF elements appear on white.`, `You can shrink the pictures later with the Image Compressor.`],
  [[`Are the pages uploaded anywhere?`, `No. All pages are drawn inside your browser.`], [`Why is the output a ZIP file?`, `A PDF can have many pages, and one ZIP is easier to download than many separate files.`], [`Can I convert only one page?`, `Extract that page first with Split / Extract PDF Pages, then convert the small PDF.`]]);
addG("pdf-to-png",
  [`PNG keeps edges sharp, which is why it is the preferred format for pages with small text, line drawings, tables and screenshots. Converting a PDF page to PNG gives you a picture that stays clean when zoomed.`,
   `The PDF to PNG tool renders each page of your PDF as a PNG and puts all pages into a ZIP file named pdf-pages-png.zip, with pictures named page-1.png, page-2.png and so on. The quality setting controls how large the images are. Conversion is done in your browser, not on a server.`],
  [`Choose your PDF.`, `Select High, Medium or Low quality.`, `Click Convert.`, `Wait until the page counter shows the last page.`, `Unzip the downloaded file and open the PNG pictures.`],
  [`Create sharp images of tables and diagrams.`, `Use pages in documentation, tutorials or presentations.`, `Prepare images for editing in a design tool.`, `Keep a lossless picture of an important page.`],
  [`PNG files are larger than JPG. For many pages choose Medium to keep the ZIP manageable.`, `If you only need one page, extract it before converting.`, `For photos, JPG is usually enough and much smaller.`, `Check the first image before sharing the entire set.`, `Compress heavy PNG files later by converting them to WebP or JPG when transparency is not needed.`],
  [[`Is PNG better than JPG for PDFs?`, `For text and line art, yes. For photos, JPG gives much smaller files with little visible difference.`], [`Will the PNG have a transparent background?`, `No. Pages are drawn on white.`], [`Is there a page limit?`, `ToolsNest sets none, but very long PDFs depend on your device memory.`]]);
/* ---------- Image ---------- */
addG("jpg-to-png",
  [`Some design tools, forms and workflows ask specifically for PNG files. Others need a format that does not change every time you save it, which is a problem with JPG.`,
   `The JPG to PNG tool opens your picture in the browser and saves the exact pixels as a PNG. Nothing is uploaded to ToolsNest. The result is a lossless file, but it cannot bring back detail that was already lost when the JPG was created.`],
  [`Choose a JPG image.`, `Click Apply and wait for the preview.`, `Check the size shown under the preview.`, `Click Download to save the PNG.`, `Use the PNG in your document, design or upload.`],
  [`Satisfy upload forms that accept only PNG.`, `Prepare a picture for editing without more JPG compression.`, `Use the image as a layer in a design that needs a PNG file.`, `Make a copy that will not degrade when saved repeatedly.`],
  [`PNG files from photos are usually much larger than the original JPG. Convert only when you need the format.`, `Converting does not add transparency. The picture still has a solid background.`, `For web pages, WebP or JPG is better for photographs. Use PNG for logos, icons and screenshots.`, `Keep the original JPG as well.`, `If the file is too large afterwards, resize it first with the Image Resizer.`],
  [[`Does converting to PNG improve quality?`, `No. It preserves the current quality but does not restore lost detail.`], [`Why is my PNG so large?`, `PNG stores every pixel without lossy compression, which makes photographs heavy.`], [`Is the image uploaded?`, `No. The conversion happens locally in your browser.`]]);
addG("png-to-jpg",
  [`PNG files are great for graphics, but they can be too heavy for emails, forms and websites. Many portals also ask for JPG specifically.`,
   `The PNG to JPG tool converts your picture to JPG in the browser at a high fixed quality of about 92 percent. Transparent areas are filled with white, because JPG cannot store transparency. Your image is not uploaded anywhere.`],
  [`Choose a PNG image.`, `Click Apply.`, `Look at the preview, especially at any area that used to be transparent.`, `Click Download to save the JPG.`, `If the file is still too large, run it through the Image Compressor.`],
  [`Meet upload rules that require JPG.`, `Shrink screenshots and graphics for email.`, `Use a photo in a document that does not accept PNG.`, `Create a lighter version of a large picture.`],
  [`Transparent backgrounds turn white. If you need another colour behind your logo, add a border or background first.`, `JPG is not ideal for sharp text and line art, which can show small artefacts.`, `Convert once from the original PNG. Do not convert a JPG back and forth.`, `Keep the PNG if you may need transparency later.`, `For smaller files, combine this tool with the Image Resizer.`],
  [[`What happens to a transparent logo?`, `The transparent area becomes white.`], [`Can I choose the quality?`, `This tool uses a fixed high quality. For a custom level, use the Image Compressor.`], [`Is this safe for private images?`, `Yes. Nothing is sent to ToolsNest.`]]);
addG("image-to-webp",
  [`WebP is a modern image format designed to give smaller files than JPG or PNG at similar visual quality. Smaller images help web pages load faster, which matters on mobile data.`,
   `The Image to WebP tool re-saves your picture as WebP at high quality in your browser. Compare the size with your original and use it where WebP is supported. Because processing is local, your picture is not uploaded.`],
  [`Choose an image file.`, `Click Apply and check the preview.`, `Look at the file size reported after you click Download.`, `Save the WebP file.`, `Upload it to your website or app, and keep the original for other uses.`],
  [`Speed up blog and shop pages with lighter images.`, `Prepare pictures for sites that recommend WebP.`, `Reduce storage for large image collections.`, `Test how much space WebP saves for your images.`],
  [`Not every app, printer and upload form accepts WebP. Keep a JPG or PNG copy.`, `Use WebP mainly for websites, where modern browsers support it.`, `Resize to the real display size first with the Image Resizer, then convert.`, `Check the image at full size for artefacts before publishing.`, `Do not convert an already heavily compressed JPG expecting dramatic improvements.`],
  [[`Do all browsers support WebP?`, `Current versions of major browsers do. Some older software and devices do not.`], [`Is WebP lossless?`, `It can be lossy or lossless. This tool saves a high quality lossy version.`], [`Can I convert back?`, `Yes. Use any image converter, or open the picture and save it as JPG or PNG with the converters here.`]]);
addG("image-cropper",
  [`Cropping removes parts of a picture you do not need: a messy background, extra space around a document, or a person standing at the edge. It also helps meet exact size requirements.`,
   `The Image Cropper takes a rectangle defined by four numbers: X, Y, Width and Height, all in pixels, measured from the top-left corner of the image. The result is saved as a PNG. Cropping runs in your browser and your photo is not uploaded.`],
  [`Choose your image.`, `Enter X and Y, the distance from the left and top edges where the crop starts.`, `Enter Width and Height of the area you want. Leaving them empty crops to the right and bottom edges.`, `Click Apply and check the preview and the reported size.`, `Adjust the numbers and apply again until the crop looks right, then download.`],
  [`Cut a document out of a larger photo before converting it to PDF.`, `Remove unwanted edges from a screenshot.`, `Prepare a square or specific size crop for a profile picture.`, `Focus on the important part of a group photo.`],
  [`If the crop area goes outside the picture, the tool shows an error. Reduce the width, height or the starting position.`, `Find the original size in your phone gallery details so you know the maximum values.`, `For a square crop, use the same width and height.`, `Use the Image Resizer afterwards if you need an exact final size.`, `Work on a copy so you keep the uncropped original.`],
  [[`Where does X=0, Y=0 point to?`, `The top-left corner of the picture.`], [`What format is the output?`, `PNG, which keeps the cropped pixels without further loss.`], [`Can I crop by dragging a box?`, `Not in this tool. It uses typed pixel values for precise results.`]]);
addG("remove-photo-metadata-exif",
  [`Photos taken with a phone often carry hidden information called metadata: the camera model, the date and time, and sometimes the exact GPS location. Sharing such a photo online can reveal more than you meant to.`,
   `The Remove Photo Metadata tool redraws your picture in the browser and saves a fresh JPG file. Because the new file is built only from pixels, the hidden EXIF information is not carried over. Your picture is processed locally and not uploaded.`],
  [`Choose the photo you plan to share.`, `Click Apply and check that the preview looks right.`, `Click Download to save the clean copy.`, `Share the new file, not the original.`, `Repeat for each photo you want to clean.`],
  [`Share a picture of your home or office without exposing its location.`, `Post items for sale without revealing where they were photographed.`, `Send photos to others while keeping device details private.`, `Remove camera details before publishing images.`],
  [`Only metadata is removed. What is visible in the picture, such as faces, number plates and signs, is not hidden.`, `Transparent areas become white, because the result is a JPG.`, `The file is re-saved at high quality, so small changes in file size are normal.`, `Turn off location tagging in your camera settings if you do not want it recorded at all.`, `Keep the original photo in a private place if you want its details for yourself.`],
  [[`Does this remove GPS location?`, `Yes. The new file is created from pixels only, so the location data is not copied.`], [`Does the picture look different?`, `It should look the same, apart from tiny compression differences.`], [`Is my photo uploaded?`, `No. Everything is done in your browser.`]]);
addG("passport-photo-maker",
  [`Many forms ask for a passport or visa photo in an exact size. Studios charge for something you can prepare yourself if you already have a good, plain photo.`,
   `The Passport Photo Maker crops and scales your picture to a standard size at 300 DPI: 35x45 mm (413x531 px, common in India and the UK), 2x2 inch (600x600 px, USA) or 40x50 mm (472x591 px). It scales the picture to fill the frame, crops the centre and saves a JPG. It runs in your browser, so your photo is not uploaded.`],
  [`Pick a clear, front-facing photo with the face in the middle.`, `Choose the passport size you need.`, `Click Apply and check the preview.`, `Download the JPG.`, `Print it at 100 percent scale, or upload it where a digital photo is asked.`],
  [`Prepare photos for forms and online applications.`, `Create a digital copy for portals that accept uploads.`, `Print several photos on one sheet using a photo printing service.`, `Make a quick photo before you visit a studio for a final one.`],
  [`The tool scales the picture to cover the frame and crops from the centre, so parts at the edges may be cut off. It does not detect faces or remove backgrounds, so take the photo with a plain light background and your face centred.`, `Always check the official requirements for your document, such as head size, background colour and expression.`, `Use a sharp photo taken in even light, without shadows or glasses glare.`, `Keep the original high-resolution picture for other uses.`, `Many offices reject photos that look edited or filtered, so do not add effects.`],
  [[`Does it remove the background?`, `No. Use a plain background when taking the photo.`], [`Will it meet every country's rules?`, `Not necessarily. Rules differ. Check the official guidelines before you submit.`], [`What is 300 DPI?`, `It is a common print resolution. The pixel size matches the physical size at that setting.`]]);
addG("meme-maker",
  [`A good meme needs a picture and a short, readable caption. Adding text in a full image editor takes more effort than the joke deserves.`,
   `The Meme Maker places your top and bottom text on the picture in white capital letters with a black outline, which stays readable on most backgrounds. It shrinks long lines so they fit across the picture, and saves the result as a PNG. Everything happens in your browser.`],
  [`Choose a picture.`, `Type the top text and the bottom text. You can leave one empty.`, `Click Apply and read the preview.`, `Shorten the text if it looks too small.`, `Download the PNG and share it.`],
  [`Create jokes for friends and groups.`, `Make light-hearted posts for social media.`, `Add short captions for a classroom or team activity.`, `Prepare simple image-with-text announcements.`],
  [`Each caption is a single line. Keep it short, because long text is shrunk to fit and becomes hard to read.`, `Choose pictures with calm areas at the top and bottom for clearer text.`, `Text is converted to capital letters automatically.`, `Use images you have the right to use, and avoid posting private photos of others without permission.`, `Do not use memes to harass or mislead people.`],
  [[`Can I change the font or colour?`, `No. The tool uses a fixed classic meme style.`], [`Can I add text in the middle?`, `No. It supports top and bottom captions only.`], [`Is my picture uploaded?`, `No. The meme is created in your browser.`]]);
/* ---------- Video ---------- */
addG("video-trimmer",
  [`Phone recordings often contain extra seconds at the start and end. Trimming them makes a clip more watchable and smaller to share.`,
   `The Video Trimmer cuts a section from your video between a start and an end time in seconds. It works in real time inside your browser: the selected part plays once while it is recorded as a new WebM file, with sound. Your video is not uploaded anywhere.`],
  [`Choose a video file.`, `Enter the start time in seconds.`, `Enter the end time in seconds. Use 0 to keep everything until the end.`, `Click Start and keep the tab open while the progress bar fills.`, `Preview the result and click Download.`],
  [`Cut the best 15 seconds out of a longer recording.`, `Remove the shaky start and end of a clip.`, `Prepare a short clip for a status or story.`, `Reduce the length before applying other tools.`],
  [`Processing takes as long as the selected clip, because it is recorded in real time.`, `Keep the browser tab in the foreground. Switching away can slow or stall the process.`, `Use Chrome or Edge on desktop or Android for best results.`, `The output is WebM. Some apps, such as Instagram or iPhone Photos, may need MP4. Check the format your destination accepts.`, `Test with a short clip first if your video is long.`],
  [[`Why does trimming take so long?`, `The browser records playback in real time, so the processing time equals the clip length.`], [`Does the trimmed video keep sound?`, `Yes, if the original video has sound.`], [`Why does it not work on my iPhone?`, `Many iPhone browsers do not support the recording feature the tool needs. Use Chrome on Android or a desktop browser.`]]);
addG("video-compressor",
  [`Large videos are hard to email, slow to upload and eat phone storage. Reducing the resolution and bitrate makes them much lighter when a little less sharpness is acceptable.`,
   `The Video Compressor re-records your video in the browser at a smaller width (720p, 480p, 360p or 240p) and a lower bitrate that you choose. The new file is saved as WebM. The video is processed locally and not uploaded.`],
  [`Choose your video.`, `Pick the maximum width. The tool only shrinks, it never enlarges.`, `Pick a quality level: Good, Medium or Small file.`, `Click Start and keep the tab open until the bar is full.`, `Compare the new size shown after processing and download the file.`],
  [`Make a clip small enough to send over chat or email.`, `Free up phone or computer storage.`, `Prepare a lightweight preview of a longer video.`, `Reduce upload time on a slow connection.`],
  [`Start with 480p and Medium. If the result looks too soft, try 720p with Good.`, `The tool records in real time, so a ten minute video takes about ten minutes.`, `The output is WebM. Check that your app accepts WebM before relying on it. Many social apps prefer MP4.`, `Trim the video first with the Video Trimmer to shorten processing.`, `Keep the original file in case you need full quality later.`],
  [[`Will compressing reduce quality?`, `Yes. Smaller size always means some loss of sharpness.`], [`Can it output MP4?`, `No. The tool saves WebM.`], [`Why is my compressed file not much smaller?`, `Videos that are already small or low bitrate cannot shrink much more. Try a lower width or quality.`]]);
addG("mute-video",
  [`Sometimes the sound is the problem: background chatter, wind noise, copyrighted music or private conversations. Removing it before sharing is often the quickest fix.`,
   `The Mute Video tool re-records your video without the audio track and saves a silent WebM file. It runs in real time in your browser and your video is not uploaded.`],
  [`Choose a video.`, `Click Start and keep the tab open while the bar fills.`, `Preview the result to confirm there is no sound.`, `Download the muted video.`, `Add new music or voice later in a video editor if needed.`],
  [`Remove background noise before sharing a clip.`, `Avoid copyright issues from music in the original.`, `Protect private conversations captured by accident.`, `Prepare a silent loop for a presentation or website.`],
  [`Keep the tab active because the tool works in real time.`, `The output is WebM. If you need MP4, convert it with another tool.`, `Check the entire preview, not just the first seconds.`, `Keep the original file if you may need the audio later.`, `Trim the video first if you only need a short part.`],
  [[`Does it delete the sound from my original file?`, `No. Your original video stays unchanged.`], [`How long does muting take?`, `About as long as the video itself.`], [`Can I keep the audio and remove the video instead?`, `Use the Extract Audio from Video tool.`]]);
addG("video-to-reels-shorts-9-16",
  [`Reels, Shorts and Stories use a tall 9:16 frame. A normal landscape video does not fill that frame, which leaves black bars or looks small on the screen.`,
   `The Video to Reels / Shorts 9:16 tool crops the centre of your video into a vertical frame and records the result as a WebM file. It works in your browser in real time, with sound, and your video is not uploaded.`],
  [`Choose a landscape or square video.`, `Click Start and wait while the progress bar fills.`, `Preview the vertical result and check that your subject is inside the frame.`, `Download the video.`, `If the subject is cut off, reframe the original or use a different clip.`],
  [`Reuse a landscape recording for Reels or Shorts.`, `Create vertical clips from a wide camera shot.`, `Prepare a status or story from a longer video.`, `Make a quick vertical preview of an event.`],
  [`The tool crops from the middle, so keep your subject centred when you record.`, `The output keeps the original height and cuts the sides. A 1920x1080 clip becomes about 608x1080, which is lower than the standard 1080x1920 vertical size.`, `For highest quality, record vertical in the first place.`, `Your video is saved as WebM. Check whether the platform accepts it, or convert to MP4.`, `Trim the clip to the best 15 to 60 seconds first.`],
  [[`Will the picture be stretched?`, `No. It is cropped, not stretched.`], [`Why is the resolution smaller than 1080x1920?`, `Because the tool crops the existing pixels instead of enlarging them.`], [`Can I choose which part to keep?`, `No. The centre of the frame is kept.`]]);
addG("extract-audio-from-video",
  [`Sometimes you only need the sound from a video: a lecture, an interview, a song you recorded or a voice note. Keeping the full video wastes space and makes it harder to listen on the go.`,
   `The Extract Audio from Video tool plays your video in the browser and records only its audio track into a WebM audio file. The video is not uploaded, and the process takes about as long as the video.`],
  [`Choose a video that has sound.`, `Click Start and keep the tab open.`, `Wait until the progress bar finishes.`, `Play the preview to check the audio.`, `Download the file.`],
  [`Save a lecture or talk as audio for listening later.`, `Pull a voice recording out of a video message.`, `Create audio for editing in another program.`, `Reduce the size of content where the picture is not important.`],
  [`If the video has no audio track you will see an error message.`, `The output is WebM audio. It plays in browsers and many players such as VLC, but some phones and apps may need MP3 or M4A.`, `Respect copyright. Extract audio only from content you own or have permission to use.`, `Use the Video Trimmer first if you only need part of the video.`, `Keep the tab active until the process ends.`],
  [[`Can I get an MP3?`, `Not from this tool. It saves WebM audio.`], [`Why is there an error about no audio?`, `The selected video does not contain an audio track.`], [`Is the quality the same as the original?`, `It is re-recorded, so a small quality change is normal.`]]);
/* ---------- Calculators ---------- */
addG("compound-interest-calculator",
  [`Compound interest means you earn interest on your earlier interest, not only on the original amount. Over long periods this makes a big difference, which is why savings plans, fixed deposits and investments are usually compared using compounding.`,
   `The Compound Interest Calculator takes a lump sum, a yearly rate, the number of years and how often interest is added (yearly, half-yearly, quarterly or monthly). It shows the final amount and the interest earned using the standard formula A = P x (1 + r/n)^(n x t). The calculation runs in your browser.`],
  [`Enter the principal amount in rupees.`, `Enter the annual interest rate.`, `Enter the number of years.`, `Choose how many times per year interest is compounded.`, `Click Calculate and read the final amount and interest earned.`],
  [`Compare two fixed deposit offers.`, `See how much a lump sum can grow over 5, 10 or 20 years.`, `Understand why starting early helps.`, `Check a bank or scheme promise against the formula.`],
  [`Example: 1,00,000 rupees at 8 percent for 5 years becomes about 1,46,933 with yearly compounding and about 1,48,985 with monthly compounding.`, `The compounding frequency matters less than the rate and the time.`, `Use the actual rate offered after tax if you want a realistic estimate.`, `Inflation reduces what the money can buy, so compare results with expected price increases.`, `Results are estimates, not a guarantee from any bank or fund.`],
  [[`What is the difference between simple and compound interest?`, `Simple interest is calculated only on the original amount. Compound interest also earns interest on past interest.`], [`Does this include tax?`, `No. Taxes, charges and penalties are not included.`], [`Can I use it for monthly savings?`, `No. It is for a single lump sum. Use the SIP or RD calculator for regular deposits.`]]);
addG("simple-interest-calculator",
  [`Simple interest is the easiest way to calculate the cost of a short loan or the return on a basic deposit. It is also common in school problems and in some informal lending.`,
   `The Simple Interest Calculator uses the formula Interest = P x R x T / 100. Enter the principal, the yearly rate and the time in years, and it shows the interest and the total amount. The calculation runs in your browser.`],
  [`Enter the principal amount.`, `Enter the annual interest rate in percent.`, `Enter the time in years. Use decimals for part of a year, for example 0.5.`, `Click Calculate.`, `Read the interest and the total amount.`],
  [`Check interest on a short personal loan.`, `Solve homework and exam questions.`, `Compare simple interest with the compound interest result.`, `Estimate the return on a basic deposit.`],
  [`Example: 1,00,000 rupees at 8 percent for 3 years gives 24,000 rupees interest. With yearly compounding the same period would give about 25,971.`, `Convert months to years by dividing by 12.`, `Most banks use compound interest, so simple interest results may be lower than real bank figures.`, `Ask lenders which method they use before agreeing to a loan.`, `Results are estimates.`],
  [[`What is the formula?`, `Interest = Principal x Rate x Time divided by 100.`], [`Is simple interest used by banks?`, `Some products do, but most loans and deposits use compounding or reducing balances.`], [`Can I enter months?`, `Enter the time in years, so 6 months is 0.5.`]]);
addG("discount-calculator",
  [`Sale prices can be confusing, especially when a discount is a percentage and you want to know the exact amount you save. A quick calculation helps you compare offers and avoid paying more than you planned.`,
   `The Discount Calculator takes the original price and the discount percentage, and shows how much you save and the final price. It runs in your browser and stores nothing.`],
  [`Enter the original price in rupees.`, `Enter the discount percentage.`, `Click Calculate.`, `Read the amount you save and the final price.`, `Change either number to compare other offers.`],
  [`Check a shop sale before buying.`, `Plan discounts for your own products.`, `Compare a percentage offer with a flat amount off.`, `Understand how much a coupon is really worth.`],
  [`Example: a jacket priced at 2,499 rupees with 30 percent off saves about 749.70 and costs 1,749.30.`, `Two discounts do not add up. 20 percent off followed by 10 percent off is 28 percent in total, not 30. Calculate the first, then use the result as the new price.`, `Check whether the displayed price already includes tax.`, `For sellers, make sure the discounted price still leaves a profit. Use the Profit & Loss Calculator.`, `Delivery charges and fees are not included.`],
  [[`Can I calculate a discount with a flat amount?`, `Divide the flat amount by the original price and multiply by 100 to get the percentage, then use the tool.`], [`Does it include GST?`, `No. Use the GST Calculator for tax.`], [`How do I stack two discounts?`, `Apply the first, then enter the new price and the second discount.`]]);
addG("cagr-calculator",
  [`When an investment goes up and down from year to year, it is hard to compare it with another. CAGR, the Compound Annual Growth Rate, gives one smooth yearly rate that would take you from the starting value to the final value over the same period.`,
   `The CAGR Calculator takes an initial value, a final value and the number of years, and shows the yearly growth rate using CAGR = (Final / Initial)^(1 / Years) - 1. It runs in your browser.`],
  [`Enter the starting value.`, `Enter the ending value.`, `Enter the number of years between them.`, `Click Calculate.`, `Read the CAGR as a percentage per year.`],
  [`Compare two investments over the same period.`, `Check how fast a business metric such as sales has grown.`, `Evaluate the growth of a one-time investment.`, `Understand return claims in advertisements.`],
  [`Example: 1,00,000 growing to 2,50,000 in 5 years is a CAGR of about 20.11 percent per year.`, `CAGR assumes smooth growth and hides the ups and downs in between.`, `It is meant for a single investment. For monthly SIPs with several deposits, CAGR is not accurate, because money was invested at different times.`, `Use the same time period when comparing two things.`, `Past growth does not guarantee future results.`],
  [[`What is a good CAGR?`, `It depends on the asset and the risk. Compare it with inflation and with similar investments.`], [`Can CAGR be negative?`, `Yes, if the final value is lower than the initial value.`], [`Can I use it for SIP?`, `Not accurately. Use the SIP Calculator to estimate future value.`]]);
/* ---------- Developer ---------- */
addG("url-encoder",
  [`URLs can only contain a limited set of characters. Spaces, ampersands, question marks, non-English letters and symbols must be converted into percent codes before they can safely go inside a link.`,
   `The URL Encoder converts your text using the standard encodeURIComponent method. For example, a space becomes %20 and an ampersand becomes %26. Processing happens in your browser. Use the URL Decoder to reverse it.`],
  [`Type or paste the text you want to encode, such as a search phrase or a query value.`, `The encoded result appears automatically.`, `Click Copy result.`, `Paste the result into your link after the equals sign of a parameter.`, `Test the final link in a browser.`],
  [`Build links with search words, names or messages.`, `Prepare values for UTM campaign links.`, `Create WhatsApp text links and share links.`, `Debug links that break because of special characters.`],
  [`Encode only the value of a parameter, not the whole address. Encoding the full URL also changes the slashes and colons.`, `Do not encode the same text twice, because %20 would become %2520.`, `Hindi and other languages become longer percent sequences. This is normal.`, `This tool is for parameters. The UTM Link Builder and WhatsApp Link Generator already do this encoding for you.`, `Use the URL Decoder if you need to read an encoded link.`],
  [[`Why does a space become %20?`, `URLs cannot contain raw spaces, so 20 is the hexadecimal code for the space character.`], [`Should I encode the whole link?`, `No. Encode only the parts you insert, like a query value.`], [`Is my text stored?`, `No. It stays in your browser.`]]);
addG("regex-tester",
  [`Regular expressions are powerful patterns for finding text, but a small mistake gives wrong matches that are hard to spot by eye. Testing the pattern on sample text first saves a lot of debugging.`,
   `The Regex Tester uses JavaScript regular expressions. On the first line write the pattern in slash form, such as /[a-z]+/g. On the following lines paste the text to test. The tool shows how many matches were found and lists them. Everything runs in your browser.`],
  [`In the box, type the pattern on the first line, for example /\\d+/g.`, `Press Enter and paste or type the test text on the next lines.`, `The result shows the number of matches and each matching piece.`, `Edit the pattern and watch the result change.`, `Copy the final pattern into your code.`],
  [`Check a pattern before using it in code.`, `Find phone numbers, order numbers or dates in text.`, `Learn how flags and character classes work.`, `Clean data by testing what a pattern will select.`],
  [`The first line must look like /pattern/flags. Without the slashes you will see an error.`, `The g flag is added automatically so that you see all matches, not only the first.`, `The result lists full matches, not capture groups.`, `JavaScript syntax differs from some other languages, so test in the language you will use.`, `Very complicated patterns on long text can slow the browser. Try a smaller sample first.`],
  [[`Which regex flavour is used?`, `The one built into JavaScript in your browser.`], [`Why does it say the first line must look like /pattern/g?`, `The tool reads the pattern and flags from the first line, so it needs the slash format.`], [`Can I test multi-line text?`, `Yes. Everything after the first line is treated as the test text.`]]);
addG("json-to-csv",
  [`JSON is how many apps and APIs store data, but spreadsheets work with rows and columns. Converting a list of JSON records to CSV lets you open it in Excel or Google Sheets, sort it and share it with people who do not read code.`,
   `The JSON to CSV tool accepts a JSON array of objects, collects every key as a column and writes one row per object. Values that contain commas, quotes or line breaks are quoted correctly. It runs in your browser, so your data is not sent anywhere.`],
  [`Paste a JSON array such as [{"name":"A","age":20},{"name":"B","age":25}].`, `The CSV output appears automatically.`, `Click Copy result.`, `Paste it into a text file and save it with the extension .csv, or paste straight into a sheet.`, `Open it in a spreadsheet and check the columns.`],
  [`Turn API responses into a table.`, `Prepare data for reports.`, `Share records with non-technical colleagues.`, `Import data into spreadsheet tools.`],
  [`Objects with different keys are handled. Columns are the combination of all keys, and missing values are left empty.`, `Nested objects and arrays are written into the cell as JSON text.`, `If Hindi or other characters look broken in Excel, save the file as UTF-8 with BOM.`, `A single object is treated as a list with one row.`, `Check that your JSON is valid first with the JSON Formatter & Validator.`],
  [[`What if my JSON is not an array?`, `A single object is accepted and becomes one row. Other shapes may need to be adjusted.`], [`Are numbers converted correctly?`, `Yes, they are written as plain values.`], [`Is my data stored?`, `No. It stays in your browser.`]]);
addG("csv-to-json",
  [`Developers often need spreadsheet data in JSON form for APIs, apps and tests. Writing the structure by hand is slow and error prone.`,
   `The CSV to JSON tool treats the first row as column names and converts each following row into an object. It understands quoted values and commas inside quotes. Processing happens in your browser.`],
  [`Paste CSV text with a header row, for example name,age on the first line.`, `The JSON appears below.`, `Check that keys match your column names.`, `Click Copy result.`, `Use the JSON in your app or test.`],
  [`Prepare sample data for an API.`, `Convert exports from a spreadsheet into JSON.`, `Create fixtures for development.`, `Move data between systems.`],
  [`All values are text. A number such as 25 becomes "25", so convert types in your code if needed.`, `Make sure the header names are unique. Duplicate names overwrite each other.`, `Use quotes around any value that contains a comma.`, `Remove empty lines at the end of the CSV for cleaner results.`, `Use the JSON Formatter & Validator to confirm the final structure.`],
  [[`Does it support different separators like semicolons?`, `No. It expects commas.`], [`Why are my numbers in quotes?`, `The tool does not guess types, so everything is a string.`], [`Is there a size limit?`, `ToolsNest sets none. Very large data depends on your device.`]]);
addG("unix-timestamp-converter",
  [`Many systems store time as a Unix timestamp, the number of seconds since 1 January 1970 UTC. It is compact and easy to compare, but impossible to read by eye.`,
   `The Unix Timestamp Converter turns a timestamp into a readable date and turns a date into a timestamp. A number with 10 digits or fewer is treated as seconds, a longer one as milliseconds. It runs in your browser.`],
  [`Type or paste a Unix timestamp such as 1700000000, or a date such as 2026-10-28T10:30:00+05:30.`, `Read the result. For a timestamp you get the UTC time in ISO form and the date in your device time zone.`, `For a date you get seconds and milliseconds.`, `Click Copy result.`, `Use the value in your code, logs or database query.`],
  [`Read timestamps in logs and APIs.`, `Check when a token or record expires.`, `Create timestamps for tests.`, `Compare times from different systems.`],
  [`Example: 1700000000 is 14 November 2023, 22:13:20 UTC.`, `Always include the time zone in dates, such as +05:30, to avoid confusion between UTC and local time.`, `If your result is in the year 1970, you probably gave seconds where milliseconds were expected, or the reverse.`, `Timestamps count from UTC, so the same number means the same instant everywhere.`, `Use this together with the JWT Decoder to read token expiry times.`],
  [[`How do I know if a timestamp is in seconds or milliseconds?`, `Ten digits is usually seconds and thirteen digits is milliseconds.`], [`Why is my local time different from UTC?`, `Your device shows time in your own time zone, which for India is 5 hours 30 minutes ahead of UTC.`], [`Can I convert a date without a time?`, `Yes, but it may be read as midnight UTC. Add a time and zone to be exact.`]]);
TOOLGUIDES["text-case-converter"] = TOOLGUIDES["title-case-converter"];

/* ===== guides-autoguide.js ===== */
// guides-autoguide.js — Automatic guide for tools without a hand-written guide + guideHtml() renderer.
// Load the guide files (they fill TOOLGUIDES when imported)

export const AG_ABOUT = {
  ai: ["{n} saves you from the blank-page problem. Instead of guessing how to phrase a request, you fill in a few fields and get a structured prompt with a role, task, context, format and tone. Clear instructions are the biggest factor in getting a useful answer from an AI model, so a good prompt often matters more than which model you use.", "The prompt is built in your browser and never stored by ToolsNest. You paste it into ChatGPT, Gemini, Claude or any other tool, read the answer critically and refine it with a follow-up message. It is a starting point, and AI output can contain mistakes, so always check facts before you use it."],
  photo: ["{n} edits pictures directly in your browser using the HTML canvas. Your image is decoded, changed on your own device and returned as a new file, so the original stays untouched. This removes the need for heavy editing software for simple, everyday jobs.", "Because nothing is uploaded, it is a sensible choice for personal photos, identity pictures and product images. Results depend on the quality of the source photo: a tool can reshape or adjust an image but cannot recover detail that was never captured."],
  video: ["{n} processes video in real time using your browser's built-in media features. The clip plays once while each frame is redrawn with your settings and recorded as a new WebM file. That is why processing takes about as long as the video itself.", "Everything stays on your device and no account is needed. For best results use Chrome or Edge, keep the tab open and in the foreground, and test settings on a short clip before running a long one."],
  pdf: ["{n} works on PDF documents locally using open-source libraries that run in your browser. Pages are copied or changed in memory and saved as a new file, so confidential paperwork is never sent to a server and your original file is not modified.", "PDFs are the standard for applications, invoices and reports, but they are awkward to rearrange. This tool does one clear job quickly, without watermarks, sign-ups or page limits set by ToolsNest."],
  text: ["{n} transforms text instantly as you type or paste. It replaces repetitive find-and-replace work, copy-paste cleanup and manual formatting with a single step, and the result appears immediately so you can copy it.", "Processing is local, so drafts, notes and lists are not stored. The tool changes characters only; it does not check meaning or grammar, so read the result once before you publish or send it."],
  dev: ["{n} handles a routine data task that developers, testers and students meet often, without installing software or opening a terminal. Paste your input, run the tool and copy the output.", "Everything runs in your browser and nothing is sent to ToolsNest. Even so, avoid pasting real passwords, secret keys or customer data into any online tool, and use sample values when testing."],
  calc: ["{n} applies a standard formula to the numbers you enter and shows the result at once. Using a calculator avoids mental arithmetic slips and lets you compare several scenarios in seconds by changing a single value.", "Results are estimates for planning and learning. They are not financial, tax or medical advice, and real offers may include fees, rounding or rules a simple formula does not cover. Confirm important decisions with a qualified professional."],
  media: ["{n} uses permissions that your browser controls. When you start it, the browser asks for access to a microphone, camera or screen, and what you record is created and kept on your own device.", "Recording quality depends on your hardware and environment. Do a short test first, record in a quiet and well-lit place, and save the file before closing the tab."],
  util: ["{n} is a quick everyday helper for a small job that does not deserve a separate app. Open it, enter a value or choose an option, and get the answer straight away.", "It runs in your browser with no account. Generated values and codes are created fresh each time and are not stored, so copy or download what you need before leaving the page."],
  social: ["{n} helps you prepare text, links and tags for social platforms and websites. It handles the fiddly formatting details so you can focus on what you want to say.", "ToolsNest is independent and not affiliated with any social network. The tool does not post for you or access your accounts, and platform rules change, so check current guidelines before publishing."]
};
export const AG_AUDIENCE = {
  ai: ["Students use it to turn a rough question into a clear brief for study help.", "Professionals use it to standardise how a team asks an AI for drafts and summaries.", "Everyday users use it to get better answers for planning, writing and learning."],
  photo: ["Students prepare pictures for forms, assignments and presentations.", "Professionals such as sellers and bloggers get listing and article images ready quickly.", "Everyday users fix a family or travel photo without installing an app."],
  video: ["Students trim and reframe clips for projects and presentations.", "Creators and marketers prepare short clips for Reels, Shorts and ads.", "Everyday users shrink or tidy phone videos before sharing them."],
  pdf: ["Students combine and tidy assignments and scanned notes.", "Professionals prepare invoices, reports and client documents.", "Everyday users assemble application packs, forms and ID proofs."],
  text: ["Students check length and clean up pasted notes.", "Writers, editors and SEO staff reformat and analyse copy quickly.", "Everyday users tidy lists, messages and captions."],
  dev: ["Students learn how formats and encodings work with instant feedback.", "Developers and testers debug payloads and generate test values.", "Technical support staff inspect a value without writing a script."],
  calc: ["Students check homework and learn the formula behind each answer.", "Professionals and shop owners price, quote and plan with dependable numbers.", "Households compare offers and budget for loans, savings and bills."],
  media: ["Teachers record explanations and walkthroughs for students.", "Professionals capture demos, bug reports and meeting notes.", "Everyday users record a quick voice memo or webcam photo."],
  util: ["Students use it for quick classroom tasks and design practice.", "Professionals use it to prototype a small design or generate a value.", "Everyday users settle decisions or grab a code without an app."],
  social: ["Students and new creators learn how links, tags and sizes work.", "Marketers and shop owners prepare tracked links and consistent posts.", "Everyday users style bios, captions and chat links."]
};
export const AG_EXTRA_FAQ = {
  ai: [["Will the generated prompt always give a perfect answer?", "No. It gives the AI a clearer brief, which usually improves results, but you should still review and edit the answer and follow up with corrections."], ["Can I change the prompt before using it?", "Yes. Copy it and edit any line, add examples of the style you want, or tell the AI who the final reader is."]],
  photo: [["Why does my result look different from the preview?", "The preview is scaled to fit the screen. Download the file and open it at full size to judge the real result."], ["Does the tool change my original photo?", "No. It creates a new file. Your original stays exactly as it was on your device."]],
  video: [["Why does processing take so long?", "The browser records playback in real time, so a one-minute clip takes about a minute. Keep the tab open until the bar is full."], ["Why is the output WebM and can I get MP4?", "Browsers record WebM natively. If an app needs MP4, convert the WebM with a separate converter."]],
  pdf: [["Can I use it on a password-protected PDF?", "Files secured with a password may need to be unlocked first with the tool you used to protect them."], ["Will the original PDF be changed?", "No. You receive a new file and your original is left untouched."]],
  text: [["Does it keep bold or italic formatting?", "No. It works on plain text only, so formatting from a word processor is not preserved."], ["Is there a length limit?", "ToolsNest sets none. Very long text depends on your device and browser speed."]],
  dev: [["Does it run or execute my code?", "No. It only transforms or inspects the value you give it."], ["Why do I see an error for input that looks fine?", "Small details such as stray spaces, wrong quotes or hidden characters from copy-paste often cause errors. Retype the suspicious part."]],
  calc: [["Which formula does it use?", "It uses the standard textbook formula for this calculation, applied to exactly the numbers you enter."], ["Why does my bank or provider show a slightly different figure?", "Fees, rounding rules, rate type and start dates can cause small differences. Ask the provider for its official schedule."]],
  media: [["Is my recording uploaded?", "No. Audio, video and images are created and kept on your device."], ["What if the browser blocks the permission?", "Open the site settings in your browser, allow the microphone, camera or screen for this page and reload."]],
  util: [["Is the generated result saved anywhere?", "No. Copy or download it before you leave the page, because it is not stored."], ["Does it work offline?", "Once the page is loaded the tool runs in your browser, but some tools need to fetch a helper library first."]],
  social: [["Does the tool post to my account?", "No. It only prepares text or links that you copy and use yourself."], ["Will it guarantee more reach or followers?", "No. Platforms control reach. The tool saves time and avoids formatting mistakes only."]]
};
export function autoGuide(t) {
  const n = t[2], d = t[3].replace(/[\s.!]+$/, ""), k = toolKind(t), idx = KIND_INDEX[t[1]] || 0;
  const rep = function (s) { return s.split("{n}").join(n); };
  const about = (AG_ABOUT[k] || AG_ABOUT.util).map(rep);
  about.unshift(n + " is a free ToolsNest tool built for one clear job: " + d.charAt(0).toLowerCase() + d.slice(1) + ". This guide explains what it does, how to use it well, who benefits and what to watch out for.");
  const steps = toolSteps(t).concat(["Review the result carefully before you rely on it or share it.", "Change an input and run it again if you want to compare another option."]);
  const aud = (AG_AUDIENCE[k] || AG_AUDIENCE.util).concat(toolUseCases(t).slice(0, 2));
  const faq = toolFaqs(t).concat(AG_EXTRA_FAQ[k] || AG_EXTRA_FAQ.util);
  return { ov: about, steps: steps, feats: aud, tips: toolTips(t).concat(toolLimits(t).slice(1, 3)), faq: faq };
}
export function guideHtml(slug) {
  const g = TOOLGUIDES[slug] || (TBYSLUG[slug] !== undefined ? autoGuide(TOOLS[TBYSLUG[slug]]) : null);
  if (!g) return "";
  const li = function (a) { return a.map(function (s) { return '<li>' + escH(s) + '</li>'; }).join(""); };
  return '<article class="guide"><section><h2>About the Tool &amp; Why It Matters</h2>' + g.ov.concat(GUIDEMORE[slug] || [], g.more || []).map(function (p) { return '<p>' + escH(p) + '</p>'; }).join("") + '</section>'
    + '<section><h2>Step-by-Step Guide: How to Use It</h2><ol class="st">' + li(g.steps) + '</ol></section>'
    + '<section><h2>Practical Use Cases</h2><ul class="st">' + li(g.feats) + '</ul></section>'
    + '<section><h2>Tips &amp; Best Practices</h2><ul class="st">' + li(g.tips) + '</ul></section>'
    + '<section><h2>Frequently Asked Questions (FAQs)</h2>' + g.faq.map(function (f) { return '<h3>' + escH(f[0]) + '</h3><p>' + escH(f[1]) + '</p>'; }).join("") + '</section></article>';
}
