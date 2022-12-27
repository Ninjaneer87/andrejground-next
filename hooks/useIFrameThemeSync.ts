import sdk, { EmbedOptions, VM } from "@stackblitz/sdk";
import { useState, useEffect, useCallback } from "react";

export type ThemeValue = "dark" | "light";

export default function useIFrameThemeSync(
  elementId: string,
  projectId: string,
  config: EmbedOptions,
  theme: ThemeValue
) {
  const [vm, setVm] = useState<VM>();

  const setTheme = useCallback((vm: VM) => {
    (async () => {
      try {
        await vm.preview.setUrl(`/${theme}`);
        await vm.editor.setTheme(theme);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [theme]);

  useEffect(() => {
    if(vm) setTheme(vm);
  }, [vm, setTheme]);

  useEffect(() => {
    (async () => {
      try {
        const vmInstance = await sdk.embedProjectId( elementId, projectId, config);
        if (vmInstance) setVm(vmInstance);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [elementId, projectId, config,]);

  return setTheme;
}
