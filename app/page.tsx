"use client";

import { useState } from "react";
import { FAQAccordion } from "./faq-accordion";
import { FadeInSection } from "./fade-in-section";
import { Navbar } from "./navbar";

const stats = [
  { label: "10+ Sites Built" },
  { label: "NOVA Local" },
  { label: "24hr Response" },
];

const services = [
  {
    title: "Website Redesign",
    description:
      "Modern, mobile-first redesign that reflects your brand and converts visitors.",
  },
  {
    title: "AI Chatbot",
    description:
      "24/7 automated answers for common questions — never miss a lead again.",
  },
  {
    title: "Online Booking",
    description:
      "Let customers schedule appointments online without the phone tag.",
  },
  {
    title: "Analytics",
    description:
      "Track visitors, conversions, and what actually drives your business.",
  },
  {
    title: "Reviews Display",
    description:
      "Showcase Google reviews front and center to build instant trust.",
  },
  {
    title: "Local SEO",
    description:
      "Rank higher in Northern Virginia search and get found by nearby customers.",
  },
];

const testimonials = [
  {
    quote:
      "We went from zero online bookings to 15+ appointments a week. The new site paid for itself in the first month.",
    name: "Maria Santos",
    business: "Glow Studio Salon",
    location: "Herndon, VA",
  },
  {
    quote:
      "Verge rebuilt our site in under three weeks. We're finally showing up on Google when people search for contractors in Fairfax.",
    name: "James Okonkwo",
    business: "Okonkwo Home Services",
    location: "Fairfax, VA",
  },
  {
    quote:
      "Professional, fast, and they actually understand small business. Our contact form leads tripled after launch.",
    name: "Priya Sharma",
    business: "Arlington Bites Catering",
    location: "Arlington, VA",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, your customers, and what you want to achieve.",
  },
  {
    number: "02",
    title: "Design & Strategy",
    description:
      "Wireframes and a content plan tailored to your market and audience.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "AI chatbot, booking, analytics, and SEO — all built in from day one.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Go live with ongoing support to keep improving your results.",
  },
];

const trustPoints = [
  "Free site audit — no commitment required",
  "Northern Virginia based, built for local businesses",
  "Most projects launch within 2–3 weeks",
];

const serviceOptions = [
  "Website Redesign",
  "AI Chatbot",
  "Online Booking",
  "Analytics",
  "Reviews Display",
  "Local SEO",
  "Free Site Audit",
  "Other",
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$300 one-time",
    popular: false,
    features: [
      "Clean modern redesign",
      "Mobile responsive",
      "Contact form",
      "Google Analytics",
      "1 revision round",
    ],
  },
  {
    name: "Growth",
    price: "$500 one-time + $50/mo",
    popular: true,
    features: [
      "Everything in Starter",
      "AI chatbot",
      "Online booking system",
      "Local SEO setup",
      "Monthly updates",
    ],
  },
];

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 fill-violet-400 text-violet-400"
      viewBox="0 0 20 20"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.019 3.141a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10" aria-hidden>
      <div className="h-px w-full bg-violet-500/20" />
    </div>
  );
}

function BrowserMockup() {
  return (
    <div className="browser-float relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#161922] shadow-2xl shadow-violet-900/30">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0d0f14] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="mx-auto flex h-6 w-48 items-center rounded-md bg-white/5 px-3">
            <span className="truncate text-[10px] text-zinc-500">
              glowstudiosalon.com
            </span>
          </div>
        </div>

        {/* Mock site content */}
        <div className="bg-gradient-to-b from-[#1a1033] to-[#0d0f14] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#fafaf9]">
              Glow Studio
            </span>
            <span className="rounded-full bg-violet-600/30 px-2.5 py-1 text-[9px] text-violet-300">
              Book Now
            </span>
          </div>
          <div className="mb-4 rounded-lg bg-gradient-to-br from-violet-600/40 to-pink-500/20 p-4">
            <p className="text-sm font-bold leading-tight text-white">
              Your best look,
              <br />
              booked in seconds.
            </p>
            <p className="mt-1 text-[10px] text-violet-200/70">
              Herndon&apos;s top-rated salon
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {["Cuts", "Color", "Spa"].map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/10 bg-white/5 py-2 text-center text-[9px] text-zinc-400"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-1 text-[9px] text-zinc-500">4.9 · 127 reviews</span>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-violet-600/20 blur-3xl"
        aria-hidden
      />
    </div>
  );
}

const inputClassName =
  "input-editorial w-full bg-transparent py-3 text-sm text-[#fafaf9] placeholder:text-zinc-600";

const ctaClassName =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90";

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mkoljdjo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        e.currentTarget.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-[#080810] font-sans text-[#fafaf9]">
      <Navbar />

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden px-6 pt-36 pb-20 lg:px-10 lg:pt-44 lg:pb-28"
        >
          <div className="hero-grid-lines pointer-events-none absolute inset-0" aria-hidden />
          <div
            className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[160px]"
            aria-hidden
          />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeInSection>
              <p className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Northern Virginia Web Design
              </p>

              <h1 className="text-5xl font-black leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
                <span className="text-[#fafaf9]">Websites that work as hard</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  as you do.
                </span>
              </h1>

              <p className="mt-8 max-w-md text-base leading-relaxed text-zinc-400">
                We build AI-powered websites that capture leads, book
                appointments, and grow your revenue — starting from $300.
                <br />
                No templates. No agencies. Just results.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className={ctaClassName}>
                  Get Your Free Site Audit
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-3.5 text-sm font-medium text-zinc-400 transition hover:border-white/20 hover:text-[#fafaf9]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                {stats.map((stat) => (
                  <span
                    key={stat.label}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-violet-400" />
                    {stat.label}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={150} className="lg:pl-4">
              <BrowserMockup />
            </FadeInSection>
          </div>

          {/* Social proof bar */}
          <div className="relative mt-16 w-full border-y border-white/10 py-4">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 lg:px-10">
              <div className="flex items-center gap-0.5" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-xs text-zinc-500">
                Trusted by local businesses across Fairfax, Herndon, Arlington
                &amp; Falls Church
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Services */}
        <section id="services" className="px-6 py-32 lg:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeInSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                What we do
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-[#fafaf9] lg:text-5xl">
                Everything your business needs online.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-400">
                From a stunning redesign to AI tools that work around the clock —
                we build the digital infrastructure local businesses need to
                compete and win.
              </p>
            </FadeInSection>

            <FadeInSection delay={120}>
              <div>
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="group border-b border-white/10 py-7 transition first:pt-0 last:border-b-0 hover:-mx-4 hover:rounded-xl hover:border-b-transparent hover:bg-white/[0.03] hover:px-4"
                  >
                    <div className="flex gap-6">
                      <span className="mt-0.5 font-mono text-xs text-violet-400/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#fafaf9] transition group-hover:text-violet-300">
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        <SectionDivider />

        {/* Testimonials */}
        <section id="testimonials" className="px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <FadeInSection className="mb-16 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Testimonials
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#fafaf9] lg:text-5xl">
                What local owners say.
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {testimonials.map((t, index) => (
                <FadeInSection key={t.name} delay={index * 100}>
                  <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <div className="mb-4 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-zinc-300">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <footer className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-sm font-semibold text-[#fafaf9]">
                        {t.name}
                      </p>
                      <p className="text-xs text-zinc-500">
                        {t.business} · {t.location}
                      </p>
                    </footer>
                  </blockquote>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* How It Works */}
        <section id="how-it-works" className="px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <FadeInSection className="mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Process
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#fafaf9] lg:text-5xl">
                How it works
              </h2>
            </FadeInSection>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <FadeInSection key={step.number} delay={index * 80}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-violet-500/10 bg-white/[0.03] p-6 backdrop-blur-sm">
                    <span
                      className="pointer-events-none absolute -right-1 -bottom-3 select-none text-8xl font-black leading-none text-violet-400/10"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                    <div className="relative z-10">
                      <span className="font-mono text-xs text-violet-400/70">
                        {step.number}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-[#fafaf9]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Pricing */}
        <section id="pricing" className="px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <FadeInSection className="text-center">
              <h2 className="text-4xl font-black tracking-tight text-[#fafaf9] lg:text-5xl">
                Currently offering free websites to local businesses.
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-zinc-400">
                I'm a Northern Virginia student building my portfolio. In exchange for a free website, I ask only for an honest testimonial and permission to show your site as an example of my work.
              </p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] px-8 py-4 text-sm font-medium text-white transition hover:opacity-90"
              >
                Claim Your Free Website
              </a>
            </FadeInSection>
          </div>
        </section>

        <SectionDivider />

        {/* FAQ */}
        <section id="faq" className="px-6 py-32 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <FadeInSection className="mb-12 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                FAQ
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#fafaf9] lg:text-5xl">
                Common questions.
              </h2>
            </FadeInSection>

            <FadeInSection delay={100}>
              <FAQAccordion />
            </FadeInSection>
          </div>
        </section>

        <SectionDivider />

        {/* Contact */}
        <section id="contact" className="px-6 py-32 lg:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeInSection>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Get in touch
              </p>
              <h2 className="mt-4 text-5xl font-black leading-[0.95] tracking-tight text-[#fafaf9] lg:text-6xl">
                Start a project.
              </h2>
              <ul className="mt-10 space-y-4">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeInSection>

            <FadeInSection delay={120}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {formStatus === "success" && (
                  <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-300">
                    Thanks! I'll be in touch within 24 hours.
                  </div>
                )}
                
                {formStatus === "error" && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-300">
                    Something went wrong, please email me directly at <a href="mailto:eagle2regal@gmail.com" className="underline">eagle2regal@gmail.com</a>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-xs uppercase tracking-wider text-zinc-500"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="business"
                      className="mb-1 block text-xs uppercase tracking-wider text-zinc-500"
                    >
                      Business
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      placeholder="Business name"
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-xs uppercase tracking-wider text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@business.com"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1 block text-xs uppercase tracking-wider text-zinc-500"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue="Free Site Audit"
                    className={`${inputClassName} cursor-pointer appearance-none`}
                  >
                    {serviceOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#080810]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-xs uppercase tracking-wider text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about your project or paste your website URL..."
                    className={`${inputClassName} resize-none`}
                  />
                </div>

                <p className="text-center text-[11px] text-zinc-500">
                  ✓ Free site audit · ✓ Response within 24 hours · ✓ No
                  commitment required
                </p>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] py-4 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Sending..." : "Get Your Free Site Audit"}
                  {formStatus !== "submitting" && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="border-t border-violet-500/20 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-zinc-500 md:flex-row">
          <span>Verge Studio — Northern Virginia</span>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-violet-400"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:eagle2regal@gmail.com"
            className="transition hover:text-violet-400"
          >
            eagle2regal@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
