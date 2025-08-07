import he from 'he';

export function stripHtmlAndLimit(raw, limit = 40) {
  // Decode HTML entities (e.g. &lt; → <)
  const decoded = he.decode(raw);

  // Remove all HTML tags and extra whitespace
  const plainText = decoded.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

  const words = plainText.split(' ');
  const isTruncated = words.length > limit;

  const short = isTruncated
    ? words.slice(0, limit).join(' ') + '...'
    : plainText;

  return { short, isTruncated };
}
