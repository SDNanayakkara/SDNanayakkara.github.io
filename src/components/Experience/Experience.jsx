import { motion } from 'framer-motion';
import { Briefcase, Wrench, Zap, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Engineering Trainee (In-Plant Training)",
      company: "Cargills Convenient Foods Ltd",
      date: "Feb 2025 - Jul 2025",
      icon: <Briefcase size={20} className="text-[#ff5722]" />,
      iconBg: "bg-[#ff5722]/10",
      iconBorder: "border-[#ff5722]/30",
      description: [
        "Gained hands-on practical experience in electrical, mechanical, and industrial machinery maintenance.",
        "Developed an automated production line packet counting system using an ESP32-S3, laser sensors, barcode readers, and a Firebase web dashboard.",
        "Built and deployed a cooling room PID temperature monitoring system to ensure precise environmental control."
      ]
    },
    {
      title: "Trainee Technical Assistant",
      company: "Greenery Tech (Pvt) Ltd",
      date: "2026",
      icon: <Wrench size={20} className="text-[#00e5ff]" />,
      iconBg: "bg-[#00e5ff]/10",
      iconBorder: "border-[#00e5ff]/30",
      description: [
        "Supported the installation, maintenance, and troubleshooting of industrial machinery.",
        "Assisted in the technical maintenance of reverse osmosis (RO) plant systems to ensure continuous water treatment operations."
      ]
    },
    {
      title: "Electrical Wiring",
      company: "Domestic Projects",
      date: "Ongoing",
      icon: <Zap size={20} className="text-[#fcd34d]" />,
      iconBg: "bg-[#fcd34d]/10",
      iconBorder: "border-[#fcd34d]/30",
      description: [
        "Assisted in domestic electrical wiring installations to gain practical, hands-on knowledge.",
        "Learned the fundamentals of residential electrical repairs and safe power distribution."
      ]
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen flex items-center py-24 bg-[#050505] border-t border-white/5 overflow-hidden snap-start">
      <div className="container mx-auto px-8 lg:px-16 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h3>
          <p className="text-gray-400 text-lg max-w-2xl">
            Real-world application of industrial automation, embedded engineering, and system maintenance.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Node (Glowing Icon) */}
              <div className={`absolute -left-[1.35rem] md:-left-[1.45rem] top-1 w-11 h-11 rounded-full border ${exp.iconBorder} ${exp.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 backdrop-blur-md`}>
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide">{exp.title}</h4>
                    <p className="text-lg text-gray-400 font-medium mt-1">{exp.company}</p>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 w-fit">
                    <Calendar size={14} />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm md:text-base leading-relaxed flex items-start">
                      <span className="text-[#00e5ff] mr-3 mt-1.5 text-lg leading-none">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
}