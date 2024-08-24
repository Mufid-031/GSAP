import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";

export default function CreateTrigger() {
  const [tl, setTl] = useState<gsap.core.Timeline | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const nav = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);

    ScrollTrigger.create({
      trigger: container.current,
      markers: true,
      start: "top 6%",
      //   pin: container.current,
      //   pinSpacing: true,
      onEnter: () => console.log("Enter"),
      onLeave: () => console.log("Leave"),
      onEnterBack: () => console.log("EnterBack"),
      onLeaveBack: () => console.log("LeaveBack"),
      onUpdate: (self) => console.log(self),
    });
  }, []);

  useGSAP(() => {}, [tl]);

  return (
    <main className="flex flex-col w-full bg-purple-400">
      <div ref={nav} className="w-full h-14 bg-transparent p-5">
        <ul className="flex items-center gap-5">
          <li className="text-white">Tes</li>
          <li className="text-white">Tes</li>
          <li className="text-white">Tes</li>
        </ul>
      </div>
      <div ref={container} className="w-full h-screen text-center px-40 mt-10">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit magni itaque laudantium totam non nam odit, veritatis commodi ipsam voluptate quidem corporis aspernatur minus illo debitis. Alias similique hic quis optio sint debitis
        doloremque sed. Itaque blanditiis molestiae totam? Impedit sit ad nulla perspiciatis ducimus, aut amet, rerum id nesciunt molestias repellendus blanditiis libero. Corrupti aliquam, placeat nisi quos nobis error ipsa iure quis
        voluptatibus sapiente earum ab maxime autem blanditiis, minima ad. Enim praesentium dolor repellendus odit tenetur molestiae et ut consequatur, expedita repellat reprehenderit autem tempora excepturi delectus, dolorem consectetur
        officia aperiam! Consectetur dolorem vero repellendus porro, amet unde distinctio eaque quos rem odio pariatur eveniet ad reprehenderit dignissimos quo nobis, perferendis reiciendis? Blanditiis aliquid sequi commodi atque
        praesentium aspernatur, accusamus quo. Laudantium a libero accusamus facere fuga nam odit aliquid, molestias quisquam perspiciatis quia necessitatibus quae repellat aspernatur ducimus ad eaque obcaecati. Ad qui odio nobis adipisci
        culpa aliquid cumque. Sint quisquam quam accusamus sunt molestiae amet deleniti consequuntur nulla fugit obcaecati corrupti nisi, dolore natus pariatur! Inventore nesciunt ea repellat minus quos? Neque animi cum maiores iure saepe?
        Aliquam aut culpa esse dolores eum quas distinctio ab debitis omnis blanditiis id repellendus vel, doloribus soluta corrupti voluptatem repudiandae odit reprehenderit vero dolore eligendi optio! Fuga perspiciatis ut modi eum, amet
        aperiam. Rerum accusantium dolorem earum, molestias numquam laboriosam eos ducimus ad at nulla magni pariatur, iste deleniti illo. Labore asperiores minus dolores quos, dolore impedit at ut beatae nesciunt error, nemo temporibus.
        Cupiditate, quam iusto natus a velit maiores. Odio dolores corrupti illo alias, quam inventore minima? Hic alias modi nisi impedit, nobis beatae nam dicta tenetur molestias porro, exercitationem, fugiat illo quibusdam. Ex molestiae
        sunt animi voluptatibus veniam, veritatis minus odio, molestias praesentium laudantium corrupti obcaecati rerum id itaque vero harum eaque reprehenderit pariatur doloremque!
      </div>
      <div className="w-full h-screen bg-red-400"></div>
    </main>
  );
}
