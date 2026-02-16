import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

const steps = [
  {
    title: "Observation",
    body:
      "Signals collected directly from natural environments — climate data, ecological indicators, and physical measurements.",
  },
  {
    title: "Interpretation",
    body:
      "Raw data is contextualized through scientific models and long-term environmental research.",
  },
  {
    title: "Insight",
    body:
      "Patterns emerge, revealing trends, risks, and opportunities for responsible action.",
  },
];

export function EarthToInsight() {
  return (
    <Section className="bg-neutral-950">
      <Container>
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg mb-12">
              From Earth to Insight
            </h2>
          </FadeUp>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <FadeUp key={step.title}>
                <div className="border-t border-neutral-800 pt-6">
                  <h3 className="text-lg font-medium mb-3">
                    {step.title}
                  </h3>
                  <p className="body-text">
                    {step.body}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </Stagger>
      </Container>
    </Section>
  );
}