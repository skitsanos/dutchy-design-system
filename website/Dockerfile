FROM caddy:2-alpine

# Copy website files
COPY *.html /srv/
COPY assets/ /srv/assets/

# Copy Caddy configuration
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
