import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <PageIntro
        title="Library"
        lead="A curated collection of research, datasets, and resources that support evidence-based environmental understanding."
      />

      <PageSection title="Research & Publications">
        <p>
          This section contains peer-reviewed studies, white papers, and
          analytical reports related to environmental systems and sustainability.
        </p>
        <p>
          Each publication includes contextual information to help readers
          understand scope, methodology, and limitations.
        </p>
      </PageSection>

      <PageSection title="Environmental Datasets">
        <p>
          Datasets are organized by geographic region, environmental domain, and
          data source.
        </p>
        <p>
          Metadata accompanies each dataset to ensure transparency around
          collection methods, update frequency, and intended use.
        </p>
      </PageSection>

      <PageSection title="Methodologies & Frameworks">
        <p>
          This section documents analytical frameworks, modeling approaches, and
          standards used across the platform.
        </p>
        <p>
          These references are intended to support reproducibility and informed
          interpretation of results.
        </p>
      </PageSection>

      <PageSection title="External Resources">
        <p>
          Links to external organizations, initiatives, and repositories are
          provided for users seeking deeper context or complementary materials.
        </p>
        <p>
          Iceberg does not duplicate work already maintained by trusted
          institutions, but connects to it where relevant.
        </p>
      </PageSection>
    </main>
  );
}