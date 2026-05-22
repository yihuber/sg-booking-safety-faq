import { CtaBand, FaqList, JsonLd } from "@/components/ui";
import { faqJsonLd, pageMetadata, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "FAQ",
  description: `Frequently asked questions for ${site.name}: official contact, link checks, pricing context, privacy, and safety reminders.`,
  path: "/faq"
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow">FAQ</p>
          <h1 className="display-title max-w-4xl text-5xl text-white sm:text-6xl">
            Clear answers before using official links.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            A short FAQ for link verification, contact safety, transparent terms, and local Singapore planning context.
          </p>
        </div>
      </section>
      <section className="px-5 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FaqList />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
