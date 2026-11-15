// Verbatim port of the old site's src/util/util-functions.js slugify.
// It strips diacritics/accents (NFD + combining-mark removal) — useful for a
// French blog — then produces a URL-safe slug from the post title.
export function slugify(text: string): string {
  const lowercasedstring = text.toString().toLowerCase();

  // removes diacritics and accents from string
  const accentlessText = lowercasedstring
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');

  return accentlessText
    .replace(/:/g, '') // remove colon
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
