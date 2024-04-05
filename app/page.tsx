"use client";

import Footer from "@/components/footer/Footer";
import Features from "@/components/feature/Features";
import HomeShortie from "@/components/home/Home";
import Navbar from "@/components/header/Navbar";
import Achievements from "@/components/achievements/Achievements";
import Questions from "@/components/question/Questions";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <HomeShortie />
      <Features/>
      <Achievements/>
      <Questions/>
      <Footer/>
    </main>
    </>
  );
}
