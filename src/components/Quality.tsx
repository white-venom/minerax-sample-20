export default function Quality() {
  const certifications = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "ISO 45001:2018",
    "IATF 16949",
    "AS9100D",
    "CE Marking"
  ];

  return (
    <section id="quality" className="py-20 bg-gray-100 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Quality Standards</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Certified Excellence</h3>
            <p className="text-gray-600 mb-6">
              Our commitment to quality is unwavering. Every casting undergoes rigorous inspection to meet international standards and specific client requirements.
            </p>
            <div className="h-1 w-16 bg-gray-900"></div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white py-6 px-4 text-center border border-gray-200 shadow-sm flex items-center justify-center font-bold text-gray-800 tracking-wider">
                  {cert}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
