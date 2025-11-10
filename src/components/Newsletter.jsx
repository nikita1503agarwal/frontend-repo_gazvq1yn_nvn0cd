export default function Newsletter() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1">Sustainability</span>
          <h3 className="mt-4 text-3xl font-extrabold">Built for performance. Crafted for the planet.</h3>
          <p className="mt-3 text-neutral-600">Our foams are bio‑based, our yarns are recycled, and our packaging is plastic‑free. Every pair funds ocean cleanups and reforestation projects worldwide.</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-4">
            <li>Recycled knit upper with breathable mesh</li>
            <li>Plant‑based cushioned midsole</li>
            <li>Neutral pronation support</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-neutral-50 to-white border rounded-2xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold">Join the drop list</h4>
          <p className="text-neutral-600 text-sm mt-1">Get early access to colorways and restocks.</p>
          <form className="mt-4 flex gap-3">
            <input type="email" placeholder="Your email" className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-black" />
            <button type="submit" className="rounded-xl bg-black text-white px-5 font-semibold">Notify me</button>
          </form>
          <p className="text-[11px] text-neutral-500 mt-3">By subscribing you agree to our privacy policy.</p>
        </div>
      </div>
    </section>
  );
}
