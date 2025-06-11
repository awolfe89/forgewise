import { motion } from 'framer-motion';

// Skeleton component for different content types
export function Skeleton({ className = '', variant = 'text' }) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const variantClasses = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    button: 'h-10 w-32',
    image: 'h-48 w-full',
    card: 'h-64 w-full',
    avatar: 'h-12 w-12 rounded-full'
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`} />
  );
}

// Card skeleton for projects/insights
export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
      <Skeleton variant="text" className="w-1/4" />
      <Skeleton variant="title" />
      <div className="space-y-2">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-4/5" />
      </div>
      <div className="flex justify-between items-center pt-4">
        <Skeleton variant="button" />
        <Skeleton variant="text" className="w-20" />
      </div>
    </div>
  );
}

// Article skeleton for insights
export function ArticleSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Skeleton variant="title" className="mb-4" />
      <div className="flex gap-4 mb-8">
        <Skeleton variant="text" className="w-24" />
        <Skeleton variant="text" className="w-32" />
      </div>
      <Skeleton variant="image" className="mb-8" />
      <div className="space-y-4">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-5/6" />
        <Skeleton variant="text" />
        <Skeleton variant="text" className="w-4/5" />
      </div>
    </div>
  );
}

// Page skeleton wrapper
export default function LoadingSkeleton({ type = 'page', count = 1 }) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <CardSkeleton />
              </motion.div>
            ))}
          </div>
        );
      
      case 'article':
        return <ArticleSkeleton />;
      
      case 'page':
      default:
        return (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <Skeleton variant="title" className="mb-8" />
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} variant="text" />
              ))}
            </div>
          </div>
        );
    }
  };

  return renderSkeleton();
}