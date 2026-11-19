import Link from "next/link";
import {
  Camera,
  Share2,
  MessageCircle,
  MapPin,
} from "lucide-react";
import MaraLogo from "@/components/MaraLogo";

// lucide-react v1.x removed brand icons (Instagram, Facebook).
// Camera is the recognised stand-in for Instagram; Share2 for Facebook.

const navigation = [
  { label: "Home", href: "#top" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: Camera,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    icon: Share2,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/250795009211",
    icon: MessageCircle,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Kiyovu+Kigali",
    icon: MapPin,
  },
];

export default function MaraFooter() {
  return (
    <footer id="contact" className="w-full bg-[#101315] text-[#F1F0EB]">

      <div className="mx-auto max-w-7xl px-6">

        {/* BRAND IDENTITY */}
        <div className="flex flex-col items-center border-b border-white/20 py-12 text-center md:py-14">

          <Link
            href="#top"
            className="flex items-center gap-4 transition-opacity hover:opacity-70"
          >
            <MaraLogo variant="light" width={56} height={56} />
            <span className="font-serif text-3xl tracking-[0.12em]">
              MARA HOUSE
            </span>
          </Link>

          <p className="mt-3 text-[9px] uppercase tracking-[0.38em] text-[#A7A9A5]">
            Boutique Hospitality · Kigali, Rwanda
          </p>

          {/* BRAND DESCRIPTORS */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[9px] uppercase tracking-[0.13em] text-[#B9BAB5] sm:text-[10px]">

            <span>
              <span className="mr-2 text-[#C0A77C]">●</span>
              Thoughtful Stays
            </span>

            <span>
              <span className="mr-2 text-[#C0A77C]">●</span>
              Personal Hospitality
            </span>

            <span>
              <span className="mr-2 text-[#C0A77C]">●</span>
              Timeless Comfort
            </span>

          </div>
        </div>

        {/* NAVIGATION */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 py-10"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xs text-[#E5E4DF] transition-colors duration-300 hover:text-[#C5AA7E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* SOCIAL & CONTACT ICONS */}
        <div className="flex items-center justify-center gap-4">

          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25292C] text-[#F1F0EB] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C0A77C] hover:text-[#101315]"
              >
                <Icon size={19} strokeWidth={1.8} />
              </a>
            );
          })}

        </div>

        {/* LEGAL LINKS */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] text-[#D1D1CC]">

          <Link
            href="/privacy"
            className="transition-colors hover:text-[#C0A77C]"
          >
            Privacy Policy
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="/terms"
            className="transition-colors hover:text-[#C0A77C]"
          >
            Terms of Stay
          </Link>

          <span className="text-white/30">|</span>

          <Link
            href="#contact"
            className="transition-colors hover:text-[#C0A77C]"
          >
            Guest Information
          </Link>

        </div>

        {/* COPYRIGHT */}
        <div className="pb-10 pt-5 text-center">
          <p className="text-[11px] text-[#A7A9A5]">
            © {new Date().getFullYear()} MARA HOUSE.
            ALL RIGHTS RESERVED.
          </p>
        </div>

      </div>
    </footer>
  );
}
