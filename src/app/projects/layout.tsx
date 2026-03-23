import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Tusharbir Singh Mutty",
  description:
    "Portfolio projects in software engineering, mobile, AI integrations, and system design—with details and source links.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
