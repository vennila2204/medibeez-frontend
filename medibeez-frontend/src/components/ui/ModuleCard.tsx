import { Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";

type Props = {
  img: string;
  tag: string;
  date?: string;
  meta?: string;
  title: string;
  excerpt?: string;
  to?: string;
  ctaLabel?: string;
};

export function ModuleCard({ img, tag, date, meta, title, excerpt, to = "/", ctaLabel = "Read more" }: Props) {
  return (
    <Link
      to={to as any}
      className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden hover:shadow-glow hover:border-secondary hover:-translate-y-2 transition-all duration-300 cursor-pointer"
    >


      <div className="relative h-44 overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-md">
          {tag}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        {(date || meta) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            {date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {date}
              </span>
            )}
            {meta && (
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> {meta}
              </span>
            )}
          </div>
        )}
        <h3 className="mt-2 text-lg font-bold leading-snug text-primary group-hover:underline">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
        )}
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          {ctaLabel} <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
