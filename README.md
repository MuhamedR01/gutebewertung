# Gut Bewertung

Next.js site built as a static export (`output: "export"`) and served by nginx.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Coolify)

The `Dockerfile` builds the static site and serves it with nginx on port 80. No environment variables are needed.

1. In Coolify: **New Resource → Public/Private Repository** → select this repo, branch `master`.
2. **Build Pack:** `Dockerfile`
3. **Ports Exposes:** `80`
4. **Domains:** `https://your-domain.com` (Coolify issues the SSL certificate automatically once DNS points to the VPS).
5. Deploy.

Test the image locally:

```bash
docker build -t gutebewertung .
docker run --rm -p 8080:80 gutebewertung
```
