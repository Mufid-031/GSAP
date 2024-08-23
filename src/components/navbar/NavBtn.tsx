import { motion } from "framer-motion";

export default function NavBtn({ ...rest }: React.ComponentPropsWithoutRef<'button'> | any) {
  return (
    <motion.button whileHover={{ scale: 1.2 }} className="flex flex-col justify-center items-center gap-2 w-16 h-16 bg-black rounded-full" {...rest}>
      <span className="w-10 h-[2px] bg-white"></span>
      <span className="w-10 h-[2px] bg-white"></span>
      <span className="w-10 h-[2px] bg-white"></span>
    </motion.button>
  );
}
