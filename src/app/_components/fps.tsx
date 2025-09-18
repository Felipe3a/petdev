export function Fps() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 text-center py-3 text-sm">
      <p className="opacity-70 hover:opacity-100 transition-opacity duration-300">
        © {new Date().getFullYear()} ADR System — Desenvolvido por{" "}
        <a
          href="https://wa.me/5511985079788?text=Olá vim pelo site ADR System e gostaria de mais informações"
          target="_blank"
          className="text-green-400 hover:text-green-300 font-semibold"
           translate="no"
        >
          FPS<i>coders</i>
        </a>
      </p>
    </footer>
  );
}
