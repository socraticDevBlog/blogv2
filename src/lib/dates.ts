// French date helpers for listing-page titles.
// Dates arrive as ISO strings ("2026-02-28") from the GraphQL layer.

export function formatDateFr(iso: string, withWeekday = false): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(
    'fr-CA',
    withWeekday
      ? { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
      : { day: 'numeric', month: 'long', year: 'numeric' },
  );
}

// Title with the datetime range of a page of posts (sorted DESC):
// first = latest, last = oldest. e.g. "du 28 février 2026 au 15 janvier 2024".
export function dateRangeTitle(posts: { frontmatter: { date: string } }[]): string {
  if (posts.length === 0) return '';
  const first = posts[0].frontmatter.date;
  const last = posts[posts.length - 1].frontmatter.date;
  return first === last
    ? `le ${formatDateFr(first)}`
    : `du ${formatDateFr(first)} au ${formatDateFr(last)}`;
}
