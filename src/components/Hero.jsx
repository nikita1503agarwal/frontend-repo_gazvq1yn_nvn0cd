import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid lg:grid-cols-2 items-center">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/67RO8dDwg-3R6AxG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 px-6 py-24 max-w-7xl mx-auto w-full">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-rose-600 bg-rose-50 border border-rose-100 rounded-full px-3 py-1">Limited Drop • SS25</span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-[1.05]">Elevate your stride with next‑gen kicks</h1>
          <p className="mt-5 text-neutral-600 text-lg">Lightweight, responsive, and built for everyday speed. Designed with recycled materials and engineered cushioning for all‑day comfort.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:scale-[1.02] active:scale-100 transition">Shop the collection</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full bg-white text-black border px-6 py-3 text-sm font-semibold hover:bg-neutral-50 transition">Learn more</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80" />
    </section>
  );
}
