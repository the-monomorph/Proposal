export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="text-xl font-semibold mb-2">AVATI SAFE STORAGE × MONOMORPH MINDS</div>
            <p className="text-sm text-slate-400">Technology-enabled storage infrastructure for the future of operations.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">
            <div>Operational Infrastructure</div>
            <div>Smart Storage Systems</div>
            <div>CRM & Automation</div>
            <div>Digital Growth Ecosystem</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
