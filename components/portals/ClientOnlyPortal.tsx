import { useMounted } from "hooks/useMounted";
import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children }: PropsWithChildren) {
  const mounted = useMounted();
  return mounted
    ? createPortal(children, document.getElementById("portal")!)
    : null;
}
