import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

export default function Labels() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);

    tl.to(box.current, {
      x: 500,
      duration: 5,
    })
      .to(box.current, {
        y: 200,
        duration: 3,
      })
      .addLabel("rotate", 3)
      .to(box.current, {
        rotate: 180,
        duration: 2,
      });
  }, []);

  useGSAP(() => {
    //   tl &&
    //     ScrollTrigger.create({
    //       markers: true,
    //       start: "top center",
    //       animation: tl,
    //       trigger: box.current,
    //       scrub: 3,
    //     });
    tl && tl.play("rotate");
  }, [tl]);

  return (
    <main ref={container} className="flex flex-col w-full h-screen bg-purple-400">
      <div ref={box} className="w-40 h-40 bg-green-400"></div>
    </main>
  );
}
