export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">E</span>
          </div>
          <span className="font-display font-semibold text-text-main text-lg">
            Edu<span className="text-primary">Smart</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Fitur', 'Kurikulum', 'Mentor', 'Harga'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-sm text-text-muted hover:text-primary transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#masuk" className="hidden md:block font-body text-sm text-text-muted hover:text-primary transition-colors duration-200">
            Masuk
          </a>
          <button className="btn-primary text-xs px-4 py-2">
            Daftar Gratis
          </button>
        </div>
      </div>
    </nav>
  );
}