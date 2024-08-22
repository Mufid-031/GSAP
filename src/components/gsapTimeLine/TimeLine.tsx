"use client";

import gsap from "gsap";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function TimeLine() {
    const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        setTl(tl);
    });
    
    
    return (
        <main className="flex flex-col gap-5" ref={container}>
            <h3 className="text-xl font-bold">TimeLine</h3>
            <Box timeLine={tl} index={0} />
            <Box timeLine={tl} index={1} />
            <Circle timeLine={tl} index={0} />
            <Circle timeLine={tl} index={1} />
        </main>
    )
}

const Box = ({ timeLine, index }: { timeLine: gsap.core.Timeline | null; index: number }) => {
    const el = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        timeLine && timeLine.fromTo(el.current, {
            x: -200,
            duration: 1,
            rotate: 180,
        }, {
            x: 0,
            duration: 1,
            borderRadius: 0,
        }, index * 0.5);
        // index for delay
    }, [timeLine, index]);

    return (
        <div className="w-40 h-40 bg-green-400 rounded-full" ref={el}></div>
    )
}

const Circle = ({timeLine, index}: {timeLine: gsap.core.Timeline | null; index: number}) => {
    const el = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        timeLine && timeLine.fromTo(el.current, {
            x: 200,
            duration: 1,
            rotate: 180,
        }, {
            x: 0,
            duration: 1,
            rotate: 0,
            borderRadius: "50%",
        }, index * 0.5);
        // index for delay
    }, [timeLine, index]);

    return (
        <div className="w-40 h-40 bg-green-400" ref={el}></div>
    )
}