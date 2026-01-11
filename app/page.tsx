import ScrollArrow from "@/components/ScrollArrow"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
    className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center pt-24"
    style={{
    backgroundImage: "url('/beach.png')",
    }}
>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/5" />

    {/* Content */}
    <div
    className="
      relative z-10 text-center px-6 max-w-3xl
      drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]
      "
    >
    <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
      THEPAUSE
    </h1>

    <p className="mt-6 text-3xl md:text-4xl font-medium tracking-tight text-gray-300">
      A space to slow down, breathe, and reconnect
    </p>

    <p className="mt-6 text-base md:text-lg text-gray-300 max-w-xl mx-auto">
      We create experiences inspired by nature, rhythm, and stillness,
      designed to help you pause from the noise and feel present again.
    </p>
    <div className="mt-10 flex justify-center">
    <a
    href="/book"
    className="
      inline-flex items-center gap-2
      px-8 py-3
      text-sm tracking-wide font-medium
      text-white
      border border-white/60
      rounded-full
      backdrop-blur-sm
      hover:bg-white hover:text-black
      transition-all duration-300
    "
    >
    Book Your Month
    </a>
  </div>

    </div>


  {/* Scroll arrow */}
  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
    <ScrollArrow targetId="info" color="white" />
  </div>
</section>

      {/* INFO SECTION */}
      <section
        className="min-h-screen bg-gray-50 px-6 py-24"
      >
        <div id="info" className="scroll-mt-24" />
        <div className="max-w-4xl mx-auto text-black space-y-8">
    
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight whitespace-nowrap text-center">
         What is{" "}
        <span className="relative inline-block">
        THE PAUSE
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-black" />
        </span>{" "}
  
      </h2>



      <p className="text-lg text-gray-700 leading-relaxed">
      <span className="font-bold text-black">THEPAUSE</span> is a space created
      for people who feel overwhelmed by the noise of the concrete jungle. A place
      where time slows down, thoughts breathe, and life feels lighter again. We
      believe that real freedom begins when you disconnect from chaos and reconnect
      with yourself, your rhythm, your peace, your natural flow.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
      Rooted in the soul of <span className="font-medium text-black">Goa</span> and
      the beachside way of life, <span className="font-medium text-black font-semibold">THEPAUSE</span> brings you closer to nature, sound, and
      stillness, all within <span className="font-medium text-black font-semibold">1 km of the shoreline</span>.
      Here, waves replace traffic, sunsets replace screens, and every moment carries
      a vibe that helps you reset, recharge, and simply be.
      </p>

      <p className="text-lg text-gray-700 leading-relaxed">
      More than a destination, THE PAUSE is a state of mind. An invitation to slow down, to live with intention, and to experience moments without urgency. Whether in solitude or shared silence, each stay unfolds gently — allowing you to reset, recharge, and simply be.
      </p>
      </div>

      {/* BOTTOM IMAGE */}
     <div
      className="mt-20 md:mt-15   /* ⬅️ pushes it down */
             h-96 max-w-4xl mx-auto
             rounded-2xl bg-cover bg-center shadow-xl"
      style={{ backgroundImage: "url('/working_nature.avif')" }}
      />

      <div className="mt-24 flex justify-center">
        <ScrollArrow targetId="founder" color="black" />
      </div>
      </section>

{/* ================= FOUNDER STORY ================= */}
<section className="bg-black px-6 py-28">
  <div id="founder" className="scroll-mt-24" />
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center">

    {/* LEFT IMAGE */}
    <div
      className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
      style={{ backgroundImage: "url('/tat_smile.JPG')" }}
    />

    {/* STORY */}
    <div className="space-y-8 text-white text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
        The Story Behind THEPAUSE
      </h2>

      <p className="text-lg text-white leading-relaxed">
        <span className="font-medium text-white text-bold">Tatvesh</span> didn’t set
        out to create a retreat. He was simply trying to breathe again.
      </p>
      <p className="text-lg text-white leading-relaxed">
        Life in Bangalore, working for a multinational company, slowly became
        a loop of screens, schedules, and concrete corridors. The pace was fast,
        the days were productive, yet something essential felt missing.
      </p>
      <p className="text-lg text-white leading-relaxed">
        Agonda was where that missing quiet lived. The place that shaped his
        childhood, where nature wasn’t an escape, but a way of life. Returning
        there wasn’t about leaving ambition behind, but about restoring balance.
      </p>
      <p className="text-lg text-white leading-relaxed">
        THEPAUSE was born from that return, a space for anyone who has felt
        overwhelmed by modern life and quietly longed for something slower,
        calmer, and more real.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
      style={{ backgroundImage: "url('/tat_vri.jpg')" }}
    />
  </div>
  <div className="flex justify-center pt-8">
      <ScrollArrow targetId="experiences-anchor" color="white" />
  </div>

</section>


    {/* ================= EXPERIENCES ================= */}
<section
  className="relative min-h-screen overflow-hidden scroll-mt-24"
>

  {/* SCROLL TARGET */}
  <div id="experiences-anchor" className="scroll-mt-24" />
    
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://res.cloudinary.com/dmedbtjvu/video/upload/v1768154263/waves_close_pnifwk.mp4" type="video/mp4" />
  </video>

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Content */}
  <div className="relative z-10 px-6 py-28">
    <div className="max-w-5xl mx-auto text-white space-y-20">

      {/* Heading */}
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Experiences at THEPAUSE
        </h2>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Thoughtfully curated moments designed to slow you down, reconnect
          you with nature, and bring balance back into your everyday rhythm.
        </p>
      </div>

      {/* Experience cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Saturday · Explore</h3>
          <p className="text-gray-300">
            One signature experience each weekend, nature trails, water-based
            explorations, or slow local Goa discoveries.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Saturday Night · Connect</h3>
          <p className="text-gray-300">
            Movie nights, open conversations, music, and shared moments where
            connections form naturally.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-medium">Sunday · Reset</h3>
          <p className="text-gray-300">
            Unscheduled mornings, reflection, beach time, and space to prepare
            for the week ahead — without pressure.
          </p>
        </div>

      </div>
      <div className="text-center pt-6">
      <a
        href="/experience"
        className="inline-block text-sm font-medium tracking-wide
                   pb-1 hover:opacity-70 transition"
      >
        Explore the full experience →
      </a>
      </div>
    </div>
    <div className="flex justify-center pt-8">
      <ScrollArrow targetId="spaces" color="white" />
    </div>
  </div>
</section>

{/* ================= THE SPACES ================= */}
<section className="bg-black px-6 py-28">
  {/* Scroll Anchor */}
  <div id="spaces" className="scroll-mt-24" />

  <div className="max-w-6xl mx-auto space-y-24">

    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto space-y-6">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
        THE SPACES
      </h2>

      <p className="text-lg text-white-600">
        Every space at THE PAUSE is designed with intention, to help you rest
        deeply, work calmly, and move through your day without friction.
      </p>
    </div>

    {/* ROOMS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div
        className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
        style={{ backgroundImage: "url('/room.jpg')" }}
      />

      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-white">
          The Rooms
        </h3>

        <p className="text-white-700 leading-relaxed">
          Quiet, comfortable, and uncluttered. Our rooms are designed to feel
          calm the moment you step in, soft light, natural textures, and a
          sense of privacy that allows you to fully unwind.
        </p>

        <p className="text-white-700 leading-relaxed">
          Whether you’re here to rest, think, or create, each room supports
          deep sleep and slow mornings, without distractions.
        </p>
      </div>
    </div>

    {/* WORKSPACE */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className="md:order-2
        h-96 rounded-2xl bg-cover bg-center shadow-xl"
        style={{ backgroundImage: "url('/natureworking.jpg')" }}
      />

      <div className="space-y-6 md:order-1">
        <h3 className="text-2xl font-medium text-white">
          The Workspace
        </h3>

        <p className="text-white-700 leading-relaxed">
          A quiet, focused environment built for deep work, without the
          stiffness of a traditional office. Natural light, open desks, and a
          calm atmosphere help ideas flow without pressure.
        </p>

        <p className="text-white-700 leading-relaxed">
          Ideal for creators, remote professionals, and anyone who values
          clarity over constant hustle.
        </p>
      </div>
    </div>

    {/* KITCHEN */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div
        className="h-96 rounded-2xl bg-cover bg-center shadow-xl"
        style={{ backgroundImage: "url('/kitchen.jpg')" }}
      />

      <div className="space-y-6">
        <h3 className="text-2xl font-medium text-white">
          The Kitchen
        </h3>

        <p className="text-white-700 leading-relaxed">
          A shared kitchen that feels more like home than a facility. Simple,
          functional, and welcoming, a space where meals are slow, conversations
          happen naturally, and community forms effortlessly.
        </p>

        <p className="text-white-700 leading-relaxed">
          Whether you’re cooking, sharing a meal, or just making chai, the
          kitchen remains one of the most lived-in spaces at THE PAUSE.
        </p>
      </div>
    </div>

    <div className="text-center pt-6">
      <a
        href="/facilities"
        className="inline-block text-sm font-medium tracking-wide
                   pb-1 hover:opacity-70 transition"
      >
        Explore all the facilities →
      </a>
      </div>

    {/* Scroll Arrow to Experiences */}
    <div className="flex justify-center pt-4">
      <ScrollArrow targetId="footer" color="white" />
    </div>

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



    </>
  )
}
