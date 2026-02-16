import { Section } from "../Sections";
import { Container } from "../Container";
import { FadeUp } from "../../motion/FadeUp";

export function CarbonCredits() {
  return (
    <Section>
      <Container type="content">
        <FadeUp>
          <h2 className="heading-lg mb-6">
            Carbon Credits & Environmental Accountability
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="body-text">
            Carbon credits are one of several tools used to address environmental
            impact. Their effectiveness depends on transparency, verification,
            and long-term accountability.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="body-text mt-4">
            This platform approaches carbon credits as a data-driven system,
            emphasizing traceability and context over speculation or short-term
            offsets.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}