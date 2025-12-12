# API Routes

Build JSON API endpoints with Bun.

## Basic API Structure

API routes return JSON responses instead of HTML.

### GET Endpoint

```typescript
// src/routes/api/health/index.ts
export default async (req: Request) => {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
};
```

### POST Endpoint

```typescript
// src/routes/api/users/post.ts
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

export default async (req: Request) => {
  try {
    const body = await req.json();
    const data = createUserSchema.parse(body);

    // Create user in database
    const user = {
      id: Date.now(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        {
          error: {
            message: 'Validation failed',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    return Response.json(
      { error: { message: 'Internal server error' } },
      { status: 500 }
    );
  }
};
```

## Response Helpers

Create standardized response utilities:

```typescript
// src/utils/response.ts
export const response = {
  // Success response
  json: <T>(data: T, status = 200) =>
    Response.json({ result: data }, { status }),

  // Error response
  error: (message: string, status = 400, details?: unknown) =>
    Response.json({ error: { message, details } }, { status }),

  // Common error responses
  notFound: (message = 'Not found') =>
    Response.json({ error: { message } }, { status: 404 }),

  unauthorized: (message = 'Unauthorized') =>
    Response.json({ error: { message } }, { status: 401 }),

  forbidden: (message = 'Forbidden') =>
    Response.json({ error: { message } }, { status: 403 }),

  badRequest: (message = 'Bad request', details?: unknown) =>
    Response.json({ error: { message, details } }, { status: 400 }),

  serverError: (message = 'Internal server error') =>
    Response.json({ error: { message } }, { status: 500 }),

  // No content
  noContent: () => new Response(null, { status: 204 }),

  // Created
  created: <T>(data: T) =>
    Response.json({ result: data }, { status: 201 }),
};
```

### Usage

```typescript
// src/routes/api/users/index.ts
import { response } from '@/utils/response';

export default async (req: Request) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  return response.json(users);
};
```

## CRUD Example

Complete REST API for a resource:

### List (GET /api/products)

```typescript
// src/routes/api/products/index.ts
import { response } from '@/utils/response';

// In-memory store (use database in production)
export const products = [
  { id: 1, name: 'Product A', price: 99 },
  { id: 2, name: 'Product B', price: 149 },
];

export default async (req: Request) => {
  const url = new URL(req.url);

  // Pagination
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = parseInt(url.searchParams.get('limit') || '10');
  const offset = (page - 1) * limit;

  const paginatedProducts = products.slice(offset, offset + limit);

  return response.json({
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total: products.length,
      totalPages: Math.ceil(products.length / limit),
    },
  });
};
```

### Create (POST /api/products)

```typescript
// src/routes/api/products/post.ts
import { z } from 'zod';
import { response } from '@/utils/response';
import { products } from './index';

const createProductSchema = z.object({
  name: z.string().min(2).max(100),
  price: z.number().positive(),
  description: z.string().optional(),
});

export default async (req: Request) => {
  try {
    const body = await req.json();
    const data = createProductSchema.parse(body);

    const newProduct = {
      id: Date.now(),
      ...data,
      createdAt: new Date().toISOString(),
    };

    products.push(newProduct);

    return response.created(newProduct);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.badRequest('Validation failed', error.errors);
    }
    return response.serverError();
  }
};
```

### Read (GET /api/products/:id)

```typescript
// src/routes/api/products/$id/index.ts
import { response } from '@/utils/response';
import { products } from '../index';

export default async (req: Request) => {
  const url = new URL(req.url);
  const id = parseInt(url.searchParams.get('_param_id') || '0');

  const product = products.find((p) => p.id === id);

  if (!product) {
    return response.notFound('Product not found');
  }

  return response.json(product);
};
```

### Update (PUT /api/products/:id)

```typescript
// src/routes/api/products/$id/put.ts
import { z } from 'zod';
import { response } from '@/utils/response';
import { products } from '../index';

const updateProductSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  price: z.number().positive().optional(),
  description: z.string().optional(),
});

export default async (req: Request) => {
  try {
    const url = new URL(req.url);
    const id = parseInt(url.searchParams.get('_param_id') || '0');

    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      return response.notFound('Product not found');
    }

    const body = await req.json();
    const data = updateProductSchema.parse(body);

    products[productIndex] = {
      ...products[productIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    return response.json(products[productIndex]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.badRequest('Validation failed', error.errors);
    }
    return response.serverError();
  }
};
```

### Delete (DELETE /api/products/:id)

```typescript
// src/routes/api/products/$id/delete.ts
import { response } from '@/utils/response';
import { products } from '../index';

export default async (req: Request) => {
  const url = new URL(req.url);
  const id = parseInt(url.searchParams.get('_param_id') || '0');

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return response.notFound('Product not found');
  }

  products.splice(productIndex, 1);

  return response.noContent();
};
```

## Authentication Middleware

Protect API routes:

```typescript
// src/middleware/auth.ts
import { response } from '@/utils/response';

type Handler = (req: Request) => Promise<Response> | Response;

export const requireAuth = (handler: Handler): Handler => {
  return async (req: Request) => {
    const authHeader = req.headers.get('Authorization');

    if (!authHeader?.startsWith('Bearer ')) {
      return response.unauthorized('Missing or invalid authorization header');
    }

    const token = authHeader.slice(7);

    // Validate token (example - replace with actual validation)
    try {
      // const decoded = verifyToken(token);
      // Add user to request context if needed
      const isValid = token.length > 0; // Replace with real validation

      if (!isValid) {
        return response.unauthorized('Invalid token');
      }

      return handler(req);
    } catch {
      return response.unauthorized('Invalid token');
    }
  };
};

// API Key authentication
export const requireApiKey = (handler: Handler): Handler => {
  return async (req: Request) => {
    const apiKey = req.headers.get('X-API-Key');

    if (!apiKey) {
      return response.unauthorized('API key required');
    }

    // Validate API key
    const validApiKeys = (process.env.API_KEYS || '').split(',');

    if (!validApiKeys.includes(apiKey)) {
      return response.unauthorized('Invalid API key');
    }

    return handler(req);
  };
};
```

### Usage

```typescript
// src/routes/api/protected/index.ts
import { requireAuth } from '@/middleware/auth';
import { response } from '@/utils/response';

const handler = async (req: Request) => {
  return response.json({ message: 'Protected data' });
};

export default requireAuth(handler);
```

## Error Handling

Consistent error handling pattern:

```typescript
// src/routes/api/example/index.ts
import { z } from 'zod';
import { response } from '@/utils/response';

export default async (req: Request) => {
  try {
    // Your logic here
    const data = await processRequest(req);
    return response.json(data);

  } catch (error) {
    // Zod validation errors
    if (error instanceof z.ZodError) {
      return response.badRequest('Validation failed', error.errors);
    }

    // Custom application errors
    if (error instanceof AppError) {
      return response.error(error.message, error.statusCode);
    }

    // Log unexpected errors
    console.error('API Error:', error);

    // Don't expose internal errors to client
    return response.serverError();
  }
};

// Custom error class
class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = 'AppError';
  }
}
```

## Rate Limiting

Simple rate limiter:

```typescript
// src/middleware/rateLimit.ts
import { response } from '@/utils/response';

type Handler = (req: Request) => Promise<Response> | Response;

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export const rateLimit = (config: RateLimitConfig) => {
  return (handler: Handler): Handler => {
    return async (req: Request) => {
      const ip = req.headers.get('X-Forwarded-For') || 'unknown';
      const now = Date.now();

      const record = requestCounts.get(ip);

      if (!record || now > record.resetTime) {
        requestCounts.set(ip, {
          count: 1,
          resetTime: now + config.windowMs,
        });
      } else if (record.count >= config.maxRequests) {
        return response.error('Too many requests', 429);
      } else {
        record.count++;
      }

      return handler(req);
    };
  };
};
```

### Usage

```typescript
// src/routes/api/public/index.ts
import { rateLimit } from '@/middleware/rateLimit';

const handler = async (req: Request) => {
  return Response.json({ message: 'Hello' });
};

// 100 requests per minute
export default rateLimit({
  windowMs: 60000,
  maxRequests: 100,
})(handler);
```

## CORS Configuration

Handle cross-origin requests:

```typescript
// src/middleware/cors.ts
export interface CorsOptions {
  origin?: string | string[];
  methods?: string[];
  headers?: string[];
  credentials?: boolean;
  maxAge?: number;
}

const defaultOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  headers: ['Content-Type', 'Authorization', 'X-API-Key'],
  credentials: false,
  maxAge: 86400,
};

export const corsHeaders = (options: CorsOptions = {}): Record<string, string> => {
  const opts = { ...defaultOptions, ...options };
  const origin = Array.isArray(opts.origin) ? opts.origin.join(', ') : opts.origin;

  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': opts.methods!.join(', '),
    'Access-Control-Allow-Headers': opts.headers!.join(', '),
    'Access-Control-Max-Age': String(opts.maxAge),
    ...(opts.credentials && { 'Access-Control-Allow-Credentials': 'true' }),
  };
};

export const corsResponse = (options?: CorsOptions) =>
  new Response(null, { status: 204, headers: corsHeaders(options) });

// Middleware to add CORS headers to response
export const withCors = (response: Response, options?: CorsOptions): Response => {
  const headers = new Headers(response.headers);

  for (const [key, value] of Object.entries(corsHeaders(options))) {
    headers.set(key, value);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
};
```

### Server Integration

```typescript
// src/index.ts
import { serve } from 'bun';
import { corsResponse, withCors } from '@/middleware/cors';

serve({
  port: 3000,
  async fetch(req) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      return corsResponse();
    }

    // Your route handling...
    const response = await handleRequest(req);

    // Add CORS headers to API responses
    if (new URL(req.url).pathname.startsWith('/api/')) {
      return withCors(response);
    }

    return response;
  },
});
```

## File Uploads

Handle multipart form data:

```typescript
// src/routes/api/upload/post.ts
import { response } from '@/utils/response';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export default async (req: Request) => {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return response.badRequest('No file provided');
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return response.badRequest('Invalid file type');
    }

    // Validate file size
    if (file.size > MAX_SIZE) {
      return response.badRequest('File too large (max 5MB)');
    }

    // Save file
    const filename = `${Date.now()}-${file.name}`;
    const path = `public/uploads/${filename}`;

    await Bun.write(path, file);

    return response.created({
      filename,
      url: `/uploads/${filename}`,
      size: file.size,
      type: file.type,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return response.serverError();
  }
};
```

## Webhooks

Handle incoming webhooks:

```typescript
// src/routes/api/webhooks/stripe/post.ts
import { response } from '@/utils/response';

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || '';

export default async (req: Request) => {
  try {
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return response.badRequest('Missing signature');
    }

    const body = await req.text();

    // Verify webhook signature (example)
    // const event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET);

    // For demo, parse the body
    const event = JSON.parse(body);

    // Handle event types
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('Payment succeeded:', event.data.object);
        // Handle successful payment
        break;

      case 'customer.subscription.created':
        console.log('Subscription created:', event.data.object);
        // Handle new subscription
        break;

      default:
        console.log('Unhandled event type:', event.type);
    }

    return response.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return response.badRequest('Webhook error');
  }
};
```

## Response Format Standards

Consistent API responses:

```typescript
// Success response
{
  "result": {
    // Data here
  }
}

// List response
{
  "result": {
    "items": [...],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 100,
      "totalPages": 10
    }
  }
}

// Error response
{
  "error": {
    "message": "Description of the error",
    "details": [...] // Optional validation errors
  }
}
```
