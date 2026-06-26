"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most Starter projects launch in 2–3 weeks. Growth packages with AI chatbot and booking typically take 3–4 weeks from kickoff to go-live.",
  },
  {
    question: "What's included in the free site audit?",
    answer:
      "We review your current site (or online presence) for speed, mobile experience, SEO gaps, and conversion issues — then send you a plain-English report with prioritized fixes, no strings attached.",
  },
  {
    question: "Do I need to provide my own content and photos?",
    answer:
      "We can work with what you have, or help write copy and source stock imagery. Most clients send us a logo, a few photos, and bullet points about their services — we handle the rest.",
  },
  {
    question: "Will my site rank on Google?",
    answer:
      "Every site includes basic SEO setup. Growth plans add local SEO optimization for Northern Virginia — Google Business Profile, local keywords, and schema markup to help you show up in nearby searches.",
  },
  {
    question: "What if I'm not happy with the design?",
    answer:
      "Starter includes one revision round. We share designs before building and iterate until you're confident it represents your business. No launch until you approve.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left transition hover:text-violet-300"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-[#fafaf9]">
                {faq.question}
              </span>
              <span
                className={`shrink-0 text-violet-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-sm leading-relaxed text-zinc-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
