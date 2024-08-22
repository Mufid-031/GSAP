"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as React from "react";

export default function NavBtn({ elBtn, isOpen, setIsOpen }: { elBtn: React.RefObject<HTMLDivElement>; isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const lineOne = React.useRef<HTMLSpanElement>(null);
  const lineTwo = React.useRef<HTMLSpanElement>(null);
  const lineThree = React.useRef<HTMLSpanElement>(null);
  const [tl, setTl] = React.useState<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ ease: "power3.inOut" });
    setTl(tl);
  });

  useGSAP(() => {
    const tl = gsap.timeline({ ease: "power3.inOut" });
    setTl(tl);
    if (isOpen) {
      tl &&
        tl?.to(
          lineOne.current,
          {
            transformOrigin: "left center",
            rotate: 45,
            duration: 1 * 0.5,
          },
          1 * 0.5
        );

      tl &&
        tl?.to(
          lineTwo.current,
          {
            scale: 0,
            duration: 1 * 0.4,
          },
          1 * 0.4
        );

      tl &&
        tl?.to(
          lineThree.current,
          {
            transformOrigin: "left center",
            rotate: -45,
            duration: 1 * 0.5,
          },
          1 * 0.5
        );
    } else {
      tl &&
        tl?.to(
          lineOne.current,
          {
            transformOrigin: "left center",
            rotate: 0,
            duration: 1 * 0.5,
          },
          1 * 0.5
        );

      tl &&
        tl?.to(
          lineTwo.current,
          {
            scale: 1,
            duration: 1 * 0.4,
          },
          1 * 0.4
        );

      tl &&
        tl?.to(
          lineThree.current,
          {
            transformOrigin: "left center",
            rotate: 0,
            duration: 1 * 0.5,
          },
          1 * 0.5
        );
    }
  }, [isOpen]);

  return (
    <div ref={elBtn} className="flex flex-col gap-3" onClick={(e) => setIsOpen(!isOpen)}>
      <Line ref={lineOne} />
      <Line ref={lineTwo} />
      <Line ref={lineThree} />
    </div>
  );
}

const Line = React.forwardRef<HTMLSpanElement>((props, ref) => {
  return (
    <span
      className="w-10 h-[2px] bg-white"
      ref={ref}
    />
  );
});
