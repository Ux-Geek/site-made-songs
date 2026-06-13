/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
