import Head from 'next/head'
import { siteConfig } from '../config/seo'

export default function NextSEO({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  type = 'website',
  publishedTime,
  author,
  section,
  tags,
  canonical
}) {
  const fullTitle = title || siteConfig.defaultTitle
  const fullDescription = description || siteConfig.defaultDescription
  const ogImageUrl = ogImage
    ? (ogImage.startsWith('http') ? ogImage : `${siteConfig.url}${ogImage}`)
    : `${siteConfig.url}/forgewise-og-image.png`
  const canonicalUrl = canonical || siteConfig.url

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      
      {/* Twitter tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      <meta property="twitter:image" content={ogImageUrl} />
      <meta property="twitter:image:alt" content={fullTitle} />
      
      {/* Article-specific tags */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime || new Date().toISOString()} />
          <meta property="article:author" content={author || 'Forgewise Team'} />
          <meta property="article:section" content={section || 'Insights'} />
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  )
}