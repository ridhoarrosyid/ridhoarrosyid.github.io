import type { ReactElement, ReactNode } from "react";

export default function H2({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h2>{children}</h2>;
}
