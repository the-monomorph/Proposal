import { ArrowRight, CheckCircle2, Users, Database, Zap, BarChart3, Shield, Globe, TrendingUp, Layers, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  const handleScheduleDiscussion = () => {
    window.open('https://wa.me/918892679226', '_blank');
  };

  const handleViewBlueprint = () => {
    navigate('blueprint');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
            OPERATIONAL TRANSFORMATION PROPOSAL
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
            Transform Avati Safe Storage Into A Technology-Driven Storage Brand
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            A complete operational ecosystem combining integrated systems, customer experience infrastructure, and digital growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleViewBlueprint}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              View Full Blueprint <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleScheduleDiscussion}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg font-semibold transition-all"
            >
              Schedule Strategic Discussion
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Current Challenges</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Traditional Storage Systems Create Operational Bottlenecks</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-red-400">Customer Experience Problems</h3>
            <ul className="space-y-3">
              {[
                'Lack of transparency',
                'Slow response times',
                'Difficulty retrieving items',
                'No access to storage information',
                'Manual quotation processes',
                'Weak communication systems'
              ].map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-orange-400">Operational Problems</h3>
            <ul className="space-y-3">
              {[
                'Lead leakage',
                'Manual inventory handling',
                'Unorganized workflows',
                'No centralized CRM',
                'Weak online presence',
                'Lack of automation',
                'Scaling difficulties'
              ].map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Transformation Strategy */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Transformation Strategy</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 max-w-4xl mx-auto">
            MonoMorph Minds Will Build A Complete Operational Ecosystem
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            The objective is to transform Avati Safe Storage into a scalable, systemized, and technology-driven storage brand through integrated operational systems, customer experience infrastructure, and digital growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: 'Smart Conversion Website',
              items: ['Lead generation', 'Customer trust', 'Mobile responsiveness', 'SEO performance', 'Conversion optimization']
            },
            {
              icon: Users,
              title: 'Customer Portal',
              items: ['Access Customer ID', 'View stored inventory', 'Request retrieval', 'Store additional items', 'View invoices', 'Access agreements', 'Monitor activity'],
              badge: 'AVT-CUS-0001'
            },
            {
              icon: Database,
              title: 'CRM & Operations Software',
              items: ['Lead management', 'Customer operations', 'Inventory handling', 'Retrieval workflow', 'Team management', 'Invoice systems', 'Payment tracking', 'Analytics dashboards']
            },
            {
              icon: Zap,
              title: 'Automation Infrastructure',
              items: ['Lead follow-ups', 'Quotation delivery', 'Invoice reminders', 'Retrieval workflows', 'Customer notifications', 'Internal operations']
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
              {feature.badge && (
                <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs text-blue-300 mb-3 font-mono">
                  {feature.badge}
                </div>
              )}
              <ul className="space-y-2">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Systems Architecture */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Smart Operational Systems</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Technology Infrastructure To Power Avati Safe Storage</h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            Every stage of the customer and operational journey will be connected through integrated digital systems designed to reduce manual workload, improve operational efficiency, and create a premium customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Database, title: 'CRM System', desc: 'Centralized customer and lead management infrastructure.' },
            { icon: BarChart3, title: 'Inventory Tracking', desc: 'Track every stored item with unique identification systems.' },
            { icon: Shield, title: 'QR Label System', desc: 'Every item linked with customer details, storage zone, retrieval status, item category, and warehouse location.' },
            { icon: Layers, title: 'Warehouse Mapping', desc: 'Digitally organized warehouse sections for faster operations.' },
            { icon: CheckCircle2, title: 'Digital Agreements', desc: 'Automated customer onboarding and documentation systems.' },
            { icon: TrendingUp, title: 'Invoice & Payment', desc: 'Integrated billing and payment infrastructure.' },
            { icon: Zap, title: 'Live Quotation Generator', desc: 'Customers can generate storage quotations directly from the website.' },
            { icon: Globe, title: 'Admin Dashboard', desc: 'Centralized control panel for complete warehouse and customer management.' }
          ].map((system, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-xl p-6 hover:border-purple-500/50 transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <system.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">{system.title}</h3>
              <p className="text-sm text-slate-400">{system.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Journey Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Customer Journey</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Creating A Seamless Storage Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Lead Discovery', desc: 'Customers discover through Google search, SEO, social media, referrals, and marketing campaigns.' },
            { step: '02', title: 'Lead Qualification', desc: 'Customer data enters CRM for requirement analysis, storage estimation, and lead tracking.' },
            { step: '03', title: 'Smart Quotation', desc: 'Automated quotation systems improve response time and customer convenience.' },
            { step: '04', title: 'Digital Onboarding', desc: 'Customers receive digital agreements, Customer IDs, and storage planning details.' },
            { step: '05', title: 'Inventory Processing', desc: 'Items are categorized, QR labeled, digitally mapped, and tracked in real-time.' },
            { step: '06', title: 'Portal Access', desc: 'Customers access inventory, request retrieval, view invoices, and monitor activity.' },
            { step: '07', title: 'Retrieval Workflow', desc: 'Streamlined operations with request tracking, warehouse coordination, and faster processing.' },
            { step: '08', title: 'Account Closure', desc: 'Final verification, billing completion, and customer feedback systems.' }
          ].map((step, idx) => (
            <div key={idx} className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>
              <div className="pt-6">
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Impact */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Expected Results</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">The Expected Operational & Business Impact</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: 'Improved Operational Efficiency', desc: 'Reduced manual processes and faster workflow execution.' },
            { icon: Clock, title: 'Faster Retrieval Systems', desc: 'Improved inventory mapping and retrieval coordination.' },
            { icon: Users, title: 'Better Customer Experience', desc: 'Higher transparency and customer trust.' },
            { icon: TrendingUp, title: 'Increased Brand Visibility', desc: 'Stronger online presence and premium market positioning.' },
            { icon: BarChart3, title: 'Better Lead Conversion', desc: 'Improved customer journey and sales processes.' },
            { icon: Layers, title: 'Scalable Infrastructure', desc: 'Systems designed for long-term operational growth.' }
          ].map((impact, idx) => (
            <div key={idx} className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <impact.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">{impact.title}</h3>
              <p className="text-sm text-slate-300">{impact.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Execution Plan</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Structured Multi-Phase Implementation Strategy</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { phase: '01', title: 'Research & Planning', duration: 'Week 1–2', items: ['Market research', 'Competitor analysis', 'Workflow planning', 'System design'] },
            { phase: '02', title: 'Infrastructure Dev', duration: 'Week 3–6', items: ['Website dev', 'CRM development', 'Customer portal', 'Dashboards', 'Database'] },
            { phase: '03', title: 'Operational Systems', duration: 'Week 7–8', items: ['QR systems', 'Warehouse mapping', 'Inventory tracking', 'Invoice systems', 'Automation'] },
            { phase: '04', title: 'Marketing Rollout', duration: 'Week 9–10', items: ['SEO implementation', 'Content systems', 'Social media', 'Lead generation'] },
            { phase: '05', title: 'Optimization', duration: 'Ongoing', items: ['Data analysis', 'Workflow optimization', 'Conversion improvements', 'Scaling operations'] }
          ].map((phase, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{phase.phase}</div>
              <h3 className="font-semibold mb-1">{phase.title}</h3>
              <p className="text-xs text-slate-400 mb-4">{phase.duration}</p>
              <ul className="space-y-1.5">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-16">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Partnership Structure</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">Strategic Operational Partnership Proposal</h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto">
            This partnership structure is designed to align operational responsibility, growth incentives, and long-term scalability between Avati Safe Storage and MonoMorph Minds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-2xl p-8">
            <div className="text-sm text-blue-300 font-semibold mb-2">MONTHLY FEE</div>
            <div className="text-4xl font-bold mb-6">₹50,000<span className="text-lg text-slate-300">/month</span></div>
            <ul className="space-y-3 mb-6">
              {['Website systems', 'CRM infrastructure', 'Marketing operations', 'SEO management', 'Automation systems', 'Operational management', 'Subscriptions & tools', 'Freelancer costs'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-8">
            <div className="text-sm text-purple-300 font-semibold mb-2">PROFIT SHARING</div>
            <div className="text-4xl font-bold mb-6">10%<span className="text-lg text-slate-300"> share</span></div>
            <p className="text-sm text-slate-300 mb-4">
              Applicable on leads generated through MonoMorph Minds systems, marketing operations, and digital infrastructure.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 border-2 border-green-500/50 rounded-2xl p-8">
            <div className="text-sm text-green-300 font-semibold mb-2">LONG-TERM MODEL</div>
            <div className="text-4xl font-bold mb-6">6<span className="text-lg text-slate-300"> months</span></div>
            <p className="text-sm text-slate-300 mb-4">
              After successful implementation: 20–25% profit share with no fixed monthly operational fee.
            </p>
            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="text-sm font-semibold mb-2">Proposed Roles:</div>
              <div className="space-y-1 text-sm text-slate-300">
                <div>• Co-Founder</div>
                <div>• CEO — Operations & Systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why MonoMorph Minds */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center mb-12">
          <span className="text-sm text-blue-400 font-semibold tracking-wider uppercase">Strategic Partner</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3 max-w-3xl mx-auto">
            More Than Marketing — Building Scalable Operational Infrastructure
          </h2>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-10 max-w-4xl mx-auto">
          <p className="text-slate-300 mb-6">
            MonoMorph Minds focuses on building systems, infrastructure, automation, operational efficiency, and scalable growth ecosystems.
          </p>
          <p className="text-slate-300 mb-6">This partnership is designed to combine:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Operations', 'Customer Experience', 'Automation', 'Marketing', 'Branding', 'Workflow Systems'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-300 mt-6">Into one integrated growth model for Avati Safe Storage.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Building Bangalore's Most Organized Storage Infrastructure Brand
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            A complete transformation strategy designed to modernize operations, improve customer experience, increase visibility, and create scalable business infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={handleScheduleDiscussion}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
            >
              Schedule Strategic Discussion <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleViewBlueprint}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg font-semibold transition-all"
            >
              View Full Operational Blueprint
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
