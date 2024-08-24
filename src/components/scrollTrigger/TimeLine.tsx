import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";

export default function TimeLine() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: box.current,
            markers: true,
            start: "top 80%",
            end: "top 30%",
            scrub: 3,
        }
    });
    setTl(tl);
  }, []);

  useGSAP(
    () => {
      tl?.to(box.current, {
        x: 500,
        duration: 5,
      })
        .to(box.current, {
          y: 200,
          duration: 3,
        })
        .to(box.current, {
          x: 0,
          duration: 2,
        });
    },
    [tl]
  );

  return (
    <main ref={container} className="flex flex-col w-full h-screen bg-purple-400">
      <div ref={box} className="w-40 h-40 bg-green-400"></div>
    </main>
  );
}
