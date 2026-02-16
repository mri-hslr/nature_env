import { Section } from "./Sections";
import { Container } from "./Container";
import { FadeUp } from "../motion/FadeUp";

export function RealWorldEnvironments() {
  return (
    <Section className="bg-black">
      <Container type="content">
        <FadeUp>
          <h2 className="heading-lg mb-8">
            Built for Real-World Environments
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="body-text">
            Environmental systems are unpredictable by nature. Our platform is
            designed to operate under real conditions — incomplete data, long
            timelines, and evolving ecological realities.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="body-text mt-4">
            This is not speculative technology. It is built alongside scientists,
            researchers, and field practitioners who work where theory meets the
            natural world.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}