"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BasicScrollTrigger from "./BasicScrollTrigger";
import UsingTimeLine from "./UsingTimeLine";
import ToggleActions from "./ToggleActions";
import Scrub from "./Scrub";
gsap.registerPlugin(ScrollTrigger);


export default function SimpleScrollTrigger() {

  return (
    <main className="flex flex-col">
      <div className="w-full h-screen bg-orange-400 flex justify-center items-center">
        <h3 className="text-3xl font-bold">Simple Scroll Trigger</h3>
      </div>
      {/* <BasicScrollTrigger /> */}
      {/* <UsingTimeLine /> */}
      {/* <ToggleActions /> */}
      <Scrub />
    </main>
  );
}
