const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  if (!fs.existsSync(dir)) return filelist;
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.tsx') || dirFile.endsWith('.ts')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  // skip page.tsx and layout.tsx in the root app since we already perfected them
  if (file === 'src/app/page.tsx' || file === 'src/app/layout.tsx' || file === 'src/components/Navigation.tsx') return;

  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#fcfaf8]');
  content = content.replace(/bg-\[#141414\]/g, 'bg-white');
  content = content.replace(/bg-black/g, 'bg-white'); // careful, might affect buttons, but usually used for sections here
  content = content.replace(/bg-gray-800/g, 'bg-black/5');

  // Text colors
  content = content.replace(/text-\[#fafafa\]/g, 'text-[#111111]');
  content = content.replace(/text-white/g, 'text-[#111111]');
  content = content.replace(/text-gray-400/g, 'text-[#111111]/60');
  content = content.replace(/text-gray-300/g, 'text-[#111111]/70');
  content = content.replace(/text-gray-500/g, 'text-[#111111]/50');
  content = content.replace(/text-gray-200/g, 'text-[#111111]/80');
  
  // Borders
  content = content.replace(/border-\[#262626\]/g, 'border-black/10');
  content = content.replace(/border-white\/10/g, 'border-black/10');
  content = content.replace(/border-white\/20/g, 'border-black/20');

  // Accents / Buttons
  content = content.replace(/bg-amber-500/g, 'bg-[#111111] text-white'); // Fix text on buttons
  content = content.replace(/hover:bg-amber-400/g, 'hover:bg-[#333333]');
  content = content.replace(/text-amber-500/g, 'text-[#111111]');
  content = content.replace(/text-black/g, 'text-white'); // Since original buttons were amber with black text
  
  // Typography updates (force serif on large headings)
  content = content.replace(/text-4xl/g, 'text-4xl font-serif tracking-tight');
  content = content.replace(/text-5xl/g, 'text-5xl font-serif tracking-tight');
  content = content.replace(/text-6xl/g, 'text-6xl font-serif tracking-tight');
  content = content.replace(/text-3xl/g, 'text-3xl font-serif tracking-tight');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
