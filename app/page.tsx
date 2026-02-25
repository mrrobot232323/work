"use client";

import Navbar from "./components/navbar/page";
import Hero from "./components/hero/hero";
import Down from "./components/down/down";
import Blur from "./components/blur/blur";
import Download from "./components/download/download";

import FloatingPill from "./components/floatingpill/floatingpill";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col font-sans relative">
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 pt-2 pb-8 md:px-6 md:pt-3 lg:px-8">
        <Hero />
      </div>
      <div className="w-full flex flex-col items-center px-4 pb-8 md:px-6 lg:px-8">
        <Down />
      </div>
      <div className="w-full flex flex-col items-center px-4 pb-8 md:px-6 lg:px-8">
        <Blur />
      </div>
      <div className="w-full flex flex-col items-center px-4 pb-8 md:px-6 lg:px-8">
        <Download />
      </div>
      <div className="w-full flex flex-col items-center px-4 pb-8 md:px-6 lg:px-8">
        <FloatingPill />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}
