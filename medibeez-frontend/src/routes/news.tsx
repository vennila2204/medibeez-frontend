import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Layout } from "@/components/Layout";
import { ModuleCard } from "@/components/ModuleCard";
import { Search, Filter } from "lucide-react";
import imgCardio from "@/assets/news-cardiology.jpg";
import imgPeds from "@/assets/news-pediatrics.jpg";
import imgEndo from "@/assets/news-endocrinology.jpg";
import imgResearch from "@/assets/news-research.jpg";
import imgWebinar from "@/assets/module-webinar.jpg";
import imgResources from "@/assets/module-resources.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — MediBeez" },
      { name: "description", content: "Latest medical news, clinical updates, research, guidelines, case studies and technology." },
    ],
  }),
  component: News,
});

type Category =
  | "Clinical Updates"
  | "Research"
  | "CME Updates"
  | "Guidelines"
  | "Case Studies"
  | "Technology";

const tabs: ("All" | Category)[] = [
  "All",
  "Clinical Updates",
  "Research",
  "CME Updates",
  "Guidelines",
  "Case Studies",
  "Technology",
];

type Article = {
  title: string;
  category: Category;
  tag: string;
  date: string;
  read: string;
  excerpt: string;
  img: string;
};

const articles: Article[] = [
  { category: "Clinical Updates", tag: "Cardiology", date: "May 12, 2026", title: "Dabigatran 110 mg versus 150 mg for Stroke Prevention", excerpt: "Comparative analysis on efficacy and bleeding risk in atrial fibrillation patients across multiple cohorts.", read: "7 min", img: imgCardio },
  { category: "Research", tag: "Hepatology", date: "May 09, 2026", title: "Statins could reduce liver cancer in patients with chronic liver disease", excerpt: "Large observational cohort suggests a meaningful reduction in HCC incidence among statin users.", read: "5 min", img: imgResearch },
  { category: "CME Updates", tag: "Endocrinology", date: "May 06, 2026", title: "Insulin Icodec: A once-weekly basal insulin analogue", excerpt: "Phase 3 evidence on glycemic control and patient adherence compared with daily basal regimens.", read: "6 min", img: imgEndo },
  { category: "Clinical Updates", tag: "Pediatrics", date: "May 02, 2026", title: "Antibiotic prophylaxis in infants", excerpt: "Investigator-led RCT across multiple centers reports key findings on neonatal infection rates.", read: "4 min", img: imgPeds },
  { category: "Research", tag: "HIV", date: "Apr 28, 2026", title: "Prevention of CVD in HIV patients", excerpt: "Phase 3 trial administered pitavastatin showing reduction in major cardiovascular events.", read: "5 min", img: imgResources },
  { category: "Technology", tag: "Radiology", date: "Apr 24, 2026", title: "AI assisted radiology — a randomized study", excerpt: "Deep-learning triage shows substantial improvements in detection sensitivity for chest CT.", read: "8 min", img: imgWebinar },
  { category: "Guidelines", tag: "Cardiology", date: "Apr 20, 2026", title: "AHA 2026 Guidelines for Hypertension Management", excerpt: "Updated evidence-based recommendations refining BP targets and first-line pharmacotherapy.", read: "6 min", img: imgCardio },
  { category: "Case Studies", tag: "Endocrinology", date: "Apr 17, 2026", title: "Atypical presentation of Cushing's syndrome", excerpt: "A challenging case report exploring diagnostic workup and multidisciplinary management.", read: "5 min", img: imgEndo },
  { category: "CME Updates", tag: "Webinar", date: "Apr 14, 2026", title: "Live CME: Updates in Diabetic Nephropathy", excerpt: "Earn 1 CME credit by attending this expert-led session on renal protection strategies.", read: "60 min", img: imgWebinar },
  { category: "Technology", tag: "Digital Health", date: "Apr 10, 2026", title: "Wearables for arrhythmia detection in primary care", excerpt: "Real-world data on smartwatch ECG screening across community clinics.", read: "6 min", img: imgResources },
];


function News() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active],
  );

  return (
    <Layout>
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">MediBeez <span className="text-gradient-brand">News</span></h1>
          <p className="mt-3 text-muted-foreground">Verified clinical updates, research and trending topics.</p>

          <div className="mt-8 max-w-3xl mx-auto bg-card rounded-2xl shadow-soft p-3 flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input className="flex-1 bg-transparent py-3 outline-none" placeholder="Search medical articles, doctors, research, and updates..." />
            <button className="px-5 py-2.5 rounded-xl bg-gradient-orange text-white font-semibold inline-flex items-center gap-2">
              <Filter className="h-4 w-4" /> Apply
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter articles by category">
          {tabs.map((t) => {
            const isActive = active === t;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-orange text-white border-transparent shadow-glow scale-105"
                    : "border-border hover:border-primary hover:text-primary hover:-translate-y-0.5"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {filtered.length === 0 ? (
              <div className="mt-12 text-center py-16 rounded-2xl border border-dashed border-border bg-card/50">
                <p className="text-lg font-semibold">No articles available in this category.</p>
                <p className="mt-1 text-sm text-muted-foreground">Please check back soon — fresh content is on its way.</p>
              </div>
            ) : (
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
                  >
                    <ModuleCard img={a.img} tag={a.tag} date={a.date} meta={a.read} title={a.title} excerpt={a.excerpt} to="/news" />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 p-8 rounded-2xl bg-gradient-blue text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Earn CME Credits</h3>
            <p className="text-white/85">Read verified articles and earn continuing medical education credits.</p>
          </div>
          <a href="/cme" className="px-6 py-3 rounded-full bg-brand-orange font-semibold hover:opacity-90">View CME Courses</a>
        </div>
      </section>
    </Layout>
  );
}
