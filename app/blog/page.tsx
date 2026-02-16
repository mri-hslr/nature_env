import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <PageIntro
        title="Blog & Media"
        lead="Long-form writing, analysis, and updates that explore environmental systems, research, and the ideas shaping collective action."
      />

      <PageSection title="Featured Writing">
        <p>
          Featured articles highlight in-depth analysis, platform updates, and
          essays that connect environmental data with broader social, scientific,
          and policy contexts.
        </p>
        <p>
          These pieces are intended to be read slowly, with emphasis on clarity,
          nuance, and long-term relevance.
        </p>
      </PageSection>

      <PageSection title="Research Commentary">
        <p>
          Research commentary provides interpretive perspectives on recent
          studies, datasets, and emerging findings.
        </p>
        <p>
          Rather than summarizing results, these posts focus on implications,
          limitations, and real-world meaning.
        </p>
      </PageSection>

      <PageSection title="Platform Updates">
        <p>
          Updates document changes to the Iceberg platform, including new tools,
          data sources, and community initiatives.
        </p>
        <p>
          Each update is archived to maintain transparency around the platform’s
          evolution.
        </p>
      </PageSection>

      <PageSection title="Media & Press">
        <p>
          This section collects interviews, presentations, and external media
          coverage related to Iceberg and its collaborators.
        </p>
        <p>
          Where possible, primary sources are linked to preserve context and
          accuracy.
        </p>
      </PageSection>
    </main>
  );
}