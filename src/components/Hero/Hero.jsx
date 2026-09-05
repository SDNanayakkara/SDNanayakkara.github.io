import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail, Code, Cpu, Factory, Activity } from 'lucide-react';
import profileImg from '../../assets/dilshan.jpg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden snap-start">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5722]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Professional Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Large Name */}
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
              Dilshan Sanjaya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-[#fcd34d]">
                Nanayakkara
              </span>
            </motion.h1>

            {/* Job Title */}
            <motion.h2 variants={itemVariants} className="text-xl lg:text-2xl text-gray-300 font-medium mb-6">
              Instrumentation & Automation Engineer
            </motion.h2>

            {/* Quote placed directly under the title */}
            <motion.div variants={itemVariants} className="mb-10 border-l-4 border-[#00e5ff] pl-6 py-2">
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed italic">
                "Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5722] to-[#fcd34d] font-semibold">hardware</span> and intelligent control."
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
              <a href="#projects" className="flex items-center gap-2 bg-[#ff5722] hover:bg-[#f24f1d] text-white px-8 py-3.5 rounded-md font-medium transition-all hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:-translate-y-1">
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a href="/dilshan_cv.pdf" download className="flex items-center gap-2 px-8 py-3.5 rounded-md font-medium border border-white/20 hover:border-white/50 text-white transition-all hover:bg-white/5">
                <Download size={18} />
                Download CV
              </a>
              <div className="flex items-center gap-4 ml-2">
                <a href="#contact" className="p-3 rounded-md bg-white/5 border border-white/10 hover:border-[#00e5ff] text-gray-300 hover:text-[#00e5ff] transition-all">
                  <Mail size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 rounded-md bg-white/5 border border-white/10 hover:border-[#00e5ff] text-gray-300 hover:text-[#00e5ff] transition-all">
                  <Code size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image with Floating Engineering Badges */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[500px]"
          >
            {/* Spinning Glow Ring Background */}
            <div className="absolute w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] portrait-ring rounded-full pointer-events-none"></div>
            
            {/* Main Profile Image */}
            <div className="relative z-10 w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-[0_0_50px_rgba(0,229,255,0.15)]">
              <img 
                src={profileImg} 
                alt="Dilshan Sanjaya" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badge 1: Industrial Automation (Top Left) */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 15, 0]
              }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-0 lg:-left-6 bg-[#111]/90 backdrop-blur-md border border-white/10 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-[#ff5722]/20 text-[#ff5722] rounded-lg"><Factory size={20} /></div>
              <div className="hidden sm:block pr-2 leading-tight">
                <p className="text-[10px] text-gray-400 mb-0.5">Core Expertise</p>
                <p className="text-xs font-bold text-white">Industrial Automation<br/>& Control</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Instrumentation (Bottom Left) */}
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                x: [0, -15, 0]
              }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-4 lg:-left-2 bg-[#111]/90 backdrop-blur-md border border-[#00e5ff]/40 p-3 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.15)] z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-[#00e5ff]/20 text-[#00e5ff] rounded-lg"><Activity size={20} /></div>
              <div className="hidden sm:block pr-2 leading-tight">
                <p className="text-[10px] text-[#00e5ff] mb-0.5">Measurement</p>
                <p className="text-xs font-bold text-white">Instrumentation &<br/>Process Control</p>
              </div>
            </motion.div>

            {/* Floating Badge 3: Embedded & IoT (Middle Right) */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                x: [0, 20, 0]
              }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-4 lg:-right-8 bg-[#111]/90 backdrop-blur-md border border-purple-500/30 p-3 rounded-xl shadow-lg z-20 flex items-center gap-3"
            >
              <div className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><Cpu size={20} /></div>
              <div className="hidden sm:block pr-2 leading-tight">
                <p className="text-[10px] text-gray-400 mb-0.5">Hardware</p>
                <p className="text-xs font-bold text-white">Embedded Systems<br/>& IoT</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}