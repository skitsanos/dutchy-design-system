FROM caddy:2-alpine

# Copy website files
COPY website/*.html /srv/

# Copy Caddy configuration
COPY website/Caddyfile /etc/caddy/Caddyfile

# Railway uses PORT environment variable
ENV PORT=80

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
