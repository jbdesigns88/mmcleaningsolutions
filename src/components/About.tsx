export default function AboutSection() {
  return (
    <section  className=" container bg-purple-50 py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl">
            About M&amp;M Sanitation
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-700 max-w-3xl mx-auto">
            At M&amp;M Sanitation, we believe a clean space is a healthy and happy
            one. As a family-owned business, we bring care, integrity, and
            attention to detail into every home and office we touch. Our mission
            is simple: to provide spotless results and peace of mind with
            eco-friendly products, reliable scheduling, and a 100% satisfaction
            guarantee.
          </p>
        </div>

        <div className="about-container">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-purple-700">Trusted Team</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every cleaner is trained, background-checked, and committed to
              delivering consistent, high-quality results.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-purple-700">
              Eco-Friendly Products
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We use safe, sustainable supplies that protect your family,
              pets, and the environment.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-purple-700">
              Local &amp; Reliable
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Proudly serving our community with flexible scheduling and
              guaranteed satisfaction on every visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
