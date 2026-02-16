import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

export function PlatformOverview() {
  return (
    <Section>
      <Container>
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg max-w-3xl">
              A Platform for Environmental Intelligence
            </h2>
          </FadeUp>

          <FadeUp>
            <p className="body-text max-w-2xl mt-6">
              This platform connects environmental data, scientific research,
              and community action into a single, living ecosystem.
            </p>
          </FadeUp>

          <FadeUp>
            <p className="body-text max-w-2xl mt-4">
              From climate insights to sustainability projects and collaborative
              initiatives, every layer is designed to support real-world
              environmental understanding and impact.
            </p>
          </FadeUp>
        </Stagger>
      </Container>
    </Section>
  );
}