export default function FooterPage() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Jayson De las Alas. All rights reserved.</p>

        <a href="#home" className="transition hover:text-[#c8ff00]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
