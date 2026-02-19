import "./globals.css";
import { Header } from "@/components/navigations/Header";
import PageTransition from "@/components/transitions/PageTransition";
import { IntroProvider } from "@/app/context/IntroContext";
import { MontageIntro } from "@/components/motion/MontageIntro";
import { AmbientLamp } from "@/components/ui/AmbientLamp";
import { AIAssistant } from "@/components/ai/AIAssistant"; // Import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <IntroProvider>
          <AmbientLamp />
          <MontageIntro />
          <Header />
          
          <PageTransition>
            <main className="relative bg-transparent">
              {children}
            </main>
          </PageTransition>

          {/* Mount globally below transitions */}
          <AIAssistant />
          
        </IntroProvider>
      </body>
    </html>
  );
}