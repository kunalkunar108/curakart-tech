import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Company in Jharkhand",
  description: "CURAKART builds responsive, professional websites for businesses across Jharkhand. Explore business websites, e-commerce, landing pages and redesigns.",
  alternates: { canonical: "/services/website-development" },
  openGraph: {
    title: "Website Development Company in Jharkhand | CURAKART",
    description: "Professional, responsive website development for businesses across Jharkhand.",
    url: "https://curakart.com/services/website-development",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://curakart.com/services/website-development#service",
  name: "Website Design and Development",
  serviceType: "Website design and development",
  description: "Website planning, design and development for businesses across Jharkhand, including company websites, service websites, landing pages, e-commerce experiences and website redesigns.",
  provider: { "@id": "https://curakart.com/#organization" },
  areaServed: { "@type": "AdministrativeArea", name: "Jharkhand, India" },
  audience: { "@type": "BusinessAudience", audienceType: "Businesses across industries and sizes" },
  url: "https://curakart.com/services/website-development",
};

const faqs = [
  ["Which businesses can work with CURAKART?", "We work with businesses across industries and sizes, including startups, small businesses, growing companies and established organisations. The website scope is planned around the business, its customers and its goals."],
  ["Does CURAKART serve businesses outside Ranchi?", "Yes. CURAKART works with businesses across Jharkhand, including Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Dumka, Hazaribagh and other locations. Projects are usually coordinated online."],
  ["What types of websites can you develop?", "Depending on the requirement, we can plan and develop company websites, service websites, landing pages, portfolio websites, e-commerce experiences and redesigns of existing websites."],
  ["Will my website work on mobile phones?", "Responsive layouts are part of our website planning, so the experience is designed to adapt to common mobile, tablet and desktop screen sizes. Final device and browser checks are included in the agreed project scope."],
  ["How much does a business website cost?", "Pricing depends on the number of pages, design requirements, content, integrations and functionality. After understanding the requirement, CURAKART can provide a proposal with the deliverables, exclusions and estimate."],
  ["How do I get started?", "Share your business details and what you need through the contact page. We will review the requirement and discuss the appropriate scope and next steps."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="long-page">
        <section className="long-hero">
          <div className="wrap">
            <div className="eyebrow">WEBSITE DESIGN & DEVELOPMENT / JHARKHAND</div>
            <h1>Websites built around <em>your business.</em></h1>
            <p>CURAKART plans and develops professional, responsive websites for businesses across Jharkhand. Whether you are launching a new business, improving an existing website or creating a better way for customers to enquire, we shape the solution around your goals.</p>
            <div className="long-hero-actions">
              <Link className="btn" href="/contact">Discuss your website ↗</Link>
              <Link className="text-link" href="/portfolio">View selected work ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">FOR BUSINESSES ACROSS JHARKHAND</div><h2>Make your website work as a <em>business asset.</em></h2></div>
            <div className="long-prose">
              <p>Your website is often where potential customers first check what you offer, whether you are credible and how to contact you. A useful business website should communicate clearly, work across devices and make the next step easy.</p>
              <p>We work with businesses across industries and sizes—from new ventures and local service providers to growing companies and established organisations. The structure, content and functionality are planned according to your audience and business requirement, not a one-size-fits-all template.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-muted">
          <div className="wrap">
            <div className="long-section-heading"><div><div className="eyebrow">WEBSITE SOLUTIONS</div><h2>What we can <em>build.</em></h2></div><p>Choose a focused website or combine features where the project genuinely needs them.</p></div>
            <div className="service-detail-grid">
              <article className="service-detail-card"><div className="service-detail-top"><span>01</span></div><h3>Business & company websites</h3><p>Present your company, services, strengths and contact details in a clear, professional structure.</p><ul><li>Company and corporate websites</li><li>Service and industry pages</li><li>About, contact and enquiry sections</li></ul></article>
              <article className="service-detail-card"><div className="service-detail-top"><span>02</span></div><h3>E-commerce websites</h3><p>Organise products and customer journeys for businesses that want to present and sell online.</p><ul><li>Product and category layouts</li><li>Shopping and enquiry flows</li><li>Required third-party integrations</li></ul></article>
              <article className="service-detail-card"><div className="service-detail-top"><span>03</span></div><h3>Landing pages</h3><p>Focused pages for a specific service, campaign, launch or customer action.</p><ul><li>Clear value proposition</li><li>Focused calls to action</li><li>Lead and enquiry capture</li></ul></article>
              <article className="service-detail-card"><div className="service-detail-top"><span>04</span></div><h3>Website redesigns</h3><p>Improve an existing website's structure, presentation, usability and mobile experience.</p><ul><li>Content and layout review</li><li>Updated visual direction</li><li>Migration planning where needed</li></ul></article>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">A PRACTICAL FOUNDATION</div><h2>Designed for clarity, usability and <em>discoverability.</em></h2></div>
            <div className="long-prose">
              <p>Our website projects can include responsive page layouts, clear navigation, enquiry pathways, basic on-page SEO foundations, metadata, sensible heading structure and performance-conscious implementation, depending on the agreed scope.</p>
              <p>SEO foundations help search engines understand your pages; they do not guarantee rankings or a specific volume of enquiries. Results also depend on competition, content quality, reputation, technical health and ongoing work.</p>
              <p>Content writing, photography, domain registration, hosting, paid tools, advanced integrations and ongoing maintenance are discussed separately and included only when stated in the proposal.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-dark">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">WORKING ACROSS JHARKHAND</div><h2>One team. Projects across the <em>state.</em></h2></div>
            <div className="long-prose">
              <p>CURAKART works with businesses throughout Jharkhand, including Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Dumka, Hazaribagh and other towns and districts. Most projects are coordinated online, with project-specific meetings or support arranged when required.</p>
              <p>Wherever your business is based, the first step is the same: understand the requirement, agree the scope and define what a successful website needs to do.</p>
              <Link className="long-light-link" href="/process">See how we work ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap">
            <div className="eyebrow">COMMON QUESTIONS</div>
            <div className="long-section-heading"><h2>Before you <em>get started.</em></h2></div>
            <div className="long-prose">
              {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
            </div>
          </div>
        </section>

        <section className="long-cta">
          <div className="wrap"><div className="eyebrow">READY TO DISCUSS YOUR WEBSITE?</div><h2>Let’s build a website that supports <em>your next step.</em></h2><p>Tell us about your business, audience and what you want your website to achieve.</p><Link className="btn" href="/contact">Start a conversation ↗</Link></div>
        </section>
      </div>
    </>
  );
}
