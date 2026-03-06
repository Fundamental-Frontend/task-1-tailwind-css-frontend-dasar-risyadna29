export default function HeroSection() {
  return (
    <section className="bg-primary min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white" />
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full border border-white" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full border border-white" />
        <div className="absolute -bottom-10 left-32 w-64 h-64 rounded-full border border-white" />
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="max-w-3xl">
          <div
            className="animate-fade-up opacity-0-init mb-6"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <span className="inline-flex items-center gap-2 bg-white/15 text-white border border-white/20 rounded-full px-4 py-1.5 font-mono text-xs tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full inline-block animate-pulse" />
              Platform Edukasi Digital #1
            </span>
          </div>

          <h1
            className="animate-fade-up opacity-0-init font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
            style={{ animationDelay: "120ms", animationFillMode: "forwards" }}
          >
            Belajar Lebih{" "}
            <span className="relative inline-block">
              Cerdas
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-secondary rounded-full" />
            </span>
            , <br className="hidden md:block" />
            Raih Lebih Jauh.
          </h1>

          <p
            className="animate-fade-up opacity-0-init font-body text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
            style={{ animationDelay: "240ms", animationFillMode: "forwards" }}
          >
            EduSmart menghadirkan pengalaman belajar yang dipersonalisasi —
            dengan materi interaktif, mentor profesional, dan komunitas yang
            mendukungmu setiap langkah.
          </p>

          <div
            className="animate-fade-up opacity-0-init flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "360ms", animationFillMode: "forwards" }}
          >
            <button className="btn-accent px-8 py-4 text-base">
              Mulai Belajar →
            </button>
            <button className="btn-secondary border-white/40 text-white hover:bg-white hover:text-primary px-8 py-4 text-base">
              Lihat Kurikulum
            </button>
          </div>

          <div
            className="animate-fade-up opacity-0-init mt-12 flex items-center gap-6"
            style={{ animationDelay: "480ms", animationFillMode: "forwards" }}
          >
            <div className="flex -space-x-3">
              {["🧑‍💻", "👩‍🎓", "👨‍🏫", "🧑‍🔬"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <p className="font-body text-white font-semibold text-sm">
                99.999+ pelajar aktif
              </p>
              <p className="font-body text-white/60 text-xs">
                bergabung bulan ini
              </p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="hidden sm:block">
              <p className="font-body text-white font-semibold text-sm">
                ⭐ 4.85/5
              </p>
              <p className="font-body text-white/60 text-xs">
                rating dari pelajar
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80L1440 80L1440 30C1200 70 960 80 720 60C480 40 240 10 0 30L0 80Z"
            fill="#F8FAFC"
          />
        </svg>
      </div>
    </section>
  );
}
