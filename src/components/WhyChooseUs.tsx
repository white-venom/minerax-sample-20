import { motion } from 'framer-motion';
import { Shield, Clock, Globe, Leaf } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Unmatched Reliability",
      desc: "Zero-defect philosophy with 99.9% quality acceptance rate across all major product lines over the last decade."
    },
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Global Supply Chain",
      desc: "Strategic logistics network ensuring on-time delivery to over 30 countries with full tracking and transparency."
    },
    {
      icon: <Clock className="w-10 h-10 text-orange-500" />,
      title: "Rapid Prototyping",
      desc: "Accelerated development cycles using 3D sand printing and advanced simulation software to cut lead times by 40%."
    },
    {
      icon: <Leaf className="w-10 h-10 text-orange-500" />,
      title: "Sustainable Practices",
      desc: "Committed to reducing carbon footprint through energy-efficient furnaces and 100% sand reclamation systems."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">The Minerax Advantage</h2>
          <h3 className="text-4xl font-bold text-gray-900">Why Industry Leaders Choose Us</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-sm border border-gray-100">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
