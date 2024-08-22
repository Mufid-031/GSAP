"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AnimationEnding() {
  const container = useRef<HTMLDivElement>(null);
  const boxOne = useRef<HTMLDivElement>(null);
  const boxTwo = useRef<HTMLDivElement>(null);
  const boxThree = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    gsap.to(boxOne.current, {
      x: 200,
      duration: 1,
    });
    gsap.to(boxTwo.current, {
      x: 200,
      duration: 1,
      delay: 1,
    });
    gsap.to(boxThree.current, {
      x: 200,
      duration: 1,
      delay: 2,
    });
  }, { scope: container });

  return (
    <main className="flex flex-col gap-5" ref={container}>
      <h3 className="text-xl font-bold">Animation Ending</h3>
      <div className="w-40 h-40 bg-green-400" ref={boxOne}></div>
      <div className="w-40 h-40 bg-green-400" ref={boxTwo}></div>
      <div className="w-40 h-40 bg-green-400" ref={boxThree}></div>
    </main>
  );
}
