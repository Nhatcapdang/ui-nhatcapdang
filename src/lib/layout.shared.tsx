import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: {
      enabled: true,
      mode: "light-dark-system",
    },
    nav: {
      title: "Nhatcapdang",
      url: "/",
    },
    githubUrl: "https://github.com/Nhatcapdang",
  };
}
