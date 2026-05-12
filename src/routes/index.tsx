import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/Loader";
import { Snowfall } from "@/components/Snowfall";
import { CursorGlow } from "@/components/CursorGlow";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { EmergencyBanner } from "@/components/EmergencyBanner";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pakistan Refrigeration & Electric Service — AC, Fridge & Wiring in Vehari" },
      {
        name: "description",
        content:
          "Premium AC repair, refrigerator service, deep freezer & electric work in Vehari. Same‑day service, expert technicians, 24/7 support. Call +92 303 9007386.",
      },
      { property: "og:title", content: "Pakistan Refrigeration & Electric Service" },
      { property: "og:description", content: "Premium AC, refrigerator and electrical repair in Vehari. We bring back the cold." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <Snowfall />
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <EmergencyBanner />
        <Services />
        <About />
        <WhyUs />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
