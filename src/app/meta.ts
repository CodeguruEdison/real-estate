
import type {Metadata} from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nestwell.com";     

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: "NestWell — Find Your Home | Buy, Rent & Sell Real Estate",
      template: "%s | NestWell",
    },
    description:
      "NestWell helps you find, buy, rent, or sell property. Browse listings, compare neighborhoods, and connect with trusted agents. Your next home starts here.",
    keywords: [
      "real estate",
      "buy a home",
      "rent apartment",
      "property listings",
      "houses for sale",
      "apartments for rent",
      "real estate agent",
      "home search",
      "property search",
      "NestWell",
    ],
    authors: [{ name: "NestWell", url: siteUrl }],
    creator: "NestWell",
    publisher: "NestWell",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteUrl,
      siteName: "NestWell",
      title: "NestWell — Find Your Home | Buy, Rent & Sell Real Estate",
      description:
        "Find your next home on NestWell. Browse property listings, compare neighborhoods, and connect with trusted real estate agents. Buy, rent, or sell with confidence.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "NestWell — Find your home",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "NestWell — Find Your Home | Buy, Rent & Sell Real Estate",
      description:
        "Find your next home. Browse listings, compare neighborhoods, and connect with trusted agents. Buy, rent, or sell with NestWell.",
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: siteUrl,
    },
    category: "real estate",
  };