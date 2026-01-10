import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Docfork",
      url: "/",
      transparentMode: "top",
    },
  };
}
