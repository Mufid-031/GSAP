"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import NavBtn from "./NavBtn";

export default function Nav() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef(null);
  const elName = useRef(null);
  const elBtn = useRef(null);
  const lineOne = useRef(null);
  const lineTwo = useRef(null);
  const lineThree = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ ease: "power3.inOut" });
    setTl(tl);
  });

  useGSAP(() => {
    tl?.fromTo(
      elBtn.current,
      {
        x: 500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
      1 * 0.5
    );
    tl?.fromTo(
      elName.current,
      {
        x: -500,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
      },
      1 * 0.5
    );
  });

  return (
    <nav ref={container} className="flex justify-between items-center p-5 bg-[#1a1a1a]">
      <h3 ref={elName} className="text-xl font-bold text-white">
        Mufid
      </h3>
      <NavBtn elBtn={elBtn} isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
