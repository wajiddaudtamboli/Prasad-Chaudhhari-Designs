import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Check,
  ChevronDown,
  ChefHat,
  ClipboardCheck,
  Clock3,
  Gem,
  Home,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  X
} from "lucide-react";

const contact = {
  whatsapp: "+91 98765 43210",
  phone: "+91 98765 43210",
  email: "hello@prasadchoudhharidesigns.com",
  address: "Pune, Maharashtra",
  instagram: "https://instagram.com/prasadchoudhharidesigns"
};

const navItems = [
  ["Work", "projects"],
  ["Packages", "packages"],
  ["Kitchen", "kitchen"],
  ["Process", "process"],
  ["Estimate", "estimate"],
  ["Contact", "contact"]
];

const trustBrands = ["Zeiss", "Tricentis", "Litens", "Privilege Biksons", "SSEPL", "Maxis"];

const images = {
  hero: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85",
  living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  villa: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  kitchen: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=85",
  penthouse: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  bedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
};

const packages = [
  {
    name: "Studio Edit",
    price: "For compact apartments",
    detail: "A focused interior refresh with layout direction, finishes, lighting, and a refined furniture plan.",
    points: ["Design consultation", "Material palette", "Furniture and lighting map"]
  },
  {
    name: "Signature",
    price: "For full homes",
    detail: "End-to-end residential interiors for apartments and villas, from concept to final styling.",
    points: ["Space planning", "Custom furniture", "90-120 day execution"]
  },
  {
    name: "Bespoke",
    price: "For villas and penthouses",
    detail: "Highly detailed homes with premium finishes, artisanal surfaces, and founder-led detailing.",
    points: ["Luxury specification", "Site coordination", "White-glove handover"]
  }
];

const projects = [
  {
    title: "Walnut Apartment",
    type: "3 BHK Residence, Pune",
    image: images.living,
    meta: "Warm walnut, soft stone, custom storage"
  },
  {
    title: "Penthouse Calm",
    type: "Penthouse Interior",
    image: images.penthouse,
    meta: "Open-plan living with champagne accents"
  },
  {
    title: "Villa Kitchen",
    type: "Modular Kitchen",
    image: images.kitchen,
    meta: "Precision cabinetry and layered lighting"
  }
];

const services = [
  ["Premium home interiors", Sofa],
  ["Villas and penthouses", Home],
  ["Modular kitchens", ChefHat],
  ["Renovation projects", ClipboardCheck],
  ["Furniture and styling", Sparkles],
  ["Lighting and material selection", Gem]
];

const process = [
  ["Discover", "We understand your home, habits, budget, and aspirations."],
  ["Define", "We create the concept, layout, palette, and investment direction."],
  ["Draft", "We detail drawings, finishes, furniture, lighting, and modular systems."],
  ["Execute", "We coordinate production, site work, quality checks, and timelines."],
  ["Handover", "We style, inspect, and hand over a home ready to live in."]
];

const faqs = [
  ["How long does a full home interior project take?", "Most residential projects are planned for a 90-120 day delivery window after design freeze, material approvals, and site readiness."],
  ["Do you take modular kitchen-only projects?", "Yes. Modular kitchens can be planned as a standalone scope with layout, shutters, hardware, countertop, lighting, and appliance coordination."],
  ["Can you work with my existing contractor?", "Yes, depending on the project scope. We can provide design direction and documentation, or handle execution through our preferred partners."],
  ["Is the estimate calculator a final quote?", "No. It gives an indicative range. Final pricing depends on site dimensions, finishes, storage quantity, hardware, civil work, and appliance choices."]
];

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
    >
      <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.34em] ${light ? "text-gold" : "text-beige"}`}>{eyebrow}</p>
      <h2 className={`font-heading text-4xl leading-tight md:text-6xl ${light ? "text-ivory" : "text-charcoal"}`}>{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 md:text-lg ${light ? "text-ivory/70" : "text-muted"}`}>{text}</p> : null}
    </motion.div>
  );
}

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-walnut/80 text-ivory backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => scrollToId("home")} className="flex items-center gap-3" aria-label="Prasad Choudhhari Designs home">
          <img src="/logo.svg" alt="Prasad Choudhhari Designs" className="h-12 w-20 rounded bg-ivory object-contain p-1" />
          <span className="hidden font-heading text-xl leading-none tracking-wide sm:block">
            Prasad Choudhhari
            <span className="block font-body text-[10px] uppercase tracking-[0.36em] text-gold">Designs</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 text-sm text-ivory/80 lg:flex">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => scrollToId(id)} className="transition hover:text-gold">
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 text-gold transition hover:border-gold hover:bg-gold hover:text-charcoal" aria-label="Call Prasad Choudhhari Designs">
            <Phone size={18} />
          </a>
          <button onClick={() => scrollToId("contact")} className="rounded-2xl bg-gold-gradient px-5 py-3 text-sm font-semibold text-charcoal shadow-glow transition hover:translate-y-[-1px] active:translate-y-0">
            Book Consultation
          </button>
        </div>

        <button onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 lg:hidden" aria-label="Open menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ivory/10 bg-walnut px-4 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => {
                  setOpen(false);
                  scrollToId(id);
                }}
                className="rounded-lg px-3 py-3 text-left text-ivory/80 hover:bg-ivory/10"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-walnut text-ivory md:min-h-[96vh] lg:min-h-[90vh]">
      <img src={images.hero} alt="Warm luxury living room interior" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(42,30,23,0.92),rgba(42,30,23,0.62),rgba(42,30,23,0.22))]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-walnut to-transparent" />

      <div className="relative mx-auto flex min-h-screen flex-col items-end justify-end md:min-h-[96vh] lg:min-h-[90vh] max-w-7xl px-4 pb-12 pt-24 sm:px-6 lg:px-8 lg:pb-16">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-5xl">
          <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-ivory/20 bg-ivory/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Pune Luxury Interiors
          </p>
          <h1 className="font-heading text-5xl leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[82px]">
            Homes designed with the same discipline we bring to the offices of Zeiss, Tricentis, and Litens.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/80 md:text-xl">
            Premium residential interiors. Designed in Pune. Delivered in 90-120 days. By Prasad Choudhhari Designs.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => scrollToId("contact")} className="inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-6 py-4 text-sm font-bold text-charcoal shadow-glow transition hover:translate-y-[-2px] active:translate-y-0">
              Tell us about your home <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToId("projects")} className="rounded-2xl border border-ivory/25 bg-ivory/10 px-6 py-4 text-sm font-semibold text-ivory backdrop-blur transition hover:border-gold hover:text-gold active:bg-ivory/20">
              See our work
            </button>
            <button onClick={() => scrollToId("estimate")} className="rounded-2xl border border-ivory/25 bg-ivory/10 px-6 py-4 text-sm font-semibold text-ivory backdrop-blur transition hover:border-gold hover:text-gold active:bg-ivory/20">
              Get Cost Estimate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="bg-walnut py-8 text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 border-y border-ivory/10 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Trusted discipline from commercial environments</p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-ivory/80 md:justify-end">
            {trustBrands.map((brand) => (
              <span key={brand}>{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <div className="overflow-hidden rounded-[28px] shadow-luxury">
            <img src={images.bedroom} alt="Soft bedroom interior with premium details" className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[520px]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-beige">About / Promise</p>
          <h2 className="font-heading text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            Founder-led interiors with discipline, restraint, and quiet detail.
          </h2>
          <p className="mt-6 text-lg leading-9 text-muted">
            Prasad Choudhhari Designs brings premium residential interiors to apartments, villas, penthouses, kitchens, and renovation projects. The promise is simple: define the vision, draft the details, execute with calm precision.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["90-120", "day delivery window"],
              ["Pune", "based design studio"],
              ["End-to-end", "home execution"]
            ].map(([value, label]) => (
              <div key={value} className="rounded-3xl border border-taupe bg-white/50 p-5">
                <p className="font-heading text-4xl text-walnut">{value}</p>
                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding bg-ivory-fade">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Featured Projects" title="Cinematic homes with warm material discipline." text="Dummy editorial imagery showing the direction: walnut textures, premium lighting, generous whitespace, and timeless residential calm." />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[28px] bg-white shadow-luxury">
                <div className="relative h-[350px] overflow-hidden sm:h-[400px]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-walnut/80 via-walnut/10 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-ivory">
                    <p className="text-xs uppercase tracking-[0.26em] text-gold">{project.type}</p>
                    <h3 className="mt-2 font-heading text-4xl">{project.title}</h3>
                    <p className="mt-2 text-sm text-ivory/80">{project.meta}</p>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="section-padding bg-walnut text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro light eyebrow="Packages" title="Choose the right level of intervention." text="Three premium engagement paths for compact apartments, full homes, and deeply custom villa or penthouse interiors." />
        <div className="grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.1}>
              <article className={`rounded-[24px] border p-7 ${index === 1 ? "border-gold bg-ivory text-charcoal shadow-glow" : "border-ivory/10 bg-ivory/10 text-ivory"}`}>
                <p className={`text-xs font-bold uppercase tracking-[0.3em] ${index === 1 ? "text-beige" : "text-gold"}`}>{item.price}</p>
                <h3 className="mt-4 font-heading text-4xl">{item.name}</h3>
                <p className={`mt-4 leading-8 ${index === 1 ? "text-muted" : "text-ivory/70"}`}>{item.detail}</p>
                <ul className="mt-7 space-y-4">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 shrink-0 text-gold" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kitchen() {
  return (
    <section id="kitchen" className="section-padding bg-ivory">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:gap-10 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-beige">Modular Kitchen</p>
          <h2 className="font-heading text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">Cabinetry, hardware, lighting, and flow designed as one system.</h2>
          <p className="mt-6 text-lg leading-9 text-muted">
            A premium kitchen is not just shutter finish. It is movement, storage logic, appliance alignment, counter durability, lighting temperature, and everyday ease.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["German-inspired storage logic", "Premium hardware choices", "Countertop and backsplash planning", "Appliance-ready layouts"].map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl border border-taupe bg-white/70 p-4">
                <ChefHat className="text-gold" size={20} />
                <span className="text-sm font-semibold text-charcoal">{point}</span>
              </div>
            ))}
          </div>
          <button onClick={() => scrollToId("contact")} className="mt-8 rounded-2xl bg-gold-gradient px-6 py-4 text-sm font-bold text-charcoal shadow-glow transition hover:translate-y-[-2px] active:translate-y-0">
            Get Kitchen Quote
          </button>
        </FadeIn>
        <FadeIn delay={0.12}>
          <img src={images.kitchen} alt="Luxury modular kitchen with warm lighting" className="h-[400px] w-full rounded-[28px] object-cover shadow-luxury sm:h-[480px] lg:h-[560px]" />
        </FadeIn>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-taupe/40 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([label, Icon], index) => (
            <FadeIn key={label} delay={index * 0.04}>
              <div className="flex items-center gap-4 rounded-3xl bg-ivory p-5 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-walnut text-gold">
                  <Icon size={21} />
                </span>
                <span className="font-semibold text-charcoal">{label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section-padding bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Process" title="Define. Draft. Execute." text="A calm five-step journey from first conversation to final handover." />
        <div className="grid gap-4 lg:grid-cols-5">
          {process.map(([title, text], index) => (
            <FadeIn key={title} delay={index * 0.08}>
              <article className="h-full rounded-[24px] border border-taupe bg-white/60 p-6">
                <span className="font-heading text-5xl text-gold">0{index + 1}</span>
                <h3 className="mt-4 font-heading text-3xl text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitments() {
  return (
    <section className="bg-walnut py-20 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [Clock3, "Timeline Clarity", "A planned 90-120 day execution window for full-home interiors after approvals."],
          [ShieldCheck, "Quality Control", "Material, finish, and site checks guided by detailed documentation."],
          [BadgeCheck, "Transparent Scope", "A clear design and execution scope before production begins."]
        ].map(([Icon, title, text], index) => (
          <FadeIn key={title} delay={index * 0.08}>
            <div className="rounded-[24px] border border-ivory/10 bg-ivory/10 p-7">
              <Icon className="text-gold" size={28} />
              <h3 className="mt-6 font-heading text-3xl">{title}</h3>
              <p className="mt-3 leading-8 text-ivory/70">{text}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const rows = [
    ["Design discipline", "Commercial-grade process applied to personal homes"],
    ["Material language", "Warm walnut, champagne metal, soft stone, and quiet luxury"],
    ["Founder involvement", "Design decisions guided by Prasad Choudhhari Designs"],
    ["Execution readiness", "Drawings, specifications, and site coordination aligned before build"]
  ];

  return (
    <section className="section-padding bg-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Why Choose Us" title="Luxury without visual noise." text="A residential interior studio for homeowners who want restraint, proportion, and clarity as much as beautiful finishes." />
        <div className="overflow-hidden rounded-[28px] border border-taupe bg-white shadow-luxury">
          {rows.map(([label, value], index) => (
            <div key={label} className="grid gap-3 border-b border-taupe p-6 last:border-b-0 md:grid-cols-[0.35fr_0.65fr] md:p-8">
              <p className="font-semibold text-charcoal">{label}</p>
              <p className="leading-8 text-muted">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstimateCalculator() {
  const [homeType, setHomeType] = useState("3 BHK");
  const [area, setArea] = useState(1400);
  const [finish, setFinish] = useState("Signature");
  const [kitchen, setKitchen] = useState(true);

  const estimate = useMemo(() => {
    const base = { "2 BHK": 1800, "3 BHK": 2200, Villa: 3000, Penthouse: 3400 }[homeType];
    const multiplier = { "Studio Edit": 0.72, Signature: 1, Bespoke: 1.42 }[finish];
    const kitchenAdd = kitchen ? 450000 : 0;
    const low = area * base * multiplier + kitchenAdd;
    const high = low * 1.32;
    return [low, high].map((value) =>
      new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
      }).format(value)
    );
  }, [area, finish, homeType, kitchen]);

  return (
    <section id="estimate" className="section-padding bg-walnut text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-gold">Cost Estimate Calculator</p>
          <h2 className="font-heading text-4xl leading-tight md:text-5xl lg:text-6xl">Start with an indicative investment range.</h2>
          <p className="mt-6 text-lg leading-9 text-ivory/70">
            Adjust the home type, area, finish level, and kitchen scope. The range is indicative and becomes precise after site measurements and material selection.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-[28px] border border-ivory/10 bg-ivory p-6 text-charcoal shadow-glow md:p-8">
            <div className="grid gap-6">
              <label>
                <span className="text-sm font-bold">Home type</span>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["2 BHK", "3 BHK", "Villa", "Penthouse"].map((item) => (
                    <button key={item} onClick={() => setHomeType(item)} className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition active:scale-95 ${homeType === item ? "border-gold bg-gold text-charcoal" : "border-taupe bg-white text-muted hover:border-gold"}`}>
                      {item}
                    </button>
                  ))}
                </div>
              </label>
              <label>
                <span className="flex items-center justify-between text-sm font-bold">
                  Carpet area <span className="font-body text-muted">{area} sq.ft.</span>
                </span>
                <input type="range" min="650" max="5000" step="50" value={area} onChange={(event) => setArea(Number(event.target.value))} className="mt-4 w-full accent-gold cursor-pointer" />
              </label>
              <label>
                <span className="text-sm font-bold">Finish level</span>
                <select value={finish} onChange={(event) => setFinish(event.target.value)} className="mt-3 w-full rounded-2xl border border-taupe bg-white px-4 py-4 text-sm text-charcoal outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20 cursor-pointer">
                  <option>Studio Edit</option>
                  <option>Signature</option>
                  <option>Bespoke</option>
                </select>
              </label>
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-taupe bg-white p-4 transition hover:border-gold">
                <span className="font-semibold text-charcoal">Include modular kitchen</span>
                <input type="checkbox" checked={kitchen} onChange={(event) => setKitchen(event.target.checked)} className="h-5 w-5 accent-gold cursor-pointer" />
              </label>
              <div className="rounded-[24px] bg-walnut p-6 text-ivory">
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-gold">
                  <Calculator size={17} /> Indicative range
                </p>
                <p className="mt-4 font-heading text-4xl md:text-5xl">{estimate[0]} - {estimate[1]}</p>
                <button onClick={() => scrollToId("contact")} className="mt-6 w-full rounded-2xl bg-gold-gradient px-5 py-3 text-sm font-bold text-charcoal transition hover:translate-y-[-2px] active:translate-y-0">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TestimonialsFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-padding bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-beige">Testimonials</p>
          <div className="rounded-[28px] bg-walnut p-8 text-ivory shadow-luxury">
            <div className="flex gap-1 text-gold">
              {[...Array(5)].map((_, index) => <Star key={index} size={18} fill="currentColor" />)}
            </div>
            <blockquote className="mt-6 font-heading text-4xl leading-tight">
              "The design felt premium without becoming loud. Every detail had a reason, from storage to lighting."
            </blockquote>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-ivory/60">Dummy Client, Pune</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-beige">FAQ</p>
          <div className="overflow-hidden rounded-[28px] border border-taupe bg-white">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="border-b border-taupe last:border-b-0">
                <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-charcoal">
                  {question}
                  <ChevronDown className={`shrink-0 text-gold transition ${open === index ? "rotate-180" : ""}`} />
                </button>
                {open === index ? <p className="px-6 pb-6 leading-8 text-muted">{answer}</p> : null}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-padding bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-gold">Lead Form / Contact</p>
          <h2 className="font-heading text-4xl leading-tight md:text-6xl">Tell us about your home.</h2>
          <p className="mt-6 text-lg leading-9 text-ivory/70">
            Share the basics and the studio will respond with the next steps for a consultation.
          </p>
          <div className="mt-8 space-y-4 text-ivory/80">
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-gold"><Phone size={18} /> {contact.phone}</a>
            <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} className="flex items-center gap-3 hover:text-gold"><MessageCircle size={18} /> {contact.whatsapp}</a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-gold"><ArrowRight size={18} /> {contact.email}</a>
            <p>{contact.address}</p>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="inline-flex text-gold hover:text-ivory">Instagram</a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form className="rounded-[28px] bg-ivory p-6 text-charcoal shadow-glow md:p-8" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input aria-label="Name" placeholder="Name" className="input" />
              <input aria-label="Phone" placeholder="Phone" className="input" />
              <input aria-label="Email" placeholder="Email" className="input sm:col-span-2" />
              <select aria-label="Home type" className="input">
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Modular kitchen</option>
              </select>
              <select aria-label="Budget" className="input">
                <option>Budget range</option>
                <option>Under Rs 15L</option>
                <option>Rs 15L - Rs 30L</option>
                <option>Rs 30L - Rs 60L</option>
                <option>Rs 60L+</option>
              </select>
              <textarea aria-label="Project details" placeholder="Tell us about your home, timeline, and preferred style" rows="5" className="input sm:col-span-2" />
            </div>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gold-gradient px-6 py-4 text-sm font-bold text-charcoal shadow-glow transition hover:translate-y-[-2px] active:translate-y-0">
              Book Consultation <ArrowRight size={18} />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-3">
        <a href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury" aria-label="WhatsApp">
          <MessageCircle size={22} />
        </a>
        <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-walnut text-gold shadow-luxury" aria-label="Call">
          <Phone size={20} />
        </a>
      </div>
      <button onClick={() => scrollToId("estimate")} className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-4 text-sm font-bold text-charcoal shadow-glow transition hover:translate-y-[-2px] active:translate-y-0">
        <Calculator size={18} /> Estimate
      </button>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-body text-charcoal">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <FeaturedProjects />
        <Packages />
        <Kitchen />
        <Services />
        <Process />
        <Commitments />
        <WhyChooseUs />
        <EstimateCalculator />
        <TestimonialsFaq />
        <Contact />
      </main>
      <footer className="bg-walnut px-4 py-8 text-center text-sm text-ivory/60">
        <img src="/logo.svg" alt="Prasad Choudhhari Designs" className="mx-auto mb-4 h-16 w-28 rounded bg-ivory object-contain p-1" />
        <p>Prasad Choudhhari Designs - Define. Draft. Execute.</p>
      </footer>
      <FloatingActions />
    </div>
  );
}
