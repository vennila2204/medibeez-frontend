import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/medibeez-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/news", label: "News" },
  { to: "/clinsights", label: "Clinsights" },
  { to: "/info-hub", label: "Info-Hub" },
  { to: "/cme", label: "CME" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MediBeez" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/75 rounded-md transition-colors hover:text-primary hover:bg-accent"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary bg-accent rounded-md" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/login" className="px-4 py-2 text-sm font-medium text-primary hover:text-brand-blue-dark transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-orange shadow-glow hover:opacity-90 transition-opacity">
            Sign up
          </Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-accent">
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center py-2 rounded-md border border-border text-sm font-medium">Login</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 text-center py-2 rounded-md bg-gradient-orange text-white text-sm font-semibold">Sign up</Link>
          </div>
        </div>
      )}
    </header>
  );
}
