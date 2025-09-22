import { useState, useEffect, useRef } from 'react';

/**
 * LazyImage component with WebP support and responsive images
 * Uses picture element with srcset for optimal Core Web Vitals performance
 */
export default function LazyImage({
  src,
  alt,
  width,
  height,
  sizes = '100vw',
  className = '',
  priority = false,
  onLoad,
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);

  // Generate responsive image sources
  const getImageSet = (imageSrc) => {
    // Handle both absolute and relative paths
    const publicPath = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
    const ext = publicPath.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg';
    const base = publicPath.replace(/\.(jpg|jpeg|png|webp)$/i, '');

    return {
      // WebP sources with responsive variants
      webp: {
        srcset: `
          ${base}@mobile.webp 640w,
          ${base}@1x.webp 1024w,
          ${base}@2x.webp 1536w,
          ${base}.webp 2048w
        `.trim().replace(/\s+/g, ' '),
      },
      // Fallback JPEG/PNG sources
      fallback: {
        srcset: `
          ${base}@mobile.${ext} 640w,
          ${base}@1x.${ext} 1024w,
          ${base}@2x.${ext} 1536w,
          ${base}.${ext} 2048w
        `.trim().replace(/\s+/g, ' '),
      }
    };
  };

  useEffect(() => {
    if (priority) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      {
        // Start loading 50px before the image enters viewport
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const imageSet = getImageSet(src);
  const shouldLoad = priority || isIntersecting;

  return (
    <picture ref={imgRef}>
      {shouldLoad && (
        <>
          {/* WebP source for modern browsers */}
          <source
            type="image/webp"
            srcSet={imageSet.webp.srcset}
            sizes={sizes}
          />
          {/* Fallback source for older browsers */}
          <source
            type={src.includes('.png') ? 'image/png' : 'image/jpeg'}
            srcSet={imageSet.fallback.srcset}
            sizes={sizes}
          />
        </>
      )}
      {/* Base img tag with proper dimensions for CLS prevention */}
      <img
        src={shouldLoad ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={className}
        onLoad={onLoad}
        style={{
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    </picture>
  );
}

/**
 * Simple responsive image for logos/icons that don't need lazy loading
 */
export function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw'
}) {
  const ext = src.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg';
  const base = src.replace(/\.(jpg|jpeg|png|webp)$/i, '');

  // For simple images, just provide WebP alternative
  const webpSrc = `${base}.webp`;

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={webpSrc}
        sizes={sizes}
      />
      <source
        type={ext === 'png' ? 'image/png' : 'image/jpeg'}
        srcSet={src}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          maxWidth: '100%',
          height: 'auto',
          aspectRatio: width && height ? `${width}/${height}` : undefined,
        }}
      />
    </picture>
  );
}

/**
 * Hero image component - always loads immediately with priority
 */
export function HeroImage({
  src,
  alt,
  width,
  height,
  className = '',
  sizes = '100vw'
}) {
  return (
    <LazyImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={true}
    />
  );
}