# Dachshund Coin (DACH) - Official Website

![DACH Logo](assets/images/dachshund-coin-icon.png)

## About

Dachshund Coin (DACH) is a community-driven cryptocurrency project that transforms meme culture into meaningful DeFi innovation. Building a sustainable ecosystem with deflationary tokenomics, community governance, and transparent development.

## Website Features

- **Multi-page Static Site**: Complete cryptocurrency project website with 7 pages
- **Professional Design**: Dark theme with crypto-inspired branding
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Form**: Integrated contact system with Formspree
- **SEO Optimized**: Meta tags, structured data, and social media integration
- **GitHub Pages Ready**: Optimized for static hosting and custom domains

## Local Development

1. Clone this repository
2. Open `index.html` in your browser or serve with any static web server
3. For development server: `python -m http.server 5000`

## GitHub Pages Deployment

This site is configured for GitHub Pages deployment with custom domain support.

### Automatic Deployment
1. Push changes to the main branch
2. GitHub Pages will automatically deploy to `https://dachcoin.io`

### Custom Domain Setup (dachcoin.io)

The `CNAME` file is already configured for the custom domain. To complete the setup:

1. **DNS Configuration on Porkbun**:
   Add these A records for the root domain (@):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. **GitHub Pages Settings**:
   - Go to repository Settings > Pages
   - Ensure custom domain is set to `dachcoin.io`
   - Enable "Enforce HTTPS"

## How to Deploy the Game

1. Push changes to the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Set the source to deploy from the `main` branch and `/ (root)` directory.
4. The game will be accessible at `https://<username>.github.io/<repo>/game.html`.

## Project Structure

```
/
├── index.html          # Landing page
├── game.html           # Dach Dash game
├── tokenomics.html     # Token economics
├── roadmap.html        # Project roadmap
├── whitepaper.html     # Technical documentation
├── dao.html           # Governance information
├── faq.html           # Frequently asked questions
├── contact.html       # Contact form
├── assets/
│   ├── css/
│   │   ├── game.css    # Game styles
│   │   └── style.css   # Custom styles
│   ├── js/
│   │   ├── game.js     # Game logic
│   │   └── main.js     # JavaScript functionality
│   └── images/         # Site and game images (see `dach_dash_assets_fixed.zip` for game assets)
├── CNAME              # Custom domain configuration
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: Interactive functionality
- **Formspree**: Contact form handling
- **Google Fonts**: Typography (Inter font family)

## Browser Support

- Modern browsers with JavaScript enabled
- CSS Grid and Flexbox support
- Mobile responsive design for all device sizes

## License

© 2025 Dachshund Coin (DACH). All rights reserved.

---

**Disclaimer**: This is not financial advice. Please do your own research before investing in any cryptocurrency.