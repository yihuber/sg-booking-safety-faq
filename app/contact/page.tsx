import { ExternalLink } from "lucide-react";
import { CtaBand, GlassCard, Section } from "@/components/ui";
import { contactLinks, pageMetadata, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Official Contact",
  description: `Official public links for ${site.name}, including Telegram group, Telegram channel, and website.`,
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">Official contact</p>
          <h1 className="display-title max-w-4xl text-5xl text-white sm:text-6xl">
            Use only the public links listed here.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            These links point to the public Telegram group, Telegram channel, and official website. 中文提示：请核对链接拼写，避免相似账号。
          </p>
        </div>
      </section>
      <Section eyebrow="Links" title="Official public channels.">
        <div className="grid gap-4 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="nofollow noopener noreferrer" className="group">
              <GlassCard className="h-full transition group-hover:border-electric/45 group-hover:bg-white/[0.08]">
                <ExternalLink size={20} className="text-electric" />
                <h2 className="mt-5 text-xl font-semibold text-white">{link.label}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">{link.description}</p>
                <p className="mt-5 break-words text-xs text-slate-500">{link.href}</p>
              </GlassCard>
            </a>
          ))}
        </div>
      </Section>
      <Section eyebrow="Verification notes" title="Before you continue.">
        <div className="grid gap-3">
          {site.contactNotes.map((note, index) => (
            <div key={note} className="step-row">
              <span className="step-number">{index + 1}</span>
              <p className="text-sm leading-6 text-slate-300">{note}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand />
    </>
  );
}
