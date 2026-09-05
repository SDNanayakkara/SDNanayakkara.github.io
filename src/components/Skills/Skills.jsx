import { motion } from 'framer-motion';
import { Cpu, Factory, Code2, PenTool, FileSpreadsheet, Terminal, Activity } from 'lucide-react';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-24 bg-[#050505] border-t border-white/5 overflow-hidden snap-start">
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h3>
          <p className="text-gray-400 text-lg max-w-2xl">
            A specialized engineering toolkit combining hardware architecture, control systems, and data analytics.
          </p>
        </motion.div>

        {/* Advanced 3x3 Bento Box Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          {/* Card 1: Embedded Systems (Spans 2 columns) */}
          <motion.div variants={cardVariants} className="lg:col-span-2 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-[#00e5ff]/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00e5ff]/10 rounded-xl group-hover:scale-110 transition-transform"><Cpu className="text-[#00e5ff]" size={24} /></div>
              <h4 className="text-xl font-bold text-white">Embedded Systems & PCB</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["ESP32 / ESP32-S3 / C3", "ATmega328 & ATtiny85", "C++ & Arduino", "EasyEDA Pro (PCB)", "Proteus & SimulIDE", "Sensors & DAQ"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Industrial Automation (Spans 2 rows down) */}
          <motion.div variants={cardVariants} className="lg:row-span-2 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-[#ff5722]/50 transition-colors group">
            <div className="flex flex-col h-full">
              <div className="p-3 bg-[#ff5722]/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform"><Factory className="text-[#ff5722]" size={24} /></div>
              <h4 className="text-xl font-bold text-white mb-4">Industrial Automation</h4>
              <div className="flex flex-col gap-2 mt-auto">
                {["PLC Programming", "Ladder Logic (WPLSoft)", "Pneumatic Sequences", "Control Panel Wiring", "Star-Delta Motor Control", "System Maintenance", "Troubleshooting"].map(skill => (
                  <div key={skill} className="w-full px-3 py-2 bg-black/40 border border-white/5 rounded-lg text-sm text-gray-300">{skill}</div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Software & Web */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform"><Code2 className="text-purple-400" size={24} /></div>
              <h4 className="text-lg font-bold text-white">Software & Web</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Vite + JS", "React & Node.js", "Tailwind CSS", "Firebase", "Python"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Test & Measurement (Lab Equipment) */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-pink-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-500/10 rounded-xl group-hover:scale-110 transition-transform"><Activity className="text-pink-400" size={24} /></div>
              <h4 className="text-lg font-bold text-white">Test & Measurement</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Oscilloscope", "DC Power Supply", "Digital Multimeter", "Function Generator"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 5: Mechanical CAD */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-[#fcd34d]/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#fcd34d]/10 rounded-xl group-hover:scale-110 transition-transform"><PenTool className="text-[#fcd34d]" size={24} /></div>
              <h4 className="text-lg font-bold text-white">Mechanical CAD</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["SOLIDWORKS", "AutoCAD", "3D Modeling"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 6: Dev Tools */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:scale-110 transition-transform"><Terminal className="text-blue-400" size={24} /></div>
              <h4 className="text-lg font-bold text-white">Dev Tools</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Git", "GitHub", "VS Code", "Version Control"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 7: Documentation */}
          <motion.div variants={cardVariants} className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 hover:border-emerald-500/50 transition-colors group">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:scale-110 transition-transform"><FileSpreadsheet className="text-emerald-400" size={24} /></div>
              <h4 className="text-lg font-bold text-white">Documentation</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Microsoft Office", "PowerPoint", "Excel", "Technical Reporting"].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-gray-300">{skill}</span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}