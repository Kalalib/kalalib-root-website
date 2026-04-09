import type { Metadata } from "next";
import { IoGlobeOutline, IoSchoolOutline, IoSparklesOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Team | KALA",
  description:
    "Meet the KALA team behind software delivery, creative development, and cross-industry product experiences.",
};

const members = [
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
    website: "https://kapakki.com",
  },
  {
    name: "Andy Wong (DoubleA)",
    role: "Co-founder of KALALib, Lead Developer of KALA Studios",
    summary:
      "Majored in Computer Engineering at The Hong Kong Polytechnic University and has delivered projects in game development and modding.",
    highlights: ["Leads core engineering initiatives for KALA Studios.", "Focuses on creative technical execution."],
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
  },
];

export default function TeamPage() {
  return (
    <main className="section-shell pb-20 pt-16 md:pt-20">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Team</p>
        <h1 className="mt-2 text-4xl font-bold text-kala-deep md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
          Builders Behind KALA
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          KALA combines engineering, product thinking, and creative production to help startups and SMEs move faster.
        </p>
      </header>

      <section className="grid gap-5">
        {members.map((member) => (
          <article key={member.name} className="card-surface p-7 md:p-8">
            <h2 className="text-2xl font-semibold text-kala-deep">{member.name}</h2>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-teal-700">
              <IoSparklesOutline />
              {member.role}
            </p>
            <p className="mt-4 text-slate-600">{member.summary}</p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              {member.highlights.map((highlight) => (
                <li key={highlight} className="inline-flex items-start gap-2">
                  <IoSchoolOutline className="mt-0.5 text-teal-700" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            {member.website ? (
              <a
                href={member.website}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                <IoGlobeOutline />
                Personal website
              </a>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
