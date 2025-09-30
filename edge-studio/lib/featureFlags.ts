"use client";

import { useEffect, useState } from "react";

export const MOBILE_UX_ENABLED = process.env.NEXT_PUBLIC_MOBILE_UX !== "false";

export function useMobileUXFlag() {
  const [enabled, setEnabled] = useState(MOBILE_UX_ENABLED);

  useEffect(() => {
    const value = document.body?.dataset?.mobileUx;
    if (value === "off") {
      setEnabled(false);
    }
  }, []);

  return enabled;
}
