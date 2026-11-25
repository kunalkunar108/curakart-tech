import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, CircleHelp } from "lucide-react";

type Service = {
  number: string;
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  outcome: string;
  bestFor: string[];
  challenges: string[];
  deliverables: string[];
  approach: { title: string; text: string }[];
  considerations: string[];
  faqs: { q: string; a: string }[];
};

const services: Service[] = [
  {
    number: "01", slug: "website-design-development", title: "Website design & development",
    eyebrow: "A clearer digital presence",
    summary: "A useful business website explains what you do, builds confidence and makes the next step obvious.",
    intro: "Your website is often where a potential customer forms their first impression. It should do more than look attractive: it needs to communicate clearly, work smoothly on mobile, load reliably and guide visitors towards an enquiry, booking or purchase.",
    outcome: "A responsive, easy-to-understand website aligned with your business goals and the people you want to reach.",
    bestFor: ["Businesses establishing or improving their online presence", "Service providers who need more qualified enquiries", "Companies with an outdated, difficult-to-manage website", "New products, campaigns or launches that need a focused landing page"],
    challenges: ["Visitors cannot quickly understand the service or its value", "The website looks inconsistent or dated on mobile", "Important information, pricing or contact details are hard to find", "There is no clear path from browsing to taking action"],
    deliverables: ["Page structure and content hierarchy", "Responsive interface design and implementation", "Navigation, enquiry and call-to-action journeys", "Basic on-page SEO foundations and metadata", "Launch support and agreed handover"],
    approach: [
      { title: "Understand the business", text: "We clarify your audience, offer, differentiators and the action you want visitors to take." },
      { title: "Plan the pages", text: "We map the sitemap, content sections and visitor journeys before visual design begins." },
      { title: "Design and build", text: "We create the visual system and implement the agreed pages for desktop and mobile." },
      { title: "Review and launch", text: "We check agreed pages and interactions, resolve in-scope issues and coordinate launch." }
    ],
    considerations: ["Domain, hosting, paid fonts, stock assets and third-party subscriptions are separate unless included in the proposal.", "Copywriting, photography, translations, ecommerce and complex integrations require explicit scope.", "Search visibility takes ongoing content and optimisation; a website alone cannot guarantee rankings or leads."],
    faqs: [
      { q: "How long does a business website take?", a: "Timing depends on the number of pages, content readiness, feedback cycles and integrations. We confirm a realistic schedule after the scope is agreed." },
      { q: "Can you redesign my existing website?", a: "Yes. We first review what should be retained, improved or removed, then agree the redesign scope and any migration requirements." },
      { q: "Will the website work on phones?", a: "Responsive behaviour for common mobile, tablet and desktop sizes is part of the agreed build and review process." },
      { q: "Will I be able to update the content?", a: "That depends on the content-management requirements. We can scope a CMS or provide a simpler handover for content changes." }
    ]
  },
  {
    number: "02", slug: "custom-software-development", title: "Custom software development",
    eyebrow: "Software around your operation",
    summary: "Purpose-built systems for processes that have outgrown spreadsheets, paper registers or disconnected tools.",
    intro: "When teams rely on repeated manual work, scattered records and multiple disconnected applications, it becomes difficult to see what is happening. Custom software brings the right workflows and information into one system, shaped around how your organisation actually operates.",
    outcome: "A defined software solution that helps your team manage records, roles and day-to-day workflows with greater consistency.",
    bestFor: ["Businesses managing recurring operations across spreadsheets", "Institutes tracking students, fees, attendance or results", "Gyms and membership businesses managing members and renewals", "Teams that need role-based dashboards and operational visibility"],
    challenges: ["The same information is entered in several places", "Owners cannot easily see current operational status", "Staff follow inconsistent processes", "Existing tools do not match the way the business works"],
    deliverables: ["Requirement discovery and workflow mapping", "Functional scope and role definitions", "Application screens and dashboards", "Database and backend implementation", "Testing, deployment coordination and handover documentation"],
    approach: [
      { title: "Map the current workflow", text: "We understand users, records, exceptions, approvals and where work currently gets stuck." },
      { title: "Define the first release", text: "We separate essential workflows from optional features so the first version stays focused." },
      { title: "Design roles and data", text: "We plan permissions, information structure and the key screens before implementation." },
      { title: "Build in reviewable stages", text: "We implement and review agreed modules, then validate important end-to-end journeys." }
    ],
    considerations: ["Custom software needs a clear owner for requirements, decisions and user acceptance.", "Data migration, external integrations, messaging, payment gateways and advanced reporting must be scoped separately.", "Security, backups, hosting, maintenance and support need an explicit operating plan; software is not a one-time setup."],
    faqs: [
      { q: "Should I build custom software or use an existing tool?", a: "If an existing product covers most of your workflow at a sensible cost, it may be the better option. Custom development is worth evaluating when important processes or constraints are not served well." },
      { q: "Can the system have different dashboards for staff and owners?", a: "Yes. Role-based access and different interfaces can be designed around each user's responsibilities." },
      { q: "Can you add features after launch?", a: "Yes, if the architecture and project scope support it. Future modules can be prioritised and estimated as separate phases." },
      { q: "Do you provide ongoing support?", a: "Support and maintenance can be arranged under a separately defined plan covering response expectations, included work and exclusions." }
    ]
  },
  {
    number: "03", slug: "web-application-development", title: "Web application development",
    eyebrow: "Interactive tools in the browser",
    summary: "Browser-based applications that let customers, members or teams complete tasks and manage information online.",
    intro: "A web application is more than a set of informational pages. It allows users to sign in, submit information, manage records, track progress or complete workflows through an interactive interface—without requiring a traditional desktop installation.",
    outcome: "An accessible browser-based product designed around defined user journeys, permissions and application logic.",
    bestFor: ["Customer or partner portals", "Member, student or employee self-service", "Internal dashboards and workflow tools", "Early-stage digital products and MVPs"],
    challenges: ["Users need to complete tasks rather than simply read information", "Different users require different access and capabilities", "A process needs to be available across devices", "A product idea needs a testable first version"],
    deliverables: ["User journeys and application requirements", "Responsive frontend and interactive screens", "Authentication and role planning where required", "API and data integration", "Functional testing and deployment handover"],
    approach: [
      { title: "Define users and tasks", text: "We identify who will use the application and what each person needs to accomplish." },
      { title: "Prioritise the MVP", text: "We choose the smallest coherent release that can be tested with real users." },
      { title: "Build the application", text: "We implement the interface, application logic and required integrations." },
      { title: "Validate real journeys", text: "We test the agreed flows, permissions and responsive behaviour before handover." }
    ],
    considerations: ["An MVP is a focused first release, not a promise that every future feature is included.", "Authentication, user-generated content, file uploads, notifications and payments introduce additional design and security requirements.", "App-store distribution is different from a web app or PWA and must be planned separately."],
    faqs: [
      { q: "What is the difference between a website and a web application?", a: "A website primarily presents information. A web application lets users interact with data and complete tasks, often with accounts, permissions and saved state." },
      { q: "Can it work on mobile?", a: "Yes. The interface can be designed responsively. If installable PWA behaviour is required, we include those requirements in the scope." },
      { q: "Can you build an MVP first?", a: "Yes. We can define a first release around the core user problem, then use feedback to prioritise later development." },
      { q: "Can it connect to other services?", a: "Where suitable APIs are available, integrations can be planned. Access, API limits, vendor costs and reliability are reviewed before commitment." }
    ]
  },
  {
    number: "04", slug: "ai-workflow-automation", title: "AI & workflow automation",
    eyebrow: "Reduce repetitive work",
    summary: "Connect routine steps, route information and use AI where it creates a practical benefit—not just novelty.",
    intro: "Many teams spend time copying information, sending routine updates, sorting enquiries and following up manually. Workflow automation connects these steps across the tools you already use. AI can assist with tasks such as classifying messages or drafting responses, while important decisions remain under human control.",
    outcome: "A documented workflow that reduces avoidable manual steps and makes hand-offs more consistent.",
    bestFor: ["Teams handling frequent enquiries or leads", "Businesses sending reminders and status updates", "Operations that move information between multiple tools", "Organisations exploring carefully bounded AI assistance"],
    challenges: ["Leads or requests are missed between channels", "Staff repeatedly copy and paste the same information", "Follow-ups depend on someone's memory", "Information arrives in unstructured messages and needs sorting"],
    deliverables: ["Workflow review and automation map", "Trigger, action and exception definitions", "Tool/API integration planning", "AI prompt and human-review design where relevant", "Test cases, monitoring notes and handover"],
    approach: [
      { title: "Find the repetitive work", text: "We map the current process and identify delays, duplicate entry and failure points." },
      { title: "Choose the right automation", text: "We decide what should be rule-based, what may benefit from AI and what must stay human-led." },
      { title: "Connect and test", text: "We configure the agreed tools, permissions, fallback paths and exception handling." },
      { title: "Monitor the workflow", text: "We document ownership and review how failures, changes and usage costs will be handled." }
    ],
    considerations: ["Automation depends on the reliability and access rules of the connected services.", "AI outputs can be wrong. High-impact or customer-sensitive actions should include review and clear escalation.", "Third-party API, messaging and AI usage fees are not included unless stated in the proposal."],
    faqs: [
      { q: "Can you automate WhatsApp enquiries?", a: "Potentially, using supported WhatsApp Business integrations and approved providers. Account eligibility, templates, consent and provider charges must be checked first." },
      { q: "Does AI replace staff?", a: "The goal is to reduce repetitive work and assist staff, not assume every judgement can be automated. The right level of human review depends on the task." },
      { q: "Can you connect the tools we already use?", a: "We assess available APIs, webhooks and integration permissions. Some closed platforms may limit what can be connected." },
      { q: "Will automation always run without errors?", a: "No system can guarantee that. A responsible workflow includes error alerts, retries where appropriate and a manual fallback." }
    ]
  },
  {
    number: "05", slug: "ui-ux-product-design", title: "UI/UX and product design",
    eyebrow: "Make complex products easier to use",
    summary: "Plan the structure, screens and interactions before investing in full development.",
    intro: "A confusing interface creates friction even when the underlying technology works. UI/UX design helps clarify what users need to do, how information should be organised and what each screen should communicate. It reduces avoidable uncertainty before development begins.",
    outcome: "A considered product structure and interface direction that gives development a clearer blueprint.",
    bestFor: ["New software products that need a usable first design", "Existing dashboards with confusing navigation", "Websites with unclear content hierarchy", "Teams needing a shared interface system"],
    challenges: ["Users struggle to find important actions", "Screens contain too much or poorly grouped information", "Different parts of a product look and behave inconsistently", "Development starts before workflows are understood"],
    deliverables: ["User and task mapping", "Information architecture and navigation", "Wireframes and screen layouts", "Visual interface direction and reusable components", "Clickable prototype and design handover as agreed"],
    approach: [
      { title: "Understand the user", text: "We identify user types, goals, constraints and the context in which the product is used." },
      { title: "Structure the experience", text: "We map content, navigation and task flows to reduce unnecessary steps." },
      { title: "Explore the interface", text: "We develop layouts, visual hierarchy and reusable interface patterns." },
      { title: "Review and hand over", text: "We refine agreed screens and prepare specifications for implementation." }
    ],
    considerations: ["Design quality depends on access to users, business context and timely feedback.", "A prototype demonstrates intended behaviour but is not the same as a functioning production application.", "Usability testing with representative users may be scoped as a separate activity."],
    faqs: [
      { q: "Do I need UI/UX design before development?", a: "For multi-step products and dashboards, planning the experience first can reduce rework. Small, simple pages may need a lighter design process." },
      { q: "Will you provide a clickable prototype?", a: "A clickable prototype can be included when it helps validate navigation and key interactions before development." },
      { q: "Can you redesign an existing dashboard?", a: "Yes. We can review the current information architecture and redesign priority screens while keeping required workflows in view." },
      { q: "Does design include coding?", a: "Not automatically. Design and implementation can be proposed together or as separate phases, with the deliverables stated clearly." }
    ]
  },
  {
    number: "06", slug: "database-backend-planning", title: "Database & backend planning",
    eyebrow: "Build a dependable foundation",
    summary: "Plan how application data is stored, protected and exchanged before complexity becomes expensive.",
    intro: "The backend is responsible for the rules and data behind an application. A weak data model or unclear permission structure can create problems as usage grows. Planning the backend early helps make records consistent, access controlled and integrations easier to reason about.",
    outcome: "A documented backend direction that matches the product's workflows, data needs and expected operating context.",
    bestFor: ["New applications with multiple user roles", "Products storing customer, member or student records", "Systems that need third-party integrations", "Existing applications facing data or permission issues"],
    challenges: ["The same record is stored in multiple formats", "Access permissions are unclear or too broad", "Reports are difficult because data is inconsistent", "New features repeatedly require structural workarounds"],
    deliverables: ["Entity and relationship modelling", "Database schema planning", "Role and permission matrix", "API and integration outline", "Backup, environment and operational considerations"],
    approach: [
      { title: "Understand the information", text: "We identify records, relationships, lifecycle events and reporting needs." },
      { title: "Model the data", text: "We define entities, constraints and relationships to reduce duplication and ambiguity." },
      { title: "Plan access and APIs", text: "We map who can read or change information and how systems exchange it." },
      { title: "Document operations", text: "We outline environments, backups, migrations and relevant maintenance responsibilities." }
    ],
    considerations: ["Architecture should be based on actual requirements, not assumptions about massive future scale.", "Security depends on implementation, configuration, access management and ongoing operations—not a diagram alone.", "Production data migration and compliance reviews require explicit planning and may need specialist advice."],
    faqs: [
      { q: "Do you only provide planning, or can you implement it?", a: "Both are possible. We can deliver architecture planning as a defined phase or continue into backend implementation under an agreed scope." },
      { q: "Which database should my project use?", a: "The choice depends on data relationships, access patterns, hosting, integrations, team familiarity and operating cost. There is no single best database for every project." },
      { q: "Can you review an existing backend?", a: "Yes. A review can examine the current data model, access rules, API structure and known operational issues, subject to available access and documentation." },
      { q: "Will planning guarantee security?", a: "No. Planning identifies controls and risks, but security also requires correct implementation, testing, monitoring and maintenance." }
    ]
  },
  {
    number: "07", slug: "website-care-optimisation", title: "Website care & optimisation",
    eyebrow: "Keep your website useful",
    summary: "Maintain and improve an existing website as your content, services and customer needs evolve.",
    intro: "A website is not finished forever at launch. Content changes, software dependencies evolve and customer expectations shift. Ongoing care helps keep the site accurate, usable and technically healthy through planned updates and prioritised improvements.",
    outcome: "A clearer maintenance routine and a prioritised list of improvements for your existing website.",
    bestFor: ["Businesses with an existing website but no regular upkeep", "Teams that need small content or page changes", "Websites that feel slow or difficult to navigate", "Organisations planning incremental improvements rather than a full rebuild"],
    challenges: ["Old information remains published", "Small changes are delayed because nobody owns the website", "Performance or usability issues go unnoticed", "The site has accumulated inconsistent layouts and content"],
    deliverables: ["Initial website review and issue list", "Agreed content and page updates", "Performance and usability recommendations", "Dependency and update coordination where applicable", "Maintenance summary and next-step priorities"],
    approach: [
      { title: "Review the current site", text: "We inspect the agreed pages, content, key journeys and visible technical issues." },
      { title: "Prioritise changes", text: "We separate urgent fixes from improvements and agree what fits the maintenance scope." },
      { title: "Make and review updates", text: "We complete the agreed work and check the affected pages and interactions." },
      { title: "Plan the next cycle", text: "We record completed work, outstanding risks and recommended follow-up." }
    ],
    considerations: ["Maintenance plans need clear limits for included hours, requests, response times and emergency work.", "Major redesigns, new features, hosting migrations and third-party vendor issues are usually separate projects.", "Performance depends on hosting, code, assets, scripts and external services; specific results cannot be guaranteed before review."],
    faqs: [
      { q: "Can you maintain a website you did not build?", a: "Often, yes. We first review the platform, code access, hosting and current condition to determine whether support is practical." },
      { q: "Can I request occasional changes instead of a monthly plan?", a: "Yes. Small one-off tasks can be scoped separately where the platform and access allow it." },
      { q: "Do you guarantee a particular PageSpeed score?", a: "No. Scores vary with the site, hosting, third-party scripts and test conditions. We can identify and address practical performance issues." },
      { q: "Does maintenance include hosting?", a: "Not by default. Hosting and vendor charges are separate unless the proposal explicitly includes them." }
    ]
  },
  {
    number: "08", slug: "technical-support-handover", title: "Technical support & handover",
    eyebrow: "Know how to operate what you own",
    summary: "Finish a project with clear access, documentation and an agreed route for future technical help.",
    intro: "A handover should leave the business knowing what has been delivered, where it is managed and who controls the important accounts. Support should also be defined clearly, so both sides understand what counts as a defect, a new request or an urgent issue.",
    outcome: "A documented handover and support arrangement with clear responsibilities and boundaries.",
    bestFor: ["Businesses preparing to take over a newly built website or application", "Teams changing developers or service providers", "Owners who need access and operational documentation", "Organisations that want a defined post-launch support route"],
    challenges: ["Nobody knows where domains, hosting or integrations are managed", "Credentials and ownership are scattered", "There is no record of how the system is deployed", "Support requests become open-ended and difficult to prioritise"],
    deliverables: ["Inventory of agreed project assets and services", "Account and access handover checklist", "Deployment and operating notes where applicable", "Known limitations and outstanding issue list", "Support scope, request channel and escalation expectations"],
    approach: [
      { title: "Inventory the project", text: "We list the delivered components, connected services, environments and account owners." },
      { title: "Prepare access", text: "We coordinate transfer or confirmation of the agreed credentials and administrative ownership." },
      { title: "Document operation", text: "We record relevant deployment steps, known limitations and routine operational tasks." },
      { title: "Agree support boundaries", text: "We define included support, response expectations, exclusions and how new work is estimated." }
    ],
    considerations: ["Handover is limited to assets and access that the project owner is authorised to transfer.", "Third-party accounts may have their own ownership-transfer rules and recovery procedures.", "Support availability, response times and included fixes must be written into the agreement; continuous 24/7 support is not implied."],
    faqs: [
      { q: "Will I own the domain and hosting accounts?", a: "Where possible, accounts should be created in the client's name. The proposal should identify ownership and any vendor-managed services clearly." },
      { q: "What is included in technical support?", a: "That depends on the support agreement. It should specify channels, hours, response targets, included maintenance and what is billed separately." },
      { q: "Can you take over a project built by another developer?", a: "We can assess it first. Taking over depends on code access, documentation, hosting permissions, dependencies and the condition of the project." },
      { q: "Does handover mean the project will never need maintenance?", a: "No. Software and websites need ongoing updates and operational care. Handover explains the current system; it does not remove future maintenance needs." }
    ]
  }
];

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    openGraph: { title: `${service.title} | CURAKART`, description: service.summary },
    alternates: { canonical: `/services/${slug}` }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <div className="service-page">
      <section className="service-page-hero">
        <div className="wrap">
          <Link href="/services" className="service-back"><ArrowLeft size={15} /> All services</Link>
          <div className="service-page-kicker">{service.number} / {service.eyebrow}</div>
          <h1>{service.title.split(" ").slice(0, -1).join(" ")} <em>{service.title.split(" ").slice(-1)}</em></h1>
          <p className="service-page-summary">{service.summary}</p>
          <div className="service-page-actions">
            <Link className="service-page-primary" href={`/contact?service=${encodeURIComponent(service.title)}`}>Discuss this requirement <ArrowUpRight size={16} /></Link>
            <span>Clear scope. Practical delivery. No assumptions.</span>
          </div>
        </div>
      </section>

      <section className="service-page-intro">
        <div className="wrap service-page-intro-grid">
          <div><span className="service-page-label">UNDERSTANDING THE SERVICE</span><h2>What this service <em>actually means.</em></h2></div>
          <div><p className="service-page-intro-copy">{service.intro}</p><div className="service-outcome"><span>THE INTENDED OUTCOME</span><p>{service.outcome}</p></div></div>
        </div>
      </section>

      <section className="service-page-section service-page-muted">
        <div className="wrap service-page-columns">
          <div><span className="service-page-label">IS THIS RELEVANT TO YOU?</span><h2>When this service <em>makes sense.</em></h2><p className="service-page-section-lead">This may be worth exploring if one or more of these situations sound familiar.</p></div>
          <div className="service-bullet-list">{service.bestFor.map((item) => <div key={item}><CheckCircle2 size={18} /><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="service-page-section">
        <div className="wrap">
          <div className="service-page-heading"><span className="service-page-label">THE PROBLEMS WE LOOK FOR</span><h2>What may be <em>holding things back.</em></h2><p>These are common signals—not assumptions about your business. We confirm the actual problem during discovery.</p></div>
          <div className="service-challenge-grid">{service.challenges.map((item, i) => <article key={item}><span>0{i + 1}</span><p>{item}</p></article>)}</div>
        </div>
      </section>

      <section className="service-page-section service-page-dark">
        <div className="wrap">
          <div className="service-page-heading"><span className="service-page-label">WHAT THE WORK CAN INCLUDE</span><h2>What we can <em>deliver.</em></h2><p>The final deliverables are agreed in writing for each project. This is a guide to the typical scope.</p></div>
          <div className="service-deliverable-grid">{service.deliverables.map((item, i) => <div key={item}><span>0{i + 1}</span><p>{item}</p></div>)}</div>
        </div>
      </section>

      <section className="service-page-section">
        <div className="wrap">
          <div className="service-page-heading"><span className="service-page-label">HOW WE APPROACH IT</span><h2>A process with <em>clear checkpoints.</em></h2></div>
          <div className="service-approach-list">{service.approach.map((step, i) => <article key={step.title}><span>0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        </div>
      </section>

      <section className="service-page-section service-page-muted">
        <div className="wrap service-page-columns">
          <div><span className="service-page-label">IMPORTANT TO KNOW</span><h2>Scope, costs and <em>responsibilities.</em></h2><p className="service-page-section-lead">A clear proposal protects both sides. These points should be discussed before work begins.</p></div>
          <div className="service-considerations">{service.considerations.map((item) => <p key={item}>{item}</p>)}</div>
        </div>
      </section>

      <section className="service-page-section">
        <div className="wrap service-faq-wrap">
          <div><span className="service-page-label">COMMON QUESTIONS</span><h2>Before you <em>get started.</em></h2><p>Still unsure whether this is the right service? Start with a conversation about the problem.</p></div>
          <div className="service-faq-list">{service.faqs.map((faq) => <details key={faq.q}><summary><span>{faq.q}</span><CircleHelp size={17} /></summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className="service-page-cta">
        <div className="wrap"><span className="service-page-label">YOUR NEXT STEP</span><h2>Let’s discuss what your business <em>actually needs.</em></h2><p>Tell us what you are trying to improve. We’ll help clarify the requirement, possible approach and next steps before you commit.</p><div><Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Start a conversation <ArrowRight size={16} /></Link><Link href="/services">Explore other services <ArrowUpRight size={15} /></Link></div></div>
      </section>
    </div>
  );
}
