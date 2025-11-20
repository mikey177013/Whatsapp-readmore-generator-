const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Activate selected tab
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide content
    tabContents.forEach(tc => {
      if (tc.id === btn.dataset.target) {
        tc.classList.remove('hidden');
      } else {
        tc.classList.add('hidden');
      }
    });
  });
});

// Elements
const generateBtn = document.getElementById('generate');
const generateMultiBtn = document.getElementById('generateMulti');
const copyBtn = document.getElementById('copy');
const visibleText = document.getElementById('visible');
const hiddenText = document.getElementById('hidden');
const multiText = document.getElementById('multi');
const output = document.getElementById('output');

// Invisible char for WhatsApp Read More
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

// Single Read More
generateBtn.addEventListener('click', () => {
  const visible = visibleText.value.trim();
  const hidden = hiddenText.value.trim();
  if (!visible) return;
  const finalText = visible + ' ' + readMore + ' ' + hidden;
  output.value = finalText;
  flashOutput();
});

// Multiple Read More
generateMultiBtn.addEventListener('click', () => {
  const input = multiText.value.trim();
  if (!input) return;
  const sections = input.split('|').map(s => s.trim()).filter(s => s.length > 0);
  const finalText = sections.join(' ' + readMore + ' ');
  output.value = finalText;
  flashOutput();
});

// Copy button
copyBtn.addEventListener('click', () => {
  output.select();
  navigator.clipboard.writeText(output.value);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 1000);
});

// Flash output
function flashOutput() {
  output.style.background = '#90e0ef';
  setTimeout(() => output.style.background = '#e0f7fa', 300);
}