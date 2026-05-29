import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Calendar, Users, Play } from "lucide-react";
import imgWebinar from "@/assets/module-webinar.jpg";


export const Route = createFileRoute("/clinsights")({
  head: () => ({
    meta: [
      { title: "Clinsights — MediBeez" },
      { name: "description", content: "Expert workshops, live webinars and clinical insights for medical professionals." },
    ],
  }),
  component: Clinsights,
});

const featured = [
  { spec: "Neurology", date: "MAY 24", title: "Advances in Stroke Management", host: "Dr. Smith and others" },
  { spec: "Oncology", date: "MAY 27", title: "Precision Medicine: From Genotype to Bedside", host: "Dr. Marcos R." },
  { spec: "Cardiology", date: "JUN 02", title: "Modern Approaches to Heart Failure", host: "Dr. Robert Kim" },
];

const upcoming = [
  { tag: "Endocrinology", title: "Diabetes Care 2026", date: "Jun 05 · 4:00 PM", attendees: "1.2K" },
  { tag: "Pulmonology", title: "Asthma & COPD Updates", date: "Jun 08 · 3:00 PM", attendees: "980" },
  { tag: "Pediatrics", title: "Childhood Immunization Schedules", date: "Jun 11 · 5:00 PM", attendees: "1.5K" },
  { tag: "Surgery", title: "Minimally Invasive Procedures", date: "Jun 14 · 2:00 PM", attendees: "2.1K" },
  { tag: "Dermatology", title: "Atopic Dermatitis Management", date: "Jun 18 · 4:30 PM", attendees: "760" },
  { tag: "Technology", title: "Integrating AI into Cardiovascular Diagnostics", date: "Jun 21 · 1:00 PM", attendees: "1.8K" },
];

function Clinsights() {
  return (
    <Layout>
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Live Learning</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-extrabold">Explore Expert <span className="text-gradient-brand">Workshops & Webinars</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Interactive live and recorded webinars covering diverse medical topics, with renowned experts.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow">Browse Webinars</button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold">Featured Webinars</h2>
        <p className="text-muted-foreground">Join top medical experts in our exclusive live sessions.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {featured.map((w) => (
            <div key={w.title} className="rounded-2xl overflow-hidden bg-card border border-border hover:shadow-soft transition group">
              <div className="relative h-48 overflow-hidden">
                <img src={imgWebinar} alt={w.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-14 w-14 rounded-full bg-white/30 backdrop-blur grid place-items-center group-hover:scale-110 transition">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold">WEBINAR</span>
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold">{w.date}</span>
              </div>

              <div className="p-5">
                <span className="text-xs font-bold text-secondary uppercase">{w.spec}</span>
                <h3 className="mt-2 font-bold text-lg">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{w.host}</p>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold">View Details →</button>
                  <button className="px-3 py-2 rounded-md border border-border text-sm font-semibold inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-bold">Upcoming Webinars</h2>
              <p className="text-muted-foreground">Explore our comprehensive collection of expert-led sessions.</p>
            </div>
            <a className="text-primary font-semibold">View All →</a>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((u) => (
              <div key={u.title} className="p-5 rounded-2xl bg-card border border-border hover:border-secondary transition">
                <span className="text-xs font-bold uppercase text-secondary">{u.tag}</span>
                <h3 className="mt-2 font-bold">{u.title}</h3>
                <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" />{u.date}</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" />{u.attendees}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
