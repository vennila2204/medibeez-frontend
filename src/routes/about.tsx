import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, Shield, Globe, Sparkles, ArrowRight } from "lucide-react";
import imgAbout from "@/assets/module-about.jpg";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MediBeez" },
      { name: "description", content: "MediBeez is a global platform connecting medical professionals to elevate healthcare worldwide." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Patient-Centered Care", text: "We prioritize the well-being of patients through enhanced medical collaboration and knowledge sharing." },
  { icon: Shield, title: "Trust & Security", text: "Your data and professional interactions are protected with enterprise-grade security measures." },
  { icon: Globe, title: "Global Reach", text: "Connect with medical professionals from around the world to exchange insights and expertise." },
  { icon: Sparkles, title: "Continuous Innovation", text: "We constantly evolve our platform to meet the changing needs of healthcare professionals." },
];

const timeline = [
  { year: "2020", title: "MediBeez Founded", text: "Vision born to connect doctors globally." },
  { year: "2021", title: "First 1,000 Doctors", text: "Reached our first community milestone." },
  { year: "2022", title: "CME Accreditation", text: "Launched our accredited CME programs." },
  { year: "2023", title: "Global Expansion", text: "Active in 50+ countries." },
  { year: "2024", title: "25K+ Members", text: "A thriving global medical community." },
];

function About() {
  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-extrabold">Empowering <span className="text-gradient-brand">Healthcare Professionals</span></h1>
            <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
              MediBeez is a revolutionary platform connecting doctors, medical professionals, and healthcare experts worldwide. We facilitate knowledge sharing, professional development, and collaborative care to elevate global healthcare standards.
            </p>
            <Link to="/signup" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow hover:opacity-90">
              Join Our Community <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-30" />
            <img src={imgAbout} alt="Doctors collaborating" className="relative rounded-3xl shadow-glow w-full" />
          </div>
        </div>
      </section>


      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
        <div className="group relative p-10 rounded-3xl bg-gradient-blue text-white overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-brand-orange/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 rounded-2xl bg-white/15 backdrop-blur grid place-items-center group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
              <Globe className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-bold">Our Mission</h2>
            <p className="mt-4 text-white/90 leading-relaxed">To create a global ecosystem where medical professionals can seamlessly connect, collaborate, and continuously learn — ultimately improving patient outcomes and advancing healthcare excellence worldwide.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:gap-3 transition-all">
              Learn more <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="group relative p-10 rounded-3xl bg-gradient-orange text-white overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative">
            <div className="inline-flex h-12 w-12 rounded-2xl bg-white/15 backdrop-blur grid place-items-center group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-white/95 leading-relaxed">To become the world's leading platform for medical professional development, fostering a community where knowledge knows no borders and every healthcare professional has access to cutting-edge insights and expertise.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/95 group-hover:gap-3 transition-all">
              Discover more <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl lg:text-4xl font-bold">Our Core Values</h2>
            <p className="mt-2 text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition">
                <div className="h-12 w-12 rounded-xl bg-accent grid place-items-center text-primary">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center"><h2 className="text-2xl sm:text-3xl lg:text-2xl sm:text-3xl lg:text-4xl font-bold">Our Journey</h2><p className="mt-2 text-muted-foreground">Milestones that shaped MediBeez.</p></div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-brand rounded-full hidden md:block" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <div key={t.year} className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "" : "md:[direction:rtl]"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft md:[direction:ltr]">
                  <span className="text-secondary font-bold">{t.year}</span>
                  <h3 className="text-xl font-bold">{t.title}</h3>
                  <p className="mt-1 text-muted-foreground">{t.text}</p>
                </div>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
