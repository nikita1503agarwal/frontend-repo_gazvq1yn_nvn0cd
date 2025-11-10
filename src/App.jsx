import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <FeaturedGrid />
      <Newsletter />
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-neutral-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AEROKICK, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-black" href="#">Privacy</a>
            <a className="hover:text-black" href="#">Terms</a>
            <a className="hover:text-black" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
