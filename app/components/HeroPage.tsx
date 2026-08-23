import Image from "next/image";

export default function HeroPage() {
  return (
    <>
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8"
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute left-[35%] top-[15%] h-[400px] w-[400px] rounded-full bg-[#c8ff00]/[0.04] blur-[120px]" />

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
          <div className="relative z-10">
            <div className="status mb-8">
              <span className="status-dot" />
              Available for work
            </div>

            <p className="eyebrow mb-6">Full-Stack Developer · Philippines</p>

            <h1 className="heading-xl max-w-5xl">
              I BUILD
              <br />
              <span className="text-white/30">DIGITAL</span>
              <br />
              <span className="accent">PRODUCTS.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/45 sm:text-lg">
              I&apos;m a full-stack developer focused on building fast,
              accessible and beautiful digital experiences for the modern web.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn-accent">
                View my work
                <span>↗</span>
              </a>

              <a href="#contact" className="btn-outline">
                Contact me
              </a>
            </div>

            <div className="mt-14 flex gap-8 text-xs text-white/30">
              <div>
                <p className="text-2xl font-semibold text-white">3+</p>
                <p className="mt-1">Years experience</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">20+</p>
                <p className="mt-1">Projects built</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">100%</p>
                <p className="mt-1">Passion</p>
              </div>
            </div>
          </div>

          {/* PROFILE PHOTO */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-8 rounded-full bg-[#c8ff00]/[0.04] blur-[80px]" />

            <div className="profile-frame relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/profile.jpg"
                alt="Your Name"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-contain"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Based in
                  </p>
                  <p className="mt-1 text-sm font-medium">Philippines 🇵🇭</p>
                </div>

                <span className="rounded-full bg-[#47aa84] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-black">
                  Developer
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-[#111]/90 px-5 py-4 backdrop-blur-xl sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Currently
              </p>
              <p className="mt-1 text-sm font-medium text-[#47aa84]">
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
