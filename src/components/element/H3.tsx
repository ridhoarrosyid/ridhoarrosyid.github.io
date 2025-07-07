import type { ReactElement, ReactNode } from "react";

export default function H3({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h3>{children}</h3>;
}
