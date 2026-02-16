import { Section } from "../Sections";
import { Container } from "../Container";
import { FadeUp } from "../../motion/FadeUp";

export function Mission() {
  return (
    <Section>
      <Container type="content">
        <FadeUp>
          <h1 className="heading-xl mb-6">
            Our Mission
          </h1>
        </FadeUp>

        <FadeUp>
          <p className="body-text">
            Our mission is to enable transparent, evidence-based environmental
            understanding by connecting data, science, and community participation
            into a shared, open ecosystem.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="body-text mt-4">
            We believe meaningful environmental action begins with accurate
            information, long-term thinking, and collective responsibility.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}