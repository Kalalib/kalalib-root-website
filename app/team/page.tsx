import type { Metadata } from "next";
import { FaXTwitter } from "react-icons/fa6";
import { IoGlobeOutline, IoLogoGithub, IoSchoolOutline, IoSparklesOutline } from "react-icons/io5";

type WebsiteIcon = "github" | "globe" | "x";

type WebsiteLink = {
  icon: WebsiteIcon;
  text: string;
  url: string;
};

type TeamMember = {
  name: string;
  role: string;
  summary: string;
  highlights: string[];
  websites?: WebsiteLink[];
};

export const metadata: Metadata = {
  title: "Team | KALA",
  description:
    "Meet the KALA team behind software delivery, creative development, and cross-industry product experiences.",
};

const members: TeamMember[] = [
  {
    name: "Kapakki Lo (Gameboy612)",
    role: "Founder of KALALib, Lead Developer of KALA Solutions",
    summary:
      "Majored in Artificial Intelligence: Systems and Technologies at The Chinese University of Hong Kong. Works on web and AI projects bridging technology and healthcare.",
    highlights: [
      "Active in cybersecurity and CTF competitions.",
      "Champion in NuttyShell CTF 2026 (Team Meng Wei).",
      "First runner-up in CUHK CTF 2025.",
    ],
    websites: [
      {
        icon: "github",
        text: "Github",
        url: "https://github.com/Gameboy612",
      },
      {
        icon: "globe",
        text: "Website",
        url: "https://kapakki.com",
      },
    ],
  },
  {
    name: "Andy Wong (DoubleA)",
    role: "Co-founder of KALALib, Lead Developer of KALA Studios",
    summary:
      "Majored in Computer Engineering at The Hong Kong Polytechnic University and has delivered projects in game development and modding.",
    highlights: ["Leads core engineering initiatives for KALA Studios.", "Focuses on creative technical execution."],
    websites: [
      {
        icon: "github",
        text: "Github",
        url: "https://github.com/DoubleA0605",
      },
    ],
  },
  {
    name: "Felix Fong (Lavafox)",
    role: "Co-founder of KALALib, Lead Graphic Designer of KALA Studios",
    summary:
      "Majored in Creative Media at City University of Hong Kong and has worked across game development and modding projects.",
    highlights: [
      "Active 3D designer building assets for Devas and related projects.",
      "Supports visual direction for KALA Studio products.",
    ],
    websites: [
      {
        icon: "github",
        text: "Github",
        url: "https://github.com/lavafoxerex",
      },
      {
        icon: "x",
        text: "X",
        url: "https://x.com/lavafoxerex",
      },
    ],
  },
];

const websiteIconMap = {
  github: IoLogoGithub,
  globe: IoGlobeOutline,
  x: FaXTwitter,
} as const;

export default function TeamPage() {
  return (
    <main className="section-shell pb-20 pt-16 md:pt-20">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-700">Team</p>
        <h1 className="mt-2 text-4xl font-bold text-kala-deep md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Builders Behind KALA
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          KALA combines engineering, product thinking, and creative production to help startups and SMEs move faster.
        </p>
      </header>

      <section className="grid gap-5">
        {members.map((member) => (
          <article
            key={member.name}
            className="card-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-kala-accent/40 hover:bg-gradient-to-tr hover:from-kala-accentSoft/60 hover:to-kala-secondarySoft/70 hover:shadow-[0_16px_42px_-22px_rgba(214,127,255,0.5)] md:p-8"
          >
            <h2 className="text-2xl font-semibold text-kala-deep">{member.name}</h2>
            <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-kala-accent/30 bg-gradient-to-tr from-kala-accentSoft to-kala-secondarySoft px-3 py-1 text-sm font-medium text-fuchsia-700">
              <IoSparklesOutline />
              {member.role}
            </p>
            <p className="mt-4 text-slate-600">{member.summary}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {member.highlights.map((highlight) => (
                <li key={highlight} className="inline-flex items-start gap-2">
                  <IoSchoolOutline className="mt-0.5 text-fuchsia-700" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {member.websites && member.websites.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-4">
                {member.websites.map((website) => {
                  const Icon = websiteIconMap[website.icon];

                  return (
                    <a
                      key={`${member.name}-${website.url}`}
                      href={website.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-700 hover:text-sky-700"
                    >
                      <Icon />
                      {website.text}
                    </a>
                  );
                })}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
