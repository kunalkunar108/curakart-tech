import type { Metadata } from "next";
export const metadata: Metadata = { title: "Selected work" };

const work = [
  {
    name: "GymDesk",
    type: "Gym operations · Internal product demo",
    desc: "A gym management product demo exploring member records, attendance and everyday gym operations.",
    url: "https://gym-managment-software-ecru.vercel.app/",
    tone: "dark",
    label: "Open live demo ↗",
  },
  {
    name: "LAKSHYA 07",
    type: "Education · Institute website demonstration",
    desc: "A computer institute website demonstration with course information, admission enquiries and student-facing pages.",
    url: "https://lakshya-07.vercel.app/",
    tone: "",
    label: "Open website demo ↗",
  },
  {
    name: "Hotel JD Inn",
    type: "Hospitality · Website concept",
    desc: "A responsive hotel website concept focused on presenting the property, sharing useful guest information and creating clear enquiry paths.",
    url: "https://hotel-jd-afzv8wjal-kunal-s-project.vercel.app/",
    tone: "rose",
    label: "Open website demo ↗",
  },
  {
    name: "Skynet Computer Education",
    type: "Education · Institute website demonstration",
    desc: "An institute website demonstration covering courses, faculty, facilities, gallery and WhatsApp-based admission enquiries.",
    url: "https://skynet-computer-education-jvb5d3gzc-kunal-s-project.vercel.app/",
    tone: "",
    label: "Open website demo ↗",
  },
  {
    name: "IRONCORE FITNESS",
    type: "Fitness · Fictional gym website demo",
    desc: "A fictional gym brand website concept with responsive layouts and a visual admin-dashboard preview. Enquiries and dashboard data are illustrative only.",
    url: "https://gym-demo-hdxihvgrk-kunal-s-project.vercel.app/",
    tone: "dark",
    label: "Open website demo ↗",
  },
  {
    name: "StudyDesk",
    type: "Library operations · Early software preview",
    desc: "A library management software preview exploring branch and student records. Demo data is stored locally in the browser and is not suitable for real student information.",
    url: "https://study-library-management-nveytzq72-kunal-s-project.vercel.app/",
    tone: "",
    label: "Open software preview ↗",
  },
  {
    name: "Hospitality website direction",
    type: "Hospitality · Concept exploration",
    desc: "A visual direction for café, restaurant and stay businesses, focused on clear information, menus and enquiry paths.",
    url: "",
    tone: "rose",
    label: "Concept exploration",
  },
];

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Selected work</div>
          <h1>Ideas made tangible.</h1>
          <p>
            Explore website demonstrations, internal product work and early software previews.
            Each project is labelled clearly so demonstrations are not mistaken for commissioned client work.
          </p>
        </div>
      </section>
      <section className="content">
        <div className="wrap grid3">
          {work.map((item, index) => (
            <article className={"project " + item.tone} key={item.name} style={{ minHeight: 330 }}>
              <div>
                <small>{item.type}</small>
                <strong style={{ display: "block", marginTop: 28 }}>{item.name}</strong>
                <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.8 }}>{item.desc}</p>
              </div>
              <div>
                {item.url ? (
                  <a className="tag" href={item.url} target="_blank" rel="noreferrer">{item.label}</a>
                ) : (
                  <span className="tag">{item.label}</span>
                )}
              </div>
              <b className="project-mark">{["G", "L", "H", "S", "I", "S", "H"][index]}</b>
            </article>
          ))}
        </div>
        <p className="note" style={{ marginTop: 28 }}>
          Demonstrations may contain illustrative content and limited functionality. They are not production services
          and should not be used to submit real customer, member or student data. Production scope, integrations and
          content are agreed separately for each project.
        </p>
      </section>
    </>
  );
}
