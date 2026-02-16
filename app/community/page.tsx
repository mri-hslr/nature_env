import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageIntro
        title="Community"
        lead="Iceberg is built as a shared space where researchers, practitioners, and communities can exchange knowledge and collaborate on environmental challenges."
      />

      <PageSection title="Discussion & Dialogue">
        <p>
          Community discussions provide space for thoughtful exchange around
          environmental data, research findings, and real-world implications.
        </p>
        <p>
          Conversations are moderated to prioritize clarity, respect, and
          evidence-based reasoning.
        </p>
      </PageSection>

      <PageSection title="Collaborative Initiatives">
        <p>
          Iceberg supports community-led projects that bring together diverse
          perspectives around shared environmental goals.
        </p>
        <p>
          These initiatives may include data collection efforts, analysis
          collaborations, or policy-focused working groups.
        </p>
      </PageSection>

      <PageSection title="Knowledge Sharing">
        <p>
          Members are encouraged to share insights, methodologies, and lessons
          learned from practical experience.
        </p>
        <p>
          Contributions are organized to remain accessible and useful over time,
          rather than optimized for short-term visibility.
        </p>
      </PageSection>

      <PageSection title="Participation Guidelines">
        <p>
          Iceberg’s community is guided by principles of openness, scientific
          integrity, and constructive engagement.
        </p>
        <p>
          Clear guidelines help ensure discussions remain productive and aligned
          with the platform’s mission.
        </p>
      </PageSection>
    </main>
  );
}