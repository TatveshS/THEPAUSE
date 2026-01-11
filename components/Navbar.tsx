"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black text-white
        border-b border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide"
          onClick={() => setOpen(false)}
        >
          THEPAUSE
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-white">
          <li className="hover:text-gray-300 transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/facilities">Facilities</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/experience">Community</Link>
          </li>
          <li className="hover:text-gray-300 transition">
            <Link href="/book">Book</Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <ul className="flex flex-col px-6 py-6 space-y-4 text-sm">
            <li>
              <Link href="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/facilities" onClick={() => setOpen(false)}>
                Facilities
              </Link>
            </li>
            <li>
              <Link href="/experience" onClick={() => setOpen(false)}>
                Community
              </Link>
            </li>
            <li>
              <Link href="/book" onClick={() => setOpen(false)}>
                Book
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
