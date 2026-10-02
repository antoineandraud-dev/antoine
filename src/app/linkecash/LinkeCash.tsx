"use client";

import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import template from "./dc/template";
import { LinkeCashLogic } from "./dc/logic";
import { parseTemplate, renderTemplate } from "./dc/runtime";
import "./linkecash.css";

export default function LinkeCash() {
  const [mounted, setMounted] = useState(false);
  const [, force] = useReducer((n: number) => n + 1, 0);
  const logic = useRef<LinkeCashLogic | undefined>(undefined);
  const root = useRef<Element | undefined>(undefined);

  useEffect(() => {
    const l = new LinkeCashLogic();
    logic.current = l;
    root.current = parseTemplate(template);
    const unsub = l.subscribe(force);
    l.componentDidMount();
    setMounted(true);
    return () => {
      unsub();
      l.componentWillUnmount();
    };
  }, []);

  const tree = useMemo(
    () => (mounted ? renderTemplate(root.current!, logic.current!.renderVals()) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mounted, logic.current?.state]
  );

  return <div className="lc-root">{tree}</div>;
}
