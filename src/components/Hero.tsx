import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/assets/ai_asset_15.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-orange-500"></div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Industrial Excellence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Precision Casting For A <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Stronger Future</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
              Minerax provides enterprise-grade steel casting and manufacturing solutions for the world's most demanding industries. Built on decades of metallurgical expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#capabilities"
                className="group flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300"
              >
                Our Capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-sm font-bold uppercase tracking-wide transition-all duration-300"
              >
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
