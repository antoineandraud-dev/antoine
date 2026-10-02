"use client";

import React, { useEffect } from "react";

const ICONS: Record<string, React.ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  users: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6" /></>,
  userplus: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M19 8v6M16 11h6" /></>,
  usercheck: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0M16 11l2 2 4-4" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  right: <path d="m9 6 6 6-6 6" />,
  left: <path d="m15 6-6 6 6 6" />,
  up: <path d="M12 19V5M5 12l7-7 7 7" />,
  dn: <path d="M12 5v14M5 12l7 7 7-7" />,
  check: <path d="m5 12 5 5 9-10" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  alert: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17.5v.5" /></>,
  trash: <path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" />,
  copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V6a2 2 0 0 1 2-2h8" /></>,
  list: <path d="M8 6h13M8 12h13M8 18h13M3 6h.5M3 12h.5M3 18h.5" />,
  grid: <><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></>,
  kanban: <><rect x="4" y="4" width="5" height="16" rx="1" /><rect x="11" y="4" width="5" height="10" rx="1" /><rect x="18" y="4" width="2" height="6" /></>,
  table: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M3 15h18M10 4v16" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  dashboard: <><rect x="3" y="3" width="8" height="10" rx="1" /><rect x="13" y="3" width="8" height="6" rx="1" /><rect x="13" y="11" width="8" height="10" rx="1" /><rect x="3" y="15" width="8" height="6" rx="1" /></>,
  posts: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3Z" />,
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  message: <path d="M4 5h16v11H9l-5 4V5Z" />,
  sliders: <path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" />,
  send: <path d="M21 3 3 10l7 3 3 7 8-17ZM10 13l11-10" />,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></>,
  reply: <path d="M9 7 4 12l5 5M4 12h10a6 6 0 0 1 6 6" />,
  flag: <path d="M5 21V4M5 4h12l-2 4 2 4H5" />,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />,
  link: <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />,
};

export function Ic({ i, size = 16 }: { i: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ flex: "none" }}
    >
      {ICONS[i] ?? <circle cx="12" cy="12" r="3" />}
    </svg>
  );
}

const hoverBg = (bg: string, hover: string) => ({
  onMouseEnter: (e: any) => (e.currentTarget.style.background = hover),
  onMouseLeave: (e: any) => (e.currentTarget.style.background = bg),
});

function Button({ variant = "primary", size, onClick, disabled, children }: any) {
  const h = size === "sm" ? 32 : 40;
  const v = ({
    primary: { bg: "var(--color-primary)", hov: "var(--color-primary-hover)", fg: "#fff", ring: "none" },
    secondary: { bg: "#fff", hov: "var(--lc-blue-50)", fg: "var(--color-primary)", ring: "var(--ring-primary)" },
    tertiary: { bg: "transparent", hov: "var(--lc-gray-100)", fg: "var(--color-primary)", ring: "none" },
  } as Record<string, any>)[variant];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...(disabled ? {} : hoverBg(v.bg, v.hov))}
      style={{
        height: h,
        padding: "0 16px",
        border: 0,
        borderRadius: 24,
        background: disabled ? "var(--lc-gray-200)" : v.bg,
        color: disabled ? "var(--text-disabled)" : v.fg,
        boxShadow: disabled ? "none" : v.ring,
        font: "600 14px/1 var(--font-sans)",
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

const optVal = (o: any) => (typeof o === "string" ? o : o.value);
const optLabel = (o: any) => (typeof o === "string" ? o : o.label);

const fieldBox: React.CSSProperties = {
  height: 40,
  border: 0,
  borderRadius: 8,
  boxShadow: "var(--ring-default)",
  padding: "0 12px",
  background: "#fff",
  width: "100%",
  font: "var(--text-body-regular)",
};
const focusIn = (e: any) => (e.currentTarget.style.boxShadow = "inset 0 0 0 2px var(--color-primary)");
const focusOut = (e: any, err?: string) =>
  (e.currentTarget.style.boxShadow = err ? "inset 0 0 0 2px var(--color-accent)" : "var(--ring-default)");

function Field({ label, hint, error, children }: any) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0 }}>
      {label && <span style={{ font: "var(--text-body)" }}>{label}</span>}
      {children}
      {(error || hint) && (
        <span style={{ font: "var(--text-caption)", color: error ? "var(--color-accent)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </label>
  );
}

function Input({ label, hint, error, type = "text", placeholder, value, onChange }: any) {
  return (
    <Field label={label} hint={hint} error={error}>
      <input
        type={type}
        placeholder={placeholder}
        value={value ?? ""}
        onChange={onChange}
        onFocus={focusIn}
        onBlur={(e) => focusOut(e, error)}
        style={{ ...fieldBox, outline: "none", boxShadow: error ? "inset 0 0 0 2px var(--color-accent)" : "var(--ring-default)" }}
      />
    </Field>
  );
}

function Select({ label, value, options = [], onChange, ...rest }: any) {
  return (
    <Field label={label}>
      <select
        aria-label={rest["aria-label"]}
        value={value}
        onChange={onChange}
        onFocus={focusIn}
        onBlur={(e) => focusOut(e)}
        style={{ ...fieldBox, outline: "none" }}
      >
        {options.map((o: any) => (
          <option key={optVal(o)} value={optVal(o)}>
            {optLabel(o)}
          </option>
        ))}
      </select>
    </Field>
  );
}

function Tag({ selected, onClick, children }: any) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={!!selected}
      style={{
        height: 32,
        padding: "0 12px",
        border: 0,
        borderRadius: 16,
        font: "var(--text-body)",
        background: selected ? "var(--color-primary)" : "#fff",
        color: selected ? "#fff" : "var(--text-primary)",
        boxShadow: selected ? "none" : "var(--ring-default)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}

function Badge({ tone = "neutral", children }: any) {
  const t: Record<string, [string, string]> = {
    neutral: ["var(--lc-gray-100)", "var(--text-primary)"],
    brand: ["var(--lc-blue-50)", "var(--lc-blue-700)"],
    solid: ["var(--lc-blue-700)", "#fff"],
    success: ["#e3f4e8", "var(--color-success)"],
    accent: ["#fde8e6", "var(--color-accent)"],
  };
  const [bg, fg] = t[tone] || t.neutral;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 20,
        padding: "0 8px",
        borderRadius: 10,
        background: bg,
        color: fg,
        font: "600 12px/1 var(--font-sans)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Tabs({ items = [], value, onChange }: any) {
  return (
    <div role="tablist" style={{ display: "flex", gap: 4 }}>
      {items.map((it: any) => {
        const on = it.value === value;
        return (
          <button
            key={it.value}
            role="tab"
            type="button"
            aria-selected={on}
            onClick={() => onChange?.(it.value)}
            style={{
              height: 48,
              padding: "0 12px",
              border: 0,
              background: "transparent",
              font: "var(--text-body)",
              whiteSpace: "nowrap",
              color: on ? "var(--color-primary)" : "var(--text-muted)",
              boxShadow: on ? "inset 0 -2px 0 var(--color-primary)" : "none",
            }}
          >
            {it.label}
            {it.count != null && <span style={{ marginLeft: 6, color: "var(--text-muted)" }}>{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

function Switch({ checked, onChange, label }: any) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
      <button
        type="button"
        role="switch"
        aria-checked={!!checked}
        onClick={() => onChange?.(!checked)}
        style={{
          width: 40,
          height: 24,
          padding: 2,
          border: 0,
          borderRadius: 12,
          background: checked ? "var(--color-primary)" : "var(--lc-gray-400)",
          display: "flex",
          justifyContent: checked ? "flex-end" : "flex-start",
        }}
      >
        <span style={{ width: 20, height: 20, borderRadius: 10, background: "#fff" }} />
      </button>
      {label && <span style={{ font: "var(--text-body)" }}>{label}</span>}
    </label>
  );
}

function Dialog({ open, title, onClose, width = 480, children }: any) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,.6)" }} />
      <div
        role="dialog"
        aria-label={title}
        style={{ position: "relative", width: Number(width), maxWidth: "100%", maxHeight: "100%", overflowY: "auto", background: "#fff", borderRadius: 12, padding: 24, boxShadow: "var(--shadow-elevated)", display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <h2 style={{ font: "var(--text-title)" }}>{title}</h2>
          <button type="button" aria-label="Fermer" onClick={onClose} style={{ width: 32, height: 32, border: 0, borderRadius: 16, background: "transparent", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
            <Ic i="x" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Toast({ message, tone = "success", action, onAction, onClose }: any) {
  return (
    <div
      role="status"
      style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 48, padding: "8px 8px 8px 16px", borderRadius: 8, background: "#1d2226", color: "#fff", boxShadow: "var(--shadow-elevated)", maxWidth: 360 }}
    >
      <span style={{ color: tone === "success" ? "#7fd39a" : "#fff", display: "inline-flex" }}>
        <Ic i={tone === "success" ? "check" : "alert"} />
      </span>
      <span style={{ flex: 1, font: "var(--text-body)" }}>{message}</span>
      {action && (
        <button type="button" onClick={onAction} style={{ border: 0, background: "transparent", color: "#8ec5ff", font: "600 14px/1 var(--font-sans)", padding: "8px" }}>
          {action}
        </button>
      )}
      <button type="button" aria-label="Fermer" onClick={onClose} style={{ width: 32, height: 32, border: 0, borderRadius: 16, background: "transparent", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", padding: 0 }}>
        <Ic i="x" size={14} />
      </button>
    </div>
  );
}

export const COMPONENTS: Record<string, React.ComponentType<any>> = {
  Button, Input, Select, Tag, Badge, Tabs, Switch, Dialog, Toast,
};
