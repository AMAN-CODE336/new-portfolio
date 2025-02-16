import { motion } from "framer-motion";

export default function Home() {
    return (
        <section id="home" className="relative h-screen bg-[url('./assets/image2.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Dark Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
                {/* Animated Hero Text */}
                <motion.h1 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl sm:text-6xl font-extrabold text-white"
                >
                    Welcome to <span className="text-lime-500">My World</span>
                </motion.h1>

                {/* Subheading with a typewriter effect */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-4 text-lg sm:text-xl text-gray-300"
                >
                    Building amazing <span className="text-lime-400">web experiences</span> with code & creativity. 🚀
                </motion.p>

                {/* Buttons with hover & glow effect */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-10 flex gap-6"
                >
                    <a href="#about" className="relative px-8 py-3 font-bold text-lime-500 border-2 border-lime-500 rounded-full transition-all hover:text-white hover:bg-lime-500 group">
                        View More
                        <span className="absolute inset-0 rounded-full bg-lime-500 opacity-0 transition-all group-hover:opacity-20 blur-lg"></span>
                    </a>
                    <a href="#contact" className="relative px-8 py-3 font-bold text-lime-500 border-2 border-lime-500 rounded-full transition-all hover:text-white hover:bg-lime-500 group">
                        Hire Me
                        <span className="absolute inset-0 rounded-full bg-lime-500 opacity-0 transition-all group-hover:opacity-20 blur-lg"></span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
