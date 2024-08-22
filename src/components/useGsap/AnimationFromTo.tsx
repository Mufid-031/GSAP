"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AnimationFromTo() {
  const container = useRef<HTMLDivElement>(null);
  const boxOne = useRef<HTMLDivElement>(null);
  const boxTwo = useRef<HTMLDivElement>(null);
  const boxThree = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        boxOne.current,
        {
          x: -200,
          duration: 1,
        },
        {
          x: 0,
          duration: 1,
          rotate: 180,
          backgroundColor: "lightblue",
        }
      );
      gsap.fromTo(
        boxTwo.current,
        {
          x: -200,
          duration: 1,
          delay: 1,
        },
        {
          x: 0,
          duration: 1,
          delay: 1,
          rotate: 180,
          backgroundColor: "lightblue",
        }
      );
      gsap.fromTo(
        boxThree.current,
        {
          x: -200,
          duration: 1,
          delay: 2,
        },
        {
          x: 0,
          duration: 1,
          delay: 2,
          rotate: 180,
          backgroundColor: "lightblue",
        }
      );
    },
    { scope: container }
  );

  return (
    <main className="flex flex-col gap-5" ref={container}>
      <h3 className="text-xl font-bold">Animation From To</h3>
      <div className="w-40 h-40 bg-green-400" ref={boxOne}></div>
      <div className="w-40 h-40 bg-green-400" ref={boxTwo}></div>
      <div className="w-40 h-40 bg-green-400" ref={boxThree}></div>
    </main>
  );
}
