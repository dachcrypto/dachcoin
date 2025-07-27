# DACH Cryptocurrency Website

## Overview

This repository contains a static website for Dachshund Coin (DACH), a community-driven cryptocurrency project. The website is built as a multi-page static site showcasing the token's features, tokenomics, roadmap, and governance structure. It's designed to be a professional landing page for the cryptocurrency project with a focus on community engagement and transparency.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Static HTML Website**: Multi-page HTML structure with consistent navigation
- **CSS Framework**: Tailwind CSS via CDN for rapid styling and responsive design
- **Custom Styling**: Additional CSS variables for brand-specific color scheme
- **JavaScript**: Vanilla JavaScript for interactive elements and mobile menu functionality
- **Font System**: Google Fonts (Inter) for modern typography

### Design System
- **Color Scheme**: Dark theme with crypto-inspired palette
  - Primary: #1A1B1F (near-black background)
  - Accent: #FFD166 (gold/yellow for highlights)
  - Secondary: #6C63FF (royal purple)
  - Highlight: #F67280 (playful accent color)
- **Typography**: Inter font family for clean, professional appearance
- **Responsive Design**: Mobile-first approach with breakpoint-based navigation

## Key Components

### Page Structure
1. **index.html**: Main landing page with hero section and overview
2. **tokenomics.html**: Token economics and distribution details
3. **roadmap.html**: Project timeline and future plans
4. **whitepaper.html**: Technical documentation (placeholder for PDF)
5. **dao.html**: Decentralized governance information
6. **faq.html**: Frequently asked questions with accordion functionality
7. **contact.html**: Contact form and team information

### Navigation System
- Consistent header navigation across all pages
- Active state indicators for current page
- Mobile-responsive hamburger menu
- Sticky navigation with backdrop blur effect

### Interactive Elements
- Mobile menu toggle functionality
- FAQ accordion system
- Smooth scrolling for anchor links
- Form validation and enhancements
- Scroll-based animations

### Asset Organization
- **CSS**: Custom styles in `assets/css/style.css`
- **JavaScript**: Main functionality in `assets/js/main.js`
- **Images**: Logo and graphics in `assets/images/` (referenced but not present)

## Data Flow

### Static Content Delivery
- Pure HTML/CSS/JavaScript static site
- External CDN dependencies (Tailwind CSS, Google Fonts)
- No server-side processing required
- Can be hosted on any static hosting service

### Form Handling
- Contact forms configured for Formspree integration
- No backend database required
- Form submissions handled by third-party service

### Content Management
- Static content embedded in HTML
- Placeholder data structure for future dynamic content
- Manual content updates through HTML editing

## External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com` for styling framework
- **Google Fonts**: Inter font family for typography
- **Formspree**: Planned integration for contact form handling

### Third-Party Services
- **Formspree**: Contact form processing (to be implemented)
- **GitHub**: Whitepaper hosting (PDF document)

### Browser Compatibility
- Modern browsers with JavaScript enabled
- CSS Grid and Flexbox support required
- Mobile responsive design for all device sizes

## Deployment Strategy

### Static Hosting
- **Deployment Type**: Static site hosting
- **Recommended Platforms**: Netlify, Vercel, GitHub Pages, or any static host
- **Build Process**: No build step required - direct file serving
- **Assets**: All assets served from relative paths

### File Structure
```
/
├── index.html (landing page)
├── tokenomics.html
├── roadmap.html
├── whitepaper.html
├── dao.html
├── faq.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── logo.svg (referenced)
```

### Configuration Requirements
- No server configuration needed
- HTTPS recommended for professional appearance
- Custom domain setup optional
- No database or backend services required

### Future Enhancements
- Potential migration to dynamic content management
- Integration of real-time cryptocurrency data
- Enhanced interactive features
- Community voting system integration