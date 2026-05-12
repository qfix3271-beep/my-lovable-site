import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <>
      <a
        href="https://wa.me/923039007386"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 animate-pulse-ring transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
      >
        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-12" />
        <span className="absolute -top-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground glow-ice">
          1
        </span>
      </a>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 sm:hidden">
        <a href="tel:+923039007386" className="rounded-2xl bg-[var(--gradient-ice)] py-3 text-center text-sm font-semibold text-primary-foreground glow-ice">
          Call
        </a>
        <a href="https://wa.me/923039007386" className="rounded-2xl glass-strong py-3 text-center text-sm font-semibold text-primary">
          WhatsApp
        </a>
      </div>
    </>
  );
}
