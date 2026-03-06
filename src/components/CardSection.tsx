import FeatureCard from './FeatureCard';

type Feature = {
  icon: string;
  title: string;
  description: string;
  badge: string;
};

const features: Feature[] = [
  {
    icon: '📚',
    title: 'Materi Interaktif',
    description:
      'Kurikulum yang dirancang bersama praktisi industri — video, kuis, dan proyek nyata yang membuatmu siap kerja sejak hari pertama.',
    badge: 'Unggulan',
  },
  {
    icon: '🤝',
    title: 'Komunitas Belajar',
    description:
      'Terhubung dengan ribuan pelajar dan alumni. Diskusi, kolaborasi, dan networking yang membuka peluang karier tanpa batas.',
    badge: 'Aktif 24/7',
  },
  {
    icon: '📈',
    title: 'Progress Tracking',
    description:
      'Dashboard personal yang memvisualisasikan perjalanan belajarmu — dari streak harian hingga skill matrix yang terus berkembang.',
    badge: 'Data-Driven',
  },
];

export default function CardSection() {
  return (
    <section id="fitur" className="bg-background py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-block">Kenapa EduSmart?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-main leading-tight mb-4">
            Semua yang Kamu Butuhkan
            <br />
            <span className="text-primary">Ada di Sini</span>
          </h2>
          <p className="font-body text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            Kami merancang setiap fitur berdasarkan riset mendalam tentang bagaimana
            orang belajar paling efektif.
          </p>
        </div>

        {/* Responsive Grid: 1 col → 2 col (md) → 3 col (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-body text-text-muted text-sm mb-4">
            Masih ragu? Coba gratis selama 7 hari.
          </p>
          <button className="btn-primary px-8 py-3.5">
            Mulai Trial Gratis
          </button>
        </div>
      </div>
    </section>
  );
}