import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ToggleActions() {
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(box.current, {
        x: 700,
        rotation: 180,
        borderRadius: "50%",
        duration: 3,
        scrollTrigger: {
          trigger: box.current,
          start: "top 60%",
          end: "top 40%",
        //   toggleActions: "restart reverse none none", // default will play, none, none, none
        // toggleActions: "restart pause resume reset",
        toggleActions: "restart pause resume complete",
          //              onEnter onLeave onEnterBack onLeaveBack
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
