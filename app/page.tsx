import { Hero } from "@/components/sections/Hero";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { HomeEcosystem } from "@/components/sections/HomeEcosystem";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CommunitySnapshot } from "@/components/sections/CommunitySnapshot";
import { UpcomingEventsPreview } from "@/components/sections/UpcomingEventsPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white overscroll-none">
      {/* 
        HERO — locked to viewport top
        Cannot be scrolled upward past this point
      */}
      <section className="h-screen w-full overflow-hidden">
        <Hero />
      </section>

      {/* 
        CONTENT — scrolls downward only
      */}
      <section className="relative z-10">
        <PlatformOverview />
        <HomeEcosystem />
        <FeaturedProjects />
        <CommunitySnapshot />
        <UpcomingEventsPreview />
      </section>
    </main>
  );
}