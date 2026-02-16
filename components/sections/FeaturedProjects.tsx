import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

const projects = [
  {
    title: "Coastal Ecosystem Monitoring",
    summary:
      "Tracking long-term changes in coastal biodiversity and climate impact.",
  },
  {
    title: "Carbon Offset Transparency",
    summary:
      "Improving verification and traceability across carbon credit programs.",
  },
  {
    title: "Community-Led Reforestation",
    summary:
      "Supporting regional reforestation through local participation.",
  },
];

export function FeaturedProjects() {
  return (
    <Section className="bg-neutral-950">
      <Container>
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg mb-10">
              Featured Sustainability Projects
            </h2>
          </FadeUp>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project) => (
              <FadeUp key={project.title}>
                <div className="border border-neutral-800 p-6">
                  <h3 className="text-lg font-medium mb-2">
                    {project.title}
                  </h3>
                  <p className="body-text">
                    {project.summary}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Stagger>
      </Container>
    </Section>
  );
}