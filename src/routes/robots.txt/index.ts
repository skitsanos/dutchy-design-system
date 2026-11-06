import { ROBOTS_TXT } from '@/utils/seo';

export default function robots(req: Request): Response {
  return new Response(req.method === 'HEAD' ? null : ROBOTS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
