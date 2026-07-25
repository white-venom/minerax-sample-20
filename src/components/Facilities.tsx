import { motion } from 'framer-motion';

const facilities = [
  {
    image: "/assets/ai_asset_14.jpg",
    title: "Melting Furnaces",
    desc: "Induction and Electric Arc"
  },
  {
    image: "/assets/ai_asset_14.jpg",
    title: "Molding Lines",
    desc: "Automated High-Pressure"
  },
  {
    image: "/assets/ai_asset_14.jpg",
    title: "CNC Machining Center",
    desc: "5-Axis Precision"
  },
  {
    image: "/assets/ai_asset_14.jpg",
    title: "Quality Control Lab",
    desc: "Spectrometry & NDT"
  }
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Facilities</h2>
            <h3 className="text-4xl font-bold mb-6">World-Class Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Operating across 500,000 sq.ft of advanced manufacturing space, our facilities are equipped with next-generation machinery designed for scale, precision, and sustainability.
            </p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-orange-500 font-bold uppercase tracking-wider hover:text-orange-400 transition-colors border-b-2 border-orange-500 pb-1">
            View All Facilities
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-80 overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-orange-500 mb-4 opacity-75 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
