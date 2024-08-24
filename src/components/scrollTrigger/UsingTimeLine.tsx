import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export default function UsingTimeLine() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const boxOne = useRef<HTMLDivElement | null>(null);
  const boxTwo = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        start: "top top",
        end: "+=500",
        scrub: 1,
        snap: {
          snapTo: "labels",
          duration: {
            min: 0.2,
            max: 3,
          },
          ease: "power1.inOut",
        },
      },
    });
    setTl(timeLine);
  });

  useGSAP(() => {
    tl?.addLabel("start")
      .to(boxOne.current, {
        scale: 1.3,
        rotation: 45,
        autoAlpha: 0,
      })
      .addLabel("color")
      .to(boxTwo.current, {
        backgroundColor: "red",
      })
      .addLabel("end");
  }, [tl]);

  return (
    <div ref={container} className="flex flex-col items-center gap-5 w-full h-screen bg-purple-400">
      <div ref={boxOne} className="w-40 h-40 bg-green-400"></div>
      <div ref={boxTwo} className="w-40 h-40 bg-green-400"></div>
    </div>
  );
}
