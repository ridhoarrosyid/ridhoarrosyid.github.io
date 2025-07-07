import type { ReactElement, ReactNode } from "react";

export default function Paragraph({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <p>{children}</p>;
}
