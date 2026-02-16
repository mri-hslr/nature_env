import { Section } from "../Sections";
import { Container } from "../Container";
import { FadeUp } from "../../motion/FadeUp";

const pillars = [
  "Scientific Integrity",
  "Transparency & Accountability",
  "Community Collaboration",
  "Long-Term Environmental Stewardship",
];

export function ValuePillars() {
  return (
    <Section className="bg-neutral-950">
      <Container type="content">
        <FadeUp>
          <h2 className="heading-lg mb-8">
            Our Core Values
          </h2>
        </FadeUp>

        <ul className="space-y-4">
          {pillars.map((pillar) => (
            <FadeUp key={pillar}>
              <li className="body-text">
                {pillar}
              </li>
            </FadeUp>
          ))}
        </ul>
      </Container>
    </Section>
  );
}