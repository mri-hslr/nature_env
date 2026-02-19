// app/layout.tsx
import "./globals.css";
import { Header } from "@/components/navigations/Header";
import PageTransition from "@/components/transitions/PageTransition";
import { IntroProvider } from "@/app/context/IntroContext";
import { MontageIntro } from "@/components/motion/MontageIntro";
import { AmbientLamp } from "@/components/ui/AmbientLamp"; // Import here

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
          {/* The MontageIntro will live here, sitting above the content */}
          <MontageIntro />
          
          <Header />
          <PageTransition>
            <main className="relative bg-transparent">
              {children}
            </main >
          </PageTransition>
        </IntroProvider>
      </body>
    </html>
  );
}