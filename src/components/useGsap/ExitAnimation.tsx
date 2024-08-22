"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function ExitAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>(true);

  const { contextSafe } = useGSAP({ scope: container });

  const removeBox = contextSafe(() => {
    gsap.to(
      el.current,
      {
        opacity: 0,
        onComplete: () => setActive(false),
        // for exit animation
      },
    );
  });

  return (
    <main className="flex flex-col gap-5" ref={container}>
      <h3 className="text-xl font-bold">Exit Animation</h3>
      <button onClick={removeBox} className="p-2 bg-green-400">
        {active ? "Remove Box" : "Done"}
      </button>
      <Box active={active} ref={el}>
        Box 1
      </Box>
    </main>
  );
}

interface BoxProps {
  children: React.ReactNode;
  active: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

const Box = ({ children, active, ref }: BoxProps) => {
  return (
    <>
      {active ? (
        <div className="w-40 h-40 bg-green-400 flex justify-center items-center" ref={ref}>
          {children}
        </div>
      ) : null}
    </>
  );
};
