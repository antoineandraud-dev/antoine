type Props = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  subtitleClass?: string;
  titleClass?: string;
  eyebrow?: React.ReactNode;
  sizeClass?: string;
};

/** Centered section heading (H2 + optional paragraph) shared by every section. */
export function SectionHeading({ title, subtitle, subtitleClass = "", titleClass = "", eyebrow, sizeClass = "text-3xl sm:text-4xl" }: Props) {
  return (
    <div className="text-center mb-12">
      {eyebrow}
      <h2 className={`${sizeClass} font-extrabold text-brand-black tracking-tight ${titleClass}`}>
        {title}
      </h2>
      {subtitle && <p className={`text-brand-muted ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
}
