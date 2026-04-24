import { notFound } from "next/navigation";
import { getWorkBySlug, worksProjects } from "@/config/worksProjects";
import CaseStudyPage from "@/components/CaseStudyPage";

export async function generateStaticParams() {
  return worksProjects.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) {
    return { title: "Not found" };
  }

  const title = `${project.title} — Case study`;

  return {
    title,
    description: project.caseStudy.heroDek,
    openGraph: {
      title,
      description: project.caseStudy.heroDek,
      url: `/works/${slug}`,
      ...(project.coverImage ? { images: [{ url: project.coverImage, alt: project.coverAlt || project.title }] } : {}),
    },
    alternates: { canonical: `/works/${slug}` },
  };
}

export default async function WorkCaseStudyRoute({ params }) {
  const { slug } = await params;
  const project = getWorkBySlug(slug);
  if (!project) notFound();

  if (slug === "breeze-ds") {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          title="Breeze DS case study"
          src="/breeze-ds-case-study.html"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return <CaseStudyPage project={project} />;
}
