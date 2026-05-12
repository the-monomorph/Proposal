import { ArrowLeft, ArrowRight, CheckCircle2, Users, Database, Zap, BarChart3, Shield, Globe, TrendingUp, Layers, Clock, Star, Target } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Blueprint() {
  const navigate = useNavigate();

  const handleScheduleDiscussion = () => {
    window.open('https://wa.me/918892679226', '_blank');
  };

  return (
    <>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
            COMPLETE OPERATIONAL BLUEPRINT
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
            Avati Safe Storage Transformation Plan
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A comprehensive overview of all systems, operations, and strategic initiatives designed to transform Avati Safe Storage into a technology-driven storage brand.
          </p>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-10">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Executive Summary</h2>
          </div>
          <p className="text-slate-200 mb-6">
            This transformation plan is designed to convert Avati Safe Storage from a traditional storage operation into a scalable, technology-driven storage brand through integrated operational systems, premium customer experience infrastructure, and comprehensive digital growth strategies.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-950/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">10 Weeks</div>
              <p className="text-sm text-slate-300">Implementation Timeline</p>
            </div>
            <div className="bg-slate-950/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">8 Systems</div>
              <p className="text-sm text-slate-300">Core Infrastructure Components</p>
            </div>
            <div className="bg-slate-950/50 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">₹50K/mo</div>
              <p className="text-sm text-slate-300">Operational Fee + Profit Share</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems Overview */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Core Systems & Infrastructure</h2>

        <div className="space-y-8">
          {/* Website System */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Smart Conversion Website</h3>
                <p className="text-slate-300">A professionally designed website optimized for lead generation and conversion</p>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {['Lead generation', 'Customer trust building', 'Mobile responsiveness', 'SEO performance', 'Conversion optimization'].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Portal */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Customer Portal</h3>
                <p className="text-slate-300">Self-service portal for customers to manage their storage independently</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                'Access unique Customer ID (AVT-CUS-XXXX)',
                'View complete stored inventory',
                'Request item retrieval',
                'Store additional items',
                'View invoices & agreements',
                'Access storage agreements',
                'Monitor all storage activity',
                'Track payment history'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CRM System */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">CRM & Operations Software</h3>
                <p className="text-slate-300">Custom-built infrastructure for complete business management</p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                'Lead management & tracking',
                'Customer operations',
                'Inventory handling systems',
                'Retrieval workflow management',
                'Team management tools',
                'Automated invoice systems',
                'Payment tracking',
                'Analytics dashboards'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QR & Tracking */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">QR Label & Inventory Tracking System</h3>
                <p className="text-slate-300">Track every item with unique QR codes linked to complete metadata</p>
              </div>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                'Linked to customer details',
                'Storage zone mapping',
                'Real-time retrieval status',
                'Item category classification',
                'Warehouse location tracking'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Automation */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Automation Infrastructure</h3>
                <p className="text-slate-300">End-to-end automated workflows reducing manual intervention</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'Automated lead follow-ups',
                'Instant quotation delivery',
                'Smart invoice reminders',
                'Retrieval workflow automation',
                'Customer notifications',
                'Internal operations automation'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Journey */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Complete Customer Journey</h2>

        <div className="space-y-6">
          {[
            {
              step: '01',
              title: 'Lead Discovery',
              description: 'Customers discover Avati Safe Storage through Google search, SEO optimization, social media presence, referrals, and targeted marketing campaigns.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              step: '02',
              title: 'Lead Qualification',
              description: 'Customer data automatically enters the CRM system for requirement analysis, storage estimation, and systematic lead tracking.',
              color: 'from-cyan-500 to-teal-500'
            },
            {
              step: '03',
              title: 'Smart Quotation',
              description: 'Automated quotation systems generate instant quotes, improving response time and customer convenience.',
              color: 'from-teal-500 to-green-500'
            },
            {
              step: '04',
              title: 'Digital Onboarding',
              description: 'Customers receive digital agreements, unique Customer IDs (AVT-CUS-XXXX), and detailed storage planning information.',
              color: 'from-green-500 to-lime-500'
            },
            {
              step: '05',
              title: 'Inventory Processing',
              description: 'All stored items are categorized, QR labeled, digitally mapped, and tracked in real-time through the inventory system.',
              color: 'from-lime-500 to-yellow-500'
            },
            {
              step: '06',
              title: 'Customer Portal Access',
              description: 'Customers gain full access to view inventory, request retrieval, access invoices, and monitor all storage activity.',
              color: 'from-yellow-500 to-orange-500'
            },
            {
              step: '07',
              title: 'Retrieval Workflow',
              description: 'Streamlined retrieval operations with request tracking, automated warehouse coordination, and faster processing times.',
              color: 'from-orange-500 to-red-500'
            },
            {
              step: '08',
              title: 'Account Closure',
              description: 'Final verification processes, billing completion, and customer feedback collection systems.',
              color: 'from-red-500 to-pink-500'
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex gap-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xl`}>
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marketing & SEO */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Growth & Marketing Infrastructure</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">SEO Operations</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Technical SEO implementation',
                'Local SEO optimization for Bangalore',
                'Strategic keyword optimization',
                'Google indexing & ranking',
                'Content-driven blog strategy',
                'Schema markup implementation'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold">Social Media Management</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Consistent content creation',
                'Brand visibility expansion',
                'Audience reach growth',
                'Lead generation campaigns',
                'Content for both Avati & MonoMorph',
                'Trust-building content strategy'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold">Content Strategy</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Storage education content',
                'Customer awareness campaigns',
                'Warehouse operations insights',
                'Process systems documentation',
                'Trust-building materials',
                'Professional brand positioning'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-orange-400" />
              <h3 className="text-2xl font-bold">Performance Marketing</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Lead generation campaigns',
                'Retargeting systems',
                'Conversion rate optimization',
                'Analytics & tracking setup',
                'ROI measurement',
                'Campaign optimization'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Implementation Timeline</h2>

        <div className="space-y-6">
          {[
            {
              phase: 'Phase 01',
              title: 'Research & Planning',
              duration: 'Week 1–2',
              items: ['Market research & competitor analysis', 'Operational workflow planning', 'System architecture design', 'Database structure planning']
            },
            {
              phase: 'Phase 02',
              title: 'Infrastructure Development',
              duration: 'Week 3–6',
              items: ['Website development & design', 'CRM system development', 'Customer portal creation', 'Admin dashboard systems', 'Database implementation']
            },
            {
              phase: 'Phase 03',
              title: 'Operational Systems',
              duration: 'Week 7–8',
              items: ['QR labeling system setup', 'Warehouse mapping implementation', 'Inventory tracking integration', 'Invoice & payment systems', 'Automation infrastructure']
            },
            {
              phase: 'Phase 04',
              title: 'Marketing Rollout',
              duration: 'Week 9–10',
              items: ['SEO implementation & optimization', 'Content systems deployment', 'Social media rollout', 'Lead generation campaigns', 'Analytics setup']
            },
            {
              phase: 'Phase 05',
              title: 'Optimization & Scaling',
              duration: 'Ongoing',
              items: ['Data analysis & insights', 'Workflow optimization', 'Conversion improvements', 'Scaling operations', 'Continuous enhancement']
            }
          ].map((phase, idx) => (
            <div key={idx} className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-semibold">{phase.phase}</div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <p className="text-sm text-slate-400">{phase.duration}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expected Impact */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Expected Business Impact</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: 'Improved Operational Efficiency',
              description: 'Reduced manual processes, streamlined workflows, and faster execution across all operations.',
              color: 'from-yellow-500/20 to-orange-500/20',
              iconColor: 'text-yellow-400'
            },
            {
              icon: Clock,
              title: 'Faster Retrieval Systems',
              description: 'Improved inventory mapping, automated coordination, and significantly reduced retrieval times.',
              color: 'from-blue-500/20 to-cyan-500/20',
              iconColor: 'text-blue-400'
            },
            {
              icon: Users,
              title: 'Better Customer Experience',
              description: 'Higher transparency, improved trust, self-service capabilities, and premium brand perception.',
              color: 'from-purple-500/20 to-pink-500/20',
              iconColor: 'text-purple-400'
            },
            {
              icon: TrendingUp,
              title: 'Increased Brand Visibility',
              description: 'Stronger online presence, improved SEO rankings, and premium market positioning in Bangalore.',
              color: 'from-green-500/20 to-teal-500/20',
              iconColor: 'text-green-400'
            },
            {
              icon: BarChart3,
              title: 'Better Lead Conversion',
              description: 'Optimized customer journey, automated follow-ups, and improved sales processes.',
              color: 'from-red-500/20 to-orange-500/20',
              iconColor: 'text-red-400'
            },
            {
              icon: Layers,
              title: 'Scalable Infrastructure',
              description: 'Systems designed for long-term growth, easy expansion, and operational scalability.',
              color: 'from-indigo-500/20 to-purple-500/20',
              iconColor: 'text-indigo-400'
            }
          ].map((impact, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${impact.color} border border-slate-700/50 rounded-2xl p-6`}>
              <div className="w-12 h-12 bg-slate-950/50 rounded-lg flex items-center justify-center mb-4">
                <impact.icon className={`w-6 h-6 ${impact.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
              <p className="text-sm text-slate-300">{impact.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Investment */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-800/50">
        <h2 className="text-3xl font-bold mb-10 text-center">Partnership Investment Structure</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50 rounded-2xl p-8">
            <div className="text-sm text-blue-300 font-semibold mb-2">MONTHLY OPERATIONAL FEE</div>
            <div className="text-4xl font-bold mb-6">₹50,000<span className="text-lg text-slate-300">/month</span></div>
            <ul className="space-y-3">
              {['Website systems', 'CRM infrastructure', 'Marketing operations', 'SEO management', 'Automation systems', 'Operational management', 'Subscriptions & tools', 'Freelancer costs'].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 rounded-2xl p-8">
            <div className="text-sm text-purple-300 font-semibold mb-2">PROFIT SHARING MODEL</div>
            <div className="text-4xl font-bold mb-6">10%<span className="text-lg text-slate-300"> share</span></div>
            <p className="text-sm text-slate-300 mb-6">
              Applicable on leads generated through MonoMorph Minds systems, marketing operations, and digital infrastructure.
            </p>
            <p className="text-xs text-slate-400">
              This aligns our success directly with your business growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 border-2 border-green-500/50 rounded-2xl p-8">
            <div className="text-sm text-green-300 font-semibold mb-2">LONG-TERM PARTNERSHIP</div>
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

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 border border-slate-700/50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">What's Included in the Monthly Fee</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Complete website maintenance & updates',
              'CRM system management & support',
              'All marketing operations & campaigns',
              'SEO optimization & content creation',
              'Social media management',
              'Automation system management',
              'All software subscriptions & tools',
              'Freelancer & contractor management',
              'Analytics & reporting',
              'Technical support & maintenance',
              'Strategic consulting',
              'Growth planning & optimization'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/50">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Avati Safe Storage?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Let's discuss how this comprehensive transformation plan can be customized to your specific needs and timeline.
          </p>
          <button
            onClick={handleScheduleDiscussion}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all mx-auto text-lg"
          >
            Schedule Strategic Discussion <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </>
  );
}
