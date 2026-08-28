"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: "Search Engine Optimization", desc: "Data-driven SEO strategies to improve your search rankings and organic traffic.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
    { title: "Web Design & Web Development", desc: "Custom React/Next.js websites with SEO, responsive design, and 48-hour delivery.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
    { title: "Social Media Marketing", desc: "Strategic campaigns across Facebook, Instagram, and LinkedIn to build your brand.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg> },
    { title: "Email Marketing", desc: "Targeted email campaigns with segmentation and automation for high ROI.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
    { title: "Lead Generation", desc: "Inbound and outbound strategies to fill your sales pipeline with qualified leads.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { title: "Ads Management", desc: "Expert Google, Facebook, and Instagram ad management optimized for conversions.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  ];

  const pricing = [
    {
      name: "Starter",
      price: "₹9,999",
      desc: "Perfect for startups & local businesses",
      features: ["4-6 Responsive Pages", "SEO Meta Tags & Schema", "WhatsApp Integration", "Contact Form", "Google Analytics", "48-Hour Delivery"],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹12,999",
      desc: "For clinics, real estate & growing businesses",
      features: ["8-10 Responsive Pages", "Advanced SEO & Schema", "Appointment Booking", "Payment Integration", "CRM Integration", "Priority Support"],
      popular: true,
    },
    {
      name: "E-Commerce",
      price: "₹24,999",
      desc: "Complete online store solution",
      features: ["Dynamic Product Catalog", "Shopping Cart", "Razorpay Payment Gateway", "Inventory Dashboard", "Order Management", "Admin Panel"],
      popular: false,
    },
  ];

  const projects = [
    { num: "01", title: "Club Embark", domain: "clubembark.com", text: "For Club Embark, we designed a premium vacation ownership platform with immersive resort showcases and seamless booking flows, elevating their brand and driving membership sign-ups." },
    { num: "02", title: "KMS Blocks & Sands", domain: "kmsblocksandsands.com", text: "For KMS Blocks & Sands, we built a modern, high-performance website to showcase their construction materials business, driving increased inquiries and customer trust." },
    { num: "03", title: "Esskay Natural", domain: "esskaynatural.com", text: "For Esskay Natural, we designed a clean and elegant website highlighting their natural product range, boosting brand credibility and online sales." },
    { num: "04", title: "The Imperial Crest", domain: "theimperialcrest.com", text: "For The Imperial Crest, we developed a premium real-estate website with stunning visuals and seamless navigation, helping them attract high-value buyers." },
    { num: "05", title: "Nestlane Interiors", domain: "nestlaneinteriors.com", text: "For Nestlane Interiors, we crafted a visually rich portfolio website showcasing their interior design expertise, resulting in a 60% increase in client inquiries." },
    { num: "06", title: "KNS Unnati", domain: "knsunnati.in", text: "For KNS Unnati, we built a culturally authentic website to promote their traditional products, enhancing their digital presence and community engagement." },
    { num: "07", title: "Aussie Nutra Pharma", domain: "aussienutrapharma.com.au", text: "For Aussie Nutra Pharma, we developed a professional pharmaceutical website with a comprehensive product catalog, improving their market reach across Australia." },
    { num: "08", title: "Brewace Tea", domain: "brewacetea.com", text: "For Brewace Tea, we crafted a refined e-commerce experience showcasing their premium Himalayan and Assam teas, with elegant product displays that boosted online sales." },
    { num: "09", title: "AimLead", domain: "aimlead.in", text: "For AimLead, we built a conversion-focused website for their MSME business coaching and sales training services, streamlining lead capture." },
  ];

  const testimonials = [
    { name: "Rajesh Sharma", role: "CEO, NorthPeak Solutions", quote: "Pinlo Services transformed our online presence completely. Their attention to detail and creative solutions exceeded all our expectations.", accent: "#6366f1", initial: "R" },
    { name: "Priya Venkatesh", role: "Founder, GreenLeaf Organics", quote: "Working with Pinlo Services was a game-changer for our business. They understood our vision perfectly and delivered a stunning e-commerce site.", accent: "#ec4899", initial: "P" },
    { name: "Arjun Mehta", role: "Director, BuildRight Infra", quote: "Professional, responsive, and incredibly talented. They delivered our real-estate platform ahead of schedule and the quality was outstanding.", accent: "#f59e0b", initial: "A" },
    { name: "Deepika Nair", role: "Marketing Head, UrbanNest Designs", quote: "The team brought our interiors brand to life online. The animations, lightning-fast speed, and premium design are exactly what we needed.", accent: "#10b981", initial: "D" },
    { name: "Vikram Joshi", role: "CTO, CloudNine Tech", quote: "Exceptional development skills and consistent communication throughout the project. Their technical expertise is truly world-class.", accent: "#3b82f6", initial: "V" },
    { name: "Ananya Reddy", role: "Owner, VitalCure Wellness", quote: "From concept to launch, the entire process was seamless. Our pharma website looks absolutely beautiful and has significantly increased our online orders.", accent: "#f97316", initial: "A" },
  ];

  const processSteps = [
    { num: 1, title: "Consultation", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { num: 2, title: "Research and Strategy Development", desc: "Our team will conduct thorough research on your industry, competitors, and target market to formulate a comprehensive strategy tailored to your business goals.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
    { num: 3, title: "Implementation", desc: "With a solid strategy in place, we will proceed with the implementation phase. This involves executing various marketing tactics such as content creation, advertising campaigns, and social media management.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
    { num: 4, title: "Monitoring and Optimization", desc: "We continuously monitor the performance of our marketing efforts and analyze key metrics to identify areas for improvement.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
    { num: 5, title: "Reporting and Communication", desc: "Transparency is key to our partnership. We provide regular reports detailing the progress of your marketing campaigns, along with insights and recommendations.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> },
    { num: 6, title: "Continual Improvement", desc: "Our commitment to your success doesn't end with the completion of a campaign. We believe in continual improvement and strive to refine our strategies based on ongoing feedback.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg> },
  ];

  const faqs = [
    { q: "How much does a website cost in Bangalore?", a: "Website development at Pinlo Services starts from ₹9,999 for a 4-6 page responsive website with SEO, WhatsApp integration, and contact forms. E-commerce websites start from ₹24,999." },
    { q: "How long does it take to build a website?", a: "Most standard business websites are delivered within 24-48 hours. Complex projects with custom features may take 5-7 business days." },
    { q: "Do you provide SEO services?", a: "Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO audits, local SEO, and content strategy starting from ₹5,000/month." },
    { q: "What technology stack do you use?", a: "We build websites using React and Next.js for blazing-fast performance, better SEO, and security. Unlike WordPress, our sites load in under 1 second and are immune to plugin vulnerabilities." },
    { q: "Do you work with clients outside Bangalore?", a: "Yes, we serve clients across India including Delhi, Mumbai, Hyderabad, and Pune, as well as international clients. All work can be done remotely." },
    { q: "What is included in the starter package?", a: "The ₹9,999 starter package includes 4-6 responsive React pages, complete SEO meta tags, WhatsApp floating button, contact form, Google Analytics setup, and 48-hour delivery." },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white text-sm font-semibold text-center py-2.5 px-5">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/pinloapp" target="_blank" rel="noreferrer" className="hover:underline">
              <svg fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=918072344924" target="_blank" rel="noreferrer" className="hover:underline">
              <svg fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
            </a>
          </div>
          <a href="tel:+91 8072344924" className="no-underline text-white flex items-center gap-2 hover:underline">
            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
            +91 8072344924
          </a>
          <a href="mailto:support@pinlo.in" className="no-underline text-white flex items-center gap-2 hover:underline">
            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>
            support@pinlo.in
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white py-4 sticky top-0 z-50 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center px-5">
          <a href="#" className="text-[28px] font-extrabold no-underline text-[#0F172A]">
            Pinlo <span className="text-[#E11B47]">Services</span>
          </a>
          <button className="text-2xl bg-transparent border-none cursor-pointer md:hidden text-[#0F172A]" aria-label="Toggle navigation">&#9776;</button>
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#services" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Services</a></li>
            <li><a href="#pricing" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Pricing</a></li>
            <li><a href="#projects" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Projects</a></li>
            <li><a href="#process" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Process</a></li>
            <li><a href="#testimonials" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Testimonials</a></li>
            <li><a href="#faq" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">FAQ</a></li>
            <li><a href="#quote" className="text-[#0F172A] no-underline font-medium text-[15px] hover:text-[#E11B47] transition-colors">Request a Quote</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-20 pb-10 relative overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 right-10 w-64 h-64 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-0 left-0 w-48 h-48 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="40" fill="#E11B47"/></svg>
        <svg className="absolute top-1/2 right-1/4 w-4 h-4 opacity-20" viewBox="0 0 20 20" fill="#E11B47"><circle cx="10" cy="10" r="10"/></svg>
        <svg className="absolute top-20 right-1/3 w-3 h-3 opacity-15" viewBox="0 0 20 20" fill="#FF6B35"><circle cx="10" cy="10" r="10"/></svg>
        <svg className="absolute bottom-20 right-20 w-5 h-5 opacity-15" viewBox="0 0 20 20" fill="#E11B47"><circle cx="10" cy="10" r="10"/></svg>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 bg-[#FEF2F2] border border-[#FECDD3] text-[#E11B47] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <span>Trusted by 1000+ Businesses</span>
            </div>
            <h1 className="text-[52px] font-extrabold leading-[1.15] mb-5">
              Get a Professional Website <br/>in <span className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white px-3.5 py-1 rounded-lg inline-block">48 Hours</span>
            </h1>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-[32px] font-bold text-[#64748B] line-through">₹20,000</span>
              <span className="text-[48px] font-extrabold text-[#E11B47]">₹9,999*</span>
            </div>
            <ul className="space-y-2.5 mb-7 text-[15px] text-[#334155]">
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#10B981] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Your business online in 48 hours
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#10B981] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Free Domain + SSL + hosting for 1 year
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#10B981] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                Mobile-responsive, modern design
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-[#10B981] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                On-page SEO setup
              </li>
            </ul>
            <div className="flex items-center gap-4 mb-3">
              <a href="tel:+91 8072344924" className="btn-shine bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white no-underline px-9 py-4 rounded-[10px] text-base font-bold cursor-pointer shadow-[0_4px_14px_rgba(225,27,71,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(225,27,71,0.45)] transition-all inline-block">
                Call Now
              </a>
            </div>
            <p className="text-[12px] text-[#94A3B8]">Pay after development* · +18% GST applicable</p>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }} className="text-center">
            <svg viewBox="0 0 600 450" fill="none" className="w-full rounded-2xl">
              {/* Background */}
              <rect width="600" height="450" rx="16" fill="#FEF2F2"/>
              {/* Browser Window */}
              <rect x="40" y="40" width="520" height="370" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
              {/* Browser Top Bar */}
              <rect x="40" y="40" width="520" height="40" rx="12" fill="#F8FAFC"/>
              <circle cx="60" cy="60" r="6" fill="#FECDD3"/>
              <circle cx="78" cy="60" r="6" fill="#FEF3C7"/>
              <circle cx="96" cy="60" r="6" fill="#D1FAE5"/>
              <rect x="120" y="52" width="200" height="16" rx="4" fill="#E2E8F0"/>
              {/* Navigation */}
              <rect x="60" y="100" width="80" height="8" rx="4" fill="#E11B47"/>
              <rect x="160" y="100" width="60" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="240" y="100" width="60" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="320" y="100" width="60" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="480" y="96" width="60" height="20" rx="10" fill="#E11B47"/>
              {/* Hero Content */}
              <rect x="60" y="140" width="250" height="16" rx="4" fill="#0F172A"/>
              <rect x="60" y="168" width="200" height="16" rx="4" fill="#0F172A"/>
              <rect x="60" y="196" width="220" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="60" y="212" width="180" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="60" y="228" width="200" height="8" rx="4" fill="#E2E8F0"/>
              <rect x="60" y="260" width="100" height="32" rx="8" fill="#E11B47"/>
              <rect x="180" y="260" width="80" height="32" rx="8" fill="none" stroke="#E11B47" strokeWidth="2"/>
              {/* Hero Image/Graphic */}
              <circle cx="440" cy="200" r="80" fill="#E11B47" opacity="0.1"/>
              <circle cx="440" cy="200" r="50" fill="#E11B47" opacity="0.15"/>
              <circle cx="440" cy="200" r="25" fill="#E11B47" opacity="0.2"/>
              {/* Cards */}
              <rect x="60" y="310" width="140" height="80" rx="8" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1"/>
              <rect x="220" y="310" width="140" height="80" rx="8" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="1"/>
              <rect x="380" y="310" width="140" height="80" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
              {/* Card Icons */}
              <circle cx="100" cy="340" r="12" fill="#E11B47" opacity="0.2"/>
              <circle cx="260" cy="340" r="12" fill="#FF6B35" opacity="0.2"/>
              <circle cx="420" cy="340" r="12" fill="#10B981" opacity="0.2"/>
              {/* Floating Elements */}
              <rect x="500" y="120" width="40" height="40" rx="8" fill="#E11B47" opacity="0.1" transform="rotate(15 520 140)"/>
              <rect x="30" y="200" width="30" height="30" rx="6" fill="#FF6B35" opacity="0.1" transform="rotate(-10 45 215)"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1200px] mx-auto px-5 py-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "1000+", label: "Happy Clients", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
            { num: "4.9/5", label: "Client Rating", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
            { num: "48hrs", label: "Delivery Time", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { num: "₹9,999", label: "Starting Price", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center hover:border-[#E11B47] hover:shadow-[0_8px_30px_rgba(225,27,71,0.08)] transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(225,27,71,0.1)] rounded-full text-[#E11B47] mb-3">{s.icon}</div>
              <div className="text-[28px] font-extrabold text-[#0F172A]">{s.num}</div>
              <div className="text-sm text-[#64748B] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Scrolling Text Bar */}
      <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] overflow-hidden py-3.5">
        <div className="flex w-max animate-[scroll-left_20s_linear_infinite]">
          {["Search Engine Optimization", "Web Design & Web Development", "Social Media Marketing", "Email Marketing", "Content Creation", "Analytics and Tracking", "Search Engine Optimization", "Web Design & Web Development", "Social Media Marketing", "Email Marketing", "Content Creation", "Analytics and Tracking"].map((text, i) => (
            <span key={i} className="whitespace-nowrap px-10 font-semibold text-[15px] text-white/85">{text}</span>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-0 left-0 w-32 h-32 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 right-0 w-24 h-24 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#FF6B35"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Services</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="border border-[#E2E8F0] rounded-2xl p-8 flex justify-between items-center bg-white hover:shadow-[0_8px_30px_rgba(225,27,71,0.08)] hover:border-[#E11B47] transition-all">
              <div>
                <h3 className="text-[20px] font-bold mb-2">{s.title}</h3>
                <p className="text-[14px] text-[#64748B] mb-3">{s.desc}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-[#E11B47] font-semibold no-underline border-b border-[#E11B47] pb-0.5 hover:text-[#C41438] hover:border-[#C41438] transition-colors">Learn more →</a>
              </div>
              <div className="w-20 h-20 bg-[rgba(225,27,71,0.1)] rounded-[14px] flex items-center justify-center text-[#E11B47] shrink-0">{s.icon}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-[#FEF2F2] to-white relative overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 left-10 w-40 h-40 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 right-10 w-32 h-32 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#E11B47"/></svg>
        <div className="max-w-[1200px] mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="text-[40px] font-extrabold mb-4">Pricing</h2>
            <p className="text-lg text-[#64748B] leading-relaxed">Transparent pricing, no hidden fees. All packages include SEO, responsive design, and WhatsApp integration.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <motion.div key={i} variants={fadeUp} className={`rounded-2xl p-8 flex flex-col gap-4 border-2 transition-all ${p.popular ? "bg-[#0F172A] text-white border-[#E11B47] shadow-[0_8px_30px_rgba(225,27,71,0.2)]" : "bg-white border-[#E2E8F0] hover:border-[#E11B47]"}`}>
                {p.popular && <span className="inline-block bg-[#E11B47] text-white text-xs font-bold px-3 py-1 rounded-full w-fit">Most Popular</span>}
                <h3 className={`text-xl font-bold ${p.popular ? "text-white" : "text-[#0F172A]"}`}>{p.name}</h3>
                <div className="text-[40px] font-extrabold">{p.price}</div>
                <p className={`text-sm ${p.popular ? "text-white/70" : "text-[#64748B]"}`}>{p.desc}</p>
                <ul className="flex flex-col gap-3 mt-4">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <svg className={`w-5 h-5 shrink-0 ${p.popular ? "text-[#E11B47]" : "text-[#10B981]"}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 py-3 px-6 rounded-[10px] font-bold cursor-pointer transition-all border-none ${p.popular ? "bg-[#E11B47] text-white hover:bg-[#C41438]" : "bg-[#0F172A] text-white hover:bg-[#1E293B]"}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 right-0 w-28 h-28 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-0 left-10 w-20 h-20 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="40" fill="#FF6B35"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Our Projects</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">Explore real-life examples of our proven digital marketing success through our projects.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="border border-[#E2E8F0] rounded-2xl p-8 flex flex-col gap-4 bg-white hover:shadow-[0_8px_30px_rgba(225,27,71,0.08)] hover:border-[#E11B47] transition-all">
              <div className="text-[48px] font-black text-[rgba(225,27,71,0.08)]">{p.num}</div>
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">{p.text}</p>
              <span className="text-[13px] text-[#E11B47] font-semibold">{p.domain}</span>
              <a href={`https://www.${p.domain}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#0F172A] font-semibold no-underline border-[1.5px] border-[#E2E8F0] rounded-[10px] px-4 py-2.5 w-fit hover:bg-[#E11B47] hover:border-[#E11B47] hover:text-white transition-all">
                Visit Site
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FEF2F2] to-white relative overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-20 left-10 w-36 h-36 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 right-20 w-28 h-28 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#FF6B35"/></svg>
        <div className="max-w-[1200px] mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
            <div className="inline-block mb-5">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-sm font-semibold border border-[#E2E8F0] text-[#E11B47]">⭐ Client Love</span>
            </div>
            <h2 className="text-[40px] font-extrabold mb-3">What Our <span className="bg-gradient-to-r from-[#E11B47] to-[#FF6B35] bg-clip-text text-transparent">Clients</span> Say</h2>
            <p className="text-lg text-[#64748B] mb-8">Real stories from businesses we&apos;ve helped grow with stunning digital experiences.</p>
            <div className="flex justify-center gap-16 mb-12">
              {[{ v: "1000+", l: "Happy Clients" }, { v: "4.9★", l: "Avg Rating" }, { v: "100%", l: "Satisfaction" }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[28px] font-extrabold text-[#E11B47]">{s.v}</div>
                  <div className="text-sm text-[#64748B] mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <div className="flex gap-6 overflow-x-auto pb-5 snap-x">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="min-w-[350px] bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(225,27,71,0.06)] snap-start border border-[#E2E8F0]" style={{ borderTop: `3px solid ${t.accent}` }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#FF6B35]"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[15px] leading-[1.7] text-[#64748B] mb-5">
                  <span className="text-xl font-bold text-[#E11B47] opacity-30">&ldquo;</span>{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base" style={{ background: t.accent }}>{t.initial}</div>
                  <div>
                    <span className="block font-semibold text-sm text-[#0F172A]">{t.name}</span>
                    <span className="block text-[13px] text-[#64748B]">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Hurdles */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-0 right-10 w-24 h-24 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 left-0 w-32 h-32 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#FF6B35"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Common Marketing Hurdles</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">Holding You Back? Let&apos;s Get You Back on Track!</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Struggling to reach your target audience?", desc: "Lets face it, finding the right marketing strategy can be tough. But with over 10 years of experience in digital marketing, I can help you reach your target audience and grow your business.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
            { title: "Unsure About Your Marketing ROI?", desc: "Investing in marketing is vital, but it&apos;s frustrating when you don&apos;t see results. I can help you track your ROI and make data-driven decisions to improve your marketing strategy.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
            { title: "Website Not Working for You?", desc: "You&apos;ve got a website, but is it actually working to bring in leads and sales? Is it attracting the right visitors and guiding them towards conversion?", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
          ].map((h, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:border-[#FF6B35] hover:shadow-[0_8px_30px_rgba(255,107,53,0.08)] transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(255,107,53,0.1)] rounded-full text-[#FF6B35] mb-4">{h.icon}</div>
              <h3 className="text-xl font-bold mb-4">{h.title}</h3>
              <p className="text-[15px] text-[#64748B] leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-5 left-5 w-16 h-16 opacity-10" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="white"/></svg>
        <svg className="absolute bottom-5 right-5 w-12 h-12 opacity-10" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="white"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] rounded-[20px] px-16 py-16">
          <h3 className="text-[32px] font-extrabold mb-3 text-white">Let&apos;s make things happen</h3>
          <p className="text-white/85 text-base mb-6">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          <button className="bg-white text-[#E11B47] border-none px-9 py-4 rounded-[10px] text-base font-bold cursor-pointer shadow-[0_4px_14px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] transition-all">
            Get your free proposal
          </button>
        </motion.div>
      </section>

      {/* Partners */}
      <section className="max-w-[1200px] mx-auto px-5 py-16 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-0 left-0 w-20 h-20 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#E11B47"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Partners</h2>
          <p className="text-lg text-[#64748B]">We work with the best of the best</p>
        </motion.div>
        <div className="flex justify-center items-center gap-12 flex-wrap opacity-40">
          {[
            { name: "Meta", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg> },
            { name: "Google", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
            { name: "Shopify", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d="M15.34 2.61c-.01-.07-.06-.11-.12-.11h-2.37c-.07 0-.13.05-.14.12L11.4 7.2h4.11l-.17-4.59zM7.34 2.5c-.01-.07-.06-.12-.13-.12H4.84c-.07 0-.13.05-.14.12L3 8.92h4.18L7.34 2.5zM19.59 8.92l-1.07-3.06c-.01-.07-.07-.12-.14-.12h-2.28c-.07 0-.13.05-.14.12l-1.08 3.06H19.59zM2.41 8.92l1.55 10.74c.01.07.07.12.14.12h13.8c.07 0 .13-.05.14-.12l1.55-10.74H2.41z"/></svg> },
            { name: "WordPress", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm-1.49 15.84L4.37 7.63l7.31 2.08-1.17 8.13zM12 20c-.77 0-1.51-.1-2.22-.3l2.22-7.61 2.27 6.22c.01.02.02.04.03.05-.78.28-1.61.44-2.5.44zm1.49-2.16l-2.29-6.28 2.08-5.78 2.33 5.78-2.12 6.28z"/></svg> },
            { name: "Amazon", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="h-8"><path d="M.045 18.02c.071-.116.185-.124.312-.022 4.457 3.579 9.303 5.368 14.539 5.368 3.724 0 7.365-.878 10.789-2.647.188-.097.336-.004.244.174-.094.176-.3.247-.504.182-3.86-1.376-7.884-2.058-12.058-2.058-5.687 0-10.824 1.673-15.402 5.017-.241.167-.443.025-.364-.188l.345-.834zM3.018 15.15c.243-.365.764-.333 1.016.029 2.126 3.037 5.113 4.645 9.022 4.645 2.702 0 5.273-.773 7.602-2.318.372-.247.856-.024.877.394.02.418-.31.665-.68.437-2.645-1.67-5.75-2.565-9.016-2.565-3.553 0-6.776 1.02-9.554 3.025-.289.206-.683.083-.763-.198l-.504-1.444zm20.234-6.47c.242-.367.766-.333 1.016.029.879 1.312 1.342 2.768 1.342 4.295 0 4.016-3.517 7.27-7.548 7.27-3.36 0-5.848-1.262-7.499-3.162-.245-.283-.663-.323-.892-.067-.241.277-.196.694.055.955 1.925 2.155 4.714 3.543 8.336 3.543 4.824 0 9.293-3.848 9.293-8.863 0-1.917-.531-3.78-1.538-5.39l.283.39zm-.751-4.502c.243-.365.764-.333 1.016.029.69 1.039 1.075 2.18 1.075 3.368 0 4.716-4.042 8.537-8.806 8.537-3.91 0-7.214-1.801-8.816-4.553-.206-.356-.67-.457-1.012-.222-.341.235-.441.683-.221 1.031 1.953 3.357 5.654 5.558 10.049 5.558 5.728 0 10.743-4.604 10.743-10.367 0-1.958-.556-3.848-1.602-5.558l-.426.377z"/></svg> },
          ].map((p, i) => (
            <div key={i} className="text-[#64748B] hover:text-[#0F172A] transition-colors">{p.svg}</div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 left-0 w-28 h-28 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-0 right-10 w-24 h-24 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="40" fill="#E11B47"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Our Working Process</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">Step-by-Step Guide to Achieving Your Business Goals</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          {processSteps.map((step) => (
            <motion.div key={step.num} variants={fadeUp} className="border border-[#E2E8F0] rounded-[14px] mb-3.5 overflow-hidden bg-white">
              <div className="flex items-center gap-4 px-6 py-5 cursor-pointer text-lg font-semibold hover:bg-[rgba(225,27,71,0.03)] transition-colors">
                <span className="w-9 h-9 bg-gradient-to-r from-[#E11B47] to-[#F43F5E] rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0">{step.icon}</span>
                {step.title}
              </div>
              <div className="px-6 pb-5 pl-[76px] text-[15px] text-[#64748B] leading-[1.7]">{step.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-[#FEF2F2] to-white relative overflow-hidden">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 right-10 w-40 h-40 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 left-10 w-32 h-32 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#FF6B35"/></svg>
        <div className="max-w-[1200px] mx-auto px-5">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="text-[40px] font-extrabold mb-4">Why Choose Us</h2>
            <p className="text-lg text-[#64748B]">We offer the best services in the industry</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <thead>
                <tr>
                  <th className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white font-bold text-base px-5 py-4 text-left">What&apos;s Different</th>
                  <th className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white font-bold text-base px-5 py-4 text-left">Pinlo Services</th>
                  <th className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white font-bold text-base px-5 py-4 text-left">Typical Agencies</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["In-House Expertise", "✓ We work in-house ensuring quality and service", "✗ Work may be outsourced, affecting consistency and quality"],
                  ["Custom Strategies", "✓ Personalized strategies based on your unique goals", "✗ Use a standard approach for all clients"],
                  ["Focused Service", "✓ Personal, dedicated service for every client", "✗ Less personal attention to individual clients"],
                  ["Transparent Costs", "✓ Fees are upfront, and you own all your data", "✗ Costs can be unclear with potential for unexpected fees"],
                  ["Industry Knowledge", "✓ Years of experience working for various industries", "✗ Some agencies might limit their service to diverse businesses"],
                  ["Track Record", "✓ Proven success in helping businesses over 10+ projects", "✗ Results may not be as well documented or proven"],
                ].map(([label, ours, theirs], i) => (
                  <tr key={i} className="border-b border-[#E2E8F0]">
                    <td className="px-5 py-4 text-sm font-semibold">{label}</td>
                    <td className="px-5 py-4 text-sm"><span className="text-[#10B981] font-bold mr-1.5"></span>{ours}</td>
                    <td className="px-5 py-4 text-sm"><span className="text-[#EF4444] font-bold mr-1.5"></span>{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-0 left-10 w-28 h-28 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-10 right-0 w-24 h-24 opacity-5" viewBox="0 0 200 200" fill="none"><polygon points="100,10 190,70 160,170 40,170 10,70" fill="#FF6B35"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-[#64748B]">Got questions? We&apos;ve got answers.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger} className="max-w-[800px] mx-auto">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp} className="border border-[#E2E8F0] rounded-xl mb-3 overflow-hidden bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold cursor-pointer bg-transparent border-none text-[#0F172A] hover:bg-[rgba(225,27,71,0.03)] transition-colors"
              >
                {faq.q}
                <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-[15px] text-[#64748B] leading-[1.7]">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="quote" className="max-w-[1200px] mx-auto px-5 py-20 relative">
        {/* Decorative SVGs */}
        <svg className="absolute top-10 right-10 w-36 h-36 opacity-5" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#E11B47"/></svg>
        <svg className="absolute bottom-0 left-0 w-28 h-28 opacity-5" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="40" fill="#FF6B35"/></svg>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="text-[40px] font-extrabold mb-4">Contact Us</h2>
          <p className="text-lg text-[#64748B]">Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>
            <form action="#" method="POST">
              {[
                { label: "Name*", type: "text", placeholder: "Your full name" },
                { label: "Email*", type: "email", placeholder: "Your email address" },
                { label: "Mobile Number*", type: "tel", placeholder: "10-digit mobile number" },
                { label: "Subject*", type: "text", placeholder: "Enquiry subject" },
              ].map((field, i) => (
                <div key={i} className="mb-5">
                  <label className="block font-semibold mb-1.5 text-sm">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} required
                    className="w-full px-4 py-3.5 border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[15px] font-[inherit] outline-none focus:border-[#E11B47] focus:shadow-[0_0_0_3px_rgba(225,27,71,0.1)] bg-white transition-all"
                    {...(field.type === "tel" ? { pattern: "[6-9][0-9]{9}", maxLength: 10, inputMode: "numeric" as const } : {})}
                  />
                </div>
              ))}
              <div className="mb-5">
                <label className="block font-semibold mb-1.5 text-sm">Message*</label>
                <textarea rows={4} placeholder="Describe your requirement" required
                  className="w-full px-4 py-3.5 border-[1.5px] border-[#E2E8F0] rounded-[10px] text-[15px] font-[inherit] outline-none focus:border-[#E11B47] focus:shadow-[0_0_0_3px_rgba(225,27,71,0.1)] bg-white transition-all resize-y" />
              </div>
              <button type="submit" className="bg-gradient-to-r from-[#E11B47] to-[#F43F5E] text-white border-none px-9 py-4 rounded-[10px] text-base font-bold cursor-pointer w-full shadow-[0_4px_14px_rgba(225,27,71,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(225,27,71,0.4)] transition-all">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#0F172A] to-[#3F0A17] text-white py-16 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-[2fr_4fr_1fr] gap-10 mb-10">
            <div>
              <div className="text-[28px] font-extrabold">
                Pinlo <span className="text-[#FF6B35]">Services</span>
              </div>
            </div>
            <div>
              <ul className="flex gap-6 list-none">
                <li><a href="#services" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">Pricing</a></li>
                <li><a href="#projects" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">Projects</a></li>
                <li><a href="#process" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">Process</a></li>
                <li><a href="#testimonials" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="text-white/70 no-underline text-[15px] hover:text-[#FF6B35] transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pinloapp" target="_blank" rel="noreferrer" className="text-[#FF6B35]">
                <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=918072344924" target="_blank" rel="noreferrer" className="text-[#FF6B35]">
                <svg fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10 pt-8 border-t border-white/10">
            <div>
              <h4 className="text-base mb-3 text-[#FF6B35]">Vision</h4>
              <p className="text-sm text-white/60 leading-relaxed">Crafting wonders with React & Next.js, where every pixel tells your unique story.</p>
            </div>
            <div>
              <h4 className="text-base mb-3 text-[#FF6B35]">Contact Us</h4>
              <p className="text-sm text-white/60 leading-relaxed">Email: <a href="mailto:support@pinlo.in" className="no-underline text-white/60 hover:text-white">support@pinlo.in</a></p>
              <p className="text-sm text-white/60 leading-relaxed">Phone: <a href="tel:+91 8072344924" className="no-underline text-white/60 hover:text-white">+91 8072344924</a></p>
            </div>
            <div>
              <h4 className="text-base mb-3 text-[#FF6B35]">Address</h4>
              <p className="text-sm text-white/60 leading-relaxed">10, Konankunte Cross Bangalore - 560062</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10 text-sm text-white/40">
            <p>&copy; 2026 Pinlo Services. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a href="https://api.whatsapp.com/send/?phone=918072344924" className="whatsapp-float fixed bottom-6 right-6 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center z-[1000] hover:scale-110 transition-transform overflow-hidden" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 448 512" className="w-8 h-8 fill-white relative z-10"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      </a>
    </div>
  );
}
