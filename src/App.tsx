/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Capabilities from './components/Capabilities';
import Facilities from './components/Facilities';
import Quality from './components/Quality';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Capabilities />
        <Facilities />
        <Quality />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
