# Implementation Plan: Portfolio Website

## Overview

Build a single-page portfolio website using React (Vite) + Tailwind CSS with a dark terminal-inspired theme. Implementation proceeds bottom-up: project scaffolding → data layer → shared hooks → individual section components → App composition with lazy loading → final polish and testing.

## Tasks

- [x] 1. Scaffold project and configure tooling
  - [x] 1.1 Initialize Vite + React project and install dependencies
    - Run `npm create vite@latest . -- --template react` (or scaffold manually)
    - Install prod deps: `react`, `react-dom`
    - Install dev deps: `tailwindcss`, `postcss`, `autoprefixer`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`
    - Configure `vite.config.js` with `@vitejs/plugin-react` and test config for Vitest
    - _Requirements: 10.1, 10.2_

  - [x] 1.2 Configure Tailwind CSS and global styles
    - Initialize Tailwind with `npx tailwindcss init -p`
    - Set `content` paths in `tailwind.config.js`
    - Add Tailwind directives (`@tailwind base/components/utilities`) to `src/index.css`
    - Define custom colors (#003049, #001d2e, #D62828, #F77F00, #FCBF49, #EAE2B7, #f5f0e1) in Tailwind config `extend.colors`
    - Add geometric sans-serif heading font (Outfit) and body font (Inter) to `extend.fontFamily`
    - Add warm accent keyframe animation (e.g., gold underline sweep) to Tailwind config
    - _Requirements: 13.1, 13.2_

- [ ] 2. Create content data module and validation
  - [x] 2.1 Create `src/data/content.js` with all static content
    - Export `hero`, `skills`, `projects`, `experience`, `thoughts`, `contact`, and `navLinks` objects/arrays
    - Follow the data model structure from the design document exactly
    - Ensure `projects` use `category: "devops" | "ai"`, all `id` fields are unique, and `skills[].items` are non-empty
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

  - [x] 2.2 Create `src/utils/validateContactForm.js` pure validation function
    - Implement `validateContactForm({ name, email, message })` returning `{ valid, errors }`
    - Name: required, min 2 characters
    - Email: required, matches standard email regex
    - Message: required, min 10 characters
    - Return descriptive error messages for each failing field
    - _Requirements: 7.2, 7.3_

  - [ ] 2.3 Write property test for contact form validation (Property 4)
    - **Property 4: Contact Form Validation Completeness**
    - Generate arbitrary `{ name, email, message }` inputs with fast-check
    - Assert: `valid === true` iff `name.length >= 2 AND email matches pattern AND message.length >= 10`
    - Assert: result always has `valid` boolean and `errors` object
    - **Validates: Requirements 7.2**

  - [x] 2.4 Create `src/utils/filterProjects.js` pure filter function
    - Implement `filterProjects(projects, activeTab)` returning filtered array
    - Filter by `project.category === activeTab`
    - Do not mutate the original array
    - _Requirements: 4.2, 4.3_

  - [ ] 2.5 Write property test for project filter correctness (Property 3)
    - **Property 3: Project Filter Correctness**
    - Generate arbitrary project arrays with random `category` values ("devops" | "ai") using fast-check
    - Assert: every returned project has `category === tab`
    - Assert: no project with matching category is excluded
    - Assert: result is always a subset of input
    - **Validates: Requirements 4.2, 4.3**

  - [ ] 2.6 Write property test for data uniqueness (Property 8)
    - **Property 8: Data Uniqueness**
    - Generate arbitrary arrays of objects with `id` fields using fast-check
    - Assert: all `id` values within `projects`, `experience`, and `thoughts` arrays are unique
    - **Validates: Requirements 11.1, 11.2, 11.3**

- [ ] 3. Implement useScrollAnimation hook
  - [x] 3.1 Create `src/hooks/useScrollAnimation.js`
    - Accept `options` object with `threshold` (default 0.1) and `triggerOnce` (default true)
    - Return `[ref, isVisible]` tuple
    - Use IntersectionObserver to track element visibility
    - When `triggerOnce` is true, unobserve after first intersection
    - When `triggerOnce` is false, toggle `isVisible` on enter/exit
    - Clean up observer on unmount to prevent memory leaks
    - If IntersectionObserver is unsupported, return `[ref, true]` for graceful degradation
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ] 3.2 Write property test for scroll animation idempotence (Property 2)
    - **Property 2: Scroll Animation Idempotence**
    - Assert: once `isVisible` is true with `triggerOnce: true`, it never reverts to false
    - Assert: observer disconnects from element after first trigger
    - **Validates: Requirements 8.2**

- [x] 4. Checkpoint - Ensure data layer and hook tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Build section components
  - [x] 5.1 Implement Navbar component (`src/components/Navbar.jsx`)
    - Render nav links for all six sections from `navLinks` data
    - Implement smooth scroll on link click via `scrollIntoView({ behavior: 'smooth' })`
    - Track active section using IntersectionObserver and highlight corresponding link
    - Fixed/sticky positioning at top of viewport
    - Hamburger menu toggle for viewports < 768px
    - Use semantic `<nav>` element
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 12.1, 12.4_

  - [x] 5.2 Implement Hero component (`src/components/Hero.jsx`)
    - Full viewport height section (`min-h-screen`)
    - Display name with warm animated accent (e.g., gold underline sweep CSS animation)
    - Display title and intro paragraph from `hero` data
    - CTA button (red #D62828, orange #F77F00 hover) that smooth-scrolls to Contact section
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 5.3 Implement Skills component (`src/components/Skills.jsx`)
    - Read skills from `content.js` and group by category
    - Render each skill as a warm gold (#FCBF49) badge on dark navy
    - Integrate `useScrollAnimation` for fade-in on scroll
    - Use semantic `<section>` element with `id="skills"`
    - _Requirements: 3.1, 3.2, 3.3, 12.4_

  - [x] 5.4 Implement ProjectCard component (`src/components/ProjectCard.jsx`)
    - Accept `title`, `description`, `tags`, `link`, `image` props
    - Display title, description, and technology tags as badges
    - Render external link with `target="_blank"` and `rel="noopener noreferrer"` when present
    - Provide `alt` attribute on images
    - Use semantic `<article>` element
    - _Requirements: 4.4, 4.5, 12.2, 12.4, 13.3_

  - [x] 5.5 Implement Projects component (`src/components/Projects.jsx`)
    - Tab buttons for "DevOps" and "AI" categories
    - Use `filterProjects` utility to filter displayed projects by active tab
    - Render ProjectCard for each filtered project
    - Display empty-state message when no projects exist
    - Integrate `useScrollAnimation` for fade-in
    - Use semantic `<section>` element with `id="projects"`
    - _Requirements: 4.1, 4.2, 4.3, 14.1, 12.4_

  - [x] 5.6 Implement ExperienceCard component (`src/components/ExperienceCard.jsx`)
    - Accept `company`, `role`, `period`, `description`, `technologies` props
    - Display all fields with technology tags as badges
    - Use semantic `<article>` element
    - _Requirements: 5.2, 12.4_

  - [x] 5.7 Implement Experience component (`src/components/Experience.jsx`)
    - Read experience entries from `content.js` (newest-first order)
    - Render ExperienceCard for each entry in a vertical timeline layout
    - Alternating left-right layout on desktop (≥ 1024px)
    - Display empty-state message when no entries exist
    - Integrate `useScrollAnimation` for fade-in
    - Use semantic `<section>` element with `id="experience"`
    - _Requirements: 5.1, 5.2, 5.3, 14.2, 12.4_

  - [x] 5.8 Implement ThoughtCard component (`src/components/ThoughtCard.jsx`)
    - Accept `title`, `excerpt`, `date`, `readTime`, `link` props
    - Display all fields; external link with `rel="noopener noreferrer"` if present
    - Use semantic `<article>` element
    - _Requirements: 6.5, 12.4, 13.3_

  - [x] 5.9 Implement Thoughts component (`src/components/Thoughts.jsx`)
    - Read thoughts from `content.js` and render ThoughtCard grid
    - Responsive grid: 1 col (< 768px), 2 cols (768-1023px), 3 cols (≥ 1024px)
    - Display empty-state message when no thoughts exist
    - Integrate `useScrollAnimation` for fade-in
    - Use semantic `<section>` element with `id="thoughts"`
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 14.3, 12.4_

  - [x] 5.10 Implement Contact component (`src/components/Contact.jsx`)
    - Render form with name, email, message fields, each with associated `<label>` elements
    - Use `validateContactForm` on submit; display field-level error messages
    - Manage form status state: idle → sending → sent (or error)
    - On error, preserve form data for retry and display error message
    - Display social links (GitHub, LinkedIn) alongside form
    - Integrate `useScrollAnimation` for fade-in
    - Use semantic `<section>` element with `id="contact"`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 12.1, 12.3, 12.4_

  - [x] 5.11 Implement Footer component (`src/components/Footer.jsx`)
    - Display copyright and "Built with React & Tailwind" attribution
    - Use semantic `<footer>` element
    - _Requirements: 12.4_

- [x] 6. Checkpoint - Ensure all components render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Compose App with lazy loading and responsive layout
  - [x] 7.1 Implement `src/App.jsx` root component
    - Eagerly import Navbar and Hero
    - Lazy-load Skills, Projects, Experience, Thoughts, Contact, Footer with `React.lazy()` and dynamic `import()`
    - Wrap lazy sections in `<Suspense>` with a fallback placeholder div
    - Use semantic `<main>` wrapper around sections
    - Apply global dark theme classes: `bg-[#003049] text-[#EAE2B7] min-h-screen`
    - Ensure no horizontal overflow at any viewport width
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 9.1, 9.2, 9.3, 9.4, 12.4, 13.1_

  - [x] 7.2 Update `src/main.jsx` entry point
    - Render App into root DOM element
    - Import `index.css` for Tailwind styles
    - _Requirements: 10.1_

- [x] 8. Checkpoint - Ensure full app renders with lazy loading
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Write unit and integration tests
  - [ ] 9.1 Write unit tests for Navbar link generation
    - Verify all six section links are rendered
    - Verify smooth scroll is triggered on click
    - **Validates: Requirements 1.1, 1.2**

  - [ ] 9.2 Write unit tests for Contact form validation and submission flow
    - Test valid inputs, missing fields, invalid email, boundary lengths
    - Test status transitions: idle → sending → sent, and idle → sending → error
    - **Validates: Requirements 7.2, 7.3, 7.4, 7.5**

  - [ ] 9.3 Write unit tests for Projects tab filtering UI
    - Test tab switching renders correct filtered projects
    - Test empty state message when no projects
    - **Validates: Requirements 4.1, 4.2, 14.1**

  - [ ] 9.4 Write unit tests for responsive Thoughts grid layout
    - Verify grid column classes at different breakpoints
    - **Validates: Requirements 6.2, 6.3, 6.4**

  - [ ] 9.5 Write unit tests for empty state handling
    - Test Projects, Experience, and Thoughts sections with empty data arrays
    - **Validates: Requirements 14.1, 14.2, 14.3**

- [x] 10. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- All components use the defined color palette and semantic HTML for accessibility
