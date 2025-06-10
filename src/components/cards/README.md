# Reusable Card Components

This directory contains reusable card components to reduce code duplication across the portfolio site.

## Components

### BaseCard
The foundation card component with animations and styling.

```jsx
import { BaseCard } from '../components/cards';

<BaseCard 
  className="p-6"
  hoverEffect={true}
  hoverType="lift" // or "scale"
>
  {/* Card content */}
</BaseCard>
```

### CardHeader
Consistent card headers with optional category tags and icons.

```jsx
import { CardHeader } from '../components/cards';

<CardHeader 
  title="Project Title"
  subtitle="Brief description"
  category={{ text: "Case Study", variant: "blue" }}
  icon="🚀"
/>
```

### MetricDisplay
Display metrics in various layouts.

```jsx
import { MetricDisplay } from '../components/cards';

const metrics = [
  { label: "ROI", value: "312%" },
  { label: "Time Saved", value: "28 hrs/week" }
];

<MetricDisplay 
  metrics={metrics}
  layout="grid" // or "inline" or "list"
/>
```

### FeatureList
Display feature or benefit lists with icons.

```jsx
import { FeatureList } from '../components/cards';

const features = [
  "Real-time analytics",
  "Custom reporting",
  { text: "24/7 Support", subtext: "With dedicated team" }
];

<FeatureList 
  features={features}
  icon="check" // or "arrow", "bullet", or custom
  iconColor="text-green-500"
/>
```

### CategoryTag
Consistent category or type tags.

```jsx
import { CategoryTag } from '../components/cards';

<CategoryTag 
  text="High Priority"
  variant="red" // blue, green, red, yellow, gray, purple, indigo
  size="sm" // sm, md, lg
  icon="🔥"
/>
```

## Usage Example

Here's how to combine these components to create a consistent card:

```jsx
import { BaseCard, CardHeader, MetricDisplay, FeatureList, CategoryTag } from '../components/cards';

function ProjectCard({ project }) {
  return (
    <BaseCard className="p-6">
      <CardHeader 
        title={project.title}
        subtitle={project.description}
        category={{ text: project.category, variant: "blue" }}
      />
      
      <MetricDisplay 
        metrics={project.metrics}
        layout="grid"
        className="my-6"
      />
      
      <FeatureList 
        features={project.features}
        className="mb-6"
      />
      
      <div className="flex gap-2">
        {project.tags.map(tag => (
          <CategoryTag key={tag} text={tag} variant="gray" size="sm" />
        ))}
      </div>
    </BaseCard>
  );
}
```

## Migration Guide

To update existing card components:

1. Replace custom motion.div with BaseCard
2. Replace custom headers with CardHeader
3. Replace custom metric displays with MetricDisplay
4. Replace custom feature lists with FeatureList
5. Replace custom tags with CategoryTag

This will ensure consistency across the site and reduce code duplication.