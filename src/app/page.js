"use client"

import Image from "next/image";
import { NavBar, Hero, About } from "./components";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  );
}
