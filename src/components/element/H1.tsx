import type { ReactElement, ReactNode } from "react";

export default function H1({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <h1> {children} </h1>;
}
