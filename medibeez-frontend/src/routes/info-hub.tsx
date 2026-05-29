import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ModuleCard } from "@/components/ModuleCard";
import { Mic, Film, Image as ImageIcon, Video, Play } from "lucide-react";
import imgPodcast from "@/assets/module-podcast.jpg";
import imgResources from "@/assets/module-resources.jpg";
import imgWebinar from "@/assets/module-webinar.jpg";
import imgCardio from "@/assets/news-cardiology.jpg";
import imgResearch from "@/assets/news-research.jpg";
import imgPeds from "@/assets/news-pediatrics.jpg";
import imgEndo from "@/assets/news-endocrinology.jpg";
import imgCme from "@/assets/module-cme.jpg";

const infoImgs = [imgResources, imgCardio, imgResearch, imgPeds];
const slideImgs = [imgEndo, imgCme, imgWebinar, imgResearch];
const reelImgs = [imgWebinar, imgCardio, imgPodcast];


export const Route = createFileRoute("/info-hub")({
  head: () => ({
    meta: [
      { title: "INFO-HUB — MediBeez" },
      { name: "description", content: "Podcasts, infographics, slideshows and M-Reels for healthcare professionals." },
    ],
  }),
  component: InfoHub,
});

const podcasts = [
  { title: "Advances in Precision Medicine", host: "Dr Mahesh, Dr Hassan, Dr Marcos" },
  { title: "AI in Diagnostic Imaging", host: "Dr Sara Patel" },
  { title: "Innovations in Cardiology", host: "Dr Robert Kim" },
];
const infographics = [
  "Skin Care 101: A Comprehensive Guide to a Radiant Complexion",
  "Bone Health 101: Building Stronger Skeletons for Life",
  "Diabetes Management: Essential Guidelines",
  "Cardiovascular Health Metrics",
];
const slides = [
  "Medical Mysteries Unveiled: Solving Diagnostic Puzzles",
  "The Power of Prevention: Strategies for a Healthier Future",
  "Surgical Innovations: Latest Techniques",
  "Pediatric Care Excellence",
];
const reels = [
  { title: "Med Minute: Quick Insights on Drug Management", by: "Dr Prachi", views: "12.4K", time: "1:30" },
  { title: "Quick Guide to Hypertension", by: "Dr Lee", views: "8.7K", time: "1:45" },
  { title: "Emergency Medicine Essentials", by: "Dr Khan", views: "9.2K", time: "2:00" },
];

function Section({ id, icon: Icon, title, sub, children }: any) {
  return (
    <section id={id} className="container mx-auto px-4 py-14">
      <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
        <div>
          <div className="flex items-center gap-2 text-secondary"><Icon className="h-5 w-5" /><span className="text-xs font-bold uppercase tracking-wider">{sub}</span></div>
          <h2 className="text-3xl font-bold mt-1">{title}</h2>
        </div>
        <a className="text-primary font-semibold cursor-pointer">View All →</a>
      </div>
      {children}
    </section>
  );
}

function InfoHub() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-extrabold">MediBeez <span className="text-gradient-brand">INFO-HUB</span></h1>
          <p className="mt-4 text-muted-foreground">Beyond the Stethoscope — Conversations Shaping Healthcare's Future</p>
          <p className="mt-2 text-sm text-muted-foreground">500+ Expert Resources · 10K+ Medical Professionals · CME Accredited</p>
        </div>
      </section>

      <Section id="podcast" icon={Mic} sub="Podcasts" title="MediBeez Podcasts">
        <div className="grid md:grid-cols-3 gap-6">
          {podcasts.map((p, i) => (
            <div key={p.title} className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-soft transition group">
              <div className="relative h-44 overflow-hidden">
                <img src={imgPodcast} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" style={{ filter: i === 1 ? 'hue-rotate(20deg)' : i === 2 ? 'hue-rotate(-20deg)' : undefined }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent grid place-items-center">
                  <Play className="h-12 w-12 text-white drop-shadow-lg" />
                </div>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase text-secondary">Podcast</span>
                <h3 className="font-bold mt-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.host}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="infographics" icon={ImageIcon} sub="Infographics" title="Visualizing Medical Breakthroughs">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {infographics.map((t, i) => (
            <ModuleCard key={t} img={infoImgs[i % infoImgs.length]} tag="Infographic" title={t} ctaLabel="View" to="/info-hub" />
          ))}
        </div>
      </Section>

      <Section id="slideshows" icon={Film} sub="Slideshows" title="Innovations Unveiled">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {slides.map((t, i) => (
            <ModuleCard key={t} img={slideImgs[i % slideImgs.length]} tag="Slideshow" title={t} ctaLabel="Open" to="/info-hub" />
          ))}
        </div>
      </Section>

      <Section id="mreels" icon={Video} sub="M-Reels" title="Medical Mastery in Motion">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reels.map((r, i) => (
            <div key={r.title} className="relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-soft transition group">
              <div className="relative h-56 overflow-hidden">
                <img src={reelImgs[i % reelImgs.length]} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent grid place-items-center">
                  <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur grid place-items-center group-hover:scale-110 transition"><Play className="h-6 w-6 text-white" /></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold leading-snug">{r.title}</h3>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>By {r.by}</span><span>{r.views} · {r.time}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
