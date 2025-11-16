# TargetLink Website

Official website for TargetLink - Smart Affiliate Marketing Platform

## About

TargetLink is an advanced affiliate marketing platform that connects advertisers with publishers, providing intelligent targeting and comprehensive analytics.

**Live Site:** [https://targetlink.net](https://targetlink.net)

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, Lottie
- **Icons:** Lucide React
- **UI Components:** Radix UI

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` folder.

## Deployment

**Production Server:** `45.91.237.114`
**Domain:** `targetlink.net`

### Quick Deployment

```bash
# First time
npm install
./scripts/deploy.sh

# Updates from GitHub
./scripts/update.sh

# Check status
./scripts/status.sh
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Logo/          # Logo variations
│   └── ...
├── sections/          # Page sections
│   ├── Header/        # Navigation header
│   ├── HeroSection/   # Hero/landing section
│   ├── SolutionsSection/
│   ├── IndustriesSection/
│   ├── CaseStudiesSection/
│   ├── TestimonialsSection/
│   ├── ContactSection/
│   ├── CTASection/    # Call-to-action
│   └── Footer/
├── App.tsx           # Main app component
└── index.tsx         # Entry point
```

## Brand Identity

See [BRAND_IDENTITY.md](./BRAND_IDENTITY.md) for:
- Brand colors and gradients
- Logo variations and usage
- Typography guidelines
- Design system

## Related Projects

- [TargetLink Bot](https://github.com/yourusername/targetlink-bot) - Telegram bot for the platform

## License

Proprietary - All rights reserved
