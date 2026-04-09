import type { Metadata } from "next";
import Link from "next/link";
import { IoCheckmarkCircle, IoHomeOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Thanks | KALA",
  description: "Thanks for your message. KALA will get back to you soon.",
};

export default function ThanksPage() {
  return (
    <main className="section-shell flex min-h-[calc(100svh-5rem)] items-center py-12">
      <section className="card-surface mx-auto w-full max-w-2xl p-8 text-center md:p-12">
        <div className="mx-auto mb-5 inline-flex rounded-full bg-gradient-to-tr from-kala-accent to-kala-secondary p-3 text-white">
          <IoCheckmarkCircle size={28} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-fuchsia-700">Message Received</p>
        <h1 className="mt-2 text-4xl font-bold text-kala-deep" style={{ fontFamily: "var(--font-heading)" }}>
          Thank you for reaching out.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          We have received your message and will reply within 1-2 business days.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-kala-accent to-kala-secondary px-5 py-3 font-semibold text-white transition hover:from-[#cb6fff] hover:to-[#4aa9fb]"
          >
            <IoHomeOutline />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
