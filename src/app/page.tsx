import AnimationStart from "@/components/useGsap/AnimationStart";
import AnimationEnding from "@/components/useGsap/AnimationEnding";
import AnimationFromTo from "@/components/useGsap/AnimationFromTo";
import TimeLine from "@/components/gsapTimeLine/TimeLine";
import ButtonTrigger from "@/components/gsapTimeLine/ButtonTrigger";
import CheckboxTrigger from "@/components/useGsap/CheckboxTrigger";
import ExitAnimation from "@/components/useGsap/ExitAnimation";
import GsapContext from "@/components/useContext/GsapContext";
import Nav from "@/components/navbar/Nav";

export default function Home() {

  return (
    <>
      <Nav />
      <ButtonTrigger />
    </>
    // <main className="flex flex-col gap-5 items-center py-10 bg-[#1a1a1a] text-white">
      // {/* <AnimationStart />
      // <AnimationEnding />
      // <AnimationFromTo /> */}
      // {/* <TimeLine /> */}
      // {/* <CheckboxTrigger /> */}
      // {/* <ExitAnimation /> */}
      // {/* <GsapContext /> */}
    // </main>
  );
}
