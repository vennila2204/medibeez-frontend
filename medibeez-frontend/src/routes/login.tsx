import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — MediBeez" }] }),
  component: Login,
});

function Login() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-20 flex justify-center">
        <form className="bg-card p-8 rounded-3xl shadow-soft border border-border max-w-md w-full" onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-3xl font-bold">Login to <span className="text-gradient-brand">MediBeez</span></h1>
          <p className="mt-1 text-sm text-muted-foreground">Enter your credentials to access your account.</p>

          <label className="block mt-6 text-sm font-medium">Email</label>
          <input type="email" required className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary outline-none" placeholder="doctor@example.com" />

          <label className="block mt-4 text-sm font-medium">Password</label>
          <input type="password" required className="mt-1 w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary outline-none" placeholder="••••••••" />

          <div className="mt-3 flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Remember me</label>
            <a className="text-primary font-semibold">Forgot password?</a>
          </div>

          <button className="mt-6 w-full py-3 rounded-full bg-gradient-orange text-white font-semibold shadow-glow">Login</button>

          <p className="mt-5 text-sm text-center text-muted-foreground">
            New to MediBeez? <Link to="/signup" className="text-primary font-semibold">Sign up</Link>
          </p>
        </form>
      </section>
    </Layout>
  );
}
