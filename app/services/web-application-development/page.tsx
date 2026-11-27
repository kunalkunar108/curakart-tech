import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web Application Development Company in Jharkhand",
  description: "CURAKART plans and develops responsive web applications for businesses across Jharkhand, including customer portals, dashboards, internal tools and MVPs.",
  alternates: { canonical: "/services/web-application-development" },
  openGraph: {
    title: "Web Application Development in Jharkhand | CURAKART",
    description: "Custom browser-based applications, portals and dashboards planned around real business workflows.",
    url: "https://curakart.com/services/web-application-development",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://curakart.com/services/web-application-development#service",
  name: "Web Application Development",
  serviceType: "Web application planning and development",
  description: "Planning and development of browser-based business applications, customer and staff portals, dashboards and MVPs for organisations across Jharkhand.",
  provider: { "@id": "https://curakart.com/#organization" },
  areaServed: { "@type": "AdministrativeArea", name: "Jharkhand, India" },
  audience: { "@type": "BusinessAudience", audienceType: "Businesses and organisations across industries and sizes" },
  url: "https://curakart.com/services/web-application-development",
};

const faqs = [
  ["What is a web application?", "A web application is software people use through a web browser. Depending on the project, it may provide sign-in, dashboards, forms, records, workflows or customer-facing features without requiring a traditional desktop installation."],
  ["What kinds of web applications can CURAKART develop?", "Depending on the scope, projects may include customer portals, staff dashboards, booking or enquiry workflows, management interfaces, internal tools and minimum viable products for testing a defined idea."],
  ["Will the application work on mobile phones?", "The interface can be designed responsively for supported mobile, tablet and desktop screen sizes. Device and browser testing, and any installable progressive web app behaviour, are defined in the project scope."],
  ["Can you build an application for our existing business process?", "Yes. We first map the users, steps, information and constraints in the current process. The application scope is then based on the workflows that need to be supported or improved."],
  ["Can the application connect with other tools?", "Integrations may be possible where the required third-party service provides a suitable API or supported integration method. Availability, access, fees and technical limits are checked during discovery."],
  ["How much does web application development cost?", "Cost depends on features, user roles, data structure, integrations, hosting needs and testing scope. CURAKART prepares a project-specific estimate after requirements and deliverables are defined."],
  ["How long does it take to build a web application?", "The schedule depends on complexity, dependencies, content or data readiness and review cycles. The proposal sets out milestones and an estimated timeline after the scope is understood."],
  ["Can we start with an MVP?", "Where appropriate, the application can begin with a smaller first release focused on a clearly defined user problem. Later phases can be planned based on feedback and priorities."],
  ["Does CURAKART work across Jharkhand?", "Yes. CURAKART works with organisations across Jharkhand, including Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Dumka, Hazaribagh and other districts. Most projects are coordinated online."],
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

const solutions = [
  ["01", "Customer portals", "Give customers a dedicated place to access relevant information and complete agreed actions.", ["Account and profile areas", "Enquiry and request forms", "Status and information views"]],
  ["02", "Staff dashboards", "Bring internal tasks and operational information into a structured browser-based workspace.", ["Role-specific dashboard views", "Task and record management", "Search, filters and summaries"]],
  ["03", "Booking and enquiry flows", "Organise how requests arrive, move through a process and reach the right team.", ["Booking or request capture", "Follow-up and status stages", "Notifications where required"]],
  ["04", "Internal business tools", "Support a defined team process with purpose-built screens and workflows.", ["Data entry and record views", "Approvals and activity history", "Operational reporting interfaces"]],
  ["05", "MVPs and digital products", "Turn a validated idea into a focused first version that can be reviewed with real users.", ["Core user journeys", "Essential first-release features", "A phased roadmap for later work"]],
  ["06", "Connected applications", "Connect application workflows with external services when suitable integration options exist.", ["API-based integrations", "Communication and notification services", "Data exchange and reporting"]],
] as const;

export default function WebApplicationDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="long-page">
        <section className="long-hero">
          <div className="wrap">
            <div className="eyebrow">WEB APPLICATION DEVELOPMENT / JHARKHAND</div>
            <h1>Web applications built around <em>the way people work.</em></h1>
            <p>CURAKART plans and develops browser-based applications for businesses and organisations across Jharkhand. From customer portals and staff dashboards to internal tools and MVPs, we define the user journeys and scope before development begins.</p>
            <div className="long-hero-actions">
              <Link className="btn" href="/contact">Discuss your application ↗</Link>
              <Link className="text-link" href="/portfolio">View selected work ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">SOFTWARE FOR THE BROWSER</div><h2>Move beyond disconnected <em>screens and spreadsheets.</em></h2></div>
            <div className="long-prose">
              <p>A web application can bring users, information and repeatable tasks into one accessible browser-based experience. It may be used by customers, employees, administrators or partners, with different screens and permissions where the project requires them.</p>
              <p>Not every problem needs custom application development. An existing platform, a simpler website or a process change may be more practical. We first understand the problem, intended users and constraints, then recommend a scope that fits.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-muted">
          <div className="wrap">
            <div className="long-section-heading"><div><div className="eyebrow">APPLICATION TYPES</div><h2>Useful experiences for <em>different needs.</em></h2></div><p>These are solution directions, not fixed packages. Features and access are confirmed for each project.</p></div>
            <div className="service-detail-grid">
              {solutions.map(([n, title, description, bullets]) => (
                <article className="service-detail-card" key={n}>
                  <div className="service-detail-top"><span>{n}</span></div>
                  <h3>{title}</h3><p>{description}</p>
                  <ul>{bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">USERS, DATA AND ACCESS</div><h2>Plan the foundation before <em>adding features.</em></h2></div>
            <div className="long-prose">
              <p>Application planning may cover user roles, sign-in, permissions, data structure, validation, backups, integrations, reporting and hosting. These decisions affect how the application behaves as its users and information grow.</p>
              <p>Security, privacy, availability and compliance requirements depend on the type of data and intended use. They should be identified and scoped explicitly rather than treated as blanket guarantees.</p>
              <p>Cloud hosting, paid third-party services, API usage, migration, content preparation and ongoing maintenance are included only where the proposal says they are included.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-dark">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">A CONTROLLED DELIVERY PROCESS</div><h2>Start focused. Improve with <em>evidence.</em></h2></div>
            <div className="long-prose">
              <p><strong>Discover:</strong> identify the users, problem, current process and intended outcome.</p>
              <p><strong>Map:</strong> define user journeys, roles, data, integrations and acceptance criteria.</p>
              <p><strong>Prototype and build:</strong> review key screens, then develop the agreed features in stages.</p>
              <p><strong>Test and hand over:</strong> validate the agreed workflows, coordinate deployment and document access and support terms.</p>
              <Link className="long-light-link" href="/process">Explore our delivery process ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap">
            <div className="eyebrow">COMMON QUESTIONS</div>
            <div className="long-section-heading"><h2>Web application <em>FAQs.</em></h2></div>
            <div className="long-prose">
              {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
            </div>
          </div>
        </section>

        <section className="long-cta">
          <div className="wrap">
            <div className="eyebrow">HAVE AN APPLICATION IDEA?</div>
            <h2>Let’s turn the requirement into <em>a clear first release.</em></h2>
            <p>Tell us who will use the application, what they need to do and what the current process looks like.</p>
            <Link className="btn" href="/contact">Talk to CURAKART ↗</Link>
          </div>
        </section>
      </div>
    </>
  );
}
