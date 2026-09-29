import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  className?: string;
  /** Icon shown after the label. */
  icon?: string;
  /** Wrap the icon in a small round disc (hero / header / final CTA). */
  disc?: "light" | "dark";
  iconSize?: string;
  type?: "button" | "submit";
};

export function Button({ href, children, className = "", icon, disc, iconSize = "text-[16px]", type }: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon && disc && (
        <span className={`w-6 h-6 rounded-full ${disc === "light" ? "bg-white/20" : "bg-black/25"} flex items-center justify-center`}>
          <Icon name={icon} className={iconSize} />
        </span>
      )}
      {icon && !disc && <Icon name={icon} className={iconSize} />}
    </>
  );
  const base =
    "inline-flex items-center bg-primary hover:bg-primary-focus text-white font-display font-semibold uppercase tracking-wider rounded-full transition-all duration-300";
  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={`${base} ${className}`}>
      {content}
    </button>
  );
}
