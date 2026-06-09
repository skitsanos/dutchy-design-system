import { describe, expect, test } from 'bun:test';
import type { RouteHandler, Routes } from '@/utils/loadRoutes';
import { matchRoute, resolveRoute } from '@/utils/loadRoutes';

const ok: RouteHandler = () => new Response('ok');

describe('route matching', () => {
  const routes: Routes = {
    '/': { GET: ok },
    '/users/:id': { GET: ok },
    '/users/:id/posts/:postId': { GET: ok },
    '/contact': { POST: ok },
  };

  test('matches static routes with trailing slash normalization', () => {
    const match = matchRoute(routes, '/contact/');

    expect(match?.routePath).toBe('/contact');
    expect(match?.params).toEqual({});
  });

  test('extracts decoded dynamic params', () => {
    const match = matchRoute(routes, '/users/alice%40example.com/posts/launch');

    expect(match?.routePath).toBe('/users/:id/posts/:postId');
    expect(match?.params).toEqual({
      id: 'alice@example.com',
      postId: 'launch',
    });
  });

  test('resolves handlers by HTTP method and exposes params on the request URL', () => {
    const request = new Request('http://localhost/users/42');
    const resolved = resolveRoute(routes, request);

    expect(resolved?.handler).toBe(ok);
    expect(resolved?.params).toEqual({ id: '42' });
    expect(new URL(resolved?.request.url ?? '').searchParams.get('_param_id')).toBe('42');
  });

  test('does not resolve unsupported methods for a matched path', () => {
    const request = new Request('http://localhost/contact', { method: 'GET' });

    expect(resolveRoute(routes, request)).toBeNull();
  });
});
