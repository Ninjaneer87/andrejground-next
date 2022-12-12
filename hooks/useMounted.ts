import { useState, useEffect, useCallback, useRef } from 'react';

export function useMounted(autoMount: boolean = true) {
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const mount = useCallback((delay?: number) => {
    if (mounted) return;
    if (!delay || delay < 1) return setMounted(true);
    timerRef.current = setTimeout(() => setMounted(true), delay);
  }, [mounted]);

  const unmount = useCallback((delay?: number) => {
    if (!mounted) return;
    if (!delay || delay < 1) return setMounted(false);
    timerRef.current = setTimeout(() => setMounted(false), delay);
  }, [mounted]);

  useEffect(() => {
    if (autoMount) setMounted(true);
    return () => { timerRef.current && clearTimeout(timerRef.current) };
  }, [autoMount]);

  return { mounted, mount, unmount };
}