import { getAllPostsSorted } from '../lib/posts';
import { categories, SITE } from '../config';

export async function GET() {
  const posts = await getAllPostsSorted();

  const staticUrls = [
    '/',
    '/about/',
    '/contact/',
    '/privacy-policy/',
    '/search/',
    ...categories.map((c) => `/${c.slug}/`)
  ];

  const postUrls = posts.map((p) => `/${p.data.category}/${p.slug}/`);

  const allUrls = [...staticUrls, ...postUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((u) => `  <url><loc>${SITE.url}${u}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
