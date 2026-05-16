"use client";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* ── Top bar ── */}
      <header className="border-b border-aegean-800/15 bg-marble/85 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SpartanHelm className="w-7 h-7 text-aegean-800" />
            <span className="font-display tracking-widest text-aegean-900 text-sm">SPARTAN</span>
            <span className="serif italic text-aegean-800/70 text-sm hidden sm:inline">Pool &amp; Spa</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs text-slate-500 uppercase tracking-widest">
            <a href="#service" className="hover:text-aegean-800 transition">Service</a>
            <a href="#services" className="hover:text-aegean-800 transition">Coverage</a>
            <a href="#credentials" className="hover:text-aegean-800 transition">Credentials</a>
            <a href="#contact" className="hover:text-aegean-800 transition">Contact</a>
          </nav>
          <a
            href="tel:+13527370762"
            className="btn-classical bg-aegean-900 text-marble px-5 py-2.5 text-xs font-display tracking-widest"
          >
            352 · 737 · 0762
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="water-surface text-marble relative overflow-hidden">
        {/* ripples */}
        <span className="ripple" style={{ top: '30%', left: '15%' }} />
        <span className="ripple r2" style={{ top: '70%', left: '80%' }} />
        <span className="ripple r3" style={{ top: '45%', left: '55%' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 text-center">
          <div className="anim-settle eyebrow !text-bronze-500" style={{ ['--anim-delay' as any]: '0ms' }}>
            Spring Hill · Florida · Established
          </div>
          <h1 className="anim-spread mt-6 font-display font-black text-6xl md:text-8xl text-marble leading-none"
              style={{ ['--anim-delay' as any]: '120ms' }}>
            SPARTAN
          </h1>
          <div className="anim-hairline w-32 h-px bg-bronze-500 mx-auto mt-7"
               style={{ ['--anim-delay' as any]: '900ms' }} />
          <div className="anim-settle serif italic text-marble/80 mt-5 text-2xl"
               style={{ ['--anim-delay' as any]: '1100ms' }}>
            Pool &amp; Spa Service
          </div>
          <p className="anim-settle mt-8 max-w-xl mx-auto text-marble/80 text-lg leading-relaxed serif"
             style={{ ['--anim-delay' as any]: '1300ms' }}>
            Perfect water. Disciplined service. Family-owned and CPO certified —
            weekly maintenance, water chemistry, and equipment repair for
            Spring Hill, Weeki Wachee, and Homosassa.
          </p>
          <div className="anim-settle mt-10 flex flex-wrap justify-center gap-3"
               style={{ ['--anim-delay' as any]: '1500ms' }}>
            <a href="#contact" className="btn-classical bg-bronze-500 text-aegean-900 px-7 py-3.5 font-display text-xs tracking-widest">
              REQUEST A QUOTE
            </a>
            <a href="tel:+13527370762" className="btn-classical border border-marble/40 text-marble px-7 py-3.5 font-display text-xs tracking-widest hover:bg-marble/10">
              CALL US
            </a>
          </div>
        </div>

        {/* Bottom Greek key band */}
        <div className="absolute bottom-0 left-0 right-0 h-4 opacity-50" aria-hidden="true">
          <div className="h-full max-w-6xl mx-auto greek-key" />
        </div>
      </section>

      {/* ── Weekly Service · Done Right ── */}
      <section id="service" className="bg-marble">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div data-reveal className="eyebrow text-center">I · Weekly Service</div>
          <h2 data-reveal className="mt-5 text-center font-display text-3xl md:text-5xl text-aegean-900 leading-tight">
            Done Right.
          </h2>
          <div data-reveal className="w-16 h-px bg-bronze mx-auto mt-7" />

          <div className="mt-12 grid gap-6 serif text-lg text-slate-700 leading-relaxed">
            <p data-reveal>
              Every visit begins with a water-chemistry test — a calibrated
              reading, not a guess. We balance and shock as needed, brush the
              walls and steps, skim the surface, and vacuum the floor. The
              equipment gets a walk-through every week. The filter, every
              other.
            </p>
            <p data-reveal style={{ ['--reveal-delay' as any]: '120ms' }}>
              Perfect water chemistry is our top priority — for the longevity
              of your surfaces and equipment, and most importantly, for the
              people who get in it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Greek key band divider ── */}
      <div className="bg-aegean-900 py-5">
        <div className="max-w-6xl mx-auto px-6 flex items-center gap-6">
          <div className="h-px flex-1 bg-bronze/40" />
          <SpartanHelm className="w-6 h-6 text-bronze-500" />
          <div className="h-px flex-1 bg-bronze/40" />
        </div>
      </div>

      {/* ── What We Cover ── */}
      <section id="services" className="bg-marble">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <div data-reveal className="eyebrow">II · Coverage</div>
              <h2 data-reveal className="mt-3 font-display text-3xl md:text-4xl text-aegean-900 leading-tight">
                What We Cover.
              </h2>
              <p data-reveal className="mt-6 serif italic text-slate-500 leading-relaxed">
                Six lines of service for the residential pool and spa. One
                operator. One standard.
              </p>
            </div>

            <div className="md:col-span-8">
              <ul className="divide-y divide-aegean-900/15">
                {[
                  ['I',   'Weekly Pool Service',           'Chemistry · cleaning · equipment check'],
                  ['II',  'Filter Maintenance',            'Bi-weekly cartridge & D.E. service'],
                  ['III', 'Equipment Repair & Replace',    'Pumps · filters · automation'],
                  ['IV',  'Salt Cell Service',             'Inspection, cleaning, replacement'],
                  ['V',   'Heater & Pump Service',         'Diagnose & repair'],
                  ['VI',  'Pool Opening & Closing',        'Seasonal preparation'],
                ].map(([n, t, d], i) => (
                  <li key={t} data-reveal style={{ ['--reveal-delay' as any]: `${i * 70}ms` }}>
                    <div className="svc-line py-5 grid grid-cols-12 gap-4 items-baseline">
                      <span className="col-span-1 numeral text-bronze-700 text-sm">{n}</span>
                      <span className="col-span-5 font-display tracking-wide text-sm md:text-base text-aegean-900">{t}</span>
                      <span className="col-span-6 serif italic text-slate-500 text-sm md:text-base">{d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CPO Certified · 14 Years ── */}
      <section id="credentials" className="water-band text-marble py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div data-reveal className="eyebrow !text-bronze-300 text-center">III · Credentials</div>
          <h2 data-reveal className="mt-4 text-center font-display text-3xl md:text-5xl text-marble">
            CPO Certified · Fourteen Years.
          </h2>
          <div data-reveal className="w-16 h-px bg-bronze-500 mx-auto mt-6" />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: 'CPO',        l: 'Certified Pool Operator', s: 'Industry credential' },
              { n: '14',         l: 'Years Experience',         s: 'Pool industry tenure' },
              { n: 'FL',         l: 'State Licensed',           s: 'DBPR L22000389251' },
              { n: '★',          l: 'Family Owned',             s: '& operated locally' },
            ].map((c, i) => (
              <div key={c.l} data-reveal style={{ ['--reveal-delay' as any]: `${i * 100}ms` }}
                className="card-marble !bg-aegean-900/40 !border-bronze/30 p-7 text-center text-marble">
                <div className="numeral text-5xl text-bronze-300">{c.n}</div>
                <div className="mt-4 font-display tracking-widest text-xs text-marble">{c.l}</div>
                <div className="mt-2 serif italic text-marble/70 text-sm">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="bg-marble">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow">IV · Coverage Area</div>
            <h2 data-reveal className="mt-3 font-display text-3xl md:text-4xl text-aegean-900">
              The Tri-County Coast.
            </h2>
            <p data-reveal className="mt-5 serif text-lg text-slate-700 leading-relaxed">
              Spring Hill, Weeki Wachee, Homosassa, and the surrounding
              Hernando &amp; Citrus county neighborhoods.
            </p>
            <ul data-reveal className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 font-display tracking-widest text-xs text-aegean-800">
              <li>· SPRING HILL</li>
              <li>· WEEKI WACHEE</li>
              <li>· HOMOSASSA</li>
              <li>· HERNANDO</li>
              <li>· LECANTO</li>
              <li>· BROOKSVILLE</li>
            </ul>
          </div>
          <div data-reveal className="md:col-span-7 h-80 border border-aegean-800/30 relative overflow-hidden bg-marble-200">
            <iframe
              src="https://maps.google.com/maps?q=Weeki+Wachee,+FL&z=10&output=embed"
              className="block w-full h-full"
              style={{ border: 0, filter: 'saturate(0.8) contrast(0.95)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Spartan Pool & Spa service area — Hernando & Citrus counties, FL"
            />
          </div>
        </div>
      </section>

      {/* ── Customer voices ── */}
      <section className="bg-marble-200/50">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div data-reveal className="eyebrow text-center">V · From Customers</div>
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {[
              { q: "Water is always crystal — equipment hasn't skipped a beat.", a: 'Birdeye review' },
              { q: "Reliable weekly visits, and a fair price on the heater repair.", a: 'Google review' },
            ].map((r, i) => (
              <blockquote key={r.q} data-reveal style={{ ['--reveal-delay' as any]: `${i * 140}ms` }}
                className="card-marble p-8">
                <div className="serif italic text-aegean-900 text-xl leading-snug">“{r.q}”</div>
                <div className="mt-5 eyebrow !text-slate-500 !text-[0.65rem]">— {r.a}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-aegean-900 text-marble">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div data-reveal className="eyebrow !text-bronze-300">VI · Begin</div>
            <h2 data-reveal className="mt-3 font-display text-4xl md:text-5xl text-marble">
              Quote Request.
            </h2>
            <p data-reveal className="mt-5 serif text-marble/80 leading-relaxed">
              We text quotes back fast. Tell us the pool, and the address.
            </p>
            <dl data-reveal className="mt-8 space-y-4 text-sm">
              <Detail label="Telephone" value="(352) 737-0762" href="tel:+13527370762" />
              <Detail label="Address"   value="3025 Magellan Ave, Spring Hill, FL 34608" />
              <Detail label="Hours"     value="Mon–Fri · 8:00am–6:00pm" />
              <Detail label="License"   value="FL DBPR L22000389251" />
            </dl>
          </div>

          <form onSubmit={(e) => e.preventDefault()} data-reveal className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            <input className="field !bg-marble/10 !text-marble placeholder:!text-marble/50 !border-marble/30" placeholder="Name" />
            <input className="field !bg-marble/10 !text-marble placeholder:!text-marble/50 !border-marble/30" placeholder="Phone" />
            <input className="field sm:col-span-2 !bg-marble/10 !text-marble placeholder:!text-marble/50 !border-marble/30" placeholder="Email" />
            <input className="field sm:col-span-2 !bg-marble/10 !text-marble placeholder:!text-marble/50 !border-marble/30" placeholder="Pool size / type (e.g. 15,000 gal · salt)" />
            <textarea rows={4} className="field sm:col-span-2 !bg-marble/10 !text-marble placeholder:!text-marble/50 !border-marble/30" placeholder="What do you need?" />
            <button type="submit" className="btn-classical sm:col-span-2 bg-bronze-500 text-aegean-900 px-6 py-4 font-display tracking-widest text-sm">
              SUBMIT
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-marble-200/60 border-t border-aegean-900/15">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 justify-between">
          <div className="font-display tracking-widest text-aegean-900 text-xs">
            SPARTAN POOL &amp; SPA SERVICE LLC
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate-500 uppercase tracking-widest">
            <span>Spring Hill · FL</span>
            <span>License L22000389251</span>
            <span>CPO Certified</span>
          </div>
          <div className="text-xs text-slate-500/70 uppercase tracking-widest">
            © {new Date().getFullYear()} · WebSuite Digital
          </div>
        </div>
      </footer>
    </main>
  );
}

function Detail({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="grid grid-cols-3 gap-3 border-b border-marble/20 pb-3">
      <dt className="eyebrow !text-bronze-300 !text-[0.65rem]">{label}</dt>
      <dd className="col-span-2 serif text-marble/90">
        {href ? <a href={href} className="hover:text-bronze-300 transition">{value}</a> : value}
      </dd>
    </div>
  );
}

function SpartanHelm({ className }: { className?: string }) {
  // Stylized minimalist Corinthian helmet
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 36c0-12 8-22 18-22s18 8 18 20" />
      <path d="M14 36v8c0 6 6 10 12 10h8c6 0 12-4 12-10v-6" />
      <path d="M50 22c4 0 8 4 8 12s-4 12-8 12" />
      <path d="M22 36h12" />
      <path d="M30 28v8l-4 4" />
      <path d="M50 14l-4 6" />
      <path d="M46 8l-4 6" />
    </svg>
  );
}
