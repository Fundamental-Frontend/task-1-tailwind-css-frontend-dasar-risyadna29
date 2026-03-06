const footerLinks = {
  Produk: ['Kursus', 'Sertifikasi', 'Bootcamp', 'Mentoring'],
  Perusahaan: ['Tentang Kami', 'Karier', 'Blog', 'Press'],
  Dukungan: ['Bantuan', 'Komunitas', 'Kebijakan Privasi', 'Syarat & Ketentuan'],
};

export default function Footer() {
  return (
    <footer className="bg-text-main text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">E</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Edu<span className="text-primary">Smart</span>
              </span>
            </div>

            <p className="font-body text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Platform edukasi digital yang membantu kamu tumbuh — dari pemula hingga
              profesional, di industri manapun yang kamu pilih.
            </p>

            <div className="mb-6">
              <p className="font-body text-white/80 text-sm font-medium mb-3">
                Dapatkan tips belajar mingguan:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="email@kamu.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 font-body text-sm text-white placeholder-white/40 focus:outline-none focus:border-primary transition-colors"
                />
                <button className="btn-primary px-4 py-2.5 text-xs whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              {['𝕏', 'in', 'ig', 'yt'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center font-mono text-xs text-white/70 hover:text-white transition-all duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body font-semibold text-white text-sm mb-4 tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-white/50 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs">
            © 2025 EduSmart. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-body text-white/40 text-xs">
              Dibuat dengan ❤️ untuk para pelajar Indonesia
            </span>
            <button className="btn-secondary border-white/20 text-white/60 hover:bg-white hover:text-text-main text-xs px-4 py-2">
              Mulai Gratis
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}