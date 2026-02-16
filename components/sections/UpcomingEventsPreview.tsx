import { Section } from "./Sections";
import { Container } from "./Container";
import { Stagger } from "../motion/Stagger";
import { FadeUp } from "../motion/FadeUp";

const events = [
  "Climate Data & Policy Webinar",
  "Community Sustainability Workshop",
  "Environmental Monitoring Roundtable",
];

export function UpcomingEventsPreview() {
  return (
    <Section className="bg-neutral-950">
      <Container type="content">
        <Stagger>
          <FadeUp>
            <h2 className="heading-lg mb-8">
              Upcoming Events
            </h2>
          </FadeUp>

          <ul className="space-y-4">
            {events.map((event) => (
              <FadeUp key={event}>
                <li className="body-text">
                  {event}
                </li>
              </FadeUp>
            ))}
          </ul>
        </Stagger>
      </Container>
    </Section>
  );
}