import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Pin() {
  const container = useRef<HTMLDivElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(box.current, {
        // x: 500,
        rotation: 180,
        borderRadius: "50%",
        backgroundColor: "lightblue",
        duration: 3,
        scrollTrigger: {
          trigger: box2.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          pin: box.current,
          pinSpacing: true, // default is false, if true, the element will be pinned after the trigger is reached
          toggleActions: "restart none none none",
          markers: {
            startColor: "green",
            endColor: "fuchsia",
            fontSize: "3rem",
          },
        },
      });

      gsap.to(box2.current, {
        // x: 500,
        rotation: 180,
        borderRadius: "50%",
        backgroundColor: "lightblue",
        duration: 3,
        scrollTrigger: {
          trigger: box3.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 3,
          pin: box2.current,
          pinSpacing: true, // default is false, if true, the element will be pinned after the trigger is reached
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
    <main ref={container} className="flex flex-col w-full bg-purple-400">
      <div ref={box} className="w-40 h-40 bg-green-400"></div>
      <div ref={box2} className="w-40 h-40 bg-green-400"></div>
      <div ref={box3} className="w-40 h-40 bg-green-400"></div>
    </main>
  );
}
