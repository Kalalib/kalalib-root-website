import Link from "next/link";
import { IoArrowForward, IoMailOpenOutline, IoRocketOutline, IoSparklesOutline } from "react-icons/io5";

const services = [
  {
    title: "Web and Mobile Development",
    description:
      "We build reliable web applications and mobile products tailored for startups and SMEs.",
    icon: IoRocketOutline,
  },
  {
    title: "Custom Software Solutions",
    description:
      "From internal CRM tools to workflow automation, we design software around real operations.",
    icon: IoSparklesOutline,
  },
  {
    title: "Social Workflow Integration",
    description:
      "We connect your audience channels with practical workflows, including WhatsApp-based customer flows.",
    icon: IoMailOpenOutline,
  },
];

const portfolio = [
  {
    name: "WellWiseSolutions",
    logo: "/assets/portfolio/wellwisesolutions_logo.png",
    stack: "Private CRM and Workflow Systems",
    result: "Built a private CRM to manage customer interactions and data.",
    tags: ["Workflow Automation", "CRM"]
  },
  {
    name: "Amazing Echo Solutions",
    logo: "/assets/portfolio/amazing-echo.svg",
    stack: "Website Development",
    result: "Delivered web presence support for a medical-grade air purifier company in Hong Kong.",
    tags: ["Website", "B2B"],
    href: "https://wankunsystem.github.io",
  },
  {
    name: "Jokangel Crystals",
    logo: "/assets/portfolio/jokangel_crystal_logo.png",
    stack: "Website Development",
    result: "Developed a digital storefront foundation for a gemstone and crystal business.",
    tags: ["Website", "E-commerce"],
    href: "https://lokapakki.wixstudio.com/jokangel-shop",
  },
  {
    name: "FeastAR",
    logo: "/assets/portfolio/feastar_logo.png",
    stack: "Augmented reality product concept",
    result: "Built an AR experience for interactive food visualization.",
    tags: ["AR", "Product Concept"],
    href: "https://feastar.kalalib.com",
  },
  {
    name: "Devas",
    logo: "/assets/portfolio/devas.svg",
    stack: "Minecraft RPG map and datapack systems",
    result: "Designed multiplayer RPG mechanics, custom stats, and content systems.",
    tags: ["Games", "Minecraft", "RPG", "Multiplayer"],
    href: "https://v1.kapakki.com/devas",
  },
  {
    name: "SpaceTech",
    logo: "/assets/portfolio/spacetech_logo.png",
    stack: "Minecraft modpack",
    result: "Launched a themed modpack with 1348+ downloads on CurseForge.",
    tags: ["Games", "Minecraft", "Modpack"],
    href: "https://www.curseforge.com/minecraft/modpacks/spacetech-space-capsule",
  },
];

export default function Home() {
  const formAction = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mjgpddyz";
  const thanksRedirect = `${process.env.NEXT_PUBLIC_SITE_URL || "https://kalalib.com"}/thanks/`;

  return (
    <main>
      <section className="section-shell flex min-h-[calc(100svh-5rem)] items-center mb-20">
        <div className="card-surface animate-rise mx-auto w-full max-w-5xl overflow-hidden p-8 md:p-12">
          <p className="mb-4 inline-flex rounded-full border border-kala-accent/30 bg-gradient-to-tr from-kala-accentSoft to-kala-secondarySoft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-700">
            Hong Kong and Global Delivery
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold leading-tight text-kala-deep md:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KALA - Technology for Startups and SMEs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            We build solutions for startups and SMEs across web, mobile, and creative platforms.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-kala-accent to-kala-secondary px-5 py-3 font-semibold text-white shadow-[0_10px_28px_-15px_rgba(214,127,255,0.9)] transition hover:translate-y-[-1px] hover:from-[#cb6fff] hover:to-[#4aa9fb]"
            >
              Explore Services
              <IoArrowForward />
            </a>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell pb-40">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-700">Services</p>
            <h2 className="mt-2 text-3xl font-bold text-kala-deep" style={{ fontFamily: "var(--font-heading)" }}>
              What We Build
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="card-surface p-6 transition hover:-translate-y-1">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-tr from-kala-accent to-kala-secondary p-3 text-white shadow-[0_8px_22px_-14px_rgba(94,180,255,0.8)]">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-kala-deep">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="portfolio" className="section-shell pb-20">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-700">Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold text-kala-deep" style={{ fontFamily: "var(--font-heading)" }}>
            Selected Work
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {portfolio.map((item) => (
            <article
              key={item.name}
              className="card-surface flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-kala-accent/40 hover:bg-gradient-to-tr hover:from-kala-accentSoft/60 hover:to-kala-secondarySoft/70 hover:shadow-[0_16px_42px_-22px_rgba(214,127,255,0.5)]"
            >
              <div className="mb-4 flex items-start gap-4">
                <img
                  src={item.logo}
                  alt={`${item.name} logo`}
                  className="h-12 w-12 shrink-0 rounded-xl border border-slate-200 bg-white object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.stack}</div>
                  <h3 className="mt-1 text-xl font-semibold text-kala-deep">{item.name}</h3>
                </div>
              </div>
              <p className="mt-3 text-slate-600">{item.result}</p>
              <div className="mt-auto pt-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={`${item.name}-${tag}`}
                        className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.href && item.href !== "#" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-fuchsia-700 hover:text-sky-700"
                    >
                      Visit project
                      <IoArrowForward />
                    </a>
                  ) : (
                    <span className="inline-flex text-sm font-medium text-slate-400">Case study available on request</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-24">
        <div className="card-surface p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-700">Contact</p>
              <h2 className="mt-2 text-3xl font-bold text-kala-deep" style={{ fontFamily: "var(--font-heading)" }}>
                Let&apos;s discuss your next project
              </h2>
              <p className="mt-4 text-slate-600">
                We usually reply within 1-2 business days. For direct contact, email us at
                <a className="ml-1 font-semibold text-fuchsia-700 hover:text-sky-700" href="mailto:hello@kalalib.com">
                  hello@kalalib.com
                </a>
                .
              </p>
            </div>

            <form
              method="POST"
              action={formAction}
              className="grid gap-3"
              aria-label="Contact form"
            >
              <input type="hidden" name="_subject" value="New inquiry from kalalib.com" />
              <input type="hidden" name="_next" value={thanksRedirect} />
              <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
              <input
                required
                name="name"
                placeholder="Your name"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-kala-accent"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-kala-accent"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell us what you want to build"
                className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-kala-accent"
              />
              <button
                type="submit"
                className="mt-1 rounded-lg bg-gradient-to-tr from-kala-accent to-kala-secondary px-4 py-3 font-semibold text-white transition hover:from-[#cb6fff] hover:to-[#4aa9fb]"
              >
                Send message
              </button>
              {/* <p className="text-xs text-slate-500">
                Configure NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable submissions.
              </p> */}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
