import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <PageIntro
        title="Events"
        lead="Iceberg hosts and supports events that foster dialogue, collaboration, and shared understanding around environmental systems and action."
      />

      <PageSection title="Upcoming Events">
        <p>
          Upcoming events include talks, workshops, and community discussions
          focused on environmental research, data interpretation, and real-world
          application.
        </p>
        <p>
          Each event listing provides context on its purpose, intended audience,
          and how it contributes to broader environmental understanding.
        </p>
      </PageSection>

      <PageSection title="Ongoing Initiatives">
        <p>
          Some events take the form of extended initiatives, such as multi-session
          working groups or long-running collaborations.
        </p>
        <p>
          These initiatives allow participants to engage more deeply over time,
          rather than through single sessions.
        </p>
      </PageSection>

      <PageSection title="Past Events & Archives">
        <p>
          Past events are archived to preserve insights, recordings, and
          supporting materials.
        </p>
        <p>
          This archive ensures that knowledge shared through events remains
          accessible beyond their original schedule.
        </p>
      </PageSection>

      <PageSection title="Participation & Access">
        <p>
          Events are designed to be inclusive and accessible, with clear
          information on participation requirements and available formats.
        </p>
        <p>
          When possible, recordings or summaries are provided to support broader
          engagement.
        </p>
      </PageSection>
    </main>
  );
}