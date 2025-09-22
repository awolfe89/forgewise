import { useRouter } from 'next/router';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import NextSEO from '../../src/components/NextSEO';
import { getPageSEO } from '../../src/config/seo';

// Dynamic imports for insight components
const insightComponents = {
  'shopify-speed': dynamic(() => import('../../src/pages/insights/ShopifySpeed')),
  'hidden-inventory-costs': dynamic(() => import('../../src/pages/insights/HiddenInventoryCosts')),
  'ppc-cost-optimization': dynamic(() => import('../../src/pages/insights/PpcCostOptimization')),
  'ai-in-ecommerce': dynamic(() => import('../../src/pages/insights/AiInEcommerce')),
  'seo-ux-case-study': dynamic(() => import('../../src/pages/insights/SeoUxCaseStudy')),
  'unused-features': dynamic(() => import('../../src/pages/insights/UnusedFeatures')),
  'attribute-filtering': dynamic(() => import('../../src/pages/insights/AttributeFilteringCaseStudy'))
};

export default function InsightDetail({ insightId }) {
  const InsightComponent = insightComponents[insightId];

  if (!InsightComponent) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The insight you're looking for doesn't exist.
          </p>
          <Link
            href="/insights/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Get page-specific SEO data
  const seoData = getPageSEO(`/insights/${insightId}`);

  return (
    <>
      <NextSEO {...seoData} />
      <InsightComponent />
    </>
  );
}

export async function getStaticPaths() {
  const paths = [
    { params: { insightId: 'shopify-speed' } },
    { params: { insightId: 'hidden-inventory-costs' } },
    { params: { insightId: 'ppc-cost-optimization' } },
    { params: { insightId: 'ai-in-ecommerce' } },
    { params: { insightId: 'seo-ux-case-study' } },
    { params: { insightId: 'unused-features' } },
    { params: { insightId: 'attribute-filtering' } }
  ];

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      insightId: params.insightId
    }
  };
}

