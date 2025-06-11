import { useState, useEffect, useRef } from 'react';

// Helper to generate srcset for responsive images
function generateSrcSet(baseSrc, sizes = ['@mobile', '@1x', '@2x']) {
  const ext = baseSrc.substring(baseSrc.lastIndexOf('.'));
  const base = baseSrc.substring(0, baseSrc.lastIndexOf('.'));
  
  return sizes
    .map((size, index) => {
      const width = size === '@mobile' ? '400w' : size === '@1x' ? '600w' : '1200w';
      return `${base}${size}${ext} ${width}`;
    })
    .join(', ');
}

// Helper to get WebP version of image path
function getWebPSrc(src) {
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

export default function LazyImage({ 
  src, 
  alt, 
  className, 
  fallbackSrc,
  placeholder = 'blur',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  disableWebP = false,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(true);
  const imgRef = useRef(null);
  const pictureRef = useRef(null);

  // Check WebP support
  useEffect(() => {
    if (!disableWebP) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
  }, [disableWebP]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const target = pictureRef.current || imgRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc && imgRef.current) {
      imgRef.current.src = fallbackSrc;
    }
  };

  const shouldShowPlaceholder = !isLoaded && placeholder === 'blur';
  const imageSrc = isInView ? src : undefined;

  if (hasError && !fallbackSrc) {
    return (
      <div className={`${className} bg-gray-200 flex items-center justify-center`}>
        <div className="text-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-gray-500">Image not available</p>
        </div>
      </div>
    );
  }

  // Use picture element for WebP with fallback
  if (isInView && supportsWebP && !disableWebP) {
    const webpSrc = getWebPSrc(src);
    const webpSrcSet = generateSrcSet(webpSrc);
    const fallbackSrcSet = generateSrcSet(src);

    return (
      <div className={`relative ${className}`} ref={pictureRef}>
        {/* Blur placeholder */}
        {shouldShowPlaceholder && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        {/* Picture element with WebP and fallback */}
        <picture>
          <source
            type="image/webp"
            srcSet={webpSrcSet}
            sizes={sizes}
          />
          <source
            type={src.endsWith('.png') ? 'image/png' : 'image/jpeg'}
            srcSet={fallbackSrcSet}
            sizes={sizes}
          />
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={`${className} ${shouldShowPlaceholder ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
            {...props}
          />
        </picture>
      </div>
    );
  }

  // Fallback to regular img tag
  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {/* Blur placeholder */}
      {shouldShowPlaceholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Lazy loaded image */}
      {isInView && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${shouldShowPlaceholder ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          srcSet={generateSrcSet(src)}
          sizes={sizes}
          {...props}
        />
      )}
    </div>
  );
}