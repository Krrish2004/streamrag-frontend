# StreamRAG Frontend

Professional Vue 3 + TypeScript frontend for StreamRAG, deployed on Vercel.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type safety
- **Vite** - Lightning-fast build tool
- **Vue Router** - Official routing
- **Pinia** - State management
- **ESLint + Prettier** - Code quality

## Development

```bash
# Install dependencies
npm install

# Run dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite config
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

## Project Structure

```
streamrag-frontend/
├── public/             # Static assets
├── src/
│   ├── assets/        # Styles, images
│   ├── components/    # Reusable components
│   ├── composables/   # Vue composables
│   ├── router/        # Route definitions
│   ├── stores/        # Pinia stores
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── views/         # Page components
│   ├── App.vue        # Root component
│   └── main.ts        # Entry point
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── vercel.json        # Vercel configuration
└── package.json       # Dependencies
```

## Features

- ✅ **Fast Hot Module Replacement** with Vite
- ✅ **Type-safe** with TypeScript
- ✅ **Code Quality** with ESLint + Prettier
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags and routing
- ✅ **Production Ready** - Optimized build with code splitting

## Environment Variables

Create `.env.local` for local development:

```bash
VITE_API_URL=http://localhost:8000
```

For Vercel, add environment variables in the dashboard:
Settings → Environment Variables

## License

All Rights Reserved

## Author

[Krrish Choudhary](https://github.com/Krrish2004)
