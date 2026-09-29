export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-10">
        <div>
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Reyhane Alizadeh
          </p>

          <p className="mt-1 text-[10px] text-white/15">
            Designed & built with Next.js
          </p>
        </div>

        <a
          href="#home"
          className="text-[9px] uppercase tracking-[0.3em] text-white/25 transition hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}