"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import MaraFooter from "@/components/MaraFooter";
import {
  Reveal,
  TiltCard,
  ParallaxImage,
  ScrollProgress,
} from "@/components/MotionEffects";
import {
  ArrowRight,
  ArrowUpRight,
  BedDouble,
  Coffee,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Utensils,
  Wifi,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "250795009211";

const rooms = [
  {
    name: "Classic Room",
    price: "85,000",
    description: "A peaceful retreat designed for comfort and simplicity.",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000",
    tag: "Comfort",
  },
  {
    name: "Deluxe Suite",
    price: "120,000",
    description: "More space, thoughtful details and elevated comfort.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000",
    tag: "Popular",
  },
  {
    name: "Executive Suite",
    price: "165,000",
    description:
      "An exceptional stay for guests who appreciate the finer things.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000",
    tag: "Premium",
  },
];

const amenities = [
  { icon: Wifi, name: "High-speed Wi-Fi" },
  { icon: Coffee, name: "Breakfast service" },
  { icon: Utensils, name: "Restaurant & dining" },
  { icon: ShieldCheck, name: "Secure parking" },
  { icon: BedDouble, name: "Premium bedding" },
  { icon: Sparkles, name: "Daily housekeeping" },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#a77c52]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl leading-tight tracking-tight text-[#25241f] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#77746e] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("Deluxe Suite");
  const reduceMotion = useReducedMotion();

  function bookRoom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const message = `Hello MARA HOUSE! I would like to enquire about a reservation.

Name: ${guestName}
Room: ${room}
Check-in: ${checkIn}
Check-out: ${checkOut}

Please share availability and final pricing.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <>
      {/* SCROLL PROGRESS BAR */}
      <ScrollProgress />

      <main id="top" className="overflow-hidden bg-[#f8f6f1] text-[#25241f]">

        {/* NAVIGATION */}
        <header className="absolute left-0 top-0 z-50 w-full border-b border-white/15">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-6 md:py-6 lg:px-10">
            <a href="#top">
              <span className="font-serif text-xl tracking-[0.15em] text-white md:text-2xl">
                MARA HOUSE
              </span>
              <span className="block text-[8px] tracking-[0.4em] text-white/65 md:text-[9px]">
                KIGALI · RWANDA
              </span>
            </a>

            <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.16em] text-white/85 md:flex">
              <a href="#rooms" className="hover:text-[#d9b48a]">Rooms</a>
              <a href="#experience" className="hover:text-[#d9b48a]">Experience</a>
              <a href="#gallery" className="hover:text-[#d9b48a]">Gallery</a>
              <a href="#contact" className="hover:text-[#d9b48a]">Contact</a>
            </nav>

            <a
              href="#booking"
              className="hidden items-center gap-2 border border-white/70 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black md:flex"
            >
              Book your stay <ArrowUpRight size={14} />
            </a>

            {/* Mobile: book CTA + hamburger */}
            <div className="flex items-center gap-4 md:hidden">
              <a
                href="#booking"
                className="border border-white/70 px-4 py-2 text-[9px] uppercase tracking-widest text-white"
              >
                Book
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white"
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="flex flex-col gap-5 bg-[#25241f] px-6 py-8 text-sm uppercase tracking-widest text-white md:hidden">
              {["rooms", "experience", "gallery", "contact", "booking"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="border-b border-white/10 pb-4"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          )}
        </header>

        {/* HERO */}
        <section className="relative flex min-h-[100svh] items-center overflow-hidden md:min-h-[850px]">
          <motion.div
            initial={reduceMotion ? false : { scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2200')",
              }}
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 md:px-6 md:pt-32 lg:px-10">
            <div className="max-w-3xl">

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#e5c6a3] md:mb-7 md:text-xs"
              >
                <span className="h-px w-8 bg-[#e5c6a3] md:w-10" />
                A different kind of stay
              </motion.p>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Find your
                <br />
                place in
                <br />
                <span className="italic text-[#e5c6a3]">Kigali.</span>
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6 max-w-sm text-sm leading-7 text-white/75 md:mt-8 md:max-w-md md:text-base"
              >
                Thoughtfully designed spaces, genuine hospitality and quiet
                moments in the heart of Rwanda&apos;s beautiful capital.
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="mt-8 flex flex-wrap items-center gap-4 md:mt-10 md:gap-5"
              >
                <a
                  href="#rooms"
                  className="flex items-center gap-3 bg-[#c19a73] px-6 py-4 text-xs uppercase tracking-widest text-white transition hover:bg-[#a77c52]"
                >
                  Explore our rooms <ArrowRight size={14} />
                </a>
                <a
                  href="#experience"
                  className="text-xs uppercase tracking-widest text-white underline underline-offset-8"
                >
                  Discover MARA
                </a>
              </motion.div>

            </div>
          </div>

          <div className="absolute bottom-8 right-8 hidden text-right text-white/75 md:block">
            <p className="text-xs tracking-[0.2em]">KIGALI, RWANDA</p>
            <p className="mt-2 font-serif text-2xl italic">02° S · 30° E</p>
          </div>
        </section>

        {/* INTRO */}
        <section
          id="experience"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center md:py-32 md:px-6 lg:px-10"
        >
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Welcome to MARA HOUSE"
                title="A little more than just a place to stay."
                description="Some places simply give you a room. Others give you a feeling. At MARA HOUSE, every detail is considered to make your time in Kigali comfortable, personal and memorable."
              />
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#a77c52] pb-3 text-xs uppercase tracking-widest"
              >
                Get to know us <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {/* Extra bottom padding on mobile to prevent the overlay card from clipping */}
            <div className="relative pb-10 md:pb-0">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1100"
                alt="Warm and elegant hotel interior"
                className="h-[340px] md:h-[550px]"
              />
              <div className="absolute -bottom-2 left-4 bg-[#c19a73] p-5 text-white md:-bottom-7 md:-left-10 md:p-10">
                <p className="font-serif text-2xl italic md:text-4xl">Feel at home.</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] md:mt-2 md:text-[10px]">
                  Stay a little longer
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ROOMS */}
        <section id="rooms" className="bg-[#eeece5] px-5 py-20 md:py-32 md:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
              <Reveal>
                <SectionTitle
                  eyebrow="Stay with us"
                  title="Spaces made for slowing down."
                  description="Find the right space for your journey, from comfortable essentials to our more spacious suites."
                />
              </Reveal>
              <Reveal delay={0.1}>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest"
                >
                  Find your room <ArrowRight size={14} />
                </a>
              </Reveal>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {rooms.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.12}>
                  <TiltCard>
                    <article className="overflow-hidden bg-[#f8f6f1]">
                      {/* Image wrapper — tag badge sits inside this relative container */}
                      <div className="relative h-[260px] md:h-[360px]">
                        <ParallaxImage
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full"
                        />
                        <span className="absolute left-4 top-4 bg-[#f8f6f1] px-3 py-1.5 text-[9px] uppercase tracking-[0.2em]">
                          {item.tag}
                        </span>
                      </div>
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-xl md:text-2xl">{item.name}</h3>
                            <p className="mt-2 text-sm leading-6 text-[#77746e]">
                              {item.description}
                            </p>
                          </div>
                          <ArrowUpRight className="mt-1 shrink-0 text-[#a77c52]" size={18} />
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-[#d5d1c7] pt-4">
                          <p className="text-xs text-[#77746e]">
                            From{" "}
                            <span className="font-semibold text-[#25241f]">
                              {item.price} RWF
                            </span>{" "}
                            / night
                          </p>
                          <a
                            href="#booking"
                            className="text-[10px] uppercase tracking-widest underline underline-offset-4"
                          >
                            Enquire
                          </a>
                        </div>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-xs text-[#77746e]">
              *All displayed room rates are illustrative demonstration prices.
            </p>
          </div>
        </section>

        {/* EXPERIENCE BANNER */}
        <section className="relative flex min-h-[480px] items-center overflow-hidden md:min-h-[530px]">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800"
            alt="MARA HOUSE experience"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative mx-auto w-full max-w-7xl px-5 py-20 text-center text-white md:px-6 md:py-24">
            <Reveal>
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#e5c6a3] md:mb-6 md:text-xs">
                The MARA experience
              </p>
              <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-tight md:max-w-3xl md:text-6xl lg:text-7xl">
                Every stay deserves a beautiful story.
              </h2>
              <a
                href="#booking"
                className="mt-8 inline-flex items-center gap-3 border border-white px-6 py-4 text-xs uppercase tracking-widest transition hover:bg-white hover:text-black md:mt-9 md:px-7"
              >
                Plan your stay <ArrowUpRight size={14} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* AMENITIES */}
        <section className="mx-auto max-w-7xl px-5 py-20 md:py-32 md:px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionTitle
                eyebrow="Thoughtful details"
                title="Everything you need. Nothing you don't."
                description="A carefully considered selection of services to make every moment of your stay easier."
              />
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
            {amenities.map(({ icon: Icon, name }, index) => (
              <Reveal key={name} delay={index * 0.08}>
                <div className="flex flex-col items-center border-b border-[#dedbd2] pb-7 text-center md:pb-8">
                  <Icon size={26} strokeWidth={1.2} className="text-[#a77c52]" />
                  <p className="mt-4 text-sm">{name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-[#eeece5] px-5 py-20 md:py-28 md:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="A glimpse inside"
                title="The details make the difference."
              />
            </Reveal>

            {/* Mobile: single column stack. md+: 4-col grid with wide second image */}
            <div className="mt-10 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-4">
              {[
                "photo-1611892440504-42a792e24d32",
                "photo-1600607687939-ce8a6c25118c",
                "photo-1600210492486-724fe5c67fb0",
                "photo-1616486338812-3dadae4b4ace",
              ].map((photo, i) => (
                <Reveal
                  key={photo}
                  delay={i * 0.1}
                  className={i === 1 ? "md:col-span-2" : ""}
                >
                  <ParallaxImage
                    src={`https://images.unsplash.com/${photo}?w=1000`}
                    alt={`MARA House gallery ${i + 1}`}
                    className="h-52 md:h-80"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING */}
        <section
          id="booking"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:gap-14 md:py-32 md:px-6 lg:px-10"
        >
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="Make it yours"
                title="Your next Kigali stay starts here."
                description="Tell us a little about your visit. Our team will help you explore availability and find the right accommodation."
              />

              <div className="mt-8 space-y-5 text-sm text-[#77746e] md:mt-10">
                <p className="flex items-center gap-3">
                  <MapPin size={18} className="text-[#a77c52]" />
                  Kiyovu, Kigali, Rwanda
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={18} className="text-[#a77c52]" />
                  +250 795 009 211
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={bookRoom} className="bg-white p-6 shadow-sm md:p-10">
              <p className="mb-7 font-serif text-2xl md:mb-8 md:text-3xl">
                Reservation enquiry
              </p>

              <label className="mb-2 block text-xs uppercase tracking-widest">
                Your full name
              </label>
              <input
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Enter your name"
                className="mb-5 w-full border-b border-[#d8d4cb] bg-transparent py-3 text-sm outline-none focus:border-[#a77c52] md:mb-6 md:py-4"
              />

              <label className="mb-2 block text-xs uppercase tracking-widest">
                Accommodation
              </label>
              <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="mb-5 w-full border-b border-[#d8d4cb] bg-transparent py-3 text-sm outline-none md:mb-6 md:py-4"
              >
                {rooms.map((r) => (
                  <option key={r.name}>{r.name}</option>
                ))}
              </select>

              {/* Stack date fields on mobile, side by side on md+ */}
              <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-6 md:gap-5">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest">
                    Check-in
                  </label>
                  <input
                    required
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border-b border-[#d8d4cb] py-3 text-sm outline-none md:py-4"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-widest">
                    Check-out
                  </label>
                  <input
                    required
                    type="date"
                    min={checkIn || undefined}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border-b border-[#d8d4cb] py-3 text-sm outline-none md:py-4"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-3 bg-[#25241f] px-6 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#a77c52] md:mt-5 md:py-5"
              >
                Send booking enquiry <ArrowUpRight size={16} />
              </button>
              <p className="mt-4 text-center text-xs text-[#99958c]">
                Your enquiry will open WhatsApp for confirmation.
              </p>
            </form>
          </Reveal>
        </section>

      </main>
      <MaraFooter />
    </>
  );
}
