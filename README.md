# Callify - AI-Powered Call Script Generator

Callify is an AI-powered platform that analyzes business websites and generates personalized call scripts. This repository contains the front-end code built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Website Analysis**: Enter a business website URL to analyze its content
- **AI-Generated Call Scripts**: Automatically generate personalized call scripts based on website content
- **Multi-step Form**: User-friendly interface for collecting necessary information
- **URL Validation**: Robust validation for website URLs with support for domain-only input

## Project Structure

This repository contains the front-end code for Callify. The back-end repository handles server-side logic, API endpoints, and integration with OpenAI services. The front-end communicates with the back-end via API calls.

- `src/app/page.tsx`: Main application component with multi-step form
- `src/lib/url-validator.ts`: URL validation utilities
- `src/components/`: UI components

## SEO Optimization Guide

To maximize search engine visibility for Callify, update the following files:

### 1. Metadata Configuration (`src/app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: "Callify | AI Sales Assistant",
  description: "Generate personalized sales call scripts with AI",
  authors: [{ name: "Callify Team" }],
  keywords: ["sales", "ai", "calls", "automation", "business"],
  // Add these additional SEO properties:
  metadataBase: new URL('https://callify.yourdomain.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: 'Callify | AI Sales Assistant',
    description: 'Generate personalized sales call scripts with AI',
    url: 'https://callify.yourdomain.com',
    siteName: 'Callify',
    images: [
      {
        url: 'https://callify.yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Callify - AI Sales Assistant',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Callify | AI Sales Assistant',
    description: 'Generate personalized sales call scripts with AI',
    images: ['https://callify.yourdomain.com/twitter-image.jpg'],
    creator: '@callify',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 2. Favicon and App Icons

Create and add these files to enhance brand visibility across devices:

- `src/app/favicon.ico`: Basic favicon (16x16 or 32x32 pixels)
- `public/icon.png`: Larger app icon (192x192 pixels)
- `public/apple-icon.png`: Apple device icon (180x180 pixels)
- `public/og-image.jpg`: Open Graph image (1200x630 pixels)
- `public/twitter-image.jpg`: Twitter card image (1200x600 pixels)

### 3. Web App Manifest (`public/manifest.json`)

Create this file for PWA support and better mobile experience:

```json
{
  "name": "Callify - AI Sales Assistant",
  "short_name": "Callify",
  "description": "Generate personalized sales call scripts with AI",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 4. Robots.txt (`public/robots.txt`)

Create this file to guide search engine crawlers:

```
User-agent: *
Allow: /

Sitemap: https://callify.yourdomain.com/sitemap.xml
```

### 5. Sitemap (`public/sitemap.xml`)

Create a sitemap to help search engines discover your pages:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://callify.yourdomain.com/</loc>
    <lastmod>2025-08-07</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://callify.yourdomain.com/contact</loc>
    <lastmod>2025-08-07</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 6. Structured Data

Add JSON-LD structured data to your pages for rich search results. For example, in `src/app/page.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Callify",
      "applicationCategory": "BusinessApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "AI-powered sales call script generator"
    })
  }}
/>
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Access to the Callify backend API

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/callify.git
cd callify
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Fly.io

Callify is deployed on Fly.io. To deploy your own instance:

1. Install the Fly CLI:

```bash
brew install flyctl
# or
curl -L https://fly.io/install.sh | sh
```

2. Login to Fly.io:

```bash
fly auth login
```

3. Initialize your app (first deployment only):

```bash
fly launch
```

4. Deploy updates:

```bash
fly deploy
```

Your app will be available at `https://your-app-name.fly.dev`

## Backend Integration

The front-end communicates with a Firebase Cloud Functions backend. The backend:

1. Fetches and analyzes website content
2. Uses OpenAI to generate business information and call scripts
3. Returns structured data for the front-end to display

The backend API endpoint is configured in the `handleNext` function in `src/app/page.tsx`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
