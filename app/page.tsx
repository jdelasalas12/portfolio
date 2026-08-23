import Image from "next/image";
import ContactForm from "./components/ContactForm";

const projects = [
  {
    number: "01",
    title: "E-Commerce Platform",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A complete e-commerce platform with product management, authentication, shopping cart, checkout and an admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/project-1.jpg",
    link: "#",
  },
  {
    number: "02",
    title: "SaaS Analytics",
    category: "WEB APPLICATION",
    description:
      "A modern analytics dashboard that transforms complex business data into simple, actionable insights.",
    technologies: ["Next.js", "React", "Tailwind", "Chart.js"],
    image: "/project-2.jpg",
    link: "#",
  },
  {
    number: "03",
    title: "Booking Platform",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive booking platform with availability management, customer accounts and an intuitive reservation experience.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    image: "/project-3.jpg",
    link: "#",
  },
];

const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "Server Actions",
    ],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "VS Code", "Vercel", "Docker"],
  },
];

const experience = [
  {
    year: "2025 — Present",
    role: "Freelance Full-Stack Developer",
    description:
      "Building websites and web applications for businesses, startups and personal brands.",
  },
  {
    year: "2024 — 2025",
    role: "Frontend Developer",
    description:
      "Developed responsive interfaces and reusable components using React, Next.js and TypeScript.",
  },
  {
    year: "2023 — 2024",
    role: "Web Developer",
    description:
      "Created modern websites and internal tools while working with APIs, databases and deployment platforms.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f5]">
      {/* WORK */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">01 / Selected work</p>

            <h2 className="heading-lg">
              Things I&apos;ve
              <br />
              <span className="text-white/30">built.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-white/35">
            A selection of projects where design, technology and problem solving
            come together.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group overflow-hidden rounded-3xl"
            >
              <div className="grid lg:grid-cols-[1fr_0.7fr]">
                <div className="project-image relative aspect-[16/10] lg:aspect-auto lg:min-h-[500px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />

                  <div className="image-overlay" />

                  <div className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-12">
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-xs text-white/25">
                        {project.number}
                      </span>

                      <span className="arrow text-2xl text-white/40">↗</span>
                    </div>

                    <h3 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/40">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-12">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[10px] text-white/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#c8ff00]"
                    >
                      View project
                      <span className="arrow">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ABOUT */}
      <section id="about" className="border-y border-white/[0.07] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="eyebrow">02 / About me</p>
          </div>

          <div>
            <h2 className="text-3xl font-medium leading-[1.2] tracking-tight text-white sm:text-5xl">
              I believe good software should be{" "}
              <span className="text-white/30">
                simple, purposeful and enjoyable to use.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 text-sm leading-7 text-white/40 sm:grid-cols-2">
              <p>
                I&apos;m a full-stack developer who enjoys turning ideas and
                problems into practical digital products.
              </p>

              <p>
                From the first wireframe to production deployment, I care about
                performance, accessibility, maintainability and the details that
                make an interface feel great.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#c8ff00]"
            >
              Let&apos;s work together
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      </section>
      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="mb-16">
          <p className="eyebrow mb-5">03 / Capabilities</p>

          <h2 className="heading-lg">
            What I
            <br />
            <span className="text-white/30">work with.</span>
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-[#080808] p-7 transition hover:bg-[#101010] lg:p-8"
            >
              <span className="text-xs text-[#c8ff00]">0{index + 1}</span>

              <h3 className="mt-8 text-lg font-semibold">{skill.title}</h3>

              <ul className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/35 transition hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-y border-white/[0.07] bg-[#0d0d0d]"
      >
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow mb-5">04 / Experience</p>

              <h2 className="heading-md">
                My
                <br />
                <span className="text-white/30">journey.</span>
              </h2>
            </div>

            <div>
              {experience.map((item, index) => (
                <div
                  key={item.role}
                  className={`grid gap-6 py-8 sm:grid-cols-[160px_1fr] ${
                    index !== experience.length - 1
                      ? "border-b border-white/[0.08]"
                      : ""
                  }`}
                >
                  <p className="text-xs text-white/30">{item.year}</p>

                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-white/35">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT
      <section id="contact" className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-36 lg:px-8">
          <p className="eyebrow mb-8">05 / Contact</p>

          <h2 className="heading-xl max-w-5xl">
            LET&apos;S MAKE
            <br />
            <span className="text-white/30">SOMETHING</span>
            <br />
            <span className="accent">GREAT.</span>
          </h2>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-white/35">
                Have a project or opportunity?
              </p>

              <a
                href="mailto:your@email.com"
                className="mt-2 block text-xl font-medium transition hover:text-[#c8ff00] sm:text-2xl"
              >
                your@email.com
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact" className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8ff00]/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <p className="eyebrow mb-8">05 / Contact</p>

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="heading-lg">
                LET&apos;S MAKE
                <br />
                <span className="text-white/30">SOMETHING</span>
                <br />
                <span className="accent">GREAT.</span>
              </h2>

              <p className="mt-8 max-w-md text-sm leading-7 text-white/40">
                Have a project, idea, or opportunity? Send me a message and
                I&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-10 space-y-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Email
                  </p>

                  <a
                    href="mailto:nosjayd@gmail.com"
                    className="mt-2 block text-lg transition hover:text-[#c8ff00]"
                  >
                    nosjayd@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                    Location
                  </p>

                  <p className="mt-2 text-lg">Philippines 🇵🇭</p>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
