import { Hero } from "@/components/sections/Hero";
import { PlatformOverview } from "@/components/sections/PlatformOverview";
import { HomeEcosystem } from "@/components/sections/HomeEcosystem";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CommunitySnapshot } from "@/components/sections/CommunitySnapshot";
import { UpcomingEventsPreview } from "@/components/sections/UpcomingEventsPreview";

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
       <div className="p-24"></div>
       
      <Hero />

      <PlatformOverview />

      <HomeEcosystem />

      <FeaturedProjects />

      <CommunitySnapshot />

      <UpcomingEventsPreview />
    </main>
  );
}