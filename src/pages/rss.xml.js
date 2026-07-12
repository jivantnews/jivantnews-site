import rss from '@astrojs/rss';
import { getAllPostsSorted } from '../lib/posts';
import { SITE, labelFor } from '../config';

export async function GET(context) {
  const posts = await getAllPostsSorted();
  return rss({
    title: SITE.name,
    description: 'जीवंत न्यूज़ — ताज़ा और भरोसेमंद हिंदी समाचार',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.data.category}/${post.slug}/`,
      categories: [labelFor(post.data.category)]
    })),
    customData: `<language>hi</language>`
  });
}
