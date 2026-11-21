import Link from "next/link";
import { ArrowUpRight, ArrowRight, Code2, PanelsTopLeft, Workflow, Layers3, MoveUpRight } from "lucide-react";

const capabilities = [
  { n: "01", icon: PanelsTopLeft, title: "Web design & development", text: "Distinctive, responsive websites that communicate value and turn interest into enquiries." },
  { n: "02", icon: Code2, title: "Custom software", text: "Purpose-built platforms, portals and internal tools shaped around real operating needs." },
  { n: "03", icon: Workflow, title: "Business automation", text: "Connected workflows that reduce repetitive tasks and make everyday work more efficient." },
  { n: "04", icon: Layers3, title: "Digital product experience", text: "Clear interfaces and thoughtful product flows that make complex tools easier to use." },
];
const projects = [
  { no: "01", name: "GymDesk", type: "INTERNAL PRODUCT · SOFTWARE DEMO", desc: "A gym operations concept exploring member records, attendance and day-to-day management.", href: "https://gym-managment-software-ecru.vercel.app/", cta: "Explore software demo", style: "work-dark", visual: "gym" },
  { no: "02", name: "LAKSHYA 07", type: "WEBSITE · INSTITUTE DEMONSTRATION", desc: "A structured digital presence for a computer institute, with course information and admission enquiries.", href: "https://lakshya-07.vercel.app/", cta: "Explore website demo", style: "work-light", visual: "education" },
  { no: "03", name: "Hotel JD Inn", type: "WEBSITE · HOSPITALITY CONCEPT", desc: "A hospitality website concept designed around property presentation and guest enquiries.", href: "https://hotel-jd-afzv8wjal-kunal-s-project.vercel.app/", cta: "Explore website concept", style: "work-sand", visual: "hotel" },
];

export default function Home() {
  return <>
    <section className="agency-hero">
      <div className="agency-hero-grid"></div>
      <div className="wrap agency-hero-inner">
        <div className="agency-hero-copy">
          <div className="agency-kicker"><span></span> INDEPENDENT DIGITAL & SOFTWARE STUDIO</div>
          <h1>Build what’s<br/> <em>next.</em> Move<br/>business forward.</h1>
          <p className="agency-hero-lead">We partner with businesses to design, develop and improve the digital tools they rely on — from high-performing websites to custom software and automation.</p>
          <div className="agency-actions">
            <Link className="agency-button" href="/contact">Start a project <ArrowUpRight size={17}/></Link>
            <Link className="agency-text-link" href="/work">Explore our work <ArrowRight size={16}/></Link>
          </div>
        </div>
        <div className="agency-hero-visual" aria-label="Abstract digital systems illustration">
          <div className="visual-topline"><span>CURAKART / DIGITAL SYSTEMS</span><span>01 — 04</span></div>
          <div className="visual-orbit orbit-a"></div><div className="visual-orbit orbit-b"></div>
          <div className="visual-cross cross-a"></div><div className="visual-cross cross-b"></div>
          <div className="visual-core"><span>CK</span><small>THINK · DESIGN · BUILD</small></div>
          <div className="visual-node node-one"><i></i><span>WEB</span></div>
          <div className="visual-node node-two"><i></i><span>SOFTWARE</span></div>
          <div className="visual-node node-three"><i></i><span>AUTOMATION</span></div>
          <div className="visual-caption">Technology, made useful.</div>
          <div className="visual-index">FIG. 001 / CURAKART</div>
        </div>
      </div>
      <div className="wrap agency-hero-bottom"><span>STRATEGY-LED THINKING</span><span>DESIGN WITH INTENT</span><span>ENGINEERED TO WORK</span><span>BUILT FOR WHAT’S NEXT ↘</span></div>
    </section>

    <section className="agency-intro">
      <div className="wrap agency-intro-grid"><div className="agency-section-label">01 / THE STUDIO</div><div><p className="agency-intro-statement">Technology should do more than look impressive. <em>It should make business work better.</em></p><div className="agency-intro-foot"><p>CURAKART is an independent digital and software development studio focused on practical solutions, thoughtful design and dependable execution.</p><Link href="/about">Get to know CURAKART <ArrowUpRight size={15}/></Link></div></div></div>
    </section>

    <section className="agency-capabilities">
      <div className="wrap"><div className="agency-section-head"><div><div className="agency-section-label">02 / WHAT WE DO</div><h2>Digital capability.<br/><em>Business clarity.</em></h2></div><p>From your first digital presence to the systems behind your operations, we bring design and development together around a clear objective.</p></div>
        <div className="agency-cap-grid">{capabilities.map(({n,icon:Icon,title,text})=><article className="agency-cap" key={n}><div className="agency-cap-top"><span>{n}</span><Icon size={22} strokeWidth={1.5}/></div><h3>{title}</h3><p>{text}</p><Link href="/services" aria-label={`Explore ${title}`}><MoveUpRight size={17}/></Link></article>)}</div>
      </div>
    </section>

    <section className="agency-work">
      <div className="wrap"><div className="agency-section-head"><div><div className="agency-section-label">03 / SELECTED WORK</div><h2>Made to solve.<br/><em>Built to matter.</em></h2></div><div className="agency-work-intro"><p>A selection of working demonstrations, internal product explorations and concepts. We label each one clearly — no invented client stories or inflated outcomes.</p><Link href="/work">View all projects <ArrowUpRight size={15}/></Link></div></div>
        <div className="agency-work-grid">{projects.map(p=><article className={`agency-project ${p.style}`} key={p.no}><div className="agency-project-visual"><div className={`project-screen ${p.visual}`}><div className="screen-bar"><b>● ● ●</b><span>{p.name.toUpperCase()}</span><i>↗</i></div><div className="screen-content"><div className="screen-line"></div><div className="screen-line short"></div><div className="screen-panels"><i></i><i></i><i></i></div><div className="screen-footer-line"></div></div></div><span className="project-no">{p.no}</span></div><div className="agency-project-copy"><div className="agency-project-type">{p.type}</div><h3>{p.name}</h3><p>{p.desc}</p><a href={p.href} target="_blank" rel="noreferrer">{p.cta} <ArrowUpRight size={15}/></a></div></article>)}</div>
      </div>
    </section>

    <section className="agency-method">
      <div className="wrap agency-method-grid"><div><div className="agency-section-label">04 / HOW WE WORK</div><h2>Clear thinking.<br/><em>Careful execution.</em></h2><p className="agency-method-lead">Good digital work comes from understanding the problem before choosing the technology.</p><Link className="agency-dark-link" href="/process">Explore our process <ArrowUpRight size={16}/></Link></div><div className="agency-method-list">{[["01","Understand","We start with your goals, users and the friction you want to remove."],["02","Define","We shape the scope, priorities, deliverables and a realistic plan."],["03","Create","We design, develop and review in focused, transparent stages."],["04","Deliver","We test, launch and hand over with clear documentation and next steps."]].map(([n,t,d])=><div className="agency-method-step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={16}/></div>)}</div></div>
    </section>

    <section className="agency-cta"><div className="wrap agency-cta-inner"><div className="agency-section-label">05 / START A CONVERSATION</div><h2>Have a business challenge<br/>worth <em>solving?</em></h2><div className="agency-cta-bottom"><p>Tell us what you’re building, improving or trying to make simpler. We’ll take it from there.</p><Link href="/contact">Let’s discuss your project <ArrowUpRight size={17}/></Link></div></div></section>
  </>;
}
