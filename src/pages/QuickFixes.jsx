import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import { BaseCard, CardHeader, FeatureList, MetricDisplay } from '../components/cards';

function QuickFixCard({ title, description, timeframe, category, features, priority }) {
  const priorityColors = {
    high: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' },
    medium: { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-300' },
    low: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300' }
  };

  const colors = priorityColors[priority] || priorityColors.medium;

  return (
    <BaseCard className="p-6">
      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors.bg} ${colors.text} ${colors.border} border`}>
        {category}
      </div>
      
      <CardHeader 
        title={title}
        subtitle={description}
      />
      
      <div className="my-4 text-sm">
        <div className="flex items-center justify-between py-2 border-b border-gray-100">
          <span className="text-gray-600">Timeline:</span>
          <span className="font-semibold text-indigo-600">{timeframe}</span>
        </div>
      </div>
      
      <FeatureList 
        features={features}
        icon="check"
        iconColor="text-teal-500"
        className="text-sm"
      />
    </BaseCard>
  );
}

export default function QuickFixes() {
  const quickFixes = [
    {
      title: "SEO & Visibility Rescue",
      description: "Your site is invisible on Google. We'll identify and fix what's blocking you.",
      timeframe: "2-3 days",
      category: "SEO",
      priority: "high",
      features: [
        "Technical SEO audit and fixes",
        "Page title and meta optimization",
        "Site speed improvements",
        "Implementation guide included"
      ]
    },
    {
      title: "Cart Abandonment Solution",
      description: "70% cart abandonment? Let's cut that in half with proven strategies.",
      timeframe: "3-5 days",
      category: "Conversion",
      priority: "high",
      features: [
        "Checkout flow analysis",
        "Friction point elimination",
        "Trust signal optimization",
        "A/B testing setup"
      ]
    },
    {
      title: "Ad Spend Optimization",
      description: "Stop wasting money on ineffective ads. Get more results for less spend.",
      timeframe: "1-2 days",
      category: "Marketing",
      priority: "medium",
      features: [
        "Campaign structure audit",
        "Keyword optimization",
        "Audience refinement",
        "Performance tracking setup"
      ]
    },
    {
      title: "Analytics Implementation",
      description: "Know exactly what's working. Get clarity on your marketing ROI.",
      timeframe: "2-3 days",
      category: "Analytics",
      priority: "medium",
      features: [
        "Conversion tracking setup",
        "Attribution modeling",
        "Custom dashboard creation",
        "Team training included"
      ]
    },
    {
      title: "Email Revenue Boost",
      description: "Transform your email marketing from ignored to profitable.",
      timeframe: "2-3 days",
      category: "Email",
      priority: "low",
      features: [
        "List segmentation strategy",
        "Template optimization",
        "Automation sequences",
        "Performance tracking"
      ]
    },
    {
      title: "Social Commerce Setup",
      description: "Turn social media followers into paying customers.",
      timeframe: "3-4 days",
      category: "Social",
      priority: "low",
      features: [
        "Shopping integration",
        "Content strategy",
        "Ad creative optimization",
        "Performance metrics"
      ]
    }
  ];

  return (
    <FadeIn>
      <section className="pt-24 pb-20 bg-gradient-to-b from-indigo-50 to-white">
        <StaggerContainer className="max-w-7xl mx-auto px-6">
          <StaggerItem>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Quick Wins That Drive Results
            </h1>
            <p className="text-xl text-center text-gray-600 mb-4 max-w-3xl mx-auto">
              High-impact solutions for your most pressing challenges. 
              Fast implementation, measurable results.
            </p>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
              Each solution is scoped precisely with clear deliverables and timelines. 
              No surprises, just results.
            </p>
          </StaggerItem>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16 mx-6">
            {quickFixes.map((fix, index) => (
              <StaggerItem key={index}>
                <QuickFixCard {...fix} />
              </StaggerItem>
            ))}
          </div>

          <StaggerItem>
            <div className="bg-white rounded-xl  p-8 text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Have a Different Challenge?
              </h2>
              <p className="text-gray-600 mb-6">
                Every business is unique. Let's discuss your specific needs and 
                develop a tailored solution that delivers results.
              </p>
              <a
                href="/contact"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Discuss Your Challenge
              </a>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </FadeIn>
  );
}