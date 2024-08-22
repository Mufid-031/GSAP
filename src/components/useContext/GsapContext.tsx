"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function GsapContext() {
  const box = useRef<HTMLDivElement | null>(null);

  const ctx = gsap.context((self) => {
    gsap.from(box.current, {
        x: -200,
    });

    gsap.to(box.current, {
        x: 200,
    });

    // add event
    self.add("onClick", (e: MouseEvent) => {
      gsap.to(box.current, {
        scale: 1.3,
      });
    })

    // ignore if ctx is reverted
    self.ignore(() => {
      gsap.to(box.current, {
        scale: 1,
      });
    })
  });

  useGSAP(() => {
    ctx.revert();
  }, [])

  return (
    <main className="flex flex-col gap-5">
      <h3 className="text-xl font-bold">Gsap Context</h3>
      <div className="w-40 h-40 bg-green-400" onClick={(e) => ctx.onClick(e)} ref={box}></div>
    </main>
  );
}
