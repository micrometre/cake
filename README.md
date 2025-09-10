# Chocolate Banana Paradise 🍰

A modern, responsive cake shop website built with **Astro.js**, **React**, **Tailwind CSS**, and **Framer Motion**.

## Features

- ✨ Modern and elegant design with smooth animations
- � Fully responsive layout for all devices
- 🎨 Beautiful Framer Motion animations inspired by henok.cloud
- 🚀 Fast loading times with Astro.js
- 💅 Styled with Tailwind CSS
- ⚡ Vite for lightning-fast development

## Tech Stack

- **Astro.js** - Static site generator
- **React** - UI library for interactive components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cake
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## Project Structure

```
/
├── public/
│   └── images/          # Static images
├── src/
│   ├── components/      # React components with Framer Motion
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── CakeGallery.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## Animations

The website features various Framer Motion animations including:

- Parallax scrolling effects
- Stagger animations for gallery items
- Smooth page transitions
- Interactive hover effects
- Floating elements
- Scroll-triggered animations

## Customization

### Colors
The color scheme is defined in `tailwind.config.mjs`. The primary colors are:
- Pink: `#ec4899` (Primary accent)
- Gray: Various shades for text and backgrounds

### Images
All images are stored in `public/images/` and can be easily replaced. The hero section uses `choco_banana.png` as requested.

### Content
Edit the components in `src/components/` to modify the content, or update the data arrays within components.

## Performance

- Astro.js provides excellent performance with minimal JavaScript bundle
- Images are optimized and lazy-loaded
- CSS is purged to reduce file size
- React components are hydrated only when needed

## License

This project is licensed under the MIT License.

## Acknowledgments

- Animation inspiration from [henok.cloud](https://henok.cloud/)
- Built with love using modern web technologies
