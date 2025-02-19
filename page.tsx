import Link from "next/link"
import DateTime from "./components/DateTime"
import Fireworks from "./components/Fireworks"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      <DateTime />
      <Fireworks />
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-red-500">
          新年好
          <br />
          欢迎来到陈昱鸣的官网~
        </h1>
        <Link
          href="/about"
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-600 transition-colors inline-block mb-8"
        >
          简介
        </Link>
        <div className="mt-8">
          <h2 className="text-2xl mb-4 text-red-500">友情链接</h2>
          <a
            href="https://ydgzscc.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            陈飞鸣的官网
          </a>
        </div>
      </div>
    </main>
  )
}

