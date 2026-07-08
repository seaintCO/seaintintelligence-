const items = ["ALMA", "Leadly", "Nocturai", "Alta Sports", "Purity of Hearts", "Founders Club", "SEAINT Enterprise"];

export default function LogoCloud() {
  return (
    <section className="border-t border-slate-200 bg-white px-6 py-20 sm:px-9 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-center text-sm font-medium uppercase tracking-[0.12em] text-slate-400">
          Built for modern business teams
        </p>

        <div className="mt-8 overflow-hidden">
          <div className="flex w-max items-center gap-16 pr-16" style={{ animation: "marquee 40s linear infinite" }}>
            {[...items, ...items].map((item, index) => (
              <div key={`${item}-${index}`} className="text-2xl font-semibold tracking-[-0.04em] text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
