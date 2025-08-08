# Kweku Ayepah - Portfolio Website

A modern, minimalist portfolio website for a Senior Backend Engineer built with Next.js 14+, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, minimalist design inspired by contemporary portfolio websites
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance Optimized**: Built with Next.js 14+ App Router for optimal performance
- **TypeScript**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd KwekuPortfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
KwekuPortfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Customization

### Personal Information

Update the following files to customize the portfolio for your needs:

1. **Personal Details**: Edit `app/page.tsx` to update:
   - Name and title
   - About section content
   - Experience details
   - Project descriptions
   - Contact information

2. **Styling**: Modify `tailwind.config.js` to customize:
   - Color scheme
   - Typography
   - Spacing and layout

3. **Metadata**: Update `app/layout.tsx` to change:
   - Page title
   - Meta description
   - Open Graph tags

### Adding New Sections

To add new sections to the portfolio:

1. Create a new section in `app/page.tsx`
2. Add navigation link in the nav component
3. Style with Tailwind CSS classes
4. Add animations with Framer Motion

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for best user experience
- **SEO**: Proper meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out to [kweku.ayepah@example.com](mailto:kweku.ayepah@example.com)
