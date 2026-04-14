# Ada & Aces — Marketing Agency Website

A full Next.js 14 website for **Ada & Aces**, a marketing agency. Built with the App Router, CSS Modules, and a bold black & yellow design system.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Ticker, Services preview, Work preview, Stats, CTA |
| `/about` | About — Story, Values, Team |
| `/services` | Services — Full service list with details |
| `/work` | Portfolio — All case studies with results |
| `/contact` | Contact — Form with service/budget selection |

## Tech Stack

- **Next.js 14** (App Router)
- **CSS Modules** — no external CSS framework
- **Google Fonts** — Bebas Neue + DM Sans
- **React 18**

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ada-aces/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.js            # Root layout with metadata
│   ├── page.js              # Homepage
│   ├── page.module.css
│   ├── not-found.js         # 404 page
│   ├── about/
│   ├── services/
│   ├── work/
│   └── contact/
├── components/
│   ├── Navbar.js            # Sticky nav with mobile menu
│   ├── Navbar.module.css
│   ├── Footer.js
│   └── Footer.module.css
├── public/
├── next.config.js
└── package.json
```

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --blk: #0a0a0a;
  --yel: #F5C842;
  --wht: #f5f3ee;
}
```

### Content
- Update team members in `app/about/page.js`
- Update portfolio projects in `app/work/page.js`
- Update services in `app/services/page.js`
- Update contact details in `app/contact/page.js`

### Connecting the Contact Form
The contact form in `app/contact/page.js` currently shows a success state on submit.
To connect it to a real backend, replace the `handleSubmit` function with a `fetch` call to your API or a service like Formspree / Resend.

## Deployment

Deploy easily on [Vercel](https://vercel.com):
```bash
npm i -g vercel
vercel
```
