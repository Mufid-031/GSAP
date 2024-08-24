import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Scrub() {
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(box.current, {
        x: 700,
        rotation: 180,
        borderRadius: "50%",
        backgroundColor: "lightblue",
        duration: 3,
        scrollTrigger: {
          trigger: box.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          toggleActions: "restart none none none",
          markers: {
            startColor: "green",
            endColor: "fuchsia",
            fontSize: "3rem",
          },
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main ref={container} className="flex flex-col w-full h-screen bg-purple-400">
      <div ref={box} className="w-40 h-40 bg-green-400"></div>
    </main>
  );
}
