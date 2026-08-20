# UX Research Analysis Report — Innowise Solutions Website

**Date:** June 18, 2026  
**Analyst:** Senior UX Researcher  
**Project:** Innowise Solutions corporate website (Next.js 15 / React 19)  
**Decision to inform: What refinements will maximise lead generation and trust for this B2B technology services landing site?**

---

## 1. Executive Summary

The Innowise Solutions website has a **solid visual foundation** — consistent branding, clean typography, dark-mode support, and confident copywriting. However, **critical functional gaps** (a non-submitting contact form, non-functional social links, placeholder client logos) and **over-engineering** (three animation libraries, heavy scroll-driven effects) undermine the trust and conversion the site is designed to build. With targeted fixes — prioritising form functionality, social proof, and performance — this site can reach industry standard for a mid-market UK technology services provider without a redesign.

---

## 2. Service / Industry Analysis

### What the site offers

Six core service lines, clearly presented:

| Service | Key differentiator |
|---------|-------------------|
| **AI Partnered Services** | Custom models, RPA, predictive analytics |
| **Cloud Services** | AWS + Azure, AI-optimised architecture, FinOps |
| **Data & Analytics** | Warehousing, BI, real-time streaming |
| **Managed IT Support** | 24/7 helpdesk, SLA-backed |
| **Cyber Security** | Rapid7 SOC, ISO 27001, Cyber Essentials |
| **Microsoft Dynamics ERP** | Implementation + AI enhancement |

### Target audience

UK-based decision-makers (CTOs, IT Directors, Finance Directors) across:
- Healthcare (NHS Trust listed)
- Local government (Leicester City Council listed)
- Education (University of Leicester listed)
- Finance (London Credit Union listed)
- Private / mid-market enterprises

Primary user need: **Trust a partner to handle critical infrastructure** — this means the website must signal credibility, reliability, and proven outcomes above all else.

### Competitive landscape reference

Top competitors in this space (UK MSPs / technology consultancies like ANS, Six Degrees, Node4, UKFast) all feature:
- **Verifiable social proof** (named logos, video testimonials, case studies)
- **Functional lead capture** (form → CRM pipeline)
- **Clear ROI messaging** ("We saved client X £Y by migrating to Azure")
- **Performance-optimised pages** (sub-2s load times)

---

## 3. Current UX Strengths

### 3.1 Visual design & branding consistency
- **Strong brand colour** (`#4A236F` purple) used consistently across backgrounds, buttons, hover states, and selection colour (`globals.css` lines 11-13, 39-41). Creates a distinctive identity.
- **Typography** uses Raleway (`layout.tsx` line 10) with a full weight range (400-900), applied consistently via the `--font-sans` token in `globals.css` line 6.
- **Dark mode** is fully implemented with custom surface/ border tokens (`globals.css` lines 28-32). Toggle-ready architecture, though no visible toggle is exposed.

### 3.2 Navigation & IA
- **4-item navigation** (Home, Services, About, Contact) is appropriate for a site of this scope. No cognitive overload.
- **Sticky navbar** with scroll-driven background transition (`Navbar.tsx` lines 19-28) — subtle, functional, signals polish.
- **Skip-to-content link** (`layout.tsx` lines 69-71) — correct accessibility pattern, visually hidden until focused.
- **Footer IA** categorises links into Product, Legal, and Contact columns — clear, scannable.

### 3.3 Content & messaging
- **Value proposition is clear**: "AI-driven infrastructure, built for real business" (home page hero). Instantly communicates positioning.
- **Consistent CTAs** across all pages drive to `/contact`. Good for conversion funnel.
- **Stats section** (98% retention, 4hr incident response, 24/7 SOC, 0 cost overruns) — concrete, memorable numbers that build trust.
- **All Services tabbed interface** (`services/page.tsx` lines 210-349) with AnimatePresence transitions is well-executed — smooth, responsive.

### 3.4 Technical foundations
- **Responsive grid layouts** use Tailwind breakpoints consistently (sm/md/lg) — works on mobile through desktop.
- **JSON-LD structured data** (`layout.tsx` lines 42-63) for organisation schema — good for search visibility.
- **Proper semantic HTML**: `<nav>`, `<main>`, `<footer>`, `<section>` elements used appropriately.
- **`next/font`** with `display:swap` (`layout.tsx` line 12) — prevents layout shift from web fonts.
- **`priority` on hero image** (`page.tsx` line 42) — correct Largest Contentful Paint optimisation.

### 3.5 Interaction design
- **Back-to-top button** (`BackToTop.tsx`) — appears after 400px scroll, smooth scroll. Low effort, high perceived value.
- **Cookie consent banner** (`CookieConsent.tsx`) — GDPR-compliant pattern with link to cookie policy.
- **Count-up animations** (`CountUp.tsx`) on stats — scroll-triggered, 2s duration, cubic ease-out. Appropriate use of animation to draw attention to key trust metrics.

---

## 4. Critical UX Issues & Improvements

These are issues that actively reduce trust or block conversion. Ranked by severity.

### 🔴 BLOCKER: Contact form does not submit data (`src/app/contact/page.tsx` lines 8-11)

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);         // <-- only shows a success message
};
```

The form **never sends data anywhere**. A prospective client fills in all fields, clicks "Send message", sees "Thank you" — and the company never receives the enquiry. This is the single highest-impact issue on the site.

**Fix:** Implement a server action (Next.js API route or server action) that emails the enquiry to `hello@innowisesolutions.co.uk` or pushes it to a CRM. Add loading state, error handling, and honeypot spam protection.

### 🔴 BLOCKER: Social media icons are non-functional (`src/components/Footer.tsx` lines 15-31)

```tsx
<span className="text-black/45 dark:text-white/45" aria-label="Facebook">
  <svg ... />
</span>
```

All three social icons (Facebook, X/Twitter, Instagram) are `<span>` elements with no `href`. Users who click expecting to navigate to a social page get nothing. For a services company, this erodes credibility.

**Fix:** Replace `<span>` with `<a href="..." target="_blank" rel="noopener noreferrer">` linking to real company social profiles. If the company doesn't maintain these channels, remove the icons entirely rather than leaving dead UI.

### 🟠 HIGH: Client logos are text pills, not real logos (`src/components/MarqueeLogos.tsx`)

All 12 "clients" (Northwood Digital, Meridian Healthcare, etc.) are presented as coloured text pills with no actual logos or links. Several appear to be fictional or placeholder names. B2B buyers recognise fabricated trust signals — this can backfire severely.

**Fix:**
- **Option A (recommended):** Replace with actual client logos (PNG/SVG) from real engagements, with permission.
- **Option B (if logos unavailable):** Replace the section with a simpler "Industries we serve" list (Healthcare, Finance, Education, Government) which is truthful and still builds credibility.
- Remove the section entirely rather than displaying unverifiable names.

### 🟠 HIGH: No SEO metadata on services page (`src/app/services/page.tsx`)

The services page is missing `export const metadata` (compare with `about/page.tsx` lines 5-8, `legal/terms/page.tsx` lines 4-7). This means:
- No custom `<title>` for the services page
- No meta description for search snippets
- Poor sharing preview on social media

**Fix:** Add metadata block:

```typescript
export const metadata: Metadata = {
  title: "Services",
  description: "AI-powered cloud, cybersecurity, ERP, data analytics and managed IT services for UK organisations.",
};
```

### 🟠 HIGH: Duplicate animation libraries causing performance bloat

The site loads **three** animation frameworks simultaneously:

| Library | Used in | Estimated cost |
|---------|---------|----------------|
| **Framer Motion** | Home page, Services page, Navbar (15+ components) | ~32KB gzipped |
| **GSAP + ScrollTrigger** | `ServicesScrollytelling.tsx`, `CtaBackground.tsx` | ~28KB gzipped |
| **Lenis** | `SmoothScroll.tsx` (wraps entire app) | ~8KB gzipped |

~68KB of animation libraries for a marketing site with ~9 pages. This directly impacts mobile load time and perceived performance.

**Fix:** Consolidate to **Framer Motion only** (already used most heavily). Remove Lenis smooth scroll (it adds friction for users who expect native scroll behaviour and can cause scroll-jank on mobile). Replace `ServicesScrollytelling` GSAP implementation with a Framer Motion equivalent or a simpler CSS-based card reveal.

### 🟡 MEDIUM: Copyright year is static (`src/components/Footer.tsx` line 61)

```
© 2012 Innowise Solutions Ltd. All rights reserved.
```

Using a static year means this will appear outdated after 2026. Minor but noticeable to detail-oriented buyers.

**Fix:** Use `new Date().getFullYear()` to auto-update the year.

### 🟡 MEDIUM: "Trusted by teams building the next generation" is vague

The marquee section heading (`MarqueeLogos.tsx` line 21) reads:
> Trusted by teams building the next generation

This is too abstract. Industry-standard B2B sites use more specific headlines like "Trusted by organisations across healthcare, finance, and government."

**Fix:** Change to: "Trusted by organisations across the UK" or name actual sectors served.

### 🟡 MEDIUM: Mobile hamburger menu lacks active state (`src/components/Navbar.tsx` lines 97-108)

Desktop nav shows active page via `aria-current="page"` and the underline hover effect. The mobile menu shows no active page indicator — all links look the same.

**Fix:** Add visual active state in mobile menu (e.g., `text-white` for active, `text-white/60` for inactive, plus a left border indicator).

### 🟡 MEDIUM: Images lack alt text on service cards (`src/app/page.tsx` lines 376, 420)

Service card images use `alt=""` which is correct for decorative images. However, the ChatAnimation background image and scrollytelling images also use `alt=""`. While technically valid for decorative, some of these images carry contextual meaning and should have descriptive alt text or be more clearly marked as purely decorative.

**Fix:** Add descriptive alt text where images convey meaning (e.g., `alt="Team working in modern office"` for the chat background).

### 🟡 MEDIUM: Navigation height is 7rem (112px) — excessive (`src/components/Navbar.tsx` line 42)

`h-28` = 112px navbar height. Standard is 64-80px. This consumes significant vertical space on a 768px laptop screen (~15% of viewport).

**Fix:** Reduce to `h-16` (64px) or `h-20` (80px) with adjusted padding.

### 🟡 MEDIUM: About page has no scroll animations (`src/app/about/page.tsx`)

The About page is a Server Component (no `"use client"`, no motion imports). This means sections render all at once without the reveal animations present on home and services pages. The visual experience feels different from the rest of the site.

**Fix:** This is intentionally performant — document it as a deliberate choice. Alternatively, add lightweight `@keyframes` CSS animations (no JS) for a subtle fade-in that matches the brand feel.

---

## 5. Industry-Standard Recommendations

These changes would elevate the site to parity with top UK MSP/technology consultancy websites.

### 5.1 Real contact form with lead management (P0)
- Implement a Next.js server action that sends email via Resend / SendGrid / Nodemailer
- Add form validation (error messages per field, not just `required`)
- Add a honeypot field for bot protection
- Add a dropdown for "How did you hear about us?" for marketing attribution
- Store submissions in a database or push to a CRM webhook

**File:** `src/app/contact/page.tsx` → add `action={submitEnquiry}`

### 5.2 Social proof that builds trust (P0)
- **Replace marquee text pills with real client logos** and permission statements
- Add **2-3 short testimonials** (40-60 words each) with real names, roles, and company names — placed near the CTA and on the services page
- Add a **"Case studies" section** on the home page (below services) showing 2-3 outcome-focused examples: "How we migrated X to Azure and cut costs by 40%"

**Files:** `src/components/MarqueeLogos.tsx`, `src/app/page.tsx` (new section)

### 5.3 Performance optimisation (P0)
- **Consolidate animation libraries** to Framer Motion only (remove GSAP/ScrollTrigger and Lenis)
- **Implement `next/image` properly** — localise key brand images (team photos, office) instead of relying on Unsplash external URLs
- **Add loading="lazy"** on below-fold images (currently all unsplash images use Next.js Image but without explicit lazy loading — Next.js defaults to lazy, but verify)
- **Add `<Suspense>` boundaries** around heavy components

### 5.4 SEO & discoverability (P1)
- Add `export const metadata` to services page
- Add a `robots.ts` or `robots.txt` at `src/app/robots.ts`
- Add a `sitemap.ts` at `src/app/sitemap.ts`
- Add `hreflang` tags if only serving UK English
- Ensure all heading levels follow a logical hierarchy (h1 → h2 → h3)

### 5.5 Accessibility improvements (P1)
- Add `aria-label` to the hamburger button with dynamic text (already has "Toggle menu" — good, but make it context-aware: "Open navigation" / "Close navigation")
- Add `role="alert"` to form error messages and success state
- Ensure focus trapping in mobile menu when open
- Test with keyboard navigation — ensure all interactive elements are reachable
- Add `prefers-reduced-motion` support to disable animations for vestibular disorder users

### 5.6 Trust signals (P1)
- Add **certification / accreditation badges** (ISO 27001, Cyber Essentials, Microsoft Partner) in the footer or CTA section
- Add a **"Partners" section** (Microsoft, AWS, Rapid7) if applicable
- Make phone number **click-to-call** on mobile (already present in contact page and footer — verify it works on iOS/Android)

### 5.7 Content refinements (P1)
- Add an **ROI-focused statistic** to the home page: "Our clients see an average 35% reduction in infrastructure costs" (if real)
- Replace vague headline "Trusted by teams building the next generation" with sector-specific: "Trusted by healthcare, finance, and public sector organisations"
- Add **service-specific CTAs** — each service card should link to a deeper page or at least to `/contact` with a pre-filled service parameter

---

## 6. Animation Strategy (Minimal, Purposeful)

Current state: **over-animated**. ~15 scroll-triggered entrance animations on the home page alone, plus a full-screen scrollytelling card stack, plus a canvas particle background on every CTA section, plus smooth scroll on the entire app.

**Principle:** Every animation must serve one of: (a) direct attention to key content, (b) provide feedback on interaction, or (c) communicate brand quality — and only if it doesn't harm performance.

### Keep (enhance UX)

| Animation | Location | Why keep |
|-----------|----------|----------|
| **Hero heading staggered entrance** | `page.tsx` lines 54-70 | Sets a quality-first first impression; 3-step stagger is appropriate |
| **Stats count-up** | `CountUp.tsx` | Draws eye to trust metrics; scroll-triggered, plays once |
| **Navbar scroll background** | `Navbar.tsx` lines 19-28 | Solves a real UX problem (readability over hero image) |
| **Button hover states** | Multiple files | Standard interaction feedback, CSS-only |
| **Back-to-top visibility** | `BackToTop.tsx` | Functional, not decorative |

### Simplify (reduce scope)

| Animation | Current | Recommendation |
|-----------|---------|----------------|
| **Section entrance fades** | All sections use `whileInView` + Framer Motion | Limit to **hero + first section below fold only**. Use CSS `@keyframes` with `animation-delay` for remaining sections — zero JS cost. |
| **Services scrollytelling** | Full GSAP ScrollTrigger card stack with 280% pin | Replace with a **simple horizontal carousel or stacked cards** using Framer Motion `useScroll` or just CSS. Current implementation is disproportionately complex for 3 cards. |
| **CTA canvas background** | GSAP-driven animated particle field (canvas) | Replace with a **static gradient or CSS noise texture**. The canvas particle animation is visually impressive but adds ~800ms of JS execution time on load and has no functional purpose. |

### Remove (no UX value)

| Animation | Reason to remove |
|-----------|-----------------|
| **Lenis smooth scroll** (`SmoothScroll.tsx`) | Adds 8KB bundle + intercepts native scroll. Can cause mobile scroll jank. Users expect native scroll on a marketing site. |
| **Service card parallax y-offset** (`page.tsx` lines 361-362) | Imperceptible motion on a small card image. Adds per-card scroll listener cost. |
| **ChatAnimation auto-play** (`page.tsx` lines 392-474) | Novel but distracting — auto-playing chat bubbles feel gimmicky for a B2B site. Replace with a **static testimonial quote** or remove entirely. |
| **Feature card glow shadow** (`page.tsx` lines 20-25, 145) | `Math.sin(scrollYProgress)` driven shadow on cards adds a per-frame calculation with negligible visual benefit. |

### Recommended animation additions

| Animation | Where | Why |
|-----------|-------|-----|
| **Subtle CTA pulse** on `/contact` primary button | Contact page | A gentle 2s pulse scale (1→1.03) draws attention to the submit action — helps conversion |
| **Loading skeleton** for hero image | Layout level | Prevents blank space while hero image loads on slow connections |
| **Form field focus ring** animation | Contact page | Already has `focus:border-brand` — add a subtle box-shadow transition for polish |

---

## 7. Priority Action Items

Ranked by **impact on trust and conversions**. Implementation effort estimated relative to this codebase.

| # | Action | Impact | Effort | Rationale |
|---|--------|--------|--------|-----------|
| **P0** | **Fix contact form to actually send data** | 🔴 Blocker | Medium (~2-4h) | Without this, the site generates zero leads. Most critical business issue. |
| **P0** | **Replace marquee text pills with real client logos or remove section** | 🔴 High | Medium (design + asset collection) | Fabricated trust signals actively harm credibility. B2B buyers will notice. |
| **P0** | **Make social media icons functional or remove them** | 🔴 High | Low (~30min) | Dead links signal neglect. Either link to real profiles or remove. |
| **P1** | **Add SEO metadata to services page** | 🟠 High | Low (~15min) | Services page is the most likely entry point for search traffic. Missing title/description hurts organic reach. |
| **P1** | **Consolidate to one animation library (Framer Motion)** | 🟠 High | Medium (~4-6h) | Removes ~36KB of JS. Improves mobile load time and reduces scroll jank. |
| **P1** | **Add 2-3 real testimonials with names and roles** | 🟠 High | Medium (collect + design) | Testimonials are the #1 trust signal for B2B services. Current site has zero. |
| **P1** | **Remove Lenis smooth scroll** | 🟠 Medium | Low (~1h) | Reverts to native scroll. Better accessibility, less JS, no scroll-jank on mobile. |
| **P2** | **Replace CTA canvas animation with static gradient** | 🟡 Medium | Low (~1h) | Canvas particle effect is impressive but adds JS execution time. Use CSS gradient instead. |
| **P2** | **Reduce navbar height from 112px to 80px** | 🟡 Medium | Low (~15min) | Recovers ~32px vertical space — meaningful on laptop screens. |
| **P2** | **Add `prefers-reduced-motion` support** | 🟡 Medium | Low (~30min) | Accessibility best practice. Affects users with vestibular disorders. |
| **P2** | **Simplify ServicesScrollytelling to CSS or Framer Motion** | 🟡 Medium | Medium (~3h) | Current GSAP implementation is over-engineered for 3 cards. |
| **P3** | **Replace static copyright year with dynamic** | 🟢 Low | Low (~5min) | Quick win. Prevents looking outdated after 2026. |
| **P3** | **Add loading states for external images** | 🟢 Low | Low (~1h) | Unsplash images may load slowly. Add CSS skeleton or blur placeholder. |
| **P3** | **Add service-specific pre-filled contact links** | 🟢 Low | Low (~30min) | Minor conversion uplift — pre-fills the service dropdown when users click from a specific service card. |

---

## Appendix: File Inventory

```
public/
├── favicon.ico
├── hero_bg.jpg
├── hero_image.jpg
├── file.svg / globe.svg / next.svg / vercel.svg / window.svg

src/
├── app/
│   ├── layout.tsx            # Root layout: fonts, metadata, JSON-LD, Navbar, Footer, SmoothScroll
│   ├── globals.css           # Tailwind v4 theme, brand tokens, dark mode, animations
│   ├── page.tsx              # Home page: hero, features, stats, services, marquee, CTA
│   ├── not-found.tsx         # 404 page
│   ├── error.tsx             # Error boundary page
│   ├── services/page.tsx     # Services: hero, scrollytelling, all services tabs, approach, CTA
│   ├── about/page.tsx        # About: hero, story, values, leadership, stats, CTA
│   ├── contact/page.tsx      # Contact: hero, form (non-functional), info sidebar
│   └── legal/
│       ├── terms/page.tsx    # Terms & Conditions
│       ├── privacy/page.tsx  # Privacy Policy
│       └── cookies/page.tsx  # Cookie Policy
│
└── components/
    ├── Navbar.tsx            # Fixed navbar, scroll background, hamburger menu
    ├── Footer.tsx            # 4-column footer, dead social icons
    ├── SmoothScroll.tsx      # Lenis wrapper (entire app)
    ├── ServicesScrollytelling.tsx  # GSAP card stack (3 cards, pinned 280%)
    ├── MarqueeLogos.tsx      # Text-pill client marquee (12 placeholder names)
    ├── CtaBackground.tsx     # Canvas particle field (GSAP ticker)
    ├── CountUp.tsx           # IntersectionObserver + requestAnimationFrame counter
    ├── CookieConsent.tsx     # localStorage cookie banner
    └── BackToTop.tsx         # Scroll-to-top button
```

---

## Decision Summary

**The single question this analysis answers:** What must change for this website to convert B2B technology buyers effectively?

**Answer:** Fix the form (blocker), replace fake trust signals with real ones (high), reduce animation bloat (high), and add basic SEO (medium). These actions will generate more impact than any visual redesign. The visual foundation is sound — the execution gaps are what's undermining results.
