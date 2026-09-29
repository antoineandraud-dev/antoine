import { Accent } from "@/components/ui/Accent";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FinalCta() {
  return (
    <section className="w-full py-28 bg-transparent relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-[100%] border-t-2 border-primary/60 shadow-[0_-20px_60px_rgba(255,87,34,0.35)] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1100px] h-[360px] rounded-[100%] border-t-2 border-primary shadow-[0_-25px_80px_rgba(255,87,34,0.5)] pointer-events-none" />
      <div className="relative z-10 max-w-3xl px-5">
        <Eyebrow size="md" ping className="mb-4">Passez à l&apos;action</Eyebrow>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
          Donnons vie à votre <Accent color="text-primary">prochain grand projet</Accent>.
        </h2>
        <p className="mt-4 font-body text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
          Réservez un échange de cadrage de 20 minutes pour évaluer le potentiel de croissance de votre interface web.
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button href="#contact" icon="arrow_forward" disc="dark" className="gap-3 px-8 py-4 text-sm shadow-2xl shadow-primary/40 hover:scale-105">
            Démarrer maintenant
          </Button>
        </div>
      </div>
    </section>
  );
}
