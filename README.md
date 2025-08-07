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
