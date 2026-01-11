export default function CommunityPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          The Community
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Life at THE PAUSE is shaped as much by people as it is by place.
          Community here is unforced, unhurried, and deeply human.
        </p>
      </section>

      {/* ================= WEEKEND EXPERIENCE ================= */}
      <section className="px-6 py-28 bg-black">
        <div className="max-w-6xl mx-auto space-y-20">

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
              The Weekend Experience
            </h2>

            <p className="text-lg text-white-300">
              This is where memories are created, and where people often decide
              to return.
            </p>
          </div>

          {/* SATURDAY EXPLORATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">
              <h3 className="text-white text-2xl font-medium">
                Saturday · Exploration
              </h3>

              <p className="text-lg text-white leading-relaxed">
                Each weekend features one carefully chosen experience. Not to
                exhaust, but to immerse. The intention is always the same, 
                slow, grounded, and deeply local.
              </p>

              <ul className="space-y-3 text-white">
                <li>• Early morning treks near Canacona, forests, cliffs, waterfalls</li>
                <li>• Sunrise or sunset kayaking, followed by unstructured beach time</li>
                <li>• Visits to lesser-known beaches, cafés, and local markets</li>
              </ul>

              <p className="text-white">
                No rushing. No rigid itineraries. We keep it slow, never touristy.
              </p>
            </div>

            <div
              className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: "url('/waterfall.jpg')" }}
            />
          </div>

          {/* SATURDAY NIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div
              className="h-96 rounded-2xl bg-cover bg-center shadow-xl md:order-2"
              style={{ backgroundImage: "url('/sat_night.jpg')" }}
            />

            <div className="space-y-6 md:order-1">
              <h3 className="text-white text-2xl font-medium">
                Saturday Night · Bonding
              </h3>

              <p className="text-lg text-white leading-relaxed">
                Evenings are simple, low-effort, and meaningful. This is where
                strangers slowly turn into familiar faces.
              </p>

              <ul className="space-y-3 text-white">
                <li>• Movie nights with a projector and shared silence</li>
                <li>• Board games, cards, and casual conversations</li>
                <li>• Open mic evenings, music, poetry, stories</li>
                <li>• Campfires (when permitted), under open skies</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SUNDAY RESET ================= */}
      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Sunday · Reset
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Sundays are intentionally unscheduled. There is no pressure to
              participate, only space to choose what feels right.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Late, unhurried brunches</li>
              <li>• Journaling or quiet reflection</li>
              <li>• Gentle goal-setting for the week ahead</li>
              <li>• Solo time by the beach</li>
            </ul>

            <p className="text-lg text-gray-600">
              By Sunday evening, the feeling should be simple:
              <br />
              <span className="font-medium text-black">
                “I’m ready for Monday, not dreading it.”
              </span>
            </p>
          </div>

          <div
            className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/sunday.jpg')" }}
          />
        </div>
      </section>

      {/* ================= WEEKDAY FLOW ================= */}
      <section className="px-6 py-28 bg-black">
        <div className="max-w-4xl mx-auto space-y-12 text-center">

          <h2 className="text-white text-3xl font-semibold">
            The Weekday Rhythm
          </h2>

          <p className="text-lg text-white">
            A gentle structure to support both focus and connection, never
            obligation.
          </p>

          <div className="text-white grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">

            <div className="space-y-2">
              <p className="font-medium">Monday</p>
              <p className="text-gray-300">Sunset walk & silent sitting</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Tuesday</p>
              <p className="text-gray-300">Chai & unstructured conversations</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Wednesday</p>
              <p className="text-gray-300">Ship Something circle</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Thursday</p>
              <p className="text-gray-300">Board games or acoustic music</p>
            </div>

            <div className="space-y-2">
              <p className="font-medium">Friday</p>
              <p className="text-gray-300">Open chill / beach night</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="px-6 py-24 bg-white text-black-300 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-xl text-black font-medium">
            Community at THE PAUSE isn’t curated by events.
          </p>

          <p className="text-lg">
            It emerges naturally, then time slows, conversations deepen,
            and people feel safe enough to be themselves.
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
