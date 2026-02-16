import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function UserGuidePage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageIntro
        title="User Guide"
        lead="This guide introduces the core concepts, workflows, and tools that make up the Iceberg platform, helping you move from exploration to action."
      />

      <PageSection title="Getting Started">
        <p>
          Iceberg is designed to be explored progressively. You can begin by
          browsing environmental datasets, reading research summaries, or
          exploring community discussions without creating an account.
        </p>
        <p>
          As you engage more deeply, additional tools become available for
          saving insights, contributing data, and participating in collaborative
          initiatives.
        </p>
      </PageSection>

      <PageSection title="Understanding the Platform">
        <p>
          The platform is organized around environmental systems rather than
          isolated metrics. Data, analysis, and community activity are presented
          together to reflect how real-world environmental decisions are made.
        </p>
        <p>
          Each section of the platform focuses on a specific stage of the
          insight-to-action process.
        </p>
      </PageSection>

      <PageSection title="Working with Data">
        <p>
          Environmental data on Iceberg is contextualized with metadata,
          geographic scope, and methodological notes.
        </p>
        <p>
          This allows users to understand not just what the data shows, but how
          it was collected and what limitations it may have.
        </p>
      </PageSection>

      <PageSection title="From Insight to Action">
        <p>
          Insights generated on the platform can inform policy discussions,
          sustainability initiatives, and community-led projects.
        </p>
        <p>
          Iceberg emphasizes traceability, ensuring that actions are grounded in
          verifiable information rather than assumptions.
        </p>
      </PageSection>

      <PageSection title="Next Steps">
        <p>
          Once familiar with the platform, users can explore advanced features
          such as contributing datasets, participating in forums, or tracking
          environmental initiatives over time.
        </p>
        <p>
          Each tool is designed to support long-term engagement rather than
          short-term interaction.
        </p>
      </PageSection>
    </main>
  );
}