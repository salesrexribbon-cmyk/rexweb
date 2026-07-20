const fs = require('fs');
const path = require('path');

function cleanText(text) {
  if (typeof text !== 'string') return text;
  
  // Replace em-dashes with comma/period depending on context, or just space.
  // Using space is safest for general text, or comma if it separates clauses.
  // A simple replace of " — " with ", " is usually good.
  let cleaned = text.replace(/\s*[—]\s*/g, ', ');
  
  // Fix Wi-Fi
  cleaned = cleaned.replace(/Wi-Fi/gi, 'WiFi');
  
  // Replace text hyphens: any hyphen surrounded by letters (lowercase/uppercase)
  // Not touching numbers (e.g. 10-page -> 10 page, but 30-40% -> keep, 1-2 hours -> keep)
  // Wait, the user said "here between numbers its fine". So \d-\d is fine.
  // But what about "10-page"? It's a number, hyphen, letter. "24-pin".
  // Let's replace hyphen between [a-zA-Z] and [a-zA-Z], [0-9] and [a-zA-Z], [a-zA-Z] and [0-9].
  // Only keep hyphens between [0-9] and [0-9] (and possibly % or other symbols if it's a range).
  
  // Actually, I can just replace all hyphens that are not between two digits.
  // Let's use regex: replace '-' if it's not preceded and followed by a digit.
  // negative lookbehind/ahead for digits: (?<!\d)-(?!\d)
  // Wait, if it's "1-5", we keep it. If it's "24-pin", we want "24 pin".
  // If it's "LQ-310", that's a model name. Should we change model names? "no hyphen in any page in entire project entire".
  // Hmm. "LQ 310" instead of "LQ-310"? If I change model names, the `imageUrl` and `slug` might break if they use hyphens.
  // Slugs definitely use hyphens. `id` uses hyphens.
  
  // It's much safer for me to manually replace the text in `products.ts` or explicitly match the keys I want to clean.
  return cleaned;
}

const file = path.join(__dirname, 'src/lib/data/products.ts');
let content = fs.readFileSync(file, 'utf8');

// I will parse the AST? No, just match specific fields:
const fieldsToClean = ['name', 'shortDescription', 'detailedDescription', 'title', 'description', 'answer', 'question'];
// I will not use this script. I will do it manually to ensure perfect safety.
