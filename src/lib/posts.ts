import { getCollection, type CollectionEntry } from 'astro:content';
import { PAGE_SIZE } from '../config';

export type Post = CollectionEntry<'news'>;

export async function getAllPostsSorted(): Promise<Post[]> {
  const posts = await getCollection('news');
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPostsSorted();
  return posts.filter((p) => p.data.category === category);
}

export function paginate(items: Post[], page: number, pageSize: number = PAGE_SIZE) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const start = (page - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);
  return {
    pageItems,
    totalPages,
    hasNext: page < totalPages
  };
}

export function relatedPosts(all: Post[], current: Post, limit = 10): Post[] {
  return all
    .filter((p) => p.data.category === current.data.category && p.slug !== current.slug)
    .slice(0, limit);
}
