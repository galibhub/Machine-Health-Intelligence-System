import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  };

  const navLinks = [
    {
      name: "Features",
      id: "features",
    },
    {
      name: "How It Works",
      id: "how-it-works",
    },
    {
      name: "About",
      id: "about",
    },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        border-b
      "
      style={{
        background:
          "rgba(6,11,22,0.75)",
        borderColor:
          "rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          h-20
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="group"
        >
          <div>
            <h1
              className="
                text-2xl
                font-black
                tracking-tight
                text-white
              "
            >
              Predictive
              <span
                className="
                  ml-2
                  text-cyan-400
                "
              >
                Maintenance AI
              </span>
            </h1>

            <p
              className="
                text-xs
                text-slate-500
                mt-1
              "
            >
              Machine Health Intelligence
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav
          className="
            hidden
            md:flex
            items-center
            gap-3
          "
        >
          {navLinks.map(
            (link) => (
              <button
                key={link.id}
                onClick={() =>
                  goToSection(
                    link.id
                  )
                }
                className="
                  px-4
                  py-2
                  rounded-lg
                  text-slate-300
                  font-medium
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-white/5
                "
              >
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* CTA */}

        <button
          onClick={() =>
            navigate(
              "/analyze"
            )
          }
          className="
            px-6
            py-3
            rounded-xl
            font-semibold
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
          "
          style={{
            background:
              "linear-gradient(90deg,#00D4FF,#3B82F6)",
            boxShadow:
              "0 0 25px rgba(0,212,255,.25)",
          }}
        >
          Analyze Machine
        </button>
      </div>
    </header>
  );
}

export default Navbar;