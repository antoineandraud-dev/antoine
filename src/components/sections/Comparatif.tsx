import { CompareSlider } from "./CompareSlider";

export function Comparatif() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="solution">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block mb-3 text-[11px] font-bold tracking-[0.2em] text-neutral-400 uppercase font-mono">
          Matrice comparative
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
          Travailler avec moi ou avec une agence ?
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
          Comparez les deux modèles en toute transparence. Choisissez l&apos;approche alignée sur la performance réelle,
          les délais et le retour sur investissement.
        </p>
      </div>
      <CompareSlider />
    </section>
  );
}
