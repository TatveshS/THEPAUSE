"use client"

import { ChevronDown } from "lucide-react"

type ScrollArrowProps = {
  targetId: string
  color?: "white" | "black" | "gray"
}

export default function ScrollArrow({
  targetId,
  color = "white",
}: ScrollArrowProps) {
  const handleClick = () => {
    const el = document.getElementById(targetId)
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
    })
  }

  const colorClass =
    color === "black"
      ? "text-black"
      : color === "gray"
      ? "text-gray-500"
      : "text-white"

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer animate-bounce opacity-80 hover:opacity-100 transition ${colorClass}`}
      aria-label={`Scroll to ${targetId}`}
    >
      <ChevronDown size={36} />
    </div>
  )
}
