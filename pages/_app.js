import '../src/index.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ErrorBoundary from '../src/components/ErrorBoundary'
import NextNavbar from '../src/components/NextNavbar'
import NextFooter from '../src/components/NextFooter'
import BackToTop from '../src/components/BackToTop'
import NextCookieConsent from '../src/components/NextCookieConsent'
import Head from 'next/head'
import { OrganizationSchema, WebsiteSchema } from '../src/components/StructuredData'
import { GoogleTagManager } from '../src/components/GoogleTagManager'
import LocalBusinessSchema from '../src/components/LocalBusinessSchema'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Scroll to top on route change
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <ErrorBoundary>
      <GoogleTagManager />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-favicon-128.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <OrganizationSchema />
      <WebsiteSchema />
      <LocalBusinessSchema />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <div className="min-h-screen flex flex-col bg-slate-50 text-gray-800">
        <NextNavbar />
        <main id="main-content" className="flex-grow">
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </main>
        <NextFooter />
        <BackToTop />
        <NextCookieConsent />
      </div>
    </ErrorBoundary>
  )
}

export default MyApp