import { motion } from 'framer-motion';
// Import your image
import profileImg from '../../assets/dilshan.jpg';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-24 bg-[#050505] border-t border-white/5 overflow-hidden snap-start">
      {/* Increased padding here (px-8 lg:px-16) to push content away from edges */}
      <div className="container mx-auto px-8 lg:px-16 max-w-7xl">
        
        {/* Title (Removed the "01.") */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white">About Me</h3>
        </motion.div>

        {/* Increased gap between image and text */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            {/* Image Container with Engineering Accents */}
            <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,255,0.05)] group">
              <div className="absolute inset-0 bg-[#00e5ff]/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              
              <img 
                src={profileImg} 
                alt="Dilshan Sanjaya" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Tech Corners */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#00e5ff] z-20 transition-all duration-500 group-hover:scale-110"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#ff5722] z-20 transition-all duration-500 group-hover:scale-110"></div>
            </div>
          </motion.div>

          {/* Right Side: Text Content (Added text-justify and removed bright colors) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-7/12 text-gray-400 space-y-6 text-lg leading-relaxed font-light text-justify"
          >
            <p>
              I am an undergraduate student pursuing a <strong className="text-white font-medium">Bachelor of Engineering Technology (Hons) in Instrumentation and Automation Technology</strong> at the University of Colombo. I am curious about how machines sense, think, and act in the real world. This curiosity has led me toward <strong className="text-white font-medium">industrial automation, instrumentation and control, embedded systems, and IoT</strong>.
            </p>
            <p>
              Through my academic projects and six-month industrial training, I gained hands-on experience working with <strong className="text-white font-medium">automation systems, embedded hardware, sensors, data acquisition, and real-time monitoring</strong>. 
            </p>
            <p>
              These experiences have helped me develop the ability to <strong className="text-white font-medium">design and build embedded systems, integrate sensors and hardware, collect and process data, and develop real-time monitoring and automation solutions</strong>. I enjoy turning engineering concepts into working systems that can solve practical problems.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}