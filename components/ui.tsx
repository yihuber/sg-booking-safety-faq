import Link from "next/link";
import { ArrowRight, ExternalLink, Globe2, RadioTower, ShieldCheck } from "lucide-react";
import { contactLinks, site } from "@/lib/site-data";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <ShieldCheck size={18} />
    </span>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

export function Hero() {
  return (
    <section className="hero-scene relative isolate overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="scanline" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="eyebrow">{site.heroEyebrow}</p>
          <h1 className="display-title text-5xl text-white sm:text-6xl lg:text-7xl">
            {site.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {site.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={site.officialWebsite} target="_blank" rel="nofollow noopener noreferrer">
              <Globe2 size={18} />
              {site.primaryCta}
            </a>
            <Link className="btn-secondary" href="/faq">
              <ShieldCheck size={18} />
              {site.secondaryCta}
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-500">
            Informational guide only. 中文提示：请先核对官方链接，再继续沟通。
          </p>
        </div>
        <div className="signal-panel">
          <div className="signal-panel__header">
            <span>LIVE LINK CHECK</span>
            <span>SG</span>
          </div>
          <div className="signal-meter" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mt-7 grid gap-3">
            {contactLinks.map((link, index) => (
              <a
                key={link.href}
                className="signal-row group"
                href={link.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span className="signal-index">0{index + 1}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-white">{link.label}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-400">{link.description}</span>
                </span>
                <ExternalLink size={16} className="text-slate-500 transition group-hover:text-aurum" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}

export function GlassCard({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

export function HighlightGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {site.highlights.map((item) => (
        <GlassCard key={item.title}>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">{item.body}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export function StepList() {
  return (
    <div className="grid gap-3">
      {site.steps.map((step, index) => (
        <div key={step} className="step-row">
          <span className="step-number">{index + 1}</span>
          <p className="text-sm leading-6 text-slate-300">{step}</p>
        </div>
      ))}
    </div>
  );
}

export function ContextGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {site.contextCards.map((item) => (
        <GlassCard key={item.title} className="terminal-grid">
          <RadioTower size={20} className="text-electric" />
          <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">{item.body}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export function FaqList({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? site.faqs.slice(0, limit) : site.faqs;

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <GlassCard key={item.question}>
          <h3 className="text-lg font-semibold text-white">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
        </GlassCard>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="cta-band">
          <div>
            <p className="eyebrow">Official links</p>
            <h2 className="section-title">Use verified public links before taking action.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={site.telegramGroup} target="_blank" rel="nofollow noopener noreferrer">
              <RadioTower size={18} />
              Join Official Group
            </a>
            <a className="btn-secondary" href={site.telegramChannel} target="_blank" rel="nofollow noopener noreferrer">
              <ArrowRight size={18} />
              Follow Official Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
