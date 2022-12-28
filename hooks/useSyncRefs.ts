import * as React from "react";

export function useSyncRefs<T>(
  ...refs: (
    | React.MutableRefObject<T | null>
    | ((instance: T) => void)
    | null
  )[]
) {
  const cache = React.useRef(refs);

  React.useEffect(() => { cache.current = refs }, [refs]);

  const syncRefs = React.useCallback((value: T) => {
    for (let ref of cache.current) {
      if (ref === null) continue;
      (typeof ref === 'function') ? ref(value) : (ref.current = value)
    }
  }, [cache]);
  
  return syncRefs;
};