import type { Metadata } from "next";

export const site = {
  "repo": "sg-booking-safety-faq",
  "name": "Singapore Booking Safety FAQ",
  "shortName": "SG Safety FAQ",
  "accent": "safety",
  "tagline": "Practical safety notes for Singapore local booking research.",
  "description": "Singapore booking safety FAQ covering official contact checks, transparent pricing notes, privacy reminders, and practical red flags.",
  "heroEyebrow": "Booking safety FAQ",
  "heroTitle": "Make every booking decision slower, clearer, and safer.",
  "heroDescription": "A simple information site for Singapore users who want official links, transparent terms, price context, and practical safety checks before contacting any platform.",
  "primaryCta": "Open Official Platform",
  "secondaryCta": "Read Safety FAQ",
  "sections": {
    "highlightsEyebrow": "Safety basics",
    "highlightsTitle": "Keep the process transparent.",
    "stepsEyebrow": "Checklist",
    "stepsTitle": "Before you commit, check these three points.",
    "contextEyebrow": "Pricing context",
    "contextTitle": "Price clarity matters more than slogans."
  },
  "highlights": [
    {
      "title": "Official-first contact",
      "body": "Use published links and avoid switching to unrelated accounts during the decision process."
    },
    {
      "title": "Written terms",
      "body": "Look for clear timing, scope, price notes, cancellation rules, and support instructions."
    },
    {
      "title": "Privacy control",
      "body": "Share only what is necessary for the current step and avoid unnecessary personal details."
    }
  ],
  "steps": [
    "Confirm the official contact source and compare it with the website or public channel.",
    "Read the current terms, price context, timing notes, and cancellation expectations.",
    "Save the relevant reference messages so follow-up support is easier if details change."
  ],
  "contextCards": [
    {
      "title": "Timing",
      "body": "Availability and timing can affect quotes. Current terms should be confirmed through official contact."
    },
    {
      "title": "Area",
      "body": "Central areas such as Orchard, Marina Bay, Bugis, and Chinatown can have different logistics."
    },
    {
      "title": "Scope",
      "body": "A clear quote should explain what is included, what is not included, and what happens next."
    }
  ],
  "contactNotes": [
    "Avoid urgent pressure, vague pricing, and requests to leave the official process.",
    "Confirm the current quote and cancellation terms before making any commitment.",
    "Use official contact links when asking support or clarification questions."
  ],
  "faqs": [
    {
      "question": "Does this site process bookings?",
      "answer": "No. This site is an informational guide. It only points readers to official contact channels and safety checks."
    },
    {
      "question": "Why can pricing change?",
      "answer": "Timing, availability, area logistics, and platform policy updates can affect current quotes. Always confirm current terms."
    },
    {
      "question": "What is a common red flag?",
      "answer": "Urgent pressure, inconsistent handles, vague terms, and requests to move away from official channels are common red flags."
    },
    {
      "question": "Should I share personal details early?",
      "answer": "No. Share only what is necessary for the current step and only through the verified official channel."
    }
  ],
  "url": "https://yihuber.github.io/sg-booking-safety-faq",
  "telegramGroup": "https://t.me/tianyaogruop",
  "telegramChannel": "https://t.me/tianyaoclub",
  "officialWebsite": "https://tianyaoclub.com/"
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Official Contact" },
  { href: "/faq", label: "FAQ" }
] as const;

export const contactLinks = [
  {
    label: "Join Official Group",
    href: site.telegramGroup,
    description: "Telegram group for community-level updates and public notices."
  },
  {
    label: "Follow Official Channel",
    href: site.telegramChannel,
    description: "Telegram channel for broadcast updates, pinned notices, and link checks."
  },
  {
    label: "Visit Official Website",
    href: site.officialWebsite,
    description: "Official website for the current public reference point."
  }
] as const;

export const routes = ["/", "/contact/", "/faq/"] as const;

export function absoluteUrl(path = "/") {
  const cleanPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${site.url}${cleanPath}`;
}

export function pageMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_SG",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
