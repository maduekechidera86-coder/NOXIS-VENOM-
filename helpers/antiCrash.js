module.exports = {
  sanitizeMessage(text) {
    if (!text || typeof text !== 'string') return '';

    // 1. Defend against extreme text length overloads
    if (text.length > 2000) {
      return text.substring(0, 500); // Truncate highly suspicious massive text blocks
    }

    // 2. Strip out invisible direction override characters (LTR/RTL text bombs)
    // Strips U+200E, U+200F, U+202A, U+202B, U+202C, U+202D, U+202E
    const cleanText = text.replace(/[\u200B-\u200D\u200E-\u200F\u202A-\u202E]/g, '');

    return cleanText.trim();
  }
};
