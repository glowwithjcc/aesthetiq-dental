export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://aesthetiq.in/sitemap.xml
`
  );
}
