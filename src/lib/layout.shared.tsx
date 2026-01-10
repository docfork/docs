import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";

export const gitConfig = {
  user: "docfork",
  repo: "docs",
  branch: "main",
} as const;

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <Logo />,
      url: "/",
      transparentMode: "top",
    },
  };
}
