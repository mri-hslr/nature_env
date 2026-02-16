import { Section } from "./Sections";
import { Container } from "./Container";
import { FadeUp } from "../motion/FadeUp";
import { HomeEcosystemDiagram } from "../diagrams/HomeEcosystemDiagram";

export function HomeEcosystem() {
  return (
    <Section>
      <Container>
        <FadeUp>
          <h2 className="heading-lg mb-6">
            An Interconnected Environmental Ecosystem
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="body-text max-w-2xl mb-12">
            Environmental understanding emerges when data, science, community
            participation, and policy interact as a single system rather than
            isolated efforts.
          </p>
        </FadeUp>

        <div className="max-w-4xl mx-auto">
          <HomeEcosystemDiagram />
        </div>
      </Container>
    </Section>
  );
}