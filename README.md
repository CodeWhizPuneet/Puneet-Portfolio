# Puneet Shankar � Developer Portfolio
A modern, dark-themed developer portfolio built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Featuring buttery smooth scroll, interactive animations, and a premium design system.

## ✨ Features

- **Lenis smooth scroll** — silky 60fps scrolling with custom easing
- **Preloader** — animated percentage counter with split-screen reveal
- **Hero** — letter-by-letter name animation + TextScramble subtitle
- **Cursor glow** — dual-layer lerp-smoothed ambient cursor (desktop only)
- **Particle field** — subtle animated background particles
- **Gradient orbs** — floating ambient light blobs
- **Magnetic buttons** — hover-reactive CTA buttons
- **Project cards** — 3D tilt + radial spotlight on mouse move
- **Experience timeline** — alternating animated timeline
- **Animated counters** — stats count up on scroll-into-view
- **Contact form** — real email delivery via EmailJS
- **Scroll progress bar** — amber gradient progress indicator in navbar
- **Film grain overlay** — subtle noise texture via CSS
- **Glass morphism** — backdrop-blur card system
- **Animated borders** — conic-gradient spinning border on hover

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion (motion/react) |
| Smooth Scroll | Lenis |
| Email | EmailJS |
| Icons | Lucide React |
| Fonts | Syne + JetBrains Mono |
| Deploy | Vercel |

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/CodeWhizPuneet/Puneet-Portfolio.git
cd Puneet-Portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your EmailJS credentials in .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📧 EmailJS Setup (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com/) (free)
2. Create an **Email Service** (connect your Gmail)
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{message}}` — the message
   - `{{to_name}}` — recipient name
4. Copy your credentials into `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

## 📁 Project Structure

```
app/
├── components/       # All UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Preloader.tsx
│   ├── LenisProvider.tsx
│   ├── CursorGlow.tsx
│   ├── ParticleField.tsx
│   ├── GradientOrbs.tsx
│   └── TextScramble.tsx
├── resume/           # Resume viewer page
├── globals.css       # Design system + keyframes
└── layout.tsx        # Root layout + metadata
lib/
├── data.ts           # Projects, experience, skills data
└── certifications.ts # Certifications data
types/
└── index.ts          # TypeScript interfaces
public/
└── resume.pdf        # Your resume PDF
```

## 🌐 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CodeWhizPuneet/Puneet-Portfolio)

Add your `NEXT_PUBLIC_EMAILJS_*` environment variables in Vercel dashboard → Settings → Environment Variables.

## 📄 License

MIT — feel free to use this as inspiration for your own portfolio.