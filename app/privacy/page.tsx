import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy policy" };

export default function Privacy() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1>Privacy policy</h1>
          <p>How information shared through this website is handled.</p>
        </div>
      </section>
      <section className="content">
        <div className="wrap prose">
          <p><b>Last updated: 22 November 2026</b></p>
          <h2>Information you provide</h2>
          <p>If you contact CURAKART through WhatsApp or email, we may receive your name, contact details and the information you choose to share about your project. The website contact form prepares a message for you; it does not submit your details to CURAKART until you send that message in WhatsApp.</p>
          <h2>How we use information</h2>
          <p>We use enquiry information to respond to requests, discuss potential projects, provide proposals and maintain relevant business communications. We do not ask you to submit passwords or sensitive personal information through this website.</p>
          <h2>Third-party services</h2>
          <p>When you choose to continue to WhatsApp, the service opens in a new tab or app and is subject to WhatsApp’s own terms and privacy practices. Email communications are handled by the email providers involved. The website is hosted by a third-party hosting provider, which may process basic technical information for security and operation.</p>
          <h2>Cookies and analytics</h2>
          <p>This website does not intentionally use advertising cookies or analytics tracking at this time. Hosting providers may collect basic technical logs for security and operation.</p>
          <h2>Retention and your choices</h2>
          <p>We retain enquiry information only as long as reasonably necessary for communication, business records or legal obligations. To request access, correction or deletion of information you have shared, email info@curakart.com.</p>
          <h2>Changes</h2>
          <p>This policy may be updated as the website and services evolve. The latest version will be published on this page.</p>
          <h2>Contact</h2>
          <p>Privacy questions: info@curakart.com.</p>
        </div>
      </section>
    </>
  );
}
