import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Extracting links into an array keeps the JSX clean and scalable
  const navLinks = [
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "About", id: "about" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50 
        bg-white/80 backdrop-blur-lg 
        border-b border-slate-200/80 shadow-sm
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
            Predictive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Maintenance AI</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="
                px-4 py-2 rounded-md
                text-sm font-medium text-slate-600
                hover:text-blue-600 hover:bg-blue-50/50
                transition-all duration-200 ease-in-out
              "
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/analyze")}
          className="
            px-5 py-2.5 rounded-full
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white text-sm font-semibold tracking-wide
            shadow-md shadow-blue-500/30
            hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-0.5
            active:scale-95 active:translate-y-0
            transition-all duration-200
          "
        >
          Analyze Machine
        </button>

      </div>
    </header>
  );
}

export default Navbar;