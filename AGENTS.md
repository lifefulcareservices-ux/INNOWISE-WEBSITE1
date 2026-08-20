<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:dependencies -->
# Dependencies
- **GSAP** (3.x) with ScrollTrigger plugin — used via `useRef` + `useEffect` in client components (`"use client"`). Register with `gsap.registerPlugin(ScrollTrigger)`. Clean up with `gsap.context()`.
<!-- END:dependencies -->
