"use client";

export default function Contact() {
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Hello CURAKART, I would like to enquire about your services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      `Project details: ${message}`,
    ].join("\n");

    window.open(
      `https://wa.me/918084725839?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>Tell us what you want to move forward.</h1>
          <p>Share a little about your business and the problem you want to solve. We’ll use it to understand whether we can help.</p>
        </div>
      </section>
      <section className="content">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 style={{ font: "700 30px Manrope", letterSpacing: -1 }}>A useful first step is a clear conversation.</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>No long brief needed. A few details are enough to get started.</p>
            <p><b>WhatsApp</b><br /><a href="https://wa.me/918084725839" target="_blank" rel="noreferrer">+91 80847 25839 ↗</a></p>
            <p><b>Email</b><br /><a href="mailto:info@curakart.com">info@curakart.com</a></p>
          </div>
          <div>
            <form className="contact-form" onSubmit={submit}>
              <label>Your name<input name="name" required placeholder="Name" /></label>
              <label>Your phone number<input name="phone" type="tel" required placeholder="+91 98765 43210" /></label>
              <label>What do you need?
                <select name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option>Business website</option>
                  <option>Custom software</option>
                  <option>AI & automation</option>
                  <option>UI/UX or web application</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>Tell us about your project<textarea name="message" required minLength={10} placeholder="What are you trying to build or improve?" /></label>
              <button className="btn" type="submit">Continue to WhatsApp ↗</button>
              <p className="note">Your details will be added to a WhatsApp message. WhatsApp will open in a new tab; review the message and press Send to submit your enquiry. CURAKART does not receive it until you send it.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
