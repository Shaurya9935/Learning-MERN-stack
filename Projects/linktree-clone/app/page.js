"use client"

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("")
  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (

    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-3 justify-center ml-[10vw]">
          <p className="text-yellow-300 text-7xl font-bold">Everything you </p>
          <p className="text-yellow-300 text-7xl font-bold">are. In one, </p>
          <p className="text-yellow-300 text-7xl font-bold">simple link in bio.</p>
          <p className="font-xl text-yellow-300 my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="bg-white rounded-lg focus:outline-green-800 p-3 w-56" placeholder="Enter your Handle" />
            <button onClick={() => { createTree() }} className="bg-purple-300 rounded-full px-4 py-2 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[10vw]">
          <img src="home.png" alt="homepageimage" />
        </div>

      </section>
      <section className="bg-red-600 min-h-screen">

      </section>
    </main>
  );
}
