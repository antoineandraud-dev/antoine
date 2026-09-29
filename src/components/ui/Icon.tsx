type IconProps = { name: string; className?: string };

/** Material Symbols Outlined glyph (same icon set as the Stitch design). */
export function Icon({ name, className = "" }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
