export default function FacilitiesPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Facilities at THE PAUSE
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to work deeply, live calmly, and stay connected
          with nature, without distraction.
        </p>
      </section>

      {/* ================= PRIVATE ROOMS ================= */}
      <section className="bg-black px-6 py-28 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Private Rooms
            </h2>

            <p className="text-lg text-white leading-relaxed">
              At THE PAUSE, rooms are designed for rest, not rotation. Each
              private room feels grounded, quiet, and personal, a space you
              return to after hours of focus.
            </p>

            <ul className="space-y-3 text-white">
              <li>• Comfortable beds, not hostel-style (hehe..)</li>
              <li>• Dedicated work desk with ergonomic chair</li>
              <li>• Thoughtful lighting (warm + white mix, perfect for making reels)</li>
              <li>• 24/7 Electricity</li>
              <li>• Laundary service</li>
              <li>• Secure lock and complete privacy</li>
              <li>• And AC (Ofcourse...lol)</li>
            </ul>
          </div>

          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/room.jpg')" }}
          />
        </div>
      </section>

      {/* ================= WORK WITH NATURE ================= */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl md:order-2"
            style={{ backgroundImage: "url('/working_nature.avif')" }}
          />

          <div className="space-y-6 md:order-1">
            <h2 className="text-3xl font-semibold">
              Work, In Nature
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Work at THE PAUSE is not confined to walls. It happens in quiet,
              plant-filled spaces, open decks, and naturally lit zones where
              clarity replaces pressure.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Built on a gentle hillside, our work areas flow upward, from
              silent deep-focus zones to open spaces meant for collaboration
              and conversation.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMON WORK AREA ================= */}
      <section className="px-6 py-28 bg-black">
        <div className="max-w-6xl mx-auto space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-semibold text-white">
              The Common Work Area
            </h2>

            <p className="text-lg text-white">
              This is our core experience, designed to protect your attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <ul className="space-y-3 text-white">
                <li>• Silent zone for deep work</li>
                <li>• Dedicated call & meeting area</li>
                <li>• Strong high-speed Wi-Fi (dual ISP planned)</li>
                <li>• Backup power (inverter)</li>
                <li>• Whiteboards & pin boards</li>
                <li>• Plants throughout, focus backed by nature</li>
              </ul>
            </div>

            <div
              className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: "url('/dorm.webp')" }}
            />
          </div>
        </div>
      </section>

      {/* ================= BREAK & CHILL ================= */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/common_area.png')" }}
          />

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Break & Chill Zone
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              This is where work softens. A shared dining and chill space
              designed for pauses, conversation, and unplanned connection.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Coffee & chai station</li>
              <li>• Comfortable, casual seating</li>
              <li>• Soft ambient music (when appropriate)</li>
              <li>• Occasional no-laptop hours for bonding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY RULES ================= */}
      <section className="px-6 py-28 bg-black text-gray-300">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Rules That Protect the Vibe
          </h2>

          <ul className="space-y-3">
            <li>No loud calls in silent zones</li>
            <li>No alcohol abuse</li>
            <li>Respect shared work hours</li>
            <li>Guests only with prior permission</li>
            <li>Community &gt;&gt; individual ego</li>
          </ul>

          <p className="pt-6 text-lg text-white">
            "You’re not renting a bed.  
            You’re joining a culture."
          </p>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="px-6 py-28">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Pricing Philosophy
          </h2>

          <p className="text-lg text-black">
            ₹35,000 per month (it's pretty affordable)
          </p>

          <p className="text-gray-600">
            Includes stay, Wi-Fi, workspace access, electricity, cleaning, and
            curated community experiences.
          </p>
        </div>
      </section>


{/* ================= FOOTER ================= */}
      <footer className="bg-black text-white-300 px-6 py-20">
  <div id="footer" className="scroll-mt-24" />
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">


    {/* Brand */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold tracking-wide text-white">
        THE PAUSE
      </h3>

      <p className="text-sm leading-relaxed text-white max-w-sm">
        A space designed to slow you down, reconnect you with nature,
        and bring balance back into how you live and work.
      </p>
    </div>

    {/* Contact */}
    <div className="space-y-4">
      <h4 className="text-sm font-medium tracking-wide text-white uppercase">
        Contact
      </h4>

      <p className="text-sm text-white">
        📍 Agonda, Goa
      </p>

      <p className="text-sm text-white">
        📞 <a
          href="tel:+917066195446"
          className="hover:text-black transition"
        >
          +91 70661 95446
        </a>
      </p>

      <p className="text-sm text-white">
        ✉️ <a
          href="mailto:trsawant01@gmail.com"
          className="hover:text-black transition"
        >
          trsawant01@gmail.com
        </a>
      </p>
    </div>

    {/* Philosophy */}
    <div className="space-y-4">
      <h4 className="text-sm font-medium tracking-wide text-white uppercase">
        Philosophy
      </h4>

      <p className="text-lg font-medium text-white leading-snug">
        “Work deeply.  
        Live calmly.  
        Reset weekly.”
      </p>
    </div>

  </div>

  {/* Divider */}
  <div className="mt-16  pt-6 text-center text-xs text-white">
    © {new Date().getFullYear()} THEPAUSE · Agonda, Goa
  </div>
</footer>

    </main>
  )
}
