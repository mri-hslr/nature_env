import "./globals.css";
import { Header } from "@/components/navigations/Header";
import  PageTransition  from "@/components/transitions/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />

        {/* Pages control their own background */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}