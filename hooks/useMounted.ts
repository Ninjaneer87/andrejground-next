import { useState, useEffect, useCallback } from 'react';

type MountHandler = (value: boolean, delay?: number) => any;

export function useMounted(autoMount: boolean = true): [boolean, MountHandler] {
  const [mounted, setMounted] = useState(false);

  const handleMounting: MountHandler = useCallback((value: boolean, delay?: number) => {
    if (value === mounted) return;
    if (!delay || delay < 1) return setMounted(value);
    setTimeout(() => setMounted(value), delay);
  }, [mounted]);

  useEffect(() => { if (autoMount) setMounted(true) }, [autoMount]);

  return [mounted, handleMounting];
}
