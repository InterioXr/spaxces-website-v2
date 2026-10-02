# Project rules
- Contact form submissions are saved to the backend first, then emailed via the app email system; why: messages are never lost if email delivery fails.
- SEO head tags and JSON-LD live in static index.html; why: crawlers read only the static head of this SPA.
- AI model calls run only inside backend functions via Lovable AI Gateway; why: the gateway key must never reach the browser.
