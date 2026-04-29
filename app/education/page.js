import { headers } from "next/headers";
import Image from "next/image";
import ExperienceHeadlineDecrypt from "@/components/ExperienceHeadlineDecrypt";
import IxdfCertificationsSection from "@/components/IxdfCertificationsSection";
import PitchPresenceImage from "@/components/PitchPresenceImage";
import ScrollReveal from "@/components/ScrollReveal";
import { getSiteConfig } from "@/config/getSiteConfig";

const education = [
  {
    school: "California State University, Chico",
    degree: "Bachelor of Science - BS, Computer Science",
    period: "2004 - 2006",
    activities: "Activities and societies: Option in Applied Computer Graphics",
    description: "Minor in Communication Design",
    logo: "/img/csu-chico-seal.png",
  },
  {
    school: "International Academy of Design",
    degree: "ACE, Design Multimedia",
    period: "2002 - 2003",
    activities: "Activities and societies: Creating the school factsheet and website.",
    description: "Design Multimedia",
  },
];

const certifications = [
  {
    school: "IxDF - The Interaction Design Foundation",
    degree: "Professional Education, User Experience and Interaction Design",
    period: "2016 - 2017",
    details: ["Online course Certifications"],
  },
];

export async function generateMetadata() {
  const host = (await headers()).get("host") || "";
  const siteConfig = getSiteConfig(host);
  const title = "Education & Certifications";
  const description =
    "Education, certifications and continuous learning for Jonathan Le Coz.";

  return {
    title,
    description,
    alternates: { canonical: "/education" },
    openGraph: {
      title,
      description,
      url: "/education",
      siteName: siteConfig.brand.logoText,
    },
  };
}

function PitchSection() {
  return (
    <section className="section cv-pitch-section" id="pitch">
      <div className="section-services-inner">
        <ScrollReveal className="cv-pitch-card reveal-down">
          <h1 className="cv-pitch-headline">
            I build teams that make
            <br />
            complex things feel simple.
          </h1>
          <p className="cv-pitch-copy">
            10 years leading UX across SaaS, ecommerce, and digital products - from pixels to strategy, from solo
            contributor to team builder.
          </p>
          <div className="cv-pitch-avatar-target is-settled" aria-hidden="true">
            <PitchPresenceImage src="/img/pitch-jonathan-harvest.jpg" alt="" width={1024} height={576} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section" id="education">
      <div className="section-services-inner">
        <ScrollReveal>
          <ExperienceHeadlineDecrypt as="p" className="section-label" text="EDUCATION" decrypt />
          <h2 className="section-headline">
            Computer sciences, <span className="gold">communication design</span> and continuous learning.
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger className="cv-edu">
          <p className="cv-edu-subheading">Certifications</p>
          {certifications.map((item) => (
            <div key={item.school} className="cv-edu-row reveal">
              <div className="cv-edu-main">
                <h3>{item.school}</h3>
                <p className="cv-edu-degree">{item.degree}</p>
                {item.details?.map((line) => (
                  <p key={line} className="cv-edu-detail">
                    {line}
                  </p>
                ))}
              </div>
              <div className="cv-edu-period">{item.period}</div>
            </div>
          ))}
          <p className="cv-edu-subheading">School</p>
          {education.map((item) => (
            <div key={item.school} className={`cv-edu-row reveal${item.logo ? " cv-edu-row--with-logo" : ""}`}>
              <div className="cv-edu-main">
                <h3>{item.school}</h3>
                <p className="cv-edu-degree">{item.degree}</p>
                {item.activities ? <p className="cv-edu-detail">{item.activities}</p> : null}
                {item.description ? <p className="cv-edu-detail">{item.description}</p> : null}
              </div>
              {item.logo ? (
                <Image
                  className="cv-edu-logo"
                  src={item.logo}
                  alt={`${item.school} seal`}
                  width={224}
                  height={224}
                  loading="lazy"
                />
              ) : null}
              <div className="cv-edu-period">{item.period}</div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function EducationPage() {
  return (
    <>
      <PitchSection />
      <EducationSection />
      <IxdfCertificationsSection />
    </>
  );
}
