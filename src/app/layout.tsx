import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pinlo Services | Website Development & Digital Marketing Agency in Bangalore",
  description:
    "Pinlo Services is a professional website development and digital marketing agency in Bangalore, India. We build fast, SEO-optimized websites with React & Next.js. Services include web design, SEO, social media marketing, email marketing, lead generation & ads management. 1000+ clients served.",
  keywords:
    "best website development company Bangalore, website design Bangalore, affordable website development India, React website development, Next.js agency India, SEO services Bangalore, digital marketing agency Bangalore, Pinlo Services, small business website India, startup website Bangalore, web development company India, ecommerce website Bangalore",
  authors: [{ name: "Pinlo Services" }],
  creator: "Pinlo Services",
  openGraph: {
    title: "Pinlo Services | Website Development & Digital Marketing Agency in Bangalore",
    description:
      "Pinlo Services builds fast, modern React/Next.js websites for businesses in Bangalore. SEO-optimized, mobile-friendly, delivered quickly. 1000+ happy clients across India.",
    url: "https://pinloservices.com",
    siteName: "Pinlo Services",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://pinloservices.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pinlo Services - Web Design & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinlo Services | Website Development & Digital Marketing Agency in Bangalore",
    description:
      "Professional website development and digital marketing services in Bangalore. SEO-optimized React/Next.js websites. 1000+ clients served across India.",
    images: ["https://pinloservices.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pinloservices.com",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://pinloservices.com/#organization",
    name: "Pinlo Services",
    url: "https://pinloservices.com",
    description:
      "Pinlo Services is a professional website development and digital marketing agency in Bangalore, India. We build fast, modern React/Next.js websites starting from ₹9,999 with 48-hour delivery. 1000+ clients served.",
    telephone: "+918072344924",
    email: "support@pinlo.in",
    priceRange: "₹9,999 - ₹50,000+",
    currenciesAccepted: "INR",
    paymentAccepted: "UPI, Bank Transfer, Razorpay",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10, Konankunte Cross",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560062",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.8855,
      longitude: 77.5669,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+918072344924",
        email: "support@pinlo.in",
        availableLanguage: ["English", "Hindi", "Kannada"],
      },
    ],
    areaServed: [
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Pune" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing & Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description:
              "Custom React/Next.js website development with SEO, Modern & Responsive Design included. 48-hour delivery.",
          },
          priceCurrency: "INR",
          price: "9999",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Search Engine Optimization",
            description:
              "Data-driven SEO strategies for improved search rankings and organic traffic.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            description:
              "Strategic social media campaigns across Facebook, Instagram, and LinkedIn.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Email Marketing",
            description:
              "Targeted email campaigns with segmentation and automation for high ROI.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lead Generation",
            description:
              "Inbound and outbound strategies to fill your sales pipeline with qualified leads.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ads Management",
            description:
              "Expert Google, Facebook, and Instagram ad management optimized for conversions.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "200",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a website cost in Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website development at Pinlo Services starts from ₹8,999 for a 4-6 page responsive website with SEO, WhatsApp integration, and contact forms. E-commerce websites start from ₹24,999.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most standard business websites are delivered within 24-48 hours. Complex projects with custom features may take 5-7 business days.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide SEO services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO audits, local SEO, and content strategy starting from ₹5,000/month.",
        },
      },
      {
        "@type": "Question",
        name: "What technology stack do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build websites using React and Next.js for blazing-fast performance, better SEO, and security. Unlike WordPress, our sites load in under 1 second and are immune to plugin vulnerabilities.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with clients outside Bangalore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we serve clients across India including Delhi, Mumbai, Hyderabad, and Pune, as well as international clients. All work can be done remotely.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","AW-XXXXXXXXXX")`,
          }}
        />
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(e,t,n,c,o,a,f){e.fbq||(o=e.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},e._fbq||(e._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],(a=t.createElement(n)).async=!0,a.src="https://connect.facebook.net/en_US/fbevents.js",(f=t.getElementsByTagName(n)[0]).parentNode.insertBefore(a,f))}(window,document,"script"),fbq("init","YOUR_PIXEL_ID"),fbq("track","PageView")`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
