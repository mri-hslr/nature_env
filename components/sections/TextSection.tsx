import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

interface TextSectionProps {
  title: string;
  body: string;
}

export function TextSection({ title, body }: TextSectionProps) {
  return (
    <Section>
      <Container type="content">
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg mb-4">{title}</h2>
          </FadeUp>

          <FadeUp>
            <p className="body-text">{body}</p>
          </FadeUp>
        </Stagger>
      </Container>
    </Section>
  );
}