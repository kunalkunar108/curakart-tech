import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Software Development Company in Jharkhand",
  description: "CURAKART plans and develops custom business software for organisations across Jharkhand, including management systems, dashboards, portals and workflow tools.",
  alternates: { canonical: "/services/custom-software-development" },
  openGraph: {
    title: "Custom Software Development in Jharkhand | CURAKART",
    description: "Purpose-built business software, management systems and dashboards for organisations across Jharkhand.",
    url: "https://curakart.com/services/custom-software-development",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://curakart.com/services/custom-software-development#service",
  name: "Custom Software Development",
  serviceType: "Custom business software planning and development",
  description: "Planning and development of custom business software, management systems, dashboards, portals and workflow tools for organisations across Jharkhand.",
  provider: { "@id": "https://curakart.com/#organization" },
  areaServed: { "@type": "AdministrativeArea", name: "Jharkhand, India" },
  audience: { "@type": "BusinessAudience", audienceType: "Businesses and organisations across industries and sizes" },
  url: "https://curakart.com/services/custom-software-development",
};

const faqs = [
  ["What is custom software development?", "Custom software is designed around a specific organisation's processes, users and requirements rather than asking the organisation to adapt entirely to a generic off-the-shelf tool."],
  ["What types of business software can CURAKART develop?", "Depending on the requirement, projects may include management systems, admin dashboards, customer or staff portals, record management, reporting interfaces and workflow tools."],
  ["Can software be tailored to our existing process?", "Yes. The first step is to understand the current process, users, pain points and constraints. The proposed scope is then shaped around the workflows that genuinely need improvement."],
  ["How much does custom software cost?", "There is no responsible universal price for undefined software. Cost depends on modules, user roles, integrations, data migration, security requirements and delivery scope. CURAKART prepares an estimate after discovery and scope definition."],
  ["How long does development take?", "The timeline depends on the agreed features, complexity, integrations, content or data readiness and review cycles. Milestones and an estimated schedule are documented in the proposal."],
  ["Can we start with a smaller first version?", "Where appropriate, the project can be divided into phases. A first release should solve a clearly defined problem while leaving a sensible path for later improvements."],
  ["Does CURAKART work outside Dumka?", "Yes. CURAKART works with businesses across Jharkhand, including Ranchi, Jamshedpur, Dhanbad, Bokaro, Deoghar, Dumka, Hazaribagh and other districts. Projects are generally coordinated online."],
  ["What happens after the software is delivered?", "The proposal should define testing, deployment, documentation, access handover, warranty or bug-fix terms and any optional ongoing maintenance or support."],
] as const;

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
  ["01", "Management systems", "Bring defined day-to-day operations into one structured system.", ["Member, student or customer records", "Plans, renewals and status tracking", "Operational workflows and task tracking"]],
  ["02", "Admin dashboards", "Give authorised teams a clearer view of activity and key records.", ["Role-based dashboards", "Search, filters and summaries", "Operational reports and exports"]],
  ["03", "Customer and staff portals", "Create dedicated experiences for different users where access and actions need to be separated.", ["Customer self-service areas", "Staff and trainer workspaces", "Role and permission-based access"]],
  ["04", "Workflow and record tools", "Replace disconnected manual steps with a process designed around your actual operations.", ["Enquiry and lead tracking", "Approvals and follow-up stages", "Centralised records and history"]],
  ["05", "Industry-specific applications", "Build around the requirements of a particular business model or service.", ["Education and institute workflows", "Retail and service operations", "Hospitality and appointment processes"]],
  ["06", "Integrations and reporting", "Connect the agreed systems and present information in a usable way.", ["Third-party API integrations", "Notifications and communication flows", "Management reporting"]],
] as const;

export default function CustomSoftwareDevelopmentPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />
      <div className="long-page">
        <section className="long-hero">
          <div className="wrap">
            <div className="eyebrow">CUSTOM SOFTWARE DEVELOPMENT / JHARKHAND</div>
            <h1>Software shaped around <em>how your business works.</em></h1>
            <p>CURAKART plans and develops custom business software for organisations across Jharkhand. From management systems and admin dashboards to customer portals and workflow tools, we start with your process—not a pre-decided feature list.</p>
            <div className="long-hero-actions">
              <Link className="btn" href="/contact">Discuss your software idea ↗</Link>
              <Link className="text-link" href="/portfolio">View selected work ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">WHEN OFF-THE-SHELF TOOLS FALL SHORT</div><h2>Your process deserves a <em>considered solution.</em></h2></div>
            <div className="long-prose">
              <p>Spreadsheets, messages and disconnected applications can become difficult to manage as a team or operation grows. But custom software is not automatically the answer: sometimes an existing product or a simpler process change is more cost-effective.</p>
              <p>We first understand what is slowing the business down, who needs to use the system, what information must be managed and which outcomes matter. If custom development is justified, we define a practical scope around those needs.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-muted">
          <div className="wrap">
            <div className="long-section-heading"><div><div className="eyebrow">SOFTWARE WE CAN PLAN AND BUILD</div><h2>Built for real <em>workflows.</em></h2></div><p>These are solution categories, not fixed packages. Features are selected after understanding the project.</p></div>
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
            <div><div className="eyebrow">A CLEAR TECHNICAL FOUNDATION</div><h2>Plan for users, data and <em>access.</em></h2></div>
            <div className="long-prose">
              <p>A useful software system needs more than screens. Planning may cover user roles, permissions, data structure, authentication, backups, integrations, reporting and the way the system will be maintained.</p>
              <p>Security and privacy requirements depend on the data and use case. These should be identified during discovery and reflected in the technical scope—not added as vague promises after development begins.</p>
              <p>Hosting, cloud infrastructure, paid services, external API charges, data migration and ongoing support are included only when clearly stated in the proposal.</p>
            </div>
          </div>
        </section>

        <section className="long-section long-section-dark">
          <div className="wrap long-two-col">
            <div><div className="eyebrow">FROM DISCOVERY TO HANDOVER</div><h2>Build in <em>defined stages.</em></h2></div>
            <div className="long-prose">
              <p><strong>Discover:</strong> understand the business, users, current process and problem to solve.</p>
              <p><strong>Scope:</strong> document modules, roles, priorities, integrations, exclusions and acceptance criteria.</p>
              <p><strong>Design and develop:</strong> review key user journeys and build the agreed functionality in manageable stages.</p>
              <p><strong>Test and hand over:</strong> validate agreed workflows, coordinate deployment and document access and support arrangements.</p>
              <Link className="long-light-link" href="/process">See our delivery process ↗</Link>
            </div>
          </div>
        </section>

        <section className="long-section">
          <div className="wrap">
            <div className="eyebrow">COMMON QUESTIONS</div>
            <div className="long-section-heading"><h2>Before you <em>start.</em></h2></div>
            <div className="long-prose">
              {faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}
            </div>
          </div>
        </section>

        <section className="long-cta">
          <div className="wrap">
            <div className="eyebrow">HAVE A PROCESS TO IMPROVE?</div>
            <h2>Let’s define the right <em>software scope.</em></h2>
            <p>Tell us how your business works today, what is difficult and who needs to use the solution.</p>
            <Link className="btn" href="/contact">Talk to CURAKART ↗</Link>
          </div>
        </section>
      </div>
    </>
  );
}
