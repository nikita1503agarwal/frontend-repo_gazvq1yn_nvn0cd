const shoes = [
  {
    id: 1,
    name: 'AeroPulse 1',
    color: 'Photon Gray / Solar Orange',
    price: 149,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1400&auto=format&fit=crop',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Nimbus Flow',
    color: 'Cloud White / Arctic Blue',
    price: 169,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Volt Runner',
    color: 'Black / Neon Volt',
    price: 139,
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1400&auto=format&fit=crop',
    tag: 'Limited'
  },
  {
    id: 4,
    name: 'Terra Glide',
    color: 'Earth Brown / Sand',
    price: 159,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1400&auto=format&fit=crop',
    tag: 'Trail'
  }
];

export default function FeaturedGrid() {
  return (
    <section id="collection" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Featured Collection</h2>
          <p className="text-neutral-600 mt-2">Hand‑picked styles loved by our community.</p>
        </div>
        <a href="#" className="hidden sm:inline-block text-sm font-semibold hover:underline">View all</a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shoes.map((item) => (
          <article key={item.id} className="group bg-white rounded-2xl border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="aspect-square overflow-hidden">
              <img src={item.image} alt={item.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-neutral-100 text-neutral-700">{item.tag}</span>
                <span className="font-semibold">${item.price}</span>
              </div>
              <h3 className="mt-2 font-semibold">{item.name}</h3>
              <p className="text-neutral-500 text-sm">{item.color}</p>
              <button className="mt-4 w-full rounded-full bg-black text-white py-2 text-sm font-semibold hover:opacity-90 transition">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
