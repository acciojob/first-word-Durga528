/**
 * Extracts and returns the first word of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} The first word or entire string if no spaces exist.
 */
function firstWord(str) {
  if (!str) return '';

  const trimmed = str.trimStart();
  const spaceIndex = trimmed.indexOf(' ');

  if (spaceIndex === -1) {
    return trimmed;
  }

  return trimmed.slice(0, spaceIndex);
}

// UI wiring
const strInput = document.getElementById('strInput');
const extractBtn = document.getElementById('extractBtn');
const resultBox = document.getElementById('result');

function handleExtract() {
  const value = strInput.value;
  resultBox.textContent = firstWord(value);
}

extractBtn.addEventListener('click', handleExtract);

// Run initial extraction on load
handleExtract();