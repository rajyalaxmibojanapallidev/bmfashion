import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Announcement Bar */}
      <div className="bg-zinc-900 px-4 py-2.5 text-center text-sm text-white dark:bg-white dark:text-zinc-900">
        Free shipping on orders over $150 · <a href="#" className="underline underline-offset-2">Shop Now</a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <button className="md:hidden">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#" className="text-sm uppercase tracking-wide text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                New
              </a>
              <a href="#" className="text-sm uppercase tracking-wide text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                Women
              </a>
              <a href="#" className="text-sm uppercase tracking-wide text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                Men
              </a>
              <a href="#" className="text-sm uppercase tracking-wide text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                Collections
              </a>
            </div>
          </div>
          
          <a href="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-light uppercase tracking-[0.3em] text-zinc-900 dark:text-white">
            Atelier
          </a>
          
          <div className="flex items-center gap-5">
            <button className="hidden text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:block">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <a href="#" className="hidden text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:block">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
            <button className="relative text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-white dark:bg-white dark:text-zinc-900">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] opacity-90">Spring/Summer 2024</p>
            <h1 className="mb-6 text-5xl font-light uppercase tracking-wide md:text-7xl lg:text-8xl">
              New Beginnings
            </h1>
            <p className="mx-auto mb-8 max-w-md text-lg font-light opacity-90">
              Discover our latest collection inspired by the beauty of renewal
            </p>
            <a
              href="#"
              className="inline-block border border-white bg-white px-10 py-4 text-sm uppercase tracking-widest text-zinc-900 transition-all hover:bg-transparent hover:text-white"
            >
              Explore Collection
            </a>
          </div>
        </div>
        {/* Placeholder for hero image */}
        <div className="h-full w-full bg-gradient-to-br from-zinc-400 to-zinc-600 dark:from-zinc-700 dark:to-zinc-900" />
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Women", subtitle: "New Season" },
            { title: "Men", subtitle: "Essentials" },
            { title: "Accessories", subtitle: "Complete the Look" },
          ].map((category, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="mb-1 text-sm uppercase tracking-wider text-white/80">
                  {category.subtitle}
                </p>
                <h3 className="text-2xl font-light uppercase tracking-wide text-white">
                  {category.title}
                </h3>
                <span className="mt-4 inline-block border-b border-white pb-1 text-sm uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
                  Shop Now
                </span>
              </div>
              {/* Placeholder image */}
              <div className="h-full w-full bg-gradient-to-br from-zinc-300 to-zinc-500 transition-transform duration-700 group-hover:scale-105 dark:from-zinc-600 dark:to-zinc-800" />
            </a>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-widest text-zinc-500">Just Dropped</p>
            <h2 className="text-3xl font-light uppercase tracking-wide text-zinc-900 dark:text-white md:text-4xl">
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="hidden border-b border-zinc-900 pb-1 text-sm uppercase tracking-wider text-zinc-900 transition-colors hover:border-zinc-500 hover:text-zinc-500 dark:border-white dark:text-white dark:hover:border-zinc-400 dark:hover:text-zinc-400 md:block"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {[
            { name: "Linen Blend Blazer", price: "$189", color: "Ivory" },
            { name: "Relaxed Silk Shirt", price: "$145", color: "Midnight" },
            { name: "High-Rise Trousers", price: "$125", color: "Camel" },
            { name: "Cashmere Knit Vest", price: "$210", color: "Oat" },
          ].map((product, index) => (
            <a key={index} href="#" className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <div className="absolute right-3 top-3 z-10">
                  <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-600 opacity-0 transition-all hover:text-zinc-900 group-hover:opacity-100">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                {index === 0 && (
                  <span className="absolute left-3 top-3 z-10 bg-zinc-900 px-2 py-1 text-xs uppercase tracking-wider text-white">
                    New
                  </span>
                )}
                {/* Placeholder image */}
                <div className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-400 transition-transform duration-500 group-hover:scale-105 dark:from-zinc-700 dark:to-zinc-800" />
              </div>
              <h3 className="mb-1 text-sm font-medium text-zinc-900 dark:text-white">
                {product.name}
              </h3>
              <p className="mb-1 text-sm text-zinc-500">{product.color}</p>
              <p className="text-sm text-zinc-900 dark:text-white">{product.price}</p>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-block border border-zinc-900 px-8 py-3 text-sm uppercase tracking-wider text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            View All
          </a>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20">
              <p className="mb-4 text-sm uppercase tracking-widest text-zinc-500">
                Limited Edition
              </p>
              <h2 className="mb-4 text-3xl font-light uppercase tracking-wide text-zinc-900 dark:text-white md:text-5xl">
                The Capsule Collection
              </h2>
              <p className="mb-8 max-w-md text-zinc-600 dark:text-zinc-400">
                Timeless pieces designed for the modern wardrobe. Crafted from premium 
                sustainable materials with meticulous attention to detail.
              </p>
              <div>
                <a
                  href="#"
                  className="inline-block border border-zinc-900 bg-zinc-900 px-10 py-4 text-sm uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-zinc-900 dark:border-white dark:bg-white dark:text-zinc-900 dark:hover:bg-transparent dark:hover:text-white"
                >
                  Discover More
                </a>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-zinc-300 to-zinc-500 lg:aspect-auto dark:from-zinc-600 dark:to-zinc-800" />
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto grid max-w-7xl divide-y divide-zinc-200 md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-zinc-800">
          {[
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              ),
              title: "Sustainable Fashion",
              description: "Ethically sourced materials and responsible manufacturing",
            },
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              ),
              title: "Free Shipping",
              description: "Complimentary delivery on orders over $150",
            },
            {
              icon: (
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              title: "Easy Returns",
              description: "30-day hassle-free returns and exchanges",
            },
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center px-8 py-12 text-center">
              <div className="mb-4 text-zinc-900 dark:text-white">{value.icon}</div>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-sm text-zinc-500">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-zinc-500">@atelierofficial</p>
          <h2 className="text-3xl font-light uppercase tracking-wide text-zinc-900 dark:text-white">
            Follow Us
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-square overflow-hidden bg-zinc-100 dark:bg-zinc-900"
            >
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-zinc-900/0 transition-colors group-hover:bg-zinc-900/50">
                <svg
                  className="h-8 w-8 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-400 transition-transform duration-500 group-hover:scale-110 dark:from-zinc-700 dark:to-zinc-800" />
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-900 px-6 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-light uppercase tracking-wide text-white">
            Join the List
          </h2>
          <p className="mb-8 text-zinc-400">
            Subscribe to receive exclusive access to new collections, private sales, and style inspiration.
          </p>
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 border border-zinc-700 bg-transparent px-6 text-white placeholder-zinc-500 outline-none transition-colors focus:border-white"
            />
            <button
              type="submit"
              className="h-14 border border-white bg-white px-10 text-sm uppercase tracking-widest text-zinc-900 transition-all hover:bg-transparent hover:text-white"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-zinc-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="/" className="mb-6 inline-block text-2xl font-light uppercase tracking-[0.3em] text-zinc-900 dark:text-white">
                Atelier
              </a>
              <p className="mb-6 max-w-xs text-sm text-zinc-500">
                Contemporary fashion with a focus on quality, sustainability, and timeless design.
              </p>
              <div className="flex gap-4">
                {["instagram", "facebook", "twitter", "pinterest"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Shop",
                links: ["New Arrivals", "Women", "Men", "Accessories", "Sale"],
              },
              {
                title: "Help",
                links: ["Contact Us", "Shipping", "Returns", "Size Guide", "FAQ"],
              },
              {
                title: "Company",
                links: ["Our Story", "Sustainability", "Careers", "Stores", "Press"],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-900 dark:text-white">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800 md:flex-row">
            <p className="text-sm text-zinc-500">
              © 2024 Atelier. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-2">
              {["visa", "mastercard", "amex", "paypal"].map((payment) => (
                <div
                  key={payment}
                  className="flex h-8 w-12 items-center justify-center rounded border border-zinc-200 bg-zinc-50 text-[10px] uppercase text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {payment.slice(0, 4)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}