"use client";

import { useCallback, useEffect, useState } from "react";
import { defaultProgress, loadProgress, resetProgress, saveProgress, type DemoProgress } from "@/lib/demoStore";

export function useDemoProgress() {
  const [progress, setProgress] = useState<DemoProgress>(defaultProgress);
  const [mounted, setMounted] = useState(false);

  const refresh = useCallback(() => {
    setProgress(loadProgress());
  }, []);

  useEffect(() => {
    setMounted(true);
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("nusantaraverse-progress-updated", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("nusantaraverse-progress-updated", refresh);
    };
  }, [refresh]);

  const update = useCallback((next: DemoProgress) => {
    const saved = saveProgress(next);
    setProgress(saved);
  }, []);

  const reset = useCallback(() => {
    const next = resetProgress();
    setProgress(next);
  }, []);

  return { progress, mounted, refresh, update, reset };
}
