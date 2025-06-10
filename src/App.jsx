// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Work from './pages/Work';
import QuickFixes from './pages/QuickFixes';
import Insights, { InsightDetail } from './pages/Insights';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <SEO />
        <StructuredData />
        <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
          <Navbar />
          <main className="flex-grow">
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quick-fixes" element={<QuickFixes />} />
                <Route path="/solutions" element={<Projects />} />
                <Route path="/results" element={<Work />} />
                <Route path="/about" element={<Leadership />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:insightId" element={<InsightDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;