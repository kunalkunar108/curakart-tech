import Link from "next/link";
import { ArrowUpRight, ArrowRight, Code2, PanelsTopLeft, Workflow, Layers3, Smartphone, Database, ShieldCheck, Gauge, MessageCircle, Search, PenTool, Rocket } from "lucide-react";

const capabilities = [
  { n: "01", icon: PanelsTopLeft, title: "Web design & development", text: "Responsive business websites, landing pages and multi-page experiences that explain what you offer and make the next step clear.", items: ["Business and company websites", "Landing pages and campaign pages", "Website redesigns", "Enquiry and contact journeys"] },
  { n: "02", icon: Code2, title: "Custom software", text: "Purpose-built browser-based systems for workflows that generic tools or spreadsheets do not handle well.", items: ["Management dashboards", "Student, member and customer records", "Operational portals", "Role-based workflows"] },
  { n: "03", icon: Workflow, title: "AI & business automation", text: "Practical integrations and automations that help information move between the tools a business already uses.", items: ["Lead and enquiry workflows", "Notifications and reminders", "WhatsApp-connected processes", "AI-assisted information flows"] },
  { n: "04", icon: Layers3, title: "UI/UX & product experience", text: "Clear structures and interfaces that make digital products easier to understand, navigate and operate.", items: ["User journeys and wireframes", "Interface design", "Dashboard layouts", "Clickable product prototypes"] },
  { n: "05", icon: Smartphone, title: "Web applications", text: "Interactive online products designed around a defined user need, with a path from early release to future improvements.", items: ["Customer and staff portals", "Progressive web app experiences", "MVP planning and development", "Third-party integrations"] },
  { n: "06", icon: Gauge, title: "Website care & improvement", text: "Ongoing updates and focused improvements that keep an existing website useful, reliable and aligned with the business.", items: ["Content and page updates", "Performance improvements", "Feature enhancements", "Technical maintenance"] },
];

const projects = [
  { no: "01", name: "GymDesk", type: "INTERNAL PRODUCT · SOFTWARE DEMO", desc: "A gym operations concept exploring member records, attendance and day-to-day management.", href: "https://gym-managment-software-ecru.vercel.app/", cta: "Explore software demo", style: "work-dark", visual: "gym" },
  { no: "02", name: "LAKSHYA 07", type: "WEBSITE · INSTITUTE DEMONSTRATION", desc: "A structured digital presence for a computer institute, with course information and admission enquiries.", href: "https://lakshya-07.vercel.app/", cta: "Explore website demo", style: "work-light", visual: "education" },
  { no: "03", name: "Hotel JD Inn", type: "WEBSITE · HOSPITALITY CONCEPT", desc: "A hospitality website concept designed around property presentation and guest enquiries.", href: "https://hotel-jd-afzv8wjal-kunal-s-project.vercel.app/", cta: "Explore website concept", style: "work-sand", visual: "hotel" },
];

const steps = [
  ["01", "Discover", "We learn about your business, users, current process and the problem you want to solve."],
  ["02", "Plan", "We define the deliverables, priorities, technical approach, timeline and responsibilities before work begins."],
  ["03", "Design", "We organise the content and user journeys, then shape the visual direction for your review."],
  ["04", "Build", "We develop the agreed experience in focused stages and share progress at planned checkpoints."],
  ["05", "Test", "We review the agreed functionality, responsive behaviour, forms and key user journeys before launch."],
  ["06", "Launch & support", "We prepare the handover and can agree on ongoing maintenance or future improvements separately."],
];

const faqs = [
  ["What kind of projects does CURAKART take on?", "We work on business websites, landing pages, web applications, custom management software, UI/UX work and practical automation. The right fit depends on the problem, scope and available resources."],
  ["How much does a website cost?", "Our current indicative ranges are ₹15,000–₹20,000 for a starter website and ₹25,000–₹40,000 for a business website. Final pricing depends on pages, content, integrations and requirements. See the pricing page for scope notes."],
  ["How long does a project take?", "Timing depends on scope, content readiness, integrations and review turnaround. We provide a project-specific timeline after understanding the requirements rather than promising one timeline for every project."],
  ["Can you build custom management software?", "Yes. We can discuss dashboards, portals and workflow-focused systems. We first map the process and define what belongs in the initial release. Larger systems may need phased delivery."],
  ["Will I be able to request changes?", "Review points and revision rounds are defined in the proposal. Changes outside the agreed scope may affect cost or timeline, so we document them before proceeding."],
  ["Do you provide support after launch?", "Support, maintenance and future development can be agreed as a separate arrangement. The proposal will state what is included and what is not."],
  ["Do you work with businesses outside Jharkhand?", "Project discussions and delivery can be handled remotely. We assess each enquiry based on its requirements and whether it is a suitable fit."],
  ["How do I get started?", "Share a short description through the contact page or WhatsApp. We can then clarify the objective, expected features, budget and next steps."],
];

export default function Home() {
  return <>
    <section className="agency-hero">
      <div className="agency-hero-grid"></div>
      <div className="wrap agency-hero-inner">
        <div className="agency-hero-copy">
          <div className="agency-kicker"><span></span> INDEPENDENT DIGITAL & SOFTWARE STUDIO</div>
          <h1>Build what’s<br/> <em>next.</em> Move<br/>business forward.</h1>
          <p className="agency-hero-lead">We help businesses turn ideas and everyday operational challenges into useful digital experiences — from professional websites to custom software and connected workflows.</p>
          <div className="agency-actions">
            <Link className="agency-button" href="/contact">Start a project <ArrowUpRight size={17}/></Link>
            <Link className="agency-text-link" href="/portfolio">Explore our work <ArrowRight size={16}/></Link>
          </div>
          <div className="hero-proofline"><span><i/> Clear scope</span><span><i/> Thoughtful design</span><span><i/> Practical technology</span></div>
        </div>
        <div className="agency-hero-visual" aria-label="Abstract digital systems illustration">
          <div className="visual-topline"><span>CURAKART / DIGITAL SYSTEMS</span><span>01 — 04</span></div>
          <div className="visual-orbit orbit-a"></div><div className="visual-orbit orbit-b"></div><div className="visual-orbit orbit-c"></div>
          <div className="visual-cross cross-a"></div><div className="visual-cross cross-b"></div>
          <div className="visual-core"><span>CK</span><small>THINK · DESIGN · BUILD</small></div>
          <div className="visual-node node-one"><i></i><span>WEB</span></div><div className="visual-node node-two"><i></i><span>SOFTWARE</span></div><div className="visual-node node-three"><i></i><span>AUTOMATION</span></div>
          <div className="visual-caption">Technology, made useful.</div><div className="visual-index">FIG. 001 / CURAKART</div>
        </div>
      </div>
      <div className="wrap agency-hero-bottom"><span>STRATEGY-LED THINKING</span><span>DESIGN WITH INTENT</span><span>ENGINEERED TO WORK</span><span>BUILT FOR WHAT’S NEXT ↘</span></div>
    </section>

    <section className="agency-intro">
      <div className="wrap agency-intro-grid"><div className="agency-section-label">01 / THE STUDIO</div><div><p className="agency-intro-statement">Technology should do more than look impressive. <em>It should make business work better.</em></p><div className="agency-intro-foot"><p>CURAKART is an independent digital and software development studio focused on practical solutions, thoughtful design and dependable execution. We bring the business objective into the conversation before deciding what to build.</p><Link href="/about">Get to know CURAKART <ArrowUpRight size={15}/></Link></div></div></div>
    </section>

    <section className="agency-capabilities">
      <div className="wrap"><div className="agency-section-head"><div><div className="agency-section-label">02 / WHAT WE DO</div><h2>Digital capability.<br/><em>Business clarity.</em></h2></div><p>From your first digital presence to the systems behind your operations, we bring design and development together around a defined business objective.</p></div>
        <div className="agency-cap-grid agency-cap-grid-six">{capabilities.map(({n,icon:Icon,title,text,items})=><article className="agency-cap agency-cap-expanded" key={n}><div className="agency-cap-top"><span>{n}</span><Icon size={22} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p><ul>{items.map(item=><li key={item}>{item}</li>)}</ul><Link href="/services" aria-label={`Explore ${title}`}><ArrowUpRight size={17}/></Link></article>)}</div>
        <div className="agency-section-link"><Link href="/services">Explore all services <ArrowUpRight size={16}/></Link></div>
      </div>
    </section>

    <section className="agency-fit">
      <div className="wrap agency-fit-grid"><div><div className="agency-section-label">03 / WHO WE WORK WITH</div><h2>Built around the way<br/><em>your business works.</em></h2><p>Different businesses have different customers, teams and operating challenges. We start with the context instead of forcing every project into the same template.</p></div>
        <div className="agency-fit-list">
          <article><span>01</span><div><h3>Growing businesses</h3><p>Company websites, lead-generation pages and clearer digital customer journeys.</p></div><PanelsTopLeft/></article>
          <article><span>02</span><div><h3>Education & training</h3><p>Institute websites, admission journeys and software concepts for student and administrative workflows.</p></div><Database/></article>
          <article><span>03</span><div><h3>Fitness & membership businesses</h3><p>Member-facing experiences and operational tools for attendance, records and routine management.</p></div><Workflow/></article>
          <article><span>04</span><div><h3>Hospitality & local services</h3><p>Property and service presentation, useful information and straightforward enquiry paths.</p></div><MessageCircle/></article>
        </div>
      </div>
    </section>

    <section className="agency-work">
      <div className="wrap"><div className="agency-section-head"><div><div className="agency-section-label">04 / SELECTED WORK</div><h2>Made to solve.<br/><em>Built to matter.</em></h2></div><div className="agency-work-intro"><p>A selection of working demonstrations, internal product explorations and concepts. We label each one clearly — no invented client stories or inflated outcomes.</p><Link href="/work">View all projects <ArrowUpRight size={15}/></Link></div></div>
        <div className="agency-work-grid">{projects.map(p=><article className={`agency-project ${p.style}`} key={p.no}><div className="agency-project-visual"><div className={`project-screen ${p.visual}`}><div className="screen-bar"><b>● ● ●</b><span>{p.name.toUpperCase()}</span><i>↗</i></div><div className="screen-content"><div className="screen-line"></div><div className="screen-line short"></div><div className="screen-panels"><i></i><i></i><i></i></div><div className="screen-footer-line"></div></div></div><span className="project-no">{p.no}</span></div><div className="agency-project-copy"><div className="agency-project-type">{p.type}</div><h3>{p.name}</h3><p>{p.desc}</p><a href={p.href} target="_blank" rel="noreferrer">{p.cta} <ArrowUpRight size={15}/></a></div></article>)}</div>
        <div className="agency-section-link"><Link href="/work">Browse the project portfolio <ArrowUpRight size={16}/></Link></div>
      </div>
    </section>

    <section className="agency-technologies" id="technologies">
      <div className="wrap">
        <div className="agency-section-head"><div><div className="agency-section-label">05 / TECHNOLOGY LANDSCAPE</div><h2>The tools behind<br/><em>useful solutions.</em></h2></div><div className="agency-work-intro"><p>We select technologies around the product, its users and long-term needs. Not every project needs every tool.</p><Link href="/technologies">Explore our technology approach <ArrowUpRight size={15}/></Link></div></div>
        <div className="home-tech-grid">
          <article><span>01 / FRONTEND</span><div><b>React</b><b>Next.js</b><b>TypeScript</b><b>JavaScript</b></div></article>
          <article><span>02 / BACKEND & DATA</span><div><b>Node.js</b><b>PostgreSQL</b><b>Supabase</b><b>REST APIs</b></div></article>
          <article><span>03 / AI & AUTOMATION</span><div><b>OpenAI API</b><b>Workflow tools</b><b>WhatsApp links</b><b>Integrations</b></div></article>
          <article><span>04 / DEPLOYMENT</span><div><b>Vercel</b><b>GitHub</b><b>Cloud hosting</b><b>CI workflows</b></div></article>
        </div>
      </div>
    </section>

    <section className="agency-approach">
      <div className="wrap"><div className="agency-section-head"><div><div className="agency-section-label">05 / OUR APPROACH</div><h2>Useful by design.<br/><em>Thoughtful by default.</em></h2></div><p>Technology is a means to an outcome. We focus on making the solution understandable, usable and appropriate for the job it needs to do.</p></div>
        <div className="agency-approach-grid">
          <article><Search/><h3>Understand first</h3><p>We ask what is slowing the business down, what customers need and what the solution must actually achieve.</p></article>
          <article><PenTool/><h3>Design with purpose</h3><p>Structure, content and interface decisions should help people find information and complete tasks without confusion.</p></article>
          <article><ShieldCheck/><h3>Build responsibly</h3><p>We agree what is included, avoid unnecessary complexity and make limitations or dependencies visible.</p></article>
          <article><Rocket/><h3>Improve over time</h3><p>A launch is a milestone, not a reason to stop thinking. Future changes can be planned around real usage and priorities.</p></article>
        </div>
      </div>
    </section>

    <section className="agency-method">
      <div className="wrap agency-method-grid"><div><div className="agency-section-label">06 / HOW WE WORK</div><h2>Clear thinking.<br/><em>Careful execution.</em></h2><p className="agency-method-lead">A transparent process keeps decisions, responsibilities and expectations visible from the first conversation to handover.</p><Link className="agency-dark-link" href="/process">Explore our process <ArrowUpRight size={16}/></Link></div><div className="agency-method-list">{steps.map(([n,t,d])=><div className="agency-method-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={16}/></div>)}</div></div>
    </section>

    <section className="agency-delivery">
      <div className="wrap agency-delivery-grid"><div><div className="agency-section-label">07 / DELIVERY PRINCIPLES</div><h2>Know what you’re<br/><em>getting.</em></h2><p>Before development starts, the proposal should make the work understandable. That means knowing what is included, what depends on you and what may require a separate budget.</p></div><div className="agency-delivery-points">
        <div><b>01</b><span><strong>Defined scope</strong><small>Pages, features and deliverables written down before work begins.</small></span></div>
        <div><b>02</b><span><strong>Visible milestones</strong><small>Review points that make progress and decisions easier to follow.</small></span></div>
        <div><b>03</b><span><strong>Clear handover</strong><small>Agreed access, documentation and launch responsibilities.</small></span></div>
        <div><b>04</b><span><strong>Honest boundaries</strong><small>Third-party costs, support terms and out-of-scope requests stated clearly.</small></span></div>
      </div></div>
    </section>

    <section className="agency-faq">
      <div className="wrap agency-faq-grid"><div><div className="agency-section-label">08 / COMMON QUESTIONS</div><h2>Good questions.<br/><em>Clear answers.</em></h2><p>Still deciding what your business needs? Start with the basics here, then tell us about your specific situation.</p><Link href="/contact" className="agency-dark-link">Ask us about your project <ArrowUpRight size={16}/></Link></div><div className="agency-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div>
    </section>

    <section className="agency-cta"><div className="wrap agency-cta-inner"><div className="agency-section-label">09 / START A CONVERSATION</div><h2>Have a business challenge<br/>worth <em>solving?</em></h2><div className="agency-cta-bottom"><p>Tell us what you’re building, improving or trying to make simpler. We’ll clarify the requirements and discuss a practical next step.</p><Link href="/contact">Let’s discuss your project <ArrowUpRight size={17}/></Link></div></div></section>
  </>;
}
