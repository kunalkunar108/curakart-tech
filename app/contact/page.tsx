"use client";
import Link from "next/link";
export default function Contact() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name=String(data.get("name")||"").trim(), phone=String(data.get("phone")||"").trim(), service=String(data.get("service")||"").trim(), message=String(data.get("message")||"").trim();
    const text=["Hello CURAKART, I would like to enquire about your services.","",`Name: ${name}`,`Phone: ${phone}`,`Service: ${service}`,`Project details: ${message}`].join("\n");
    window.open(`https://wa.me/918084725839?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer");
  }
  return <main className="inner-page">
    <section className="inner-hero"><div className="wrap"><div className="eyebrow">CONTACT / START A PROJECT</div><h1>Tell us what you want to <em>move forward.</em></h1><p>Share a little about your business and the problem you want to solve. A few details are enough to begin a useful conversation.</p></div></section>
    <section className="inner-section"><div className="wrap contact-layout"><aside className="contact-aside"><div className="eyebrow">LET’S TALK</div><h2>A clear conversation is the first deliverable.</h2><p>We’ll use your note to understand the requirement and whether our capabilities are a fit. No long technical brief needed.</p><div className="contact-detail"><span>WHATSAPP</span><a href="https://wa.me/918084725839" target="_blank" rel="noreferrer">+91 80847 25839 ↗</a></div><div className="contact-detail"><span>EMAIL</span><a href="mailto:info@curakart.com">info@curakart.com ↗</a></div><div className="contact-aside-note">CURAKART<br/>Technology That Moves Businesses Forward.</div></aside>
    <form className="contact-form contact-form-new" onSubmit={submit}><div className="eyebrow">PROJECT ENQUIRY</div><h2>What are you looking to build?</h2><label>Your name<input name="name" required placeholder="Name" /></label><label>Your phone number<input name="phone" type="tel" required placeholder="+91 98765 43210" /></label><label>What do you need?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Business website</option><option>Custom software</option><option>AI & automation</option><option>UI/UX or web application</option><option>Not sure yet</option></select></label><label>Tell us about your project<textarea name="message" required minLength={10} placeholder="What are you trying to build or improve?" /></label><button className="btn" type="submit">Continue to WhatsApp ↗</button><p className="note">WhatsApp opens with a pre-filled message. Review it and press Send to submit your enquiry. CURAKART does not receive the details until you send the message.</p></form></div></section>
    <section className="contact-bottom"><div className="wrap"><span>Prefer email?</span><Link href="mailto:info@curakart.com">Write to info@curakart.com ↗</Link></div></section>
  </main>;
}