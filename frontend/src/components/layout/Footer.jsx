function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <h3 className="font-semibold">
          Predictive Maintenance AI
        </h3>

        <p className="text-[var(--text-secondary)] text-sm">
          Built with React, FastAPI, and Machine Learning
        </p>

      </div>
    </footer>
  );
}

export default Footer;