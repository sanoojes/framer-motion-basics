import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const mainVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
};

function App() {
  const { scrollYProgress } = useScroll();
  const constrainsRef = useRef(null);

  return (
    <>
      <main className="flex-center flex-col default-bg full-screen default-text">
        <div className="absolute flex-col flex-center gap-4 top-8  w-9/12">
          <h1 className="text-xl font-bold">Framer Motion Basics</h1>
          <motion.section
            variants={mainVariants}
            transition={{ staggerChildren: 0.25 }}
            initial="hidden"
            animate="visible"
            className="gap-2 grid grid-cols-2 max-w-screen-lg md:grid-cols-3"
          >
            {/* Fade in\out */}
            <motion.div
              variants={cardVariants}
              className="bg-neutral-900 default-card overflow-hidden gap-8"
            >
              <motion.div
                className="h-8 w-8 bg-neutral-300 rounded-md"
                animate={{ opacity: 1, x: -10 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, delay: 0.2, ease: "backInOut" }}
              />
              <motion.div
                className="h-8 w-8 bg-neutral-300 rounded-md absolute"
                animate={{ opacity: 1, x: 0, y: 40 }}
                initial={{ opacity: 0, x: 0, y: 100 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="h-8 w-8 bg-neutral-300 rounded-md absolute"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "anticipate" }}
              />
              <motion.div
                className="h-8 w-8 bg-neutral-300 rounded-md absolute"
                animate={{ opacity: 1, x: 0, y: -40 }}
                initial={{ opacity: 0, x: 0, y: -100 }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="h-8 w-8 bg-neutral-300 rounded-md"
                animate={{ opacity: 1, x: 10 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.2, ease: "backInOut" }}
              />
            </motion.div>
            {/* Shape shifting | Keyframes */}
            <motion.div
              variants={cardVariants}
              className="bg-neutral-900 default-card"
            >
              <motion.div
                className="bg-rose-300 h-16 w-16"
                animate={{
                  scale: [1, 2, 2, 1],
                  rotate: [0, 90, 90, 0],
                  borderRadius: ["10%", "10%", "50%", "10%"],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </motion.div>
            {/* Button */}
            <motion.div
              variants={cardVariants}
              className="bg-neutral-900 default-card"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  bounceStiffness: 5,
                  bounceDamping: 100,
                }}
                className="default-p bg-neutral-900 tracking-wide border-2 border-neutral-800 rounded-lg cursor-pointer"
              >
                Click Me
              </motion.button>
            </motion.div>
            {/* Drag and Drop */}
            <motion.div
              ref={constrainsRef}
              variants={cardVariants}
              className="bg-neutral-900 default-card overflow-clip"
            >
              <motion.div
                className="h-1/3 w-1/3 aspect-square bg-orange-400 rounded-2xl cursor-grab relative z-10"
                drag
                dragConstraints={constrainsRef}
                dragTransition={{
                  bounceDamping: 10,
                  bounceStiffness: 100,
                }}
              />
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-neutral-900 default-card"
            >
              <motion.div className="w-1/3 aspect-square bg-neutral-50/30 rounded-md">
                <motion.div
                  className="w-full rounded-md bg-neutral-400 h-full origin-bottom"
                  style={{ scaleY: scrollYProgress }}
                ></motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="bg-neutral-900 default-card"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-1/2 stroke-amber-500 stroke-[0.5]"
              >
                <motion.path
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  variants={svgIconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: {
                      duration: 2,
                      ease: "easeInOut",
                      delay: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    },
                    fill: {
                      duration: 2,
                      ease: "easeIn",
                      delay: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1,
                    },
                  }}
                />
              </motion.svg>
            </motion.div>
          </motion.section>
        </div>
      </main>
    </>
  );
}

export default App;

