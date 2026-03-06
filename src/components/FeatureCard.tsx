type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  badge?: string;
  delay?: number;
};

export default function FeatureCard({
  icon,
  title,
  description,
  badge,
  delay = 0,
}: FeatureCardProps) {
  return (
    <div
      className="feature-card animate-fade-up opacity-0-init"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-2xl">
        {icon}
      </div>

      {/* Badge (optional) */}
      {badge && (
        <span className="section-label mb-4 block w-fit">
          {badge}
        </span>
      )}

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-text-main mb-3 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-muted text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}