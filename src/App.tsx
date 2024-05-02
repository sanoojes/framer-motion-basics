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
      <button
        type="button"
        className="absolute top-4 right-2 bg-gray-800 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 transition-colors z-50"
        onClick={() => {
          open(
            `https://github.com/sanoojes` + import.meta.env.BASE_URL,
            "SingleSecondaryWindowName"
          );
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="2rem"
          height="2rem"
          fill="#fff"
        >
          {" "}
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
        </svg>
      </button>
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

