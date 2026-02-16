import { Section } from "./Sections";
import { Container } from "./Container";
import { FadeUp } from "../motion/FadeUp";

export function CommunitySnapshot() {
  return (
    <Section>
      <Container type="content">
        <FadeUp>
          <h2 className="heading-lg mb-6">
            Community Activity
          </h2>
        </FadeUp>

        <FadeUp>
          <p className="body-text">
            Researchers, environmental advocates, and local communities
            collaborate here to share knowledge, document change, and
            coordinate action across regions.
          </p>
        </FadeUp>

        <FadeUp>
          <p className="body-text mt-4">
            Recent discussions and initiatives reflect emerging challenges,
            regional insights, and collaborative problem-solving efforts.
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}