import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white">
        {icon ?? <span className="text-2xl">★</span>}
      </div>
      <h3 className="mb-3 text-xl">{title}</h3>
      <p className="text-sm text-neutral-600">{description}</p>
    </article>
  );
}

