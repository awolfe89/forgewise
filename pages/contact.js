import { useState } from 'react';
import NextSEO from '../src/components/NextSEO';
import { getPageSEO } from '../src/config/seo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, just show a message since we don't have a backend
    setTimeout(() => {
      setSubmitMessage('Thank you for your interest! We\'ll be in touch within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        type: '',
        message: ''
      });
    }, 1000);
  };

  const seoData = getPageSEO('/contact');

  return (
    <>
      <NextSEO {...seoData} />

      <div className="pt-20 min-h-screen">
        {/* Header Section */}
        <section className="relative bg-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Let's Fix Your Revenue Leaks</h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-600 mb-2">
              Get in touch for a free discovery call. No pitch decks, just solutions.
            </p>
            <p className="text-gray-500">
              Typical response same day. First call is 25-30 min.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    How Can We Help? *
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                  >
                    <option value="">Select an option</option>
                    <option value="discovery">Free Discovery Call</option>
                    <option value="audit">60-Minute Audit</option>
                    <option value="quick-wins">Quick Wins Package</option>
                    <option value="custom">Custom Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Biggest Challenge
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    placeholder="What's the #1 thing holding your business back?"
                  />
                </div>

                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {submitMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-medium rounded-lg transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-blue-700 text-white hover:bg-blue-800'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Email Alternative */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                Prefer email? Reach out directly:
              </p>
              <a
                href="mailto:hello@forgewise.io"
                className="text-2xl font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                hello@forgewise.io
              </a>
              <p className="text-sm text-gray-500 mt-2">
                We typically reply within 4 hours during business days
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">What to Expect</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold mb-2">1. Quick Chat</h3>
                <p className="text-gray-600 text-sm">
                  25-minute call to understand your challenges
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold mb-2">2. Analysis</h3>
                <p className="text-gray-600 text-sm">
                  We identify your biggest opportunities
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold mb-2">3. Roadmap</h3>
                <p className="text-gray-600 text-sm">
                  Clear plan with ROI projections
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Is the discovery call really free?</h3>
                <p className="text-gray-600">
                  Yes, 100%. No strings attached. If we can't help, we'll tell you upfront.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">How long does implementation take?</h3>
                <p className="text-gray-600">
                  Quick wins: 1-2 weeks. Full solutions: 4-12 weeks. We start with what pays you back fastest.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">What if I'm not ready to commit?</h3>
                <p className="text-gray-600">
                  No problem. The discovery call gives you actionable insights regardless. Many clients implement our free advice and see results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}