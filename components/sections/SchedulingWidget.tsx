import Link from "next/link";
import { FaClock } from "react-icons/fa";

export default function SchedulingWidget() {
  return (
    <section className="bg-background py-12">
      <div className="container-custom text-center">
        <h2 className="gradient-text text-3xl font-bold sm:text-4xl">Prefer to Schedule a Call?</h2>
        <p className="mt-3 text-muted-foreground">Pick a time that works for you.</p>

        <div className="glass mx-auto mt-8 max-w-2xl rounded-3xl border-white/10 bg-white/5 p-12 shadow-lg">
          <FaClock className="mx-auto h-16 w-16 text-primary" />
          <p className="mt-4 text-muted-foreground">Calendar integration placeholder</p>
          <p className="text-xs text-muted-foreground">
            Integrate Calendly, Cal.com, or similar scheduling tool in production.
          </p>
          <Link
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end bg-[length:220%_100%] bg-left px-6 py-3 text-sm font-semibold text-white shadow-lg transition-[background-position,transform] duration-300 hover:-translate-y-[1px] hover:bg-right"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

