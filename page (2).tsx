import Link from "next/link"
import DateTime from "../components/DateTime"

export default function About() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative">
      <DateTime />
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-red-500">简介</h1>
        <p className="text-xl mb-8 text-white">陈昱鸣</p>
        <p className="text-lg mb-16 text-white">2016.8.22</p>
        <Link
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-red-600 transition-colors"
        >
          返回首页
        </Link>
      </div>
    </main>
  )
}

