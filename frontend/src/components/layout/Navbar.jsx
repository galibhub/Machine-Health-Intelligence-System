function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(10,11,13,0.9)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div>
          <h1 className="text-lg font-bold tracking-wide">
            Predictive Maintenance AI
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-[var(--text-secondary)] hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-[var(--text-secondary)] hover:text-white transition"
          >
            How It Works
          </a>

          <a
            href="#about"
            className="text-[var(--text-secondary)] hover:text-white transition"
          >
            About
          </a>
        </nav>

        <button
          className="
            px-5 py-2
            rounded-lg
            bg-[var(--accent)]
            text-white
            font-medium
            hover:opacity-90
            transition
          "
        >
          Analyze Machine
        </button>

      </div>
    </header>
  );
}

export default Navbar;