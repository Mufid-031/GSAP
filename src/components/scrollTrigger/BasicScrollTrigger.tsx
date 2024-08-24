import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function BasicScrollTrigger() {
  const container = useRef<HTMLDivElement>(null);
  const boxOne = useRef<HTMLDivElement>(null);
  const boxTwo = useRef<HTMLDivElement>(null);

  const animationScroll = (el: HTMLDivElement | null, start: number | string, end: number | string | (() => number) | undefined) => {
    return gsap.to(el, {
      borderRadius: "50%",
      rotate: 180,
      duration: 3,
      scrollTrigger: {
        trigger: el, // the element that will trigger the animation
        start: start, // the start of the animation when the element is in view
        end: end, // the end of the animation when the element is in view
        markers: true, // marke your animation in web
        toggleClass: "bg-red-400", // the class that will be added to the element when the animation is triggered
      },
    });
  };

  useGSAP(
    () => {
      animationScroll(boxOne.current, 500, "top center");
      animationScroll(boxTwo.current, "top 30%", "center 20%"); // if element top is in center of the screen, it will trigger the animation
    },
    // [boxOne, boxTwo] // if inView is true, it will trigger the animation, but animation will run again if isInView is true
    {
      scope: container, // will run the animation if the container is in view, but the animation will run only once
    }
  );

  return (
    <div ref={container} className="flex flex-col items-center gap-5 w-full h-screen bg-blue-400">
      <h3>Start the animation when the element is in view</h3>
      <div ref={boxOne} className="w-40 h-40 bg-green-400"></div>
      <h3>Start the animation when it{"'"}s 500px from the top of the screen container</h3>
      <div ref={boxTwo} className="w-40 h-40 bg-green-400"></div>
      {/* <div className="w-1/2 h-[1px] bg-black mt-[100px]"></div> */}
    </div>
  );
}
