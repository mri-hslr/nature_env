import { Section } from "../Sections";
import { Container } from "../Container";
import { FadeUp } from "../../motion/FadeUp";

export function ADSTR() {
  return (
    <Section className="bg-neutral-950">
      <Container type="content">
        <FadeUp>
          <h2 className="heading-lg mb-6">
            The ADSTR Framework
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="body-text">
            ADSTR represents a structured approach to environmental systems:
            Acquire, Decode, Synthesize, Translate, and Respond.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="body-text mt-4">
            This framework ensures that environmental data is not only collected,
            but transformed into insight that can guide policy, action, and
            long-term stewardship.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}