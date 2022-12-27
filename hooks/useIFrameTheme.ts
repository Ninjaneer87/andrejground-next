import sdk, { EmbedOptions, VM } from "@stackblitz/sdk";
import { useState, useEffect, useCallback, useRef } from "react";
import { delay } from "utils/utility";

export type ThemeValue = "dark" | "light";

function isValidTheme(val: string): val is ThemeValue {
  return val === "dark" || val === "light";
}

const isThemeApplied = async (vm: VM) => {
  try {
    const url = await vm.preview.getUrl();
    if (url) {
      const urlElements = url.split("/");
      const themeValue = urlElements[urlElements.length - 1];
      return isValidTheme(themeValue);
    }
  } catch (error) {
    console.log(error);
  }
};

export default function useIFrameTheme(
  elementId: string,
  projectId: string,
  config: EmbedOptions,
  theme: ThemeValue
) {
  const [vm, setVm] = useState<VM>();
  const [counter, setCounter] = useState(30);
  const mountedRef = useRef(false);

  const applyThemePoll = useCallback(async (vmInstance = vm) => {
    if (!vmInstance) return;

    const isApplied = await isThemeApplied(vmInstance);
    if (isApplied || counter < 1) {
      setCounter(0);
      return;
    };
    setCounter(prev => --prev)
    await vmInstance.preview.setUrl(`/${theme}`);
    delay(applyThemePoll, 1000);
  }, [vm, counter, theme]);

  const setTheme = useCallback(() => {
      (async () => {
        try {
          await vm?.preview.setUrl(`/${theme}`);
        } catch (error) {
          console.log(error);
        }
      })();
    }, [vm, theme]);

  useEffect(setTheme, [setTheme]);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;

      (async () => {
        try {
          const vmInstance = await sdk.embedProjectId( elementId, projectId, config);
          if (vmInstance) {
            setVm(vmInstance);
            applyThemePoll(vmInstance);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [elementId, projectId, config, applyThemePoll]);

  return setTheme;
}
