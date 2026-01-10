import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Logo } from "@/components/logo";

export const gitConfig = {
  user: "docfork",
  repo: "docfork-mcp",
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
