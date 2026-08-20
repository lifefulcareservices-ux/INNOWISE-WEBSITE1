# Innowise Solutions — Website Audit & Roadmap

Tracking file for the two audit lists. Check items off as they're resolved. Ask Claude to "read WEBSITE_AUDIT.md and check what's complete" to pick up where this left off.

Legend: `[x]` done · `[ ]` open · `[~]` deferred / needs input from you (not code-fixable alone)

**Status (2026-07-31): List 3 is done.** The UI/UX and frontend interaction redesign is complete — see checked items below. **Next priority: List 1's 🟠 Security section** (unescaped HTML in emails, no rate limiting, silent PII logging) — that's the highest-value remaining work, followed by the leftover Accessibility items List 3 didn't cover (focus trap, Escape-key close, `aria-live` on cookie banner, `aria-describedby` on form errors).

---

## LIST 1 — What's currently wrong

### 🔴 Legal / trust risk
- [x] Fabricated testimonials naming real institutions (Leicester City Council, London Credit Union, East Midlands NHS Trust) with reused fake leadership names — **removed** `Testimonials.tsx` and its usages entirely
- [x] About page "Leadership" section used the same fabricated names as placeholder team — **replaced** with real names (Umakanth Reddy – Director, Deepti Reddy – Director, Fahim Sahib – Chief Manager) and generic profile-silhouette placeholders until real photos are available
- [x] Privacy/Cookie policy falsely claimed analytics cookies via "Next.js Web Analytics" (nothing installed) — **rewrote** legal copy to state only essential cookies are currently used
- [~] No verifiable company registration data (Companies House number, ICO registration, VAT) despite "Ltd" claim — **deferred**, you have the numbers, add when ready
- [x] Non-dialable phone format `+44 0116 225 7865` (mixes country code with UK trunk `0`) — **fixed** to `+44 116 225 7865` in Footer and Contact page
- [x] Unverified social links (Facebook/X/Instagram handles not confirmed real) — **removed** from Footer until confirmed
- [ ] Cookie consent banner is "Accept"-only, no reject/manage option (weaker PECR/GDPR consent pattern — lower risk now that no analytics is claimed, but still worth fixing properly)

### 🟠 Security
- [ ] Contact form Server Action has no rate limiting (honeypot only stops naive bots)
- [ ] Unescaped HTML injection into internal notification emails (`name`/`email`/`phone`/`company`/`message` interpolated raw into HTML sent via Resend)
- [ ] `service`, `phone`, `company` fields aren't validated server-side (only name/email/message are)
- [ ] Silent failure: if `RESEND_API_KEY` is missing, submissions just get `console.log`'d (PII in plaintext logs) while user still sees "Thank you"
- [ ] Zero security headers configured (no CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS)

### 🟡 SEO — **done**
- [x] No sitemap.ts / robots.ts / manifest.json — **added** `src/app/sitemap.ts`, `src/app/robots.ts` (env-gated noindex on non-prod), `src/app/manifest.ts`
- [x] No OG/Twitter image — **added** `src/app/opengraph-image.tsx` (dynamic brand image, auto-wired to OG + Twitter card)
- [x] JSON-LD `logo` pointed to a random hero photo, no LocalBusiness type — **fixed**, now references OG image and uses `["Organization","LocalBusiness"]`
- [x] `/contact` had no metadata — **added** `src/app/contact/layout.tsx` with unique title/description
- [x] No canonical URLs anywhere — **added** `alternates.canonical` to root layout, about, services, contact, and all legal pages
- [x] `robots: index/follow` was unconditional (would index staging) — **now conditional** on `VERCEL_ENV`/`NODE_ENV === "production"`
- [x] Dead asset `hero_image.jpg` (unused except in the broken JSON-LD field) — **removed**
- [x] `manifest.ts` icons array was empty — **added** real 192x192/512x512 PNG icons generated from the new brand mark

### 🟡 Accessibility
- [x] Mobile menu had no `aria-expanded` — **added**; focus trap and Escape-key close still open
- [ ] Cookie banner has no `role`/`aria-live` — screen readers aren't told it appeared
- [ ] Form field errors are plain `<p>` tags with no `aria-describedby`/`role="alert"` link to the input
- [x] No `prefers-reduced-motion` handling anywhere despite heavy Framer Motion usage — **fixed** as part of List 3 (see below)
- [x] Contrast risk: `text-white/55` on brand-purple background — **resolved** as a side effect of List 3's card redesign (About/Home cards are no longer solid purple fills, so this specific pattern is gone; recheck if any new white-on-brand text is introduced later)
- [ ] Contact sidebar "Address/Phone/Email" labels look like headings but are just styled `<p>` tags — no real heading hierarchy

### 🟡 Performance / architecture
- [ ] Nearly every page is full `"use client"` (Home, Services, Contact) even though most content is static — no server/client splitting
- [ ] No `loading.tsx` anywhere — no skeleton/streaming state for any route
- [ ] Service/tab images load from Unsplash with no `placeholder="blur"` — visible pop-in
- [ ] 6 font weights loaded for Raleway; likely 1–2 unused

### 🟡 Code quality / consistency — **in progress**
- [ ] Same CTA band ("Ready to get started?") hand-copy-pasted 3–4x across Home/Services/About with drifting markup — extract shared `<CtaSection>` (deferred — still worth doing, but lower priority than security now)
- [x] Same "glow card" hover treatment duplicated via two mechanisms — **resolved**: neon glow removed entirely, replaced with `shadow-card`/`shadow-card-hover` tokens applied consistently
- [x] "Eyebrow label" pattern copy-pasted ~10 times with inconsistent margin/weight — **standardised** (`font-semibold tracking-[0.2em]` everywhere); still not extracted into a shared `<Eyebrow>` component, just made visually consistent
- [x] About page had zero animation — **fixed**, About now uses the same `<Reveal>`/stagger system as every other page
- [x] `ServicesScrollytelling.tsx` was a fully built, unused component — **revived**, now wired into the Services page between "Our Approach" and the CTA
- [ ] `AGENTS.md` documents GSAP+ScrollTrigger as the animation convention, but GSAP isn't installed/used anywhere (Framer Motion is used instead) — stale doc, still needs correcting

### ⚪ No tooling safety net
- [ ] No tests, no CI, no error monitoring (Sentry), no analytics
- [~] `npm install` surfaced 4 high + 1 critical dependency vulnerabilities — needs review before `npm audit fix` (can introduce breaking changes)

---

## LIST 2 — What "gold standard for the tech industry" would require

### Trust & credibility
- [ ] Real, verifiable client case studies (logos, named/consented contacts, real before/after metrics) to replace the removed testimonials
- [ ] Dedicated Trust/Security/Compliance page with actual certification badges/links (ISO 27001, Cyber Essentials, etc.) — currently only name-dropped in service copy
- [ ] Real company registration details (Companies House, ICO) published in footer/legal pages
- [ ] `security.txt` + responsible-disclosure contact

### Content depth & authority
- [ ] Blog/Insights section for technical thought-leadership + organic SEO
- [ ] Case studies section (problem/approach/outcome + metrics), not just quote cards
- [ ] Careers page
- [ ] Status page or link, given the managed-IT/reliability pitch

### Technical excellence
- [x] Full SEO infra (sitemap, robots, OG images, JSON-LD) — done above
- [ ] Full security header set via `next.config.ts` `headers()`
- [ ] Rate-limited, sanitized Server Actions; escape all user input before HTML email interpolation
- [ ] Real analytics + error monitoring (Vercel Analytics/GA4 + Sentry), matching what legal pages claim
- [ ] WCAG 2.1 AA baseline: focus traps, reduced motion, contrast-checked palette, ARIA live regions
- [ ] Component-level design system (`CtaSection`, `GlowCard`, `Eyebrow`, `SectionHeading`)
- [ ] Basic test coverage + CI pipeline (lint + build + type-check on PR)
- [ ] Convert static-content sections to Server Components, reserve `"use client"` for genuinely interactive slices

### Positioning / conversion
- [ ] Segmented contact flow (book a call vs. general enquiry)
- [ ] Real client logo wall (with permission) instead of generic "industries served" pills
- [ ] Clear response-time SLA on the contact form ("we reply within 1 business day")

### Polish details
- [x] Dark mode — **decision made**: stripped entirely rather than finished (was half-built dead code with no toggle; site is now light-only by design)
- [x] Consistent motion language across every page (About currently has none) — **fixed**, see List 3
- [x] `prefers-reduced-motion` respected everywhere Framer Motion is used — **fixed**, see List 3
- [ ] Per-page OG/social preview images (currently one shared site-wide image)

---

## LIST 3 — UI/UX & Frontend Engineering Redesign — **done**

Reviewed every page and shared component, then implemented a full visual + motion overhaul. All items below shipped 2026-07-31.

### Visual system
- [x] **"Everything is a purple block."** Added a neutral elevation/surface system (`--shadow-card`/`--shadow-card-hover`/`--shadow-brand-glow` tokens in `globals.css`) and converted every solid `bg-brand` card — Home features grid, Home stats, About values/team/stats, Services tab panel fallback — to `bg-white border border-gray-200 shadow-card`, with brand purple pulled back to icon chips, stat numbers, and CTAs only. Rule of thumb applied: 2 purple moments per page max (CTA buttons + one CTA band).
- [x] **Neon glow hovers replaced** with the new `shadow-card`/`shadow-card-hover`/`shadow-brand-glow` tokens — no more colored radiating glow anywhere.
- [x] **Stock photography replaced.** Built `src/components/DitherGradient.tsx` — a canvas-based, Bayer-ordered-dither animated gradient in the brand palette (reduced-motion aware, viewport/tab-visibility gated) — and used it everywhere the Unsplash photos used to be (Home service cards, Services tabs, `ServicesScrollytelling`), plus as the new `CtaBackground`.
- [x] Team cards — silhouette/radial-tint/dot-grid placeholder replaced with a clean initials-avatar treatment (monogram chip on a neutral card), matching how Linear/Stripe handle missing headshots.
- [x] Icon system standardised — adopted **lucide-react**, migrated all 16 hand-rolled inline SVGs to a consistent 20/24px size and `strokeWidth={1.75}`.
- [x] **Real logo adopted.** User supplied a real brand mark (network/hub icon); recolored to brand purple + white variants (alpha-preserving pixel recolor, no new dependency), built `src/components/Logo.tsx` that cross-fades between them based on Navbar scroll state, and generated `icon.png`/`apple-icon.png`/manifest icons + an OG-image mark from the same source.
- [x] Typography — added JetBrains Mono (scoped to stat numbers + status badges only), consolidated the H1/H2/H3/eyebrow type scale across Home/About/Services/Contact.
- [x] **Dark mode** — stripped entirely (all `dark:` variants + `.dark` CSS removed) rather than finished; light-only by deliberate decision.

### Interaction & scroll mechanics
- [x] Extracted `src/components/Reveal.tsx` and migrated all 20+ copy-pasted `whileInView` blocks onto it (Home, Services, About — About previously had zero animation, now matches the rest of the site).
- [x] **Revived `ServicesScrollytelling.tsx`** — wired into the Services page as the signature scroll moment between "Our Approach" and the CTA.
- [x] `prefers-reduced-motion` handled globally — `useReducedMotion()` gates the Reveal wrapper, Home's parallax/glow, the new scroll-progress bar, and route-fade transition; `motion-reduce:` Tailwind variant covers pure-CSS transitions (BackToTop).
- [x] Mobile nav overlay — orphaned `bg-black/90` dark panel replaced with a light `bg-white/95` panel matching the site; hamburger icon now morphs into an X via three animated bars instead of hard-swapping paths; added `aria-expanded`.
- [x] Services tab switch — wrapped in a `motion.div layout` so the height animates between tabs instead of jumping.
- [x] Added four "top-tier" interaction patterns (Framer Motion only, no new dependency): a scroll-progress bar (`ScrollProgress.tsx`), staggered grid/card reveals (`variants`/`staggerChildren` replacing independent per-card `whileInView`), a restrained hover-lift on all primary CTAs, and a page-fade route transition (`PageTransition.tsx`). Deliberately skipped: Lenis/smooth-scroll, cursor-follow accents, full magnetic buttons, and the View Transitions API (reasoning in the session plan file).

---

*Last updated 2026-07-31 after implementing the full List 3 redesign. Next up: List 1's Security section, then remaining Accessibility items.*
