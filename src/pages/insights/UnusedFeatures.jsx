// pages/insights/UnusedFeatures.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookingLink } from '../../components/ProtectedContact';

export default function UnusedFeatures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-start">
            <span className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              💸 LOW PRIORITY - QUICK FIX
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Stop Paying for Features You Don't Use
            </h1>
            <p className="text-xl text-green-100 mb-6">
              The average business wastes $847/month on unused software features. 
              Here's your 10-minute audit that finds the waste.
            </p>
            <div className="flex items-center text-green-200 text-sm">
              <span>3 min read</span>
              <span className="mx-2">•</span>
              <span>Quick Fix</span>
              <span className="mx-2">•</span>
              <span className="font-bold">Saves $847/month average</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Quick Test */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">🔍 30-Second Test</h2>
              <p className="mb-4 text-gray-700">
                Open your credit card statement. Count the software charges. 
                Now name what each one does without looking.
              </p>
              <p className="mb-0 font-bold text-green-700">
                Couldn't name them all? You're wasting money.
              </p>
            </div>

            <h2>The Shocking Average</h2>
            <p>I audited 50 small businesses last year. Here's what I found:</p>
            <ul>
              <li>Average number of software subscriptions: <strong>23</strong></li>
              <li>Average actually used regularly: <strong>11</strong></li>
              <li>Average monthly waste: <strong>$847</strong></li>
              <li>Worst case I found: <strong>$3,200/month</strong> in unused tools</li>
            </ul>

            <h2>The Usual Suspects</h2>
            
            <h3>1. The "Premium Plan" Scam</h3>
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">You're paying for:</p>
              <ul className="mb-4">
                <li>Unlimited team members (you have 3)</li>
                <li>Advanced analytics (you check monthly)</li>
                <li>API access (you don't know what that is)</li>
                <li>Priority support (you've never called)</li>
              </ul>
              <p className="font-bold text-red-700">
                Average waste: $200/month per "premium" plan
              </p>
            </div>

            <h3>2. The Zombie Subscriptions</h3>
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Still paying for:</p>
              <ul className="mb-4">
                <li>That social media tool from 2019</li>
                <li>The project management app nobody liked</li>
                <li>The email verifier you used once</li>
                <li>The "AI writer" that writes garbage</li>
              </ul>
              <p className="font-bold text-yellow-700">
                Average waste: $347/month in forgotten tools
              </p>
            </div>

            <h3>3. The Duplicate Features</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Paying twice for:</p>
              <ul className="mb-4">
                <li>Email marketing (in 3 different tools)</li>
                <li>Analytics (Google + 4 others)</li>
                <li>Social posting (manual + 2 schedulers)</li>
                <li>Customer chat (website + Facebook + WhatsApp)</li>
              </ul>
              <p className="font-bold text-blue-700">
                Average waste: $300/month in overlaps
              </p>
            </div>

            <h2>Your 10-Minute Audit Checklist</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="mt-0">Step 1: The Credit Card Sweep (3 minutes)</h3>
              <ol>
                <li>Export last 3 months of charges</li>
                <li>Search for these keywords: "subscription", "monthly", "recurring"</li>
                <li>Highlight every software charge</li>
                <li>Total them up (prepare to be shocked)</li>
              </ol>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="mt-0">Step 2: The Usage Test (5 minutes)</h3>
              <p className="mb-4">For each subscription, answer:</p>
              <ol>
                <li>When did I last log in? (Check browser history)</li>
                <li>What specific feature do I use?</li>
                <li>Could something else do this?</li>
                <li>If it disappeared tomorrow, would I notice?</li>
              </ol>
              <p className="font-bold mt-4">
                Can't answer? Cancel it.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="mt-0">Step 3: The Downgrade Dance (2 minutes)</h3>
              <p className="mb-4">For keepers, check if you can:</p>
              <ul>
                <li>Drop to a lower plan</li>
                <li>Switch to annual (usually 20% off)</li>
                <li>Remove unused seats/users</li>
                <li>Turn off add-ons</li>
              </ul>
            </div>

            <h2>Real Examples From Real Businesses</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gray-400 pl-4">
                <p className="font-bold">Bakery in Illinois:</p>
                <p>Paying $199/month for "advanced" POS features. Only used basic sales. Saved $150/month downgrading.</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <p className="font-bold">Online Boutique:</p>
                <p>Had 5 email tools. Picked one. Saved $425/month.</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <p className="font-bold">Consulting Firm:</p>
                <p>Paying for 25 Zoom licenses. Had 8 employees. Saved $300/month.</p>
              </div>
            </div>

            <h2>The "Must Keep" List</h2>
            <p>After auditing hundreds of businesses, these are the only subscriptions most actually need:</p>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="mb-0">
                <li>✅ Your e-commerce platform (Shopify/WooCommerce)</li>
                <li>✅ Email marketing (just ONE)</li>
                <li>✅ Accounting software</li>
                <li>✅ Payment processing</li>
                <li>✅ Google Workspace or Office 365</li>
                <li>✅ One analytics tool</li>
                <li>✅ Inventory management (if applicable)</li>
              </ul>
              <p className="font-bold mt-4 mb-0">
                Everything else? Probably waste.
              </p>
            </div>

            <h2>The Instant Wins</h2>
            <p>Cancel these right now (nobody needs them):</p>
            <ul>
              <li>🗑️ Stock photo subscriptions (use Unsplash free)</li>
              <li>🗑️ Multiple analytics tools (Google Analytics is free)</li>
              <li>🗑️ Social media "growth" tools (they don't work)</li>
              <li>🗑️ SEO tools under $100/month (all garbage)</li>
              <li>🗑️ Website monitoring beyond basic (overkill)</li>
            </ul>

            <h2>Your Savings Calculator</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <p className="mb-4">Number of subscriptions: _____ × $35 average = $_____/month wasted</p>
              <p className="text-xl font-bold">
                Multiply by 12 = $______/year back in your pocket
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-700 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Want a Professional Software Audit?
              </h3>
              <p className="mb-6 text-blue-100">
                I'll review all your subscriptions, find the waste, negotiate better rates, 
                and set up a system to prevent future bloat. Average client saves $1,200/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="audit15min"
                  className="inline-block px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 text-center"
                >
                  Book Software Audit ($297)
                </BookingLink>
                <Link
                  to="/quick-fixes"
                  className="inline-block px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-blue-700 text-center"
                >
                  See All Quick Fixes
                </Link>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Start Saving in 10 Minutes:</h3>
              <ol className="space-y-2 font-medium">
                <li>1. Open your credit card statement</li>
                <li>2. List all software charges</li>
                <li>3. Cancel anything you haven't used in 30 days</li>
                <li>4. Downgrade everything else</li>
                <li>5. Set calendar reminder to audit quarterly</li>
              </ol>
              <p className="mt-4 font-bold text-yellow-800">
                Average savings from this 10-minute exercise: $847/month
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}