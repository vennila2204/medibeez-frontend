import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Users, Lightbulb, Award, MessageSquare, Video, BookOpen, Sparkles } from "lucide-react";
import { Layout } from "@/components/ui/Layout";
import { Bee, RoamingBee } from "@/components/ui/Bee";
import { ModuleCard } from "@/components/ui/ModuleCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediBeez — Unlock a World of Medical Expertise" },
      { name: "description", content: "Revolutionary networking platform for doctors to stay updated, connect, collaborate and grow professionally." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Users, title: "Professional Networking", text: "Connect with doctors from various specialties, fostering collaborations, referrals and mutual learning." },
  { icon: Lightbulb, title: "Expert Insights", text: "Stay updated with the latest medical advancements, shared by experts in the field." },
  { icon: Award, title: "Sponsored CME/CPD", text: "Access a plethora of learning modules to expand your knowledge base and earn credit points." },
  { icon: MessageSquare, title: "Case Discussions", text: "Discuss real cases with peers and specialists to sharpen clinical decision-making." },
  { icon: Video, title: "Online Webinars", text: "Live and recorded sessions with renowned experts across every medical domain." },
  { icon: BookOpen, title: "Resources Galore", text: "Podcasts, infographics, slideshows and M-Reels — all in one hub." },
];

const news = [
  { tag: "Cardiology", date: "Apr 28, 2026", read: "4 min", title: "American Heart Association updates", excerpt: "A consolidated new evidence-based update was released by the AHA last month. The guidelines were extended...", img: "/placeholder.svg" },
  { tag: "Pediatrics", date: "Apr 22, 2026", read: "5 min", title: "Antibiotic prophylaxis in infants", excerpt: "An investigator-led randomized controlled open-label trial across multiple centers studied that...", img: "/placeholder.svg" },
  { tag: "Endocrinology", date: "Apr 15, 2026", read: "6 min", title: "Insulin Icodec: A basal insulin analogue", excerpt: "A recent report released the effects of a comparative study between once-weekly basal insulin analogue...", img: "/placeholder.svg" },
  { tag: "Research", date: "Apr 10, 2026", read: "5 min", title: "Prevention of CVD in HIV patients", excerpt: "HIV brings an increased risk of cardiovascular diseases and the phase 3 trial administered pitavastatin...", img: "/placeholder.svg" },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative honeycomb-bg overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
              <Sparkles className="h-4 w-4" /> For Doctors, By Doctors
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05]">
              Unlock a World of <span className="text-gradient-brand">Medical Expertise</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg lg:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              A revolutionary online networking platform designed to revolutionise how doctors stay updated, connect, collaborate, and grow professionally.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/signup" className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-orange text-white text-base sm:text-lg font-semibold shadow-glow hover:opacity-90 transition">
                Get Started <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-primary text-primary text-base sm:text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition">
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-30" />
            <img src="/placeholder.svg" alt="Doctors collaborating on MediBeez" className="relative rounded-3xl shadow-glow w-full" />
            <Bee className="absolute -top-6 -right-6" size={96} />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden py-20">
        {/* Decorative blurred background */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-orange/30 blur-3xl" />
          <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute inset-0 honeycomb-bg opacity-40" />
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Connect · Update · Collaborate</p>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold">Everything you need with <span className="text-gradient-brand">MediBeez</span></h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group relative p-7 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-secondary hover:shadow-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="h-12 w-12 rounded-xl bg-gradient-orange grid place-items-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold group-hover:text-secondary transition-colors">{f.title}</h3>
                <p className="mt-2 text-muted-foreground">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Stay up-to-date with <span className="text-primary">Global Healthcare</span></h2>
              <p className="mt-2 text-muted-foreground">MediBeez News — the best place to read latest insights and trends.</p>
            </div>
            <Link to="/news" className="text-primary font-semibold hover:underline">View all news →</Link>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((a) => (
              <ModuleCard key={a.title} img={a.img} tag={a.tag} date={a.date} meta={a.read} title={a.title} excerpt={a.excerpt} to="/news" />
            ))}
          </div>
        </div>
      </section>

      {/* CME CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-14 text-white text-center min-h-[360px]">
          <RoamingBee className="absolute top-4 left-6 z-10" size={64} />
          <RoamingBee className="absolute bottom-4 right-6 z-10" size={56} />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Ready to join our community?</h2>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Be part of a global network of medical professionals dedicated to advancing healthcare through collaboration and continuous learning.
          </p>
          <Link to="/signup" className="mt-7 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-primary font-bold hover:bg-accent transition">
            Get Started Today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}