import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex-shrink-0 flex items-center gap-2 mb-6">
              <div className="flex items-center gap-3 mb-6"><img src="/logo_bw.jpeg" alt="Minerax Logo" className="h-10 w-auto rounded object-contain shadow-sm" /></div>
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Capabilities', 'Facilities', 'Quality Standards'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().split(' ')[0]}`} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide uppercase">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Sand Casting</li>
              <li className="text-gray-400 text-sm">Investment Casting</li>
              <li className="text-gray-400 text-sm">Open Die Forging</li>
              <li className="text-gray-400 text-sm">CNC Machining</li>
              <li className="text-gray-400 text-sm">Metallurgical Testing</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 tracking-wide uppercase">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>100 Industrial Parkway,<br />Steel City, SC 12345</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+1 (800) 555-0199</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>sales@minerax.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Mon-Fri: 7:00 AM - 6:00 PM<br />Sat-Sun: Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Minerax Industrial. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
