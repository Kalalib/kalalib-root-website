# Project Clarifications Before Starting

## 1) Goals and Scope
- What is the primary goal of this website launch (lead generation, credibility, portfolio, hiring, other)?
Credibility and portfolio showcasing, with some lead generation.

- Who is the primary audience (startups, SMEs, enterprise, local/international clients)?
Startups and SMEs, primarily in Hong Kong but also internationally.

- Is this phase limited to the main site only, or should we also ship separate subdomains now?
Only main site, we will work on subdomain in another repository.

- What is the MVP scope for the first release vs. later phases?
MVP scope is to have a landing page and a team page, with basic information about the company and the team members. This page is used as a forwarding page for our subdomains, and also as a credibility page for potential clients to learn more about us. We will work on the subdomains in later phases, which will have more detailed information about our services and portfolio.

## 2) Branding and Naming
- Should the main brand be shown as "KALA", "KALA Solutions", or both depending on page/context?
Use KALA here, as this is used as a general brand for both KALA Solutions and KALA Studios.

- Final decision for consulting subdomain: what should replace or complement "solutions"?
Lets use solutions.kalalib.com for consistency.

- Should "KALA Studio" be a separate experience or just a navigation link for now?
Seperate experience, but we can link to it from the main site.

- Do you have a brand guideline (logo usage, tone, spacing, dos/don'ts)?
We have a logo, but we don't have a brand guideline. We want a similar color scheme and tone as our logo, which is a simple and modern design. We want the website to be clean and easy to navigate, with a focus on showcasing our services and portfolio. We want to avoid using too many colors or fonts, and we want to keep the design consistent across all pages. The spacings should be consistent, and it should be spaced-apart well, with a good balance of white space and content. Use icons from ionicons. Make good use of hover effects.

## 3) Navigation and Information Architecture
- Confirm final navbar structure and link destinations for each item.
- Left:
	- KALA (links to /)
- Right:
	- Team (links to /team)
	- KALA Solutions (links to https://solutions.kalalib.com, opens in new tab)
	- KALA Studio (links to https://studio.kalalib.com, opens in new tab)
- Should navbar links to subdomains open in the same tab or new tab?
New tab

- Do we need a sticky navbar and mobile menu behavior preference?
Sticky navbar, and the mobile menu should be a collapsible hamburger menu.

- Which additional pages are required beyond landing (About, Services, Portfolio, Contact, Blog, Careers)?
Contact should be a section at the bottom of the landing page.

## 4) Landing Page Content
- Who will provide final hero headline, subheadline, and CTA text?
Use content from who_are_we.md to generate the hero headline, subheadline, and CTA text.

- What exact services should be listed in the Services section?
Use content from who_are_we.md to generate the list of services.

- How many portfolio items should be shown initially, and what metadata is needed (title, stack, results)?
Use content from who_are_we.md to generate the list of portfolio items and their metadata.

- Contact section: email only, contact form, social links, phone, office location?
I'm looking for a way to do this with no backend, I'm not sure how though.

## 5) Design and UX
- Do you have visual references (sites you like/dislike)?
- Preferred visual style (minimal, editorial, bold, corporate, experimental)?
minimal

- Preferred fonts and color palette, or should we propose one?
you can choose one

- Do you want animations/motion effects, and if yes, how subtle or bold?
yes, but they should be subtle and not too distracting. They should enhance the user experience and make the website feel more dynamic, but they should not be overwhelming or take away from the content.

## 6) Technical and Deployment
- Confirm GitHub Pages setup: custom domain configured already in DNS?
It is not yet deployed, but we will set it up after the development is done. We will use Github Pages to deploy the website, and we will use a custom domain (kalalib.com) for the website.

- Should deployment support apex domain and www redirects?
Preferably, www. should redirect to apex domain.

- Are separate repos/branches planned for subdomains or one monorepo approach?
Another repo for solutions and studio, this repo is only for the main site.

- Any required analytics (GA4, Plausible, PostHog) and cookie consent needs?
I don't think so?

## 7) SEO and Content Strategy
Help me with this, I'm not sure what keywords we should target.

- What are the top keywords/phrases you want to rank for?
- Recommended keyword set for MVP:
	- KALA
	- KALA Hong Kong
	- software development Hong Kong
	- web development Hong Kong
	- startup technology partner
	- SME digital solutions
	- product development studio Hong Kong

- Which pages need custom meta title/description now?
- Recommended now:
	- Home (/): custom title and description focused on credibility + services + Hong Kong/international coverage.
	- Team (/team): custom title and description focused on expertise and team background.

- Do we need Open Graph images and social preview defaults at launch?
- Yes. Include default OG image and per-page og:title and og:description.

- Should sitemap.xml and robots.txt be included in first release?
- Yes. Include both in MVP.

## 8) Contact and Lead Flow
Help me with this, I'm not sure how we should handle the contact form submissions without a backend.
- Where should form submissions go (email, webhook, CRM, Notion, Airtable)?
- Recommended no-backend approach:
	- Use Formspree for form submission and email delivery.
	- Route notifications to your business email.
	- Optional phase 2: send a webhook to Notion/Airtable for lead tracking.

- Any required anti-spam approach (honeypot, CAPTCHA, rate limits)?
- Recommended:
	- Honeypot field (required)
	- Basic client-side validation (required)
	- Optional CAPTCHA only if spam volume increases

- What is the expected response SLA you want to communicate to leads?
- Recommended SLA statement: "We usually reply within 1-2 business days."

## 9) Compliance and Operations
- Do we need Privacy Policy, Terms, or regional compliance pages (GDPR, etc.) at launch?
Don't think so
- Who approves final copy/design before deployment?
I will approve the final copy and design before deployment.
- What is the target launch date and any immovable milestones?
Unrelated

## 10) Acceptance Criteria
Help me with this:
- What are the must-have acceptance criteria for launch readiness?
- Recommended launch checklist:
	- Home and Team pages are complete and responsive.
	- Navbar is sticky, mobile menu works, subdomain links open in new tab.
	- Contact section is functional via Formspree and tested end-to-end.
	- SEO basics are in place (title, description, OG tags, sitemap.xml, robots.txt).
	- Favicon, logo assets, and social preview image are set.
	- No blocking console errors in production build.

- Which browsers/devices are mandatory to support?
- Recommended support matrix:
	- Latest Chrome, Safari, Edge, Firefox
	- iOS Safari (latest 2 major versions)
	- Android Chrome (latest 2 major versions)

- What performance targets should we meet (e.g., Lighthouse thresholds)?
- Recommended Lighthouse targets (mobile):
	- Performance >= 85
	- Accessibility >= 95
	- Best Practices >= 95
	- SEO >= 95
