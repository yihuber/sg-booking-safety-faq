import Link from "next/link";
import { CtaBand, FaqList, Hero, HighlightGrid, Section, StepList, ContextGrid } from "@/components/ui";
import { pageMetadata, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section eyebrow={site.sections.highlightsEyebrow} title={site.sections.highlightsTitle}>
        <HighlightGrid />
      </Section>
      <Section eyebrow={site.sections.stepsEyebrow} title={site.sections.stepsTitle}>
        <StepList />
      </Section>
      <Section eyebrow={site.sections.contextEyebrow} title={site.sections.contextTitle}>
        <ContextGrid />
      </Section>
      <Section eyebrow="FAQ preview" title="Common questions before using any contact link.">
        <FaqList limit={3} />
        <Link className="mt-6 inline-flex items-center text-sm font-semibold text-electric hover:text-white" href="/faq">
          Read all FAQ
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}
