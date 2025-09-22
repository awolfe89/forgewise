// pages/insights/HiddenInventoryCosts.jsx
import { useEffect } from 'react';
import Link from 'next/link';
import { BookingLink } from '../../components/ProtectedContact';

export default function HiddenInventoryCosts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-start">
            <span className="bg-yellow-500 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              💰 MEDIUM PRIORITY - COST ANALYSIS
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              The Hidden $3,000/Month Cost of Manual Inventory
            </h1>
            <p className="text-xl text-yellow-100 mb-6">
              You're paying someone $20/hour to do what a $29/month app does better. Here's the math nobody wants to show you.
            </p>
            <div className="flex items-center text-yellow-200 text-sm">
              <span>5 min read</span>
              <span className="mx-2">•</span>
              <span>Cost Analysis</span>
              <span className="mx-2">•</span>
              <span className="font-bold">Saves $3K/month</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Time Tracker Exercise */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <h2 className="text-gray-800 text-xl font-semibold mt-0">⏰ Track This Tomorrow</h2>
              <p className="mb-4 text-gray-700">
                Time how long these tasks take your team:
              </p>
              <ul className="mb-0 text-gray-700">
                <li>Morning inventory count: ___ minutes</li>
                <li>Updating stock levels: ___ minutes</li>
                <li>Creating purchase orders: ___ minutes</li>
                <li>Checking for low stock: ___ minutes</li>
                <li>Fixing inventory errors: ___ minutes</li>
              </ul>
              <p className="mt-4 mb-0 font-bold text-yellow-700">
                Bet it's over 4 hours/day across your team.
              </p>
            </div>

            <h2>The Real Cost Breakdown</h2>
            
            <h3>What You Think It Costs</h3>
            <ul>
              <li>Employee doing inventory: $20/hour</li>
              <li>4 hours/day = $80/day</li>
              <li>20 days/month = $1,600/month</li>
              <li>"Not that bad," you think.</li>
            </ul>

            <h3>What It ACTUALLY Costs</h3>
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <p className="font-bold mb-4">Direct Costs:</p>
              <ul className="mb-4">
                <li>Wages: $1,600/month</li>
                <li>Payroll taxes (15%): $240/month</li>
                <li>Benefits (20%): $320/month</li>
                <li><strong>Subtotal: $2,160/month</strong></li>
              </ul>
              
              <p className="font-bold mb-4">Hidden Costs:</p>
              <ul className="mb-4">
                <li>Stock-outs from human error: ~$500/month in lost sales</li>
                <li>Over-ordering mistakes: ~$300/month in dead stock</li>
                <li>Time spent fixing errors: ~$200/month</li>
                <li>Customer complaints from wrong inventory: Priceless</li>
              </ul>
              
              <p className="text-xl font-bold text-red-700 mb-0">
                REAL TOTAL: $3,160/month ($37,920/year)
              </p>
            </div>

            <h2>The $29 Solution That Does It Better</h2>
            
            <h3>What Inventory Apps Actually Do:</h3>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <ul className="mb-0">
                <li>✅ Real-time stock tracking (no daily counts)</li>
                <li>✅ Automatic low-stock alerts</li>
                <li>✅ One-click purchase orders</li>
                <li>✅ Barcode scanning (10x faster)</li>
                <li>✅ Multi-location sync</li>
                <li>✅ Sales forecasting</li>
                <li>✅ Zero human error</li>
              </ul>
            </div>

            <h2>The Apps That Actually Work</h2>
            <p>I've tested 20+. Here are the only 3 worth your time:</p>

            <h3>1. For Shopify: Stocky (FREE with POS)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Best for:</p>
              <p>Retail stores with under 1,000 SKUs</p>
              <p className="font-bold mt-3 mb-2">Setup time:</p>
              <p>2 hours</p>
              <p className="font-bold mt-3 mb-2">Monthly cost:</p>
              <p>$0 (included with Shopify POS)</p>
            </div>

            <h3>2. For Multi-Channel: Cin7 ($299/month)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Best for:</p>
              <p>Selling on Amazon + Shopify + Wholesale</p>
              <p className="font-bold mt-3 mb-2">Setup time:</p>
              <p>1 week (they help you)</p>
              <p className="font-bold mt-3 mb-2">ROI:</p>
              <p>Usually 10x in prevented stock-outs alone</p>
            </div>

            <h3>3. For Simple Needs: inFlow ($71/month)</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="font-bold mb-2">Best for:</p>
              <p>B2B or wholesale with basic needs</p>
              <p className="font-bold mt-3 mb-2">Setup time:</p>
              <p>1 day</p>
              <p className="font-bold mt-3 mb-2">Why it works:</p>
              <p>Dead simple. Your grandma could use it.</p>
            </div>

            <h2>Implementation Checklist</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="font-bold mb-4">Week 1: Setup</p>
              <ol className="mb-4">
                <li>Export current inventory to CSV</li>
                <li>Clean up product names/SKUs (biggest time suck)</li>
                <li>Import to new system</li>
                <li>Connect sales channels</li>
                <li>Set reorder points</li>
              </ol>
              
              <p className="font-bold mb-4">Week 2: Training</p>
              <ol className="mb-4">
                <li>Train staff on barcode scanning</li>
                <li>Set up low-stock alerts</li>
                <li>Create first automated PO</li>
                <li>Run parallel with old system</li>
              </ol>
              
              <p className="font-bold mb-4">Week 3: Switch</p>
              <ol className="mb-0">
                <li>Turn off manual counts</li>
                <li>Reassign that employee to sales</li>
                <li>Watch errors disappear</li>
                <li>Count your money</li>
              </ol>
            </div>

            <h2>Common Objections (And Reality)</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold">"But my business is unique!"</p>
                <p className="italic">No, it's not. You buy stuff, store it, sell it. Same as everyone.</p>
              </div>
              
              <div>
                <p className="font-bold">"My staff won't learn new software!"</p>
                <p className="italic">They learned TikTok. They can learn this.</p>
              </div>
              
              <div>
                <p className="font-bold">"What if the system goes down?"</p>
                <p className="italic">What if your employee calls in sick? Software is more reliable.</p>
              </div>
            </div>

            <h2>The Bottom Line Math</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <p className="text-xl mb-4">Your current way: <span className="text-red-400">-$3,160/month</span></p>
              <p className="text-xl mb-4">With inventory software: <span className="text-red-400">-$299/month</span></p>
              <p className="text-2xl font-bold">You save: <span className="text-green-400">+$2,861/month</span></p>
              <p className="text-3xl font-bold mt-4">That's <span className="text-green-400">$34,332/year</span></p>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-700 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Want Us to Set This Up For You?
              </h3>
              <p className="mb-6 text-blue-100">
                We'll analyze your inventory, pick the right software, migrate your data,
                and train your team. Takes 1 week. Saves you $34K/year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingLink
                  type="audit15min"
                  className="inline-block px-6 py-3 bg-white text-blue-700 font-bold rounded-lg hover:bg-gray-100 text-center"
                >
                  Book Inventory Audit
                </BookingLink>
                <Link
                  href="/insights"
                  className="inline-block px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-blue-700 text-center"
                >
                  See More Money Leaks
                </Link>
              </div>
            </div>

            {/* Related Problems */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Other Hidden Costs You Have:</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/insights/unused-features" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Software features you pay for but don't use ($847/month)
                  </Link>
                </li>
                <li>
                  <Link href="/insights/shopify-speed" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Slow website killing conversions ($10K/month)
                  </Link>
                </li>
                <li>
                  <Link href="/insights/ppc-cost-optimization" className="text-blue-700 hover:text-blue-800 font-medium">
                    → Google Ads waste ($2K/month minimum)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}