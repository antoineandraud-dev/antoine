"use client";

import React from "react";
import { COMPONENTS, Ic } from "./components";

/** Minimal stand-in for the design tool's DCLogic base class. */
export class DCLogic {
  state: any = {};
  private listeners = new Set<() => void>();
  setState(patch: any) {
    const next = typeof patch === "function" ? patch(this.state) : patch;
    this.state = { ...this.state, ...next };
    this.listeners.forEach((l) => l());
  }
  subscribe(l: () => void) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  }
  renderVals(): Record<string, any> {
    return {};
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

type Scope = Record<string, any>;

const EXPR = /\{\{\s*([\w$.]+)\s*\}\}/g;
const WHOLE = /^\s*\{\{\s*([\w$.]+)\s*\}\}\s*$/;

const lookup = (path: string, scope: Scope) => {
  let v: any = scope;
  for (const k of path.split(".")) {
    if (v == null) return undefined;
    v = v[k];
  }
  return v;
};

const interp = (s: string, scope: Scope) =>
  s.replace(EXPR, (_, p) => {
    const v = lookup(p, scope);
    return v == null ? "" : String(v);
  });

const camel = (p: string) =>
  p.replace(/^-(\w)/, (_, c) => c.toUpperCase()).replace(/-(\w)/g, (_, c) => c.toUpperCase());

const parseStyle = (css: string) => {
  const o: Record<string, string> = {};
  css
    .split(";")
    .map((d) => d.trim())
    .filter(Boolean)
    .forEach((d) => {
      const i = d.indexOf(":");
      if (i > 0) o[camel(d.slice(0, i).trim())] = d.slice(i + 1).trim();
    });
  return o;
};

const EVENTS: Record<string, string> = {
  onclick: "onClick",
  onchange: "onChange",
  onkeydown: "onKeyDown",
  ondragstart: "onDragStart",
  ondragover: "onDragOver",
  ondrop: "onDrop",
  onclose: "onClose",
  onaction: "onAction",
};
const ATTRS: Record<string, string> = { tabindex: "tabIndex", for: "htmlFor", colspan: "colSpan" };

/** Apply a hover/focus style on enter and restore it on leave. */
const withPseudo = (props: any, hover?: Record<string, string>, focus?: Record<string, string>) => {
  const wrap = (style: Record<string, string>, on: string, off: string) => {
    const saved = new WeakMap<Element, Record<string, string>>();
    const prevOn = props[on];
    const prevOff = props[off];
    props[on] = (e: any) => {
      const el = e.currentTarget as HTMLElement;
      const s: Record<string, string> = {};
      for (const k of Object.keys(style)) {
        s[k] = (el.style as any)[k];
        (el.style as any)[k] = style[k];
      }
      saved.set(el, s);
      prevOn?.(e);
    };
    props[off] = (e: any) => {
      const el = e.currentTarget as HTMLElement;
      const s = saved.get(el);
      if (s) for (const k of Object.keys(s)) (el.style as any)[k] = s[k];
      prevOff?.(e);
    };
  };
  if (hover) wrap(hover, "onMouseEnter", "onMouseLeave");
  if (focus) wrap(focus, "onFocus", "onBlur");
};

function build(node: Node, scope: Scope, key: string | number): React.ReactNode {
  if (node.nodeType === 3) {
    const t = node.textContent || "";
    if (!t.trim() && t.includes("\n")) return null;
    return interp(t, scope);
  }
  if (node.nodeType !== 1) return null;
  const el = node as Element;
  const tag = el.tagName.toLowerCase();
  const kids = (s: Scope) => Array.from(el.childNodes).map((c, i) => build(c, s, i));

  if (tag === "sc-if") {
    const m = el.getAttribute("value")!.match(WHOLE);
    const v = m ? lookup(m[1], scope) : false;
    return v ? <React.Fragment key={key}>{kids(scope)}</React.Fragment> : null;
  }
  if (tag === "sc-for") {
    const list = lookup(el.getAttribute("list")!.match(WHOLE)![1], scope) || [];
    const as = el.getAttribute("as")!;
    return (
      <React.Fragment key={key}>
        {(list as any[]).map((item, i) => (
          <React.Fragment key={i}>{kids({ ...scope, [as]: item })}</React.Fragment>
        ))}
      </React.Fragment>
    );
  }

  const props: any = { key };
  let hover: Record<string, string> | undefined;
  let focus: Record<string, string> | undefined;
  for (const a of Array.from(el.attributes)) {
    const name = a.name;
    if (name.startsWith("hint-") || name === "component-from-global-scope" || name === "name" && tag === "dc-import") continue;
    const whole = a.value.match(WHOLE);
    const val = whole ? lookup(whole[1], scope) : interp(a.value, scope);
    if (name === "style") props.style = parseStyle(interp(a.value, scope));
    else if (name === "style-hover") hover = parseStyle(a.value);
    else if (name === "style-focus") focus = parseStyle(a.value);
    else if (EVENTS[name]) props[EVENTS[name]] = val;
    else if (name === "draggable") props.draggable = a.value === "true";
    else props[ATTRS[name] || name] = val;
  }

  if (tag === "dc-import") {
    return <Ic key={key} i={props.i} size={props.size ? Number(props.size) : 16} />;
  }
  if (tag === "x-import") {
    const Comp = COMPONENTS[el.getAttribute("component-from-global-scope")!.split(".").pop()!];
    if (!Comp) return null;
    delete props.key;
    return (
      <Comp key={key} {...props}>
        {kids(scope)}
      </Comp>
    );
  }

  withPseudo(props, hover, focus);
  if (tag === "input" || tag === "textarea") {
    // Controlled when a value is bound, otherwise uncontrolled.
    if (props.value === undefined) delete props.value;
    if (props.value !== undefined && !props.onChange) props.readOnly = true;
    return React.createElement(tag, props);
  }
  const children = kids(scope);
  return React.createElement(tag, props, ...(children.length ? children : []));
}

/** Parse a template once and render it against a values object. */
export function renderTemplate(root: Element, vals: Scope) {
  return Array.from(root.childNodes).map((c, i) => build(c, vals, i));
}

export function parseTemplate(html: string) {
  const doc = new DOMParser().parseFromString(`<body><div id="r">${html}</div></body>`, "text/html");
  return doc.getElementById("r")!;
}
