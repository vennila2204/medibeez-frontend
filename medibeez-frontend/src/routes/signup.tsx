import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — MediBeez" }] }),
  component: Signup,
});



function Signup() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 flex justify-center">
        <form className="bg-card p-8 rounded-3xl shadow-soft border border-border max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-bold">Create your <span className="text-gradient-brand">MediBeez</span> account</h1>
          <p className="mt-1 text-sm text-muted-foreground">Free for verified medical professionals.</p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div>
              <label className="block text-sm font-medium">First name</label>
              <input required className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium">Last name</label>
              <input required className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />
            </div>
          </div>

          <label className="block text-sm font-medium mt-4">Email</label>
          <input type="email" required className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />

          <label className="block text-sm font-medium mt-4">Specialty</label>
          <select className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary">
            <option>Cardiology</option><option>Endocrinology</option><option>Neurology</option><option>Oncology</option><option>Pediatrics</option><option>Other</option>
          </select>

          <label className="block text-sm font-medium mt-4">Password</label>
          <input type="password" required className="mt-1 w-full px-3 py-2.5 rounded-lg border border-border bg-background outline-none focus:border-primary" />

          <button className="mt-6 w-full py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow">Create Account</button>

          <p className="mt-5 text-sm text-center text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-semibold">Login</Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}

