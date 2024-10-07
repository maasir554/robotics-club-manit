"use client"

import { NavBar, Hero, About, PastEvents } from "./components";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <PastEvents/>
    </div>
  );
}
