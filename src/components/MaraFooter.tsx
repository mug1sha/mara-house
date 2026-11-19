import Link from "next/link";
import { MapPin } from "lucide-react";
import MaraLogo from "@/components/MaraLogo";

const navigation = [
  { label: "Home", href: "#top" },
  { label: "Our Rooms", href: "#rooms" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function IconInstagram({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function IconFacebook({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

function IconWhatsApp({ size = 19 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    Icon: IconInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    Icon: IconFacebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/250795009211",
    Icon: IconWhatsApp,
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Kiyovu+Kigali",
    Icon: ({ size }: { size?: number }) => <MapPin size={size} strokeWidth={1.8} />,
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
            className="flex flex-wrap items-center justify-center gap-3 transition-opacity hover:opacity-70"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.svg" alt="MARA HOUSE icon" width={48} height={48} />
            <span className="font-serif text-2xl tracking-[0.12em] md:text-3xl">
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
            const Icon = social.Icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25292C] text-[#F1F0EB] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C0A77C] hover:text-[#101315]"
              >
                <Icon size={19} />
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
