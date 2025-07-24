# Lumbung Group Corporate Website

A modern, responsive corporate website built with Next.js 14, TypeScript, and Tailwind CSS, showcasing Lumbung Group's five subsidiary companies and their comprehensive services.

## Features

- **Next.js 14** with App Router and TypeScript
- **Static Site Generation (SSG)** for optimal performance
- **Tailwind CSS** for modern, responsive design
- **Framer Motion** for smooth animations and transitions
- **Shadcn UI & Magic UI** for modern component library
- **Interactive Gallery** with category filtering and modal preview
- **Horizontal drag scroll** functionality
- **Company logo integration** in navigation
- **Mobile-first responsive design**
- **SEO optimized** with proper meta tags
- **WCAG 2.1 AA compliant** accessibility

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main single-page application
├── components/
│   ├── Header.tsx           # Navigation header with logo
│   ├── Hero.tsx             # Hero section with animations
│   ├── About.tsx            # Company overview section
│   ├── Subsidiaries.tsx     # Interactive tabs for subsidiaries
│   ├── Products.tsx         # Products showcase grid
│   ├── Gallery.tsx          # Interactive gallery with filtering
│   ├── CtaVideo.tsx         # Video call-to-action with modal
│   ├── Partners.tsx         # Partner logos with marquee
│   ├── Footer.tsx           # Footer with contact info
│   └── magicui/
│       ├── marquee.tsx      # Marquee animation component
│       └── text-animate.tsx # Text animation component
├── public/
│   ├── images/
│   │   ├── logos/           # Company and subsidiary logos
│   │   ├── gallery/         # Gallery images by category
│   │   ├── partners/        # Partner company logos
│   │   └── products/        # Product showcase images
│   └── fonts/               # Custom font files
├── lib/
│   └── utils.ts             # Utility functions
└── Configuration files
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will generate a static export in the `out/` directory.

## Design System

### Colors
- **Background**: White (#FFFFFF)
- **Foreground**: Charcoal (#212529)
- **Primary**: Royal Blue (#0A2351)
- **Muted**: Light Gray (#F8F9FA)

### Typography
- **Font**: Inter (Google Fonts)
- **H1**: text-5xl, font-bold
- **H2**: text-4xl, font-bold
- **H3**: text-2xl, font-semibold
- **Body**: text-base, font-normal, leading-relaxed

## Components Overview

### Header
- Fixed navigation with backdrop blur effect
- Company logo integration (replacing text)
- Mobile hamburger menu with smooth animations
- Smooth scroll navigation to sections
- Contact button with hover effects

### Hero
- Full-height section with background image
- Animated text with Magic UI components
- Scroll indicator and call-to-action buttons
- Framer Motion animations

### About
- Company overview with enhanced typography
- Mission and vision statements
- Professional layout with animations

### Subsidiaries
- Interactive tab interface with English content
- 5 subsidiary companies with updated descriptions:
  - LJI (Logistics & Transportation)
  - LET (Energy Trading)
  - LTI (IT Solutions & Solar Energy)
  - LSA (Agricultural Energy Solutions)
  - LTH (Travel & Umrah Services)
- Smooth tab transitions and hover effects

### Products
- Responsive grid layout (1/2/3 columns)
- Enhanced hover effects and animations
- Category-based product cards

### Gallery
- **NEW**: Interactive gallery with category filtering
- Filter options: All, LJI, LET, LTI, LSA, LTH, Event
- Horizontal drag scroll functionality
- Clickable image preview with modal
- Smooth animations and transitions
- Responsive grid layout

### CTA Video
- Modal-based video player
- Statistics showcase
- Compelling call-to-action

### Partners
- Responsive logo grid with marquee animation
- Grayscale to color hover effects
- Partnership call-to-action

### Footer
- Multi-column layout
- Contact information
- Social media links
- Quick navigation links

## Customization

### Adding Gallery Images
1. Place images in appropriate `public/images/gallery/` subdirectories:
   - `gallery/LJI/` - Logistics & Transportation
   - `gallery/LET/` - Energy Trading
   - `gallery/LTI/` - IT Solutions & Solar Energy
   - `gallery/LSA/` - Agricultural Energy Solutions
   - `gallery/LTH/` - Travel & Umrah Services
   - `gallery/Event/` - Company events
2. Update `galleryData` array in `components/Gallery.tsx`
3. Ensure proper alt text for accessibility

### Modifying Content
- Edit component files in `components/`
- Update subsidiary information in `components/Subsidiaries.tsx`
- Update metadata in `app/layout.tsx`
- Modify color scheme in `tailwind.config.ts`
- Update company logo in `public/images/logos/`

### Adding New Sections
1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Follow existing Framer Motion animation patterns
4. Use Tailwind CSS for consistent styling

## Performance Optimizations

- **Next.js Image component** for automatic optimization and lazy loading
- **Static Site Generation (SSG)** for fast loading times
- **Framer Motion** for hardware-accelerated animations
- **Tailwind CSS** for minimal bundle size and utility-first approach
- **Font optimization** with Inter variable font
- **Component lazy loading** for improved initial page load
- **Optimized gallery** with efficient image rendering
- **Drag scroll optimization** for smooth user interactions

## Accessibility Features

- Semantic HTML structure
- Proper ARIA attributes
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

This project is proprietary to Lumbung Group.

## Support

For technical support or questions, please contact the development team.