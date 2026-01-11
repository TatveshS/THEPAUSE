export default function BookPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="px-6 py-32 text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
          Booking at THE PAUSE
        </h1>

        <p className="text-lg text-black-300 max-w-2xl mx-auto leading-relaxed">
          THE PAUSE is not for everyone, and that is intentional.  
          We are a small, curated community built on presence, focus, and respect
          for quiet.
        </p>
      </section>

      {/* ================= CURATED COMMUNITY ================= */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-4xl mx-auto space-y-10">

          <h2 className="text-3xl text-white font-semibold tracking-tight">
            A Curated Community
          </h2>

          <p className="text-lg text-white leading-relaxed">
            We don’t operate on instant bookings. Every stay at THE PAUSE is
            intentional, for you and for the community you’ll be joining.
          </p>

          <p className="text-lg text-white leading-relaxed">
            This space is designed for creators, remote professionals, founders,
            writers, and individuals who value depth over noise. If you’re
            looking for parties, rush, or short-term escapes, this may not be the
            right fit, and that’s okay.
          </p>

          <p className="text-lg text-white leading-relaxed">
            We take the time to understand who you are, how you work, and what
            you’re seeking from this month, so that everyone here can thrive.
          </p>
        </div>
      </section>

      {/* ================= ONE MONTH COMMITMENT ================= */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-10">

          <h2 className="text-black text-3xl font-semibold tracking-tight">
            A One-Month Commitment
          </h2>

          <p className="text-lg text-black leading-relaxed">
            Stays at THE PAUSE are designed as a <span className="font-medium text-black">
            one-month experience</span>.
          </p>

          <p className="text-lg text-black leading-relaxed">
            We encourage you to truly step out of your usual rhythm, plan your
            month with intention, and allow yourself enough time to settle,
            focus, and reset — without constantly watching the calendar.
          </p>

          <p className="text-lg text-black leading-relaxed">
            This is not a weekend getaway. It’s an invitation to live
            differently — even if only for a month.
          </p>
        </div>
      </section>

      {/* ================= OPEN MONTHS ================= */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-4xl mx-auto space-y-10">

          <h2 className="text-3xl text-white font-semibold tracking-tight">
            Open Months
          </h2>

          <p className="text-lg text-white text-whiteleading-relaxed">
            THE PAUSE operates seasonally, during months when Goa feels most
            alive, calm, and balanced.
          </p>

          <ul className="text-lg text-white space-y-3">
            <li>• <span className="font-medium text-white">May</span></li>
            <li>• <span className="font-medium text-white">June</span></li>
            <li>• <span className="font-medium text-white">July</span></li>
            <li>• <span className="font-medium text-white">August</span></li>
            <li>• <span className="font-medium text-white">September</span></li>
          </ul>

          <p className="text-lg text-white leading-relaxed">
            We recommend planning early and choosing the month that aligns best
            with your work, personal rhythm, and need for reset.
          </p>
        </div>
      </section>

      {/* ================= HOW TO BOOK ================= */}
      <section className="px-6 py-32 bg-white text-black">
        <div className="max-w-4xl mx-auto space-y-10 text-center">

          <h2 className="text-4xl font-semibold text-black tracking-tight">
            How to Book
          </h2>

          <p className="text-lg leading-relaxed">
            To begin the process, reach out to us directly.  
            We’ll have a short conversation to understand your intent, your
            expectations, and whether THE PAUSE is the right fit for you.
          </p>

          <div className="space-y-4 text-lg">
            <p>
              📞 <a
                href="tel:+917066195446"
                className="text-black hover:opacity-80 transition"
              >
                +91 70661 95446
              </a>
            </p>

            <p>
              ✉️ <a
                href="mailto:trsawant01@gmail.com"
                className="text-black hover:opacity-80 transition"
              >
                trsawant01@gmail.com
              </a>
            </p>
          </div>

          <p className="pt-10 text-xl font-medium text-black">
            Come for the quiet.  
            Stay for the clarity.
          </p>

        </div>
      </section>
{/* ================= FOOTER ================= */}
<footer className="bg-white text-black-300 px-6 py-20">
  <div id="footer" className="scroll-mt-24" />
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">


    {/* Brand */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold tracking-wide text-black">
        THE PAUSE
      </h3>

      <p className="text-sm leading-relaxed text-black max-w-sm">
        A space designed to slow you down, reconnect you with nature,
        and bring balance back into how you live and work.
      </p>
    </div>

    {/* Contact */}
    <div className="space-y-4">
      <h4 className="text-sm font-medium tracking-wide text-black uppercase">
        Contact
      </h4>

      <p className="text-sm text-black">
        📍 Agonda, Goa
      </p>

      <p className="text-sm text-black">
        📞 <a
          href="tel:+917066195446"
          className="hover:text-black transition"
        >
          +91 70661 95446
        </a>
      </p>

      <p className="text-sm text-black">
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
      <h4 className="text-sm font-medium tracking-wide text-black uppercase">
        Philosophy
      </h4>

      <p className="text-lg font-medium text-black leading-snug">
        “Work deeply.  
        Live calmly.  
        Reset weekly.”
      </p>
    </div>

  </div>

  {/* Divider */}
  <div className="mt-16 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
    © {new Date().getFullYear()} THEPAUSE · Agonda, Goa
  </div>
</footer>


    </main>
  )
}
