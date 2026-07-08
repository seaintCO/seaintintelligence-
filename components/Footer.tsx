export default function Footer() {
  return (
    <footer id="company" className="border-t border-slate-200 bg-white px-6 py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.04em] text-black">SEAINT Intelligence</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-700">For The Future</p>
        </div>
        <p className="max-w-md text-sm leading-7 text-slate-500">
          AI Software | Intelligent Websites | Automation | Dashboards | Business Systems
          <br />
          Nashville | Miami | New York
        </p>
      </div>
    </footer>
  );
}
