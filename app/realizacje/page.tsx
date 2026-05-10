import { ProjectsPage } from "@/components/site/projects-page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Realizacje domów szkieletowych",
  description:
    "Poznaj realizacje domów szkieletowych Nord Frame. Zobacz wybrane projekty, kompaktowe domy całoroczne i nowoczesne bryły przygotowane w technologii prefabrykacji drewnianej.",
  path: "/realizacje",
  openGraphImage: {
    url: "/images/project-35-lubliniec.jpg",
    width: 1200,
    height: 825,
    alt: "Realizacje domów szkieletowych Nord Frame",
  },
});

export default function ProjectsRoute() {
  return <ProjectsPage />;
}
