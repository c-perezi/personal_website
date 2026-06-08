import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  const baseProps = {
    title: "CI/CD Pipeline",
    description: "Automated deployment pipeline using GitHub Actions.",
    tags: ["Docker", "AWS", "Terraform"],
  };

  it("renders title, description, and tags", () => {
    render(<ProjectCard {...baseProps} />);

    expect(screen.getByText("CI/CD Pipeline")).toBeInTheDocument();
    expect(
      screen.getByText("Automated deployment pipeline using GitHub Actions.")
    ).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
    expect(screen.getByText("Terraform")).toBeInTheDocument();
  });

  it("uses a semantic article element", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("renders external link with target and rel when link is provided", () => {
    render(<ProjectCard {...baseProps} link="https://example.com" />);

    const link = screen.getByRole("link", { name: /view on github/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render a link when link prop is absent", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders image with alt attribute when image is provided", () => {
    render(<ProjectCard {...baseProps} image="/projects/pipeline.png" />);

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "/projects/pipeline.png");
    expect(img).toHaveAttribute("alt", "CI/CD Pipeline");
  });

  it("does not render an image when image prop is absent", () => {
    render(<ProjectCard {...baseProps} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
