import Link from "next/link";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { contactLinks, pageMetadata, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="brief-hero">
        <div className="mx-auto max-w-6xl">
          <p className="brief-label">{site.heroEyebrow}</p>
          <h1 className="display-title">{site.heroTitle}</h1>
          <p className="hero-copy">{site.heroDescription}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={site.officialWebsite} target="_blank" rel="nofollow noopener noreferrer">
              {site.primaryCta}
            </a>
            <Link className="btn-secondary" href="/faq">
              {site.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
      <section className="brief-layout">
        <aside className="brief-index">
          <span>Safety brief</span>
          <strong>Read this before using any contact link.</strong>
          <p>Short, practical checks for official links, pricing clarity, privacy, and common red flags.</p>
        </aside>
        <div className="brief-list">
          {site.highlights.map((item, index) => (
            <article key={item.title}>
              <span>{index + 1}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="checklist-zone">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">{site.sections.stepsEyebrow}</p>
            <h2 className="section-title">{site.sections.stepsTitle}</h2>
            <div className="checklist">
              {site.steps.map((step) => (
                <div key={step}>
                  <CheckCircle2 size={18} />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="link-ledger">
            <p className="eyebrow">Official links</p>
            {contactLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="nofollow noopener noreferrer">
                <span>
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="faq-preview">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">FAQ preview</p>
          <h2 className="section-title">Questions worth answering before you proceed.</h2>
          <div className="faq-columns">
            {site.faqs.slice(0, 3).map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
