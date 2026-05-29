import { Link } from "@tanstack/react-router";
import { Linkedin, Youtube, Twitter, Mail } from "lucide-react";
import logo from "@/assets/medibeez-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gradient-blue text-white mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <img src={logo} alt="MediBeez" className="h-12 w-auto bg-white rounded-md p-1" />
          <p className="mt-4 text-sm text-white/75 max-w-xs">
            Unlock a world of medical expertise. Connect, collaborate and grow with doctors worldwide.
          </p>
          <div className="flex gap-3 mt-5">
            {[Linkedin, Youtube, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-orange transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider text-brand-orange-light mb-4">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/about" className="hover:text-brand-orange-light">About</Link></li>
            <li><Link to="/news" className="hover:text-brand-orange-light">News</Link></li>
            <li><Link to="/clinsights" className="hover:text-brand-orange-light">Clinsights</Link></li>
            <li><Link to="/info-hub" className="hover:text-brand-orange-light">INFO-HUB</Link></li>
            <li><Link to="/cme" className="hover:text-brand-orange-light">CME</Link></li>
            <li><Link to="/contact" className="hover:text-brand-orange-light">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider text-brand-orange-light mb-4">RESOURCES</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/info-hub" hash="podcast" className="hover:text-brand-orange-light">Podcast</Link></li>
            <li><Link to="/info-hub" hash="infographics" className="hover:text-brand-orange-light">Infographics</Link></li>
            <li><Link to="/info-hub" hash="slideshows" className="hover:text-brand-orange-light">Slideshows</Link></li>
            <li><Link to="/info-hub" hash="mreels" className="hover:text-brand-orange-light">M-Reels</Link></li>
            <li><Link to="/info-hub" className="hover:text-brand-orange-light">View All</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider text-brand-orange-light mb-4">SUBSCRIBE TO OUR NEWSLETTER</h4>
          <form className="flex rounded-full bg-white/10 p-1" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/60 focus:outline-none" />
            <button className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold hover:opacity-90">
              <Mail className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>Copyright © 2026 MediBeez. All rights reserved.</p>
          <p>Terms of Use · Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
