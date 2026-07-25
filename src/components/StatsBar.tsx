import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(value * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsBar() {
  const stats = [
    { label: "Years of Excellence", value: 45, suffix: "+" },
    { label: "Tons Produced Annually", value: 120000, suffix: "T" },
    { label: "Enterprise Clients", value: 850, suffix: "+" },
    { label: "Export Countries", value: 32, suffix: "" }
  ];

  return (
    <div className="bg-slate-900 border-y border-gray-800 relative z-20 -mt-20 sm:-mt-24 lg:-mt-16 mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800 divide-y md:divide-y-0">
        {stats.map((stat, index) => (
          <div key={index} className="p-8 text-center flex flex-col justify-center items-center">
            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 flex items-center">
              <AnimatedCounter value={stat.value} />
              <span className="text-orange-500">{stat.suffix}</span>
            </div>
            <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
