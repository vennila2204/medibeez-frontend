import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Users, Clock, Star, ArrowRight, BookOpen, Download, CheckCircle2, PlayCircle } from "lucide-react";
import imgCme from "@/assets/module-cme.jpg";
import imgWebinar from "@/assets/module-webinar.jpg";
import imgResearch from "@/assets/news-research.jpg";
import imgCardio from "@/assets/news-cardiology.jpg";
import imgResources from "@/assets/module-resources.jpg";
import imgEndo from "@/assets/news-endocrinology.jpg";

export const Route = createFileRoute("/cme")({
  head: () => ({
    meta: [
      { title: "CME Courses — MediBeez" },
      { name: "description", content: "Industry-sponsored trending CME and CPD courses from top Medical Experts and Associations." },
    ],
  }),
  component: CME,
});

const filters = ["All", "Epidemiology", "Statistics", "Clinical Research", "Pharmacology", "Cardiology"] as const;
type Filter = typeof filters[number];

type Course = {
  title: string;
  category: Exclude<Filter, "All"> | "Genomics";
  image: string;
  cpd: string;
  description: string;
  instructor: string;
  level: string;
  rating: number;
  students: string;
  hours: number;
};

const courses: Course[] = [
  { category: "Statistics", image: imgResources, cpd: "Module 3 · CPD", title: "Elementary Statistics — A Hands-On Approach", description: "Fundamentals of medical statistics with applied examples.", instructor: "Dr. Emily Rodriguez", level: "Beginner", rating: 4.7, students: "2,850", hours: 7 },
  { category: "Clinical Research", image: imgResearch, cpd: "8/10 CPD", title: "Clinical Trial Design Fundamentals", description: "Learn clinical trial methodologies end-to-end.", instructor: "Dr. James Wilson", level: "Advanced", rating: 4.9, students: "4,210", hours: 12 },
  { category: "Cardiology", image: imgCardio, cpd: "8/12 CPD", title: "Advanced Cardiology Updates", description: "Latest advances and guidelines in cardiology.", instructor: "Dr. Robert Kim", level: "Advanced", rating: 5.0, students: "5,120", hours: 14 },
  { category: "Pharmacology", image: imgCme, cpd: "6/10 CPD", title: "Clinical Pharmacology Update", description: "Modern pharmacology essentials for clinicians.", instructor: "Dr. Anita Sharma", level: "Intermediate", rating: 4.8, students: "3,310", hours: 9 },
  { category: "Genomics", image: imgEndo, cpd: "10 CPD", title: "Genomics in Practice", description: "Translating genomics into everyday practice.", instructor: "Dr. M. Chen", level: "Intermediate", rating: 4.6, students: "2,108", hours: 11 },
  { category: "Epidemiology", image: imgWebinar, cpd: "5 CPD", title: "Epidemiology Essentials", description: "Core epidemiological concepts and tools.", instructor: "Dr. P. Owens", level: "Beginner", rating: 4.5, students: "1,890", hours: 6 },
];

type Enrollment = { courseTitle: string; progress: number };
const myEnrollments: Enrollment[] = [
  { courseTitle: "Elementary Statistics — A Hands-On Approach", progress: 100 },
  { courseTitle: "Clinical Trial Design Fundamentals", progress: 45 },
  { courseTitle: "Advanced Cardiology Updates", progress: 0 },
];

type Certificate = { title: string; date: string };
const certificates: Certificate[] = [
  { title: "Elementary Statistics — A Hands-On Approach", date: "Apr 12, 2026" },
];

const upcomingLive = [
  { title: "Clinical Pharmacology Update", date: "May 22, 2026 · 2:00 PM EST" },
  { title: "Genomics in Practice", date: "May 24, 2026 · 11:00 AM EST" },
];

const perks = [
  { icon: Award, title: "Accredited Certificates", text: "Globally recognised CME/CPD credits." },
  { icon: Users, title: "Expert Instructors", text: "Learn from leading clinicians and researchers." },
  { icon: BookOpen, title: "Interactive Learning", text: "Quizzes, case studies and live discussions." },
];

type Tab = "explore" | "my" | "certs";

function statusFromProgress(p: number) {
  if (p >= 100) return { label: "Completed", icon: CheckCircle2, cls: "bg-secondary text-secondary-foreground" };
  if (p > 0) return { label: "In Progress", icon: PlayCircle, cls: "bg-primary/10 text-primary" };
  return { label: "Not Started", icon: BookOpen, cls: "bg-muted text-muted-foreground" };
}

function CME() {
  const [tab, setTab] = useState<Tab>("explore");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? courses : courses.filter((c) => c.category === filter)),
    [filter],
  );

  const enrolled = useMemo(
    () => myEnrollments.map((e) => ({ ...e, course: courses.find((c) => c.title === e.courseTitle)! })).filter((e) => e.course),
    [],
  );

  return (
    <Layout>
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Live & On-demand</p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">Trending <span className="text-gradient-brand">CME & CPD</span> Courses</h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Industry-sponsored CME courses from top Medical Experts and Associations. Earn credits while enhancing your expertise.
          </p>
          <button onClick={() => setTab("explore")} className="mt-6 px-6 py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow">Explore More</button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-3 gap-3 mb-8">
          {([
            { id: "explore", label: "Explore Popular Courses" },
            { id: "my", label: "My Courses" },
            { id: "certs", label: "Certificates" },
          ] as { id: Tab; label: string }[]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 rounded-xl font-semibold border transition-all ${
                tab === t.id ? "bg-primary text-primary-foreground border-primary shadow-soft" : "border-border hover:border-primary hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "explore" && (
          <>
            <h2 className="text-3xl font-bold">Most Popular Courses</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    filter === f
                      ? "bg-secondary text-secondary-foreground border-secondary shadow-soft scale-105"
                      : "border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="mt-12 p-10 rounded-2xl bg-card border border-border text-center animate-fade-in">
                <p className="text-muted-foreground">No courses available in this category.</p>
              </div>
            ) : (
              <div key={filter} className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                {filtered.map((c) => (
                  <div key={c.title} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-soft transition group">
                    <div className="h-40 relative overflow-hidden">
                      <img src={c.image} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white text-primary text-xs font-bold">{c.category}</span>
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold">{c.cpd}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold leading-snug group-hover:text-primary transition">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{c.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{c.instructor} · {c.level}</p>
                      <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1 text-secondary"><Star className="h-3 w-3 fill-current" /> {c.rating}</span>
                        <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> {c.students}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {c.hours}h</span>
                      </div>
                      <button className="mt-4 w-full px-3 py-2 rounded-md bg-gradient-orange text-white font-semibold text-sm inline-flex items-center justify-center gap-1">
                        Enroll Now <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {tab === "my" && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold">My Courses</h2>
            <p className="mt-2 text-muted-foreground">Track your progress across enrolled courses.</p>
            {enrolled.length === 0 ? (
              <div className="mt-8 p-10 rounded-2xl bg-card border border-border text-center">
                <p className="text-muted-foreground">You haven't enrolled in any courses yet.</p>
              </div>
            ) : (
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolled.map(({ course, progress }) => {
                  const s = statusFromProgress(progress);
                  return (
                    <div key={course.title} className="rounded-2xl bg-card border border-border overflow-hidden hover:shadow-soft transition">
                      <div className="h-32 relative overflow-hidden">
                        <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 ${s.cls}`}>
                          <s.icon className="h-3 w-3" /> {s.label}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold leading-snug">{course.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{course.instructor}</p>
                        <div className="mt-4">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-semibold">{progress}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className="h-full bg-gradient-orange transition-all duration-500" style={{ width: `${progress}%` }} />
                          </div>
                        </div>
                        <button className="mt-4 w-full px-3 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm">
                          {progress >= 100 ? "Review" : progress > 0 ? "Continue" : "Start"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {tab === "certs" && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold">Certificates</h2>
            <p className="mt-2 text-muted-foreground">Your achievements from completed courses.</p>
            {certificates.length === 0 ? (
              <div className="mt-8 p-10 rounded-2xl bg-card border border-border text-center">
                <p className="text-muted-foreground">No certificates available.</p>
              </div>
            ) : (
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((c) => (
                  <div key={c.title} className="rounded-2xl bg-card border border-border p-6 hover:shadow-soft transition">
                    <div className="h-12 w-12 rounded-xl bg-gradient-orange grid place-items-center text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-bold leading-snug">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Completed on {c.date}</p>
                    <div className="mt-4 flex gap-2">
                      <button className="flex-1 px-3 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm">View</button>
                      <button className="flex-1 px-3 py-2 rounded-md bg-gradient-orange text-white font-semibold text-sm inline-flex items-center justify-center gap-1">
                        <Download className="h-4 w-4" /> Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      <section className="relative py-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />
          <div className="absolute bottom-0 -right-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary">Why MediBeez CME</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">A learning experience <span className="text-gradient-brand">built for clinicians</span></h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {/* Upcoming Live Sessions */}
            <div className="lg:col-span-2 group relative p-7 rounded-3xl bg-gradient-blue text-white overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-glow">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold">
                  <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" /> LIVE SOON
                </div>
                <h3 className="mt-4 text-2xl font-bold">Upcoming Live Sessions</h3>
                <p className="mt-1 text-white/80 text-sm">Reserve your seat — limited spots.</p>
                <ul className="mt-6 space-y-3">
                  {upcomingLive.map((u) => (
                    <li key={u.title} className="group/item p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15 hover:bg-white/15 hover:border-white/30 transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold leading-snug">{u.title}</h4>
                          <p className="mt-1 text-xs text-white/80 inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {u.date}</p>
                        </div>
                        <PlayCircle className="h-6 w-6 shrink-0 opacity-80 group-hover/item:scale-110 group-hover/item:opacity-100 transition-transform" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Perks */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-5">
              {perks.map((p, i) => (
                <div key={p.title} className="group relative p-7 rounded-3xl bg-card border border-border overflow-hidden hover:-translate-y-2 hover:border-secondary hover:shadow-glow transition-all duration-500">
                  <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${i % 2 ? "bg-primary/30" : "bg-brand-orange/30"}`} />
                  <div className="relative">
                    <div className={`h-14 w-14 rounded-2xl grid place-items-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ${i % 2 ? "bg-gradient-blue" : "bg-gradient-orange"}`}>
                      <p.icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold group-hover:text-secondary transition-colors">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Start Your Learning Journey Today</h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          Join thousands of medical professionals advancing their careers through our accredited CME courses.
        </p>
        <Link to="/signup" className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-brand text-white font-semibold shadow-glow">
          Explore All Courses <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  );
}
