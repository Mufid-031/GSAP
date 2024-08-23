"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import NavBtn from "./NavBtn";
import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    const timeLine = gsap.timeline();
    setTl(timeLine);
  });

  useGSAP(() => {
    tl && tl?.reversed(isOpen);
  }, [isOpen, tl]);

  const introGsap = () => {
    return gsap.fromTo(menuRef.current, {
      yPercent: -100,
      borderRadius: "50%",
      height: "50%",
      duration: 0.5,
    }, {
      yPercent: 0,
      borderRadius: 0,
      height: "100%",
      duration: 0.5
    });
  };

  const linkGsap = (el: any) => {
    return gsap.fromTo(el.current, {
      y: 50,
      opacity: 0,
      delay: 0.1,
      duration: 0.5,
    }, {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.5
    });
  };

  const addAnimation = useCallback(
    (animation: gsap.core.Animation, index: number) => {
      tl && tl?.add(animation, index * 0.5);
    },
    [tl]
  );

  // useGSAP(() => {
  //   addAnimation(introGsap(), 1);
  //   addAnimation(linkGsap(homeRef), 1);
  //   addAnimation(linkGsap(aboutRef), 1);
  //   addAnimation(linkGsap(contactRef), 1);
  //   addAnimation(linkGsap(portfolioRef), 1);
  // }, [addAnimation]);

  const toggle = contextSafe(() => {
    tl?.reversed(!tl?.reversed());

    if (tl?.reversed) {
      addAnimation(linkGsap(portfolioRef), 1);
      addAnimation(linkGsap(contactRef), 1);
      addAnimation(linkGsap(aboutRef), 1);
      addAnimation(linkGsap(homeRef), 1);
      addAnimation(introGsap(), 1);
    } else {
      addAnimation(introGsap(), 1);
      addAnimation(linkGsap(homeRef), 1);
      addAnimation(linkGsap(aboutRef), 1);
      addAnimation(linkGsap(contactRef), 1);
      addAnimation(linkGsap(portfolioRef), 1);
    }
  });

  return (
    <nav className="flex flex-col items-center h-screen relative">
      <div ref={menuRef} className="w-full h-full bg-green-400 p-10 overflow-hidden absolute flex flex-col justify-between">
        <h1 className="text-3xl font-bold">NAVBAR</h1>
        <div className="mt-10 w-full flex flex-col ml-48">
          <Link ref={homeRef} href="/" className="text-5xl font-bold overflow-hidden">
            HOME
          </Link>
          <Link ref={aboutRef} href="/about" className="text-5xl font-bold overflow-hidden">
            ABOUT
          </Link>
          <Link ref={contactRef} href="/contact" className="text-5xl font-bold overflow-hidden">
            CONTACT
          </Link>
          <Link ref={portfolioRef} href="/portfolio" className="text-5xl font-bold overflow-hidden">
            PORTFOLIO
          </Link>
        </div>
        <div className="mt-10">
          <motion.button whileHover={{ scale: 1.2 }} className="flex flex-col justify-center items-center gap-2 w-16 h-16 bg-black rounded-full text-white text-2xl" onClick={() => toggle()}>X</motion.button>
        </div>
      </div>

      <div className="flex justify-between w-full p-5">
        <h1 className="text-3xl font-bold">Navbar</h1>
        <NavBtn onClick={() => toggle()} />
      </div>
    </nav>
  );
}
