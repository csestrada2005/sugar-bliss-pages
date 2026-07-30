import { createFileRoute } from "@tanstack/react-router";

import heroSourdough from "@/assets/hero-sourdough.jpg";
import croissant from "@/assets/croissant.jpg";
import blueberryDanish from "@/assets/blueberry-danish.jpg";
import chocolateTart from "@/assets/chocolate-tart.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière Boulangerie — The Art of the Slow Rise" },
      {
        name: "description",
        content:
          "Traditional French pastries and slow-risen sourdough, baked fresh at dawn in the heart of the city.",
      },
      {
        property: "og:title",
        content: "Lumière Boulangerie — The Art of the Slow Rise",
      },
      {
        property: "og:description",
        content:
          "Honoring traditional French techniques with locally sourced grains. Our sourdough takes 36 hours to reach perfection.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-bakery-cream font-sans text-bakery-crust selection:bg-bakery-honey/20">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div className="font-serif text-2xl font-semibold tracking-tight italic">
          Lumière Boulangerie
        </div>
        <div className="hidden items-center gap-10 text-sm font-medium uppercase tracking-widest text-bakery-crust/70 md:flex">
          <a href="#menu" className="transition-colors hover:text-bakery-honey">
            Menu
          </a>
          <a href="#story" className="transition-colors hover:text-bakery-honey">
            Our Story
          </a>
          <a href="#visit" className="transition-colors hover:text-bakery-honey">
            Locations
          </a>
          <a href="#visit" className="transition-colors hover:text-bakery-honey">
            Order
          </a>
        </div>
        <button className="rounded-full border border-bakery-crust/20 px-6 py-2 text-xs uppercase tracking-widest transition-all hover:bg-bakery-crust hover:text-white">
          Shop Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-12 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <span className="mb-4 block font-serif text-xl italic text-bakery-honey">
              Baked fresh at dawn
            </span>
            <h1 className="mb-8 font-serif text-6xl leading-[0.9] md:text-8xl">
              The art of the <br /> slow rise.
            </h1>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-bakery-crust/80">
              Honoring traditional French techniques with locally sourced grains.
              Our sourdough takes 36 hours to reach perfection, just for your
              morning table.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#menu"
                className="bg-bakery-honey px-8 py-4 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-bakery-crust"
              >
                Explore Today's Batch
              </a>
              <a
                href="#story"
                className="border-b border-bakery-crust/20 pb-1 text-sm font-medium uppercase tracking-widest transition-all hover:border-bakery-honey"
              >
                Our Process
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroSourdough}
              alt="A beautifully scored sourdough loaf resting on linen cloth"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full rounded-sm bg-stone-200 object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[200px] bg-white p-6 shadow-xl lg:block">
              <p className="mb-2 text-xs uppercase tracking-widest text-bakery-honey">
                Daily Special
              </p>
              <p className="font-serif text-lg italic">Walnut & Fig Batard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section id="menu" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-serif text-4xl">Signature Pastries</h2>
              <p className="mt-2 text-xs uppercase tracking-widest text-bakery-crust/60">
                Available every morning until sold out
              </p>
            </div>
            <a
              href="#menu"
              className="border-b border-bakery-crust text-sm font-medium"
            >
              View Full Menu
            </a>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <PastryCard
              image={croissant}
              alt="A flaky golden honeycomb croissant on a white plate"
              title="Classic Croissant"
              description="81 layers of grass-fed butter laminate"
              price="$4.50"
            />
            <PastryCard
              image={blueberryDanish}
              alt="A wild blueberry danish with a dollop of cream cheese"
              title="Blueberry Frangipane"
              description="Seasonal berries, almond cream, lemon zest"
              price="$6.25"
            />
            <PastryCard
              image={chocolateTart}
              alt="A rustic dark chocolate and sea salt tart"
              title="Salted Ganache Tart"
              description="70% Valrhona chocolate, Maldon sea salt flakes"
              price="$7.00"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="px-8 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
              Tradition, patience, and a little bit of fire.
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-bakery-crust/80">
              <p>
                At Lumière, we believe the best bread cannot be rushed. Every
                loaf begins with our house levain, cultivated over years and fed
                daily with care.
              </p>
              <p>
                We source organic grains from regional mills and shape each
                boule by hand. The result is bread with depth of flavor, a
                crackling crust, and the kind of crumb that speaks for itself.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-sm border border-bakery-honey/20" />
              <img
                src={heroSourdough}
                alt="Close-up of a scored sourdough loaf showing its open crumb"
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer id="visit" className="bg-bakery-crust px-8 py-20 text-white/90">
        <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="mb-6 font-serif text-4xl italic">Lumière</h2>
            <p className="max-w-xs text-sm leading-loose text-white/60">
              Bringing the tradition of the neighborhood boulangerie to the
              modern city. Every loaf is a labor of love, every pastry a moment
              of joy.
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-widest text-bakery-flour">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Mon — Fri: 7am — 4pm</li>
              <li>Sat — Sun: 8am — 5pm</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-xs uppercase tracking-widest text-bakery-flour">
              Find Us
            </h4>
            <address className="not-italic text-sm leading-loose text-white/70">
              412 Artisans Way
              <br />
              Saint-Germain District
              <br />
              Paris, FR 75006
            </address>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 pt-8 text-[10px] uppercase tracking-widest text-white/30 sm:flex-row">
          <p>&copy; 2024 Lumière Boulangerie. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="transition-colors hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Journal
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PastryCard({
  image,
  alt,
  title,
  description,
  price,
}: {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="group cursor-pointer">
      <div className="mb-6 overflow-hidden bg-stone-100 outline outline-1 -outline-offset-1 outline-black/5">
        <img
          src={image}
          alt={alt}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="font-serif text-2xl transition-colors group-hover:text-bakery-honey">
        {title}
      </h3>
      <p className="mt-2 text-sm italic text-bakery-crust/60">{description}</p>
      <p className="mt-4 font-medium">{price}</p>
    </div>
  );
}
