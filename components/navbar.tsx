"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenu, IoOpenOutline } from "react-icons/io5";

type NavItem = {
  href: string;
  label: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { href: "/team", label: "Team" },
  { href: "https://solutions.kalalib.com", label: "KALA Solutions", external: true },
  { href: "https://studio.kalalib.com", label: "KALA Studio", external: true },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="KALA home">
          <Image
            src="/kalalib_logo.png"
            alt="KALA logo"
            width={52}
            height={52}
            className="rounded-md transition group-hover:scale-105"
          />
          <span className="text-lg font-semibold tracking-wide text-kala-deep">KALA</span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-kala-deep hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              {item.external ? (
                <a className="nav-link" href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                  <IoOpenOutline size={14} />
                </a>
              ) : (
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="section-shell flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.external ? (
                  <a
                    className="nav-link w-full justify-between"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                    <IoOpenOutline size={15} />
                  </a>
                ) : (
                  <Link className="nav-link w-full" href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
