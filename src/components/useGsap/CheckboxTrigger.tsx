"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";

export default function CheckboxTrigger() {
  const [selected, setSelected] = useState<string>("2");

  return (
    <main className="flex flex-col gap-5">
      <h3 className="text-xl font-bold">Checkbox Trigger</h3>
      <div className="flex gap-5">
        <input className="w-10 h-10" type="radio" checked={selected === "1"} name="box" value="1" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target?.value)} />
        <input className="w-10 h-10" type="radio" checked={selected === "2"} name="box" value="2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target?.value)} />
        <input className="w-10 h-10" type="radio" checked={selected === "3"} name="box" value="3" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelected(e.target?.value)} />
      </div>
      <Box id="1" selected={selected}>
        Box 1
      </Box>
      <Box id="2" selected={selected}>
        Box 2
      </Box>
      <Box id="3" selected={selected}>
        Box 3
      </Box>
    </main>
  );
}

interface BoxProps {
  children: React.ReactNode;
  id: string;
  selected: string | null;
}

const Box = ({ children, id, selected }: BoxProps) => {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(el.current, {
      x: selected === id ? 0 : -200,
    });
  }, [selected, id]);

  return (
    <div className="w-40 h-40 bg-green-400 rounded-full flex justify-center items-center" ref={el} id={id}>
      {children}
    </div>
  );
};
