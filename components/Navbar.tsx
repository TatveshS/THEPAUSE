export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black text-white
        border-b border-black/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide">
          THEPAUSE
        </h1>

        <ul className="flex gap-6 text-sm text-white">
          <li className="hover:text-gray-300 cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="/facilities">Facilities</a></li>
          <li>
            <a
              href="/experience"
              className="hover:text-gray-300 transition"
              >
            Community
            </a>
        </li>

          <li className="hover:text-gray-300 cursor-pointer"><a href="/book">Book</a></li>
        </ul>
      </div>
    </nav>
  )
}
