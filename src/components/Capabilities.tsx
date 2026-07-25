import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Factory, Zap, Hammer, Cpu } from 'lucide-react';

const capabilities = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Precision Sand Casting",
    description: "High-volume, complex geometries with tight tolerances using advanced sand casting techniques for automotive and heavy machinery."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Investment Casting",
    description: "Exceptional surface finishes and dimensional accuracy for aerospace and medical components requiring minimal secondary machining."
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Large Scale Forging",
    description: "Open and closed die forging for superior structural integrity and fatigue resistance in heavy industrial applications."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Heat Treatment",
    description: "State-of-the-art annealing, normalizing, quenching, and tempering to optimize mechanical properties."
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "CNC Machining",
    description: "In-house precision machining centers ensuring final products meet exact specifications right out of the foundry."
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Metallurgical Testing",
    description: "Comprehensive non-destructive testing (NDT), spectrometry, and mechanical testing for absolute quality assurance."
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Our Capabilities</h2>
          <h3 className="text-4xl font-bold text-gray-900">End-to-End Manufacturing</h3>
          <div className="mt-4 w-24 h-1 bg-gray-900 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gray-900 text-white flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                {cap.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{cap.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
