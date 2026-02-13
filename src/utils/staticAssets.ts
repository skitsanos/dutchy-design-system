import { join, extname } from 'path';

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.wasm': 'application/wasm',
};

export interface StaticAssetsConfig {
  assetsPath: string;
  urlPrefix?: string;
  cacheControl?: string;
}

const staticAssets = ({
  assetsPath,
  urlPrefix = '/assets',
  cacheControl = 'public, max-age=31536000, immutable',
}: StaticAssetsConfig) => {
  return async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const relativePath = url.pathname.replace(urlPrefix, '');
    const filePath = join(process.cwd(), assetsPath, relativePath);

    const file = Bun.file(filePath);

    if (!(await file.exists())) {
      return new Response('Not Found', { status: 404 });
    }

    const ext = extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    return new Response(file.stream(), {
      headers: {
        'Content-Type': contentType,
        'Content-Length': String(file.size),
        'Cache-Control': cacheControl,
        'Accept-Ranges': 'bytes',
      },
    });
  };
};

export default staticAssets;
