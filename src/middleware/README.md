# Middleware

Server middleware helpers for Bun-based SSR apps.

## corsResponse.ts
- Returns a 204 preflight response with permissive CORS headers
- Allows methods: `POST, OPTIONS`
- Allows headers: `Content-Type, Authorization`
- Max age: 24h

### Usage
```ts
import corsResponse from './middleware/corsResponse';

serve({
  async fetch(req) {
    if (req.method === 'OPTIONS') return corsResponse(); // handle preflight early
    // ...rest of request handling
  },
});
```

### Notes
- Adjust `Access-Control-Allow-Origin`, methods, and headers to match your API policy
- Pair with route handling (e.g., `loadRoutes`) so actual requests flow to your handlers after preflight
