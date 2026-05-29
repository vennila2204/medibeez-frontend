import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — MediBeez" }] }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-3xl sm:text-4xl lg:text-5xl font-extrabold">Get in <span className="text-gradient-brand">touch</span></h1>
          <p className="mt-4 text-muted-foreground max-w-md">
            We'd love to hear from you. Reach out for partnerships, press or general questions.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-gradient-orange grid place-items-center text-white"><Mail className="h-5 w-5" /></div>hello@medibeez.com</div>
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-gradient-orange grid place-items-center text-white"><Phone className="h-5 w-5" /></div>+1 (555) 010-2026</div>
            <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-gradient-orange grid place-items-center text-white"><MapPin className="h-5 w-5" /></div>Global · Remote-first</div>
          </div>
        </div>

        <form className="bg-card p-8 rounded-3xl border border-border shadow-soft" onSubmit={(e) => e.preventDefault()}>
          <label className="text-sm font-medium">Name</label>
          <input className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <label className="text-sm font-medium mt-4 block">Email</label>
          <input type="email" className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <label className="text-sm font-medium mt-4 block">Message</label>
          <textarea rows={5} className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />
          <button className="mt-6 w-full py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow">Send Message</button>
        </form>
      </section>
    </Layout>
  );
}
