# Feature Plan: Two new AirBeam landing pages (Individual + Institutional)

## Context
HabitatMap (Jekyll static site) needs two new landing pages that route from the "Buy It Now" chooser card, the aircasting.org banner, guides, and later ads:

- **Individual LP** — audience: families / personally affected residents (parent, 30–55, non-specialist). Goal: sell one AirBeam Mini ($99). Voice: warm, calm, human, agency-not-alarm. Primary CTA: Add to Cart. Secondary: Watch the 2-minute demo.
- **Institutional LP** — audience: researchers, educators, advocates (the bulk buyers; 5+ unit orders ≈ 76% of units). Goal: qualified consultation / bulk-quote. Voice: rigor, not consumer wellness. Primary CTA: Book a free consultation. Secondary: Request bulk pricing.

Both briefs are explicit: **reuse the existing HabitatMap system** — nav, footer, press bar, cards, buttons, type, color, photography. Same skin, different message and order. We may add polish, but brand colors, fonts, and section-construction stay. Only confirmed-live features go on the pages (see Open Flags).

Source material lives in `.context/mockups/` (standalone HTML mockups + designer briefs in `uploads/*.md`).

## Confirmed architecture (from codebase exploration)
- Pages are `.md` in `pages/` with front matter (`layout`, `permalink`, `section`, SEO); body = a sequence of `{% include <group>/<section>.html %}`. Model page: `pages/airbeam/buy-it-now.md`.
- Section partials: `_includes/<group>/`. SCSS: one module per section in `_sass/modules/`, registered in `_sass/main.scss` (compiled site-wide).
- Style tokens (`_sass/config/_variables.scss`): colors `$green #1ea73f` (`$hm-brand`), `$blue #00b2ef` (`$ac-brand`), `$yellow #ffe651` (`$cta-color`); fonts `$bold-font` "Moderat-Bold" (headings), `$body-font` "muli" (body), `$quote-font` "IBM Plex Serif". Buttons `.button` + `.button--hm/--ac/--cta`. Section wrapper `.panel` + `.split--*` or the newer `.container`(max 1200) + CSS grid.
- Scroll animation: `reveal-section`/`reveal-content` classes need `/assets/js/scroll-reveal.js` loaded on the page or sections stay hidden.

## Step 1 — Extract the 3 shared sections to `_includes/shared/` + parameterize
These already exist as isolated partials in `_includes/buy-it-now/` and are used on **Buy It Now** and the new **Individual** page. Move + parameterize so copy/links differ per page (read via `{{ include.x | default: "..." }}`):

| New shared partial | From | Params to expose | Notes |
|---|---|---|---|
| `shared/in-action.html` | `buy-it-now/videos-section.html` | eyebrow, title, video thumbs/captions | carries `buy-it-now-videos.js`; Individual wants **portrait** thumbs |
| `shared/start-monitoring.html` | `buy-it-now/product-showcase-section.html` | overline, title, checklist, price, family line, CTA, consultation link | buy block; needs global `addToCart` cart JS |
| `shared/global-movement.html` | `buy-it-now/global-movement-section.html` | eyebrow, title, subtitle, 3 links, 3 stats, image | self-contained, no JS |

Update `pages/airbeam/buy-it-now.md` to call the `shared/` paths with params reproducing current copy so its rendered output is unchanged. SCSS modules keep their names/registration.

## Step 2 — Individual LP  (`pages/airbeam/individual.md`, permalink `/airbeam/individual/`)
Front matter: `layout: default`, SEO/JSON-LD; load `scroll-reveal.js` + cart JS. Body order (copy is finalized in the briefs, R2/R3 applied):

1. `individual/hero.html` — NEW. Eyebrow "For you and your family"; H1 "Your air, right now, wherever you are."; revised subhead; primary "Buy AirBeam Mini, $99" (`addToCart`); secondary "Watch the 2-minute demo". Placeholder hero image (mom-on-bike shot later).
2. `individual/street-to-street.html` — NEW. Eyebrow "The difference"; H2 "Air changes street to street."; map visual, reading **37 (orange)**.
3. `shared/in-action.html` — SHARED. Title "Small enough to take anywhere.", **portrait** videos, existing captions.
4. `individual/meaning.html` — NEW. H2 "We help you read the air, not just measure it."; calm card ("12 · Good · a fine time for that walk"). No alarm colors, no medical advice.
5. `individual/features.html` — NEW. Intro "All of this is live today, in the free AirCasting app." 5 items (real-time, map, GPS routes, email alerts kept minor, **"Never lose a session"** sync). Small line: EN/FR/ES. Ends with accuracy line "Independently evaluated for PM2.5 by South Coast AQMD" + optional "See the report" link.
6. `individual/setup.html` — NEW. H3 "Easy on purpose."; corrected body (~2 min, no no-account claim); 3 steps (step 2 = "Open the app and sign in").
7. `shared/global-movement.html` — SHARED. H2 "Join a global movement"; stats 10,000+ / 2B+ / 100+ (verify).
8. `shared/start-monitoring.html` — SHARED buy block. H2 "Start monitoring today"; checklist incl "Free apps for iPhone and Android, no subscriptions"; $99 one-time; family line; Add to Cart; **sticky mobile price+CTA bar**.
9. `individual/faq.html` — NEW (or reuse accordion component). 4–5 Qs: setup, accuracy, subscriptions, what-you-can-do, + sharing-with-family/school.

## Step 3 — Institutional LP  (`pages/airbeam/institutional.md`, permalink `/airbeam/institutional/`)
Front matter: `layout: default`, SEO; load `scroll-reveal.js` (+ expander JS). Body order:

1. `institutional/hero.html` — NEW. Eyebrow "Research, classrooms, campaigns"; H1 "Air quality data your work can stand on"; subhead; primary "Book a free consultation"; secondary "See the specs"; proof line.
2. `institutional/peer-proof.html` — NEW. Credibility line + **3 named story cards** (Claiborne Corridor–LSU / Queensbridge Tech Lab–Queens Library / Sixth Street Community Center) with Read-more links. Can fold in the existing `press-section` logo strip.
3. `institutional/reliability.html` — NEW. H2 "Capture you can rely on." (reliable+automatic sync, not "instant"; "Your credibility depends on not losing data. So does ours.").
4. `institutional/features.html` — NEW. Intro "You can already do more than you think." 6 blocks (export, self-host/in-house, sampling rate, email alerts, follow monitors, map) each = claim + proof + expander. Place unlisted-not-private honesty line near the self-host block.
5. `institutional/specifications.html` — NEW. Retitle "Specifications". 6 spec cards in 3×2: Measures, Accuracy (report link), Storage, Connectivity, Build (Option A copy unless battery hrs confirmed), App (iPhone+Android). No temp/humidity/calibration anywhere.
6. `institutional/classrooms.html` — NEW. H3 "For classrooms and teams"; captive-portal + no-classroom-mode honesty; CTA "Explore the classroom curriculum" → aircastingactions.org.
7. `institutional/data-to-case.html` — NEW. H3 "Turn readings into something people act on"; before→after (raw → shareable map/report).
8. `institutional/resources.html` — NEW. Resource link cards (educator guide, AirCasting Actions, blog/cases, full specs).
9. `institutional/consultation-cta.html` — NEW, adapt existing `buy-it-now/consultation-section.html`. H2 "Equip your whole team" / "Tell us what you are measuring."; inline lead form (name, email, one line); primary "Book a free consultation", secondary "Request bulk pricing"; bulk from 5 units; **NON-PROFIT** framing (drop "sold at cost"), one-price message.
10. `institutional/faq.html` — NEW. Institutional subset: bulk/education pricing (non-profit wording), keep data off servers/self-host, defensible accuracy, export formats, sampling rate, + 2 procurement placeholders (lead time/international; IRB/data governance).

## Step 4 — Styling
For each new partial add a module `_sass/modules/_<name>.scss` and register in `_sass/main.scss`. Reuse variables/mixins and existing patterns (templates: `_hero-section.scss`, `_features-section.scss`, `_problem-solution.scss`, `_community-feature-cards.scss`, `_stats.scss`, `_global-movement.scss`). Pull colors from SCSS vars, headings `$bold-font`, body `$body-font`.

## JS dependencies
- `scroll-reveal.js` — both pages.
- `addToCart` cart JS — Individual (hero + buy block).
- `buy-it-now-videos.js` — travels inside `shared/in-action.html`.
- Small accordion/expander JS for feature blocks + FAQ (check if `features-section`/`faq-section` already ship one and reuse).

## Verification
- `bundle exec jekyll serve`; open `/airbeam/individual/`, `/airbeam/institutional/`, and `/airbeam/buy-it-now/`.
- Confirm Buy It Now output is unchanged after the shared-section refactor (diff rendered HTML).
- Verify scroll-reveal fires, Add to Cart works (Individual), expanders/FAQ open, sticky mobile bar shows.
- Check responsive at 768 / 1366; confirm colors/fonts match brand.
- Browser MCP screenshots of both new pages vs `.context/mockups/` standalone HTML.

## Open flags to surface before launch (from briefs — content owners, not blockers for build)
- Hero + fieldwork images are **placeholders** (Individual: mom-on-bike; Institutional: classroom/field).
- Community numbers (10k / 2B / 100+ countries) self-reported — **verify with Michael** or soften.
- Confirm the app first-run/sign-in flow (Individual setup steps).
- Testimonials / partner logos need **permission** before featuring.
- App Store / Google Play badges = placeholders until assets arrive.
- Battery "up to 33 hours" is an early estimate; use Option A (no number) if unconfirmed.
- iOS is now confirmed for the Mini (safe to state iPhone + Android).
- Procurement FAQ answers are **placeholders** pending Michael.

## Suggested build order (incremental, each independently shippable)
1. Shared extraction + Buy-It-Now regression check.
2. Individual LP (reuses 3 shared sections + 6 new partials).
3. Institutional LP (all new partials + adapted consultation).
Branch: `feat/lp-individual-institutional` (created).
