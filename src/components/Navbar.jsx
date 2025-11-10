import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-500 via-fuchsia-500 to-indigo-500" />
          <span className="font-extrabold tracking-tight text-xl">AEROKICK</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <li className="hover:text-black transition-colors cursor-pointer">New Arrivals</li>
          <li className="hover:text-black transition-colors cursor-pointer">Men</li>
          <li className="hover:text-black transition-colors cursor-pointer">Women</li>
          <li className="hover:text-black transition-colors cursor-pointer">Kids</li>
        </ul>
        <button className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-sm font-medium hover:scale-[1.02] active:scale-100 transition">
          <ShoppingCart size={18} />
          <span>Cart</span>
        </button>
      </nav>
    </header>
  );
}
