// App.jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import MetaTags from './components/MetaTags';
import SchemaMarkup from './components/SchemaMarkup';
import LoadingSpinner from './components/LoadingSpinner';
import CookieConsent from './components/CookieConsent';
import BackToTop from './components/BackToTop';

// Eagerly load critical pages
import Home from './pages/Home';

// Lazy load non-critical pages
const Projects = lazy(() => import('./pages/Projects'));
const Leadership = lazy(() => import('./pages/Leadership'));
const Work = lazy(() => import('./pages/Work'));
const QuickFixes = lazy(() => import('./pages/QuickFixes'));
const Insights = lazy(() => import('./pages/Insights'));
const Contact = lazy(() => import('./pages/Contact'));

// Lazy load Insight detail component separately
const InsightDetail = lazy(() => 
  import('./pages/Insights').then(module => ({ 
    default: module.InsightDetail 
  }))
);

// Lazy load 404 page
const NotFound = lazy(() => import('./pages/NotFound'));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const AccessibilityStatement = lazy(() => import('./pages/AccessibilityStatement'));

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <MetaTags />
        <SchemaMarkup pageType="general" />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
          <Navbar />
          <main id="main-content" className="flex-grow">
            <ErrorBoundary>
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/quick-fixes" element={<QuickFixes />} />
                  <Route path="/solutions" element={<Projects />} />
                  <Route path="/results" element={<Work />} />
                  <Route path="/about" element={<Leadership />} />
                  <Route path="/insights" element={<Insights />} />
                  <Route path="/insights/:insightId" element={<InsightDetail />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/accessibility" element={<AccessibilityStatement />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;