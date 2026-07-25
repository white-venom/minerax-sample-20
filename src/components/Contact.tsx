import { Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-600/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Partner With Us</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Request A Quote</h3>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Our engineering team is ready to review your specifications. Share your project details, and we'll provide a comprehensive manufacturing proposal within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center text-orange-500 flex-shrink-0">
                  <span className="font-bold text-xl">01</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Submit Specifications</h4>
                  <p className="text-gray-400 text-sm">Upload your CAD models or 2D drawings securely.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center text-orange-500 flex-shrink-0">
                  <span className="font-bold text-xl">02</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Engineering Review</h4>
                  <p className="text-gray-400 text-sm">Our metallurgists assess feasibility and optimal casting methods.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-sm flex items-center justify-center text-orange-500 flex-shrink-0">
                  <span className="font-bold text-xl">03</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Detailed Proposal</h4>
                  <p className="text-gray-400 text-sm">Receive a transparent quote including timelines and tooling costs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-600"></div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">First Name</label>
                  <input type="text" id="firstName" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Last Name</label>
                  <input type="text" id="lastName" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Company</label>
                <input type="text" id="company" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Organization Name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Business Email</label>
                <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="john@company.com" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Project Details</label>
                <textarea id="message" rows={4} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors resize-none" placeholder="Alloy requirements, estimated annual volume, specific tolerances..."></textarea>
              </div>

              <button type="button" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-widest py-4 px-6 flex justify-center items-center gap-2 transition-colors">
                Submit Request
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
