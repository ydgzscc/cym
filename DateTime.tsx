"use client"

import { useState, useEffect } from "react"

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 text-white p-2 text-center" style={{ zIndex: 2 }}>
      {dateTime.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })}
    </div>
  )
}

