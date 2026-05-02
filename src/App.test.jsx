import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock eagerly loaded components
vi.mock('./components/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}));
vi.mock('./components/Hero', () => ({
  default: () => <section data-testid="hero">Hero</section>,
}));

// Mock lazy-loaded components
vi.mock('./components/Skills', () => ({
  default: () => <section data-testid="skills">Skills</section>,
}));
vi.mock('./components/Projects', () => ({
  default: () => <section data-testid="projects">Projects</section>,
}));
vi.mock('./components/Experience', () => ({
  default: () => <section data-testid="experience">Experience</section>,
}));
vi.mock('./components/Thoughts', () => ({
  default: () => <section data-testid="thoughts">Thoughts</section>,
}));
vi.mock('./components/Contact', () => ({
  default: () => <section data-testid="contact">Contact</section>,
}));
vi.mock('./components/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders Navbar and Hero eagerly', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeTruthy();
    expect(screen.getByTestId('hero')).toBeTruthy();
  });

  it('uses semantic main element', () => {
    const { container } = render(<App />);
    const main = container.querySelector('main');
    expect(main).toBeTruthy();
  });

  it('applies dark theme classes', () => {
    const { container } = render(<App />);
    const wrapper = container.firstChild;
    expect(wrapper.className).toContain('bg-navy');
    expect(wrapper.className).toContain('text-cream');
    expect(wrapper.className).toContain('min-h-screen');
  });

  it('prevents horizontal overflow', () => {
    const { container } = render(<App />);
    const wrapper = container.firstChild;
    expect(wrapper.className).toContain('overflow-x-hidden');
  });

  it('renders lazy-loaded sections within Suspense', async () => {
    render(<App />);
    const skills = await screen.findByTestId('skills');
    const projects = await screen.findByTestId('projects');
    const experience = await screen.findByTestId('experience');
    const contact = await screen.findByTestId('contact');
    const footer = await screen.findByTestId('footer');

    expect(skills).toBeTruthy();
    expect(projects).toBeTruthy();
    expect(experience).toBeTruthy();
    expect(contact).toBeTruthy();
    expect(footer).toBeTruthy();
  });

  it('hides Thoughts section when showThoughts flag is false', async () => {
    render(<App />);
    await screen.findByTestId('skills'); // wait for lazy sections to resolve
    expect(screen.queryByTestId('thoughts')).toBeNull();
  });
});
