type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

const stats: Stat[] = [
  { value: '89', label: 'Pelajar Aktif', suffix: 'K+' },
  { value: '123', label: 'Kursus Tersedia', suffix: '+' },
  { value: '96', label: 'Tingkat Kepuasan', suffix: '%' },
  { value: '56', label: 'Mentor Profesional', suffix: '+' },
];

export default function StatsSection() {
  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-secondary">{stat.suffix}</span>
              </p>
              <p className="font-body text-white/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}