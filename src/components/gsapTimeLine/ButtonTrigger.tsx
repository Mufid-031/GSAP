"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useCallback } from "react";

export default function ButtonTrigger() {
  const [reversed, setReversed] = useState<boolean>(false);
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();
    setTl(tl);
    // set timeline
  });

  useGSAP(() => {
    tl && tl.reversed(reversed);
    // reverse timeline
  }, [reversed, tl]);

  const addAnimation = useCallback(
    (animation: gsap.core.Animation, index: number) => {
      tl && tl.add(animation, index * 0.5);
      // add animation with delay
    },
    [tl]
  );

  const toggleTimeline = contextSafe(() => {
    tl?.reversed(!tl.reversed());
    // set reversed timeline
  })

  return (
    <main className="flex flex-col gap-5" ref={container}>
      <h3 className="text-xl font-bold">Button Trigger</h3>
      <button className="p-2 bg-green-400" onClick={() => toggleTimeline()}>
        Toggle
      </button>
      <Circle addAnimation={addAnimation} index={0} rotate={360} />
      <Box addAnimation={addAnimation} index={0} />
    </main>
  );
}

interface BoxProps {
  addAnimation: (animation: gsap.core.Animation, index: number) => void | null;
  index: number;
  rotate?: number;
}

const Circle = ({ addAnimation, index, rotate }: BoxProps) => {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const animation = gsap.to(el.current, {
      x: -200,
      rotate: rotate ? rotate : 0,
    });
    addAnimation(animation, index);
  }, [addAnimation, index]);

  return (
    <div className="w-40 h-40 bg-green-400 rounded-full flex justify-center items-center" ref={el}>
      Box
    </div>
  );
};

interface CircleProps {
  addAnimation: (animation: gsap.core.Animation, index: number) => void | null;
  index: number;
  rotate?: number;
}

const Box = ({ addAnimation, index, rotate }: CircleProps) => {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const animation = gsap.to(el.current, {
      x: 200,
      rotate: rotate ? rotate : 0,
    });
    addAnimation(animation, index);
  }, [addAnimation, index]);

  return (
    <div className="w-40 h-40 bg-green-400 flex justify-center items-center" ref={el}>
      Circle
    </div>
  );
};
