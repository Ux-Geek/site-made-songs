/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import ScrollHero from './components/ScrollHero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <ScrollHero />
      <Footer />
    </div>
  );
}
