import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

export function UnderstandingLandscape() {
  return (
    <Section className="bg-black">
      <Container>
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg max-w-3xl">
              Understanding the Landscape
            </h2>
          </FadeUp>

          <FadeUp>
            <p className="body-text max-w-2xl mt-6">
              Natural systems are layered, interconnected, and often invisible
              at first glance. Climate patterns, ecosystems, and human impact
              unfold across time and terrain, not in isolation.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="body-text max-w-2xl mt-4">
              To work responsibly with the environment, we must first observe it
              as it truly exists — complex, dynamic, and deeply interdependent.
            </p>
          </FadeUp>
        </Stagger>
      </Container>
    </Section>
  );
}