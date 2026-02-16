import { PageIntro } from "@/components/page/PageIntro";
import { PageSection } from "@/components/page/PageSection";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <PageIntro
        title="Support & FAQ"
        lead="Answers to common questions, guidance on using the platform, and information on how to get help when you need it."
      />

      <PageSection title="Getting Started">
        <p>
          Iceberg is designed to be accessible without specialized setup. Most
          features can be explored directly through the web interface.
        </p>
        <p>
          For new users, the User Guide provides a structured introduction to the
          platform’s core concepts and workflows.
        </p>
      </PageSection>

      <PageSection title="Accounts & Participation">
        <p>
          Some features may require creating an account or joining specific
          initiatives.
        </p>
        <p>
          Account-related information is handled with transparency and minimal
          data collection, aligned with the platform’s privacy principles.
        </p>
      </PageSection>

      <PageSection title="Data Sources & Accuracy">
        <p>
          Iceberg aggregates data from multiple scientific and public sources.
          Each dataset is accompanied by contextual information describing its
          origin, limitations, and intended use.
        </p>
        <p>
          Users are encouraged to review source documentation when interpreting
          results or insights.
        </p>
      </PageSection>

      <PageSection title="Technical Issues">
        <p>
          If you encounter technical problems, please ensure your browser is up
          to date and that required features such as JavaScript are enabled.
        </p>
        <p>
          Persistent issues can be reported through the platform’s support
          channels for further assistance.
        </p>
      </PageSection>

      <PageSection title="Contact & Support">
        <p>
          Questions, feedback, or concerns can be directed to the Iceberg support
          team.
        </p>
        <p>
          We aim to respond thoughtfully and transparently, prioritizing clarity
          and resolution over automated responses.
        </p>
      </PageSection>
    </main>
  );
}