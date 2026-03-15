# Requirements Document

## Introduction

This document defines the requirements for a personal portfolio website for a Software Engineer specializing in DevOps. The site is built with React (Vite) and Tailwind CSS, featuring a warm, moody dark theme with a deep navy base and red, orange, and gold accents. The mood is warm, approachable, and deeply androgynous. It consists of six main sections (Hero/About, Skills, Projects, Experience, Thoughts, Contact) rendered as a responsive single-page application with scroll-driven animations and lazy-loaded content.

## Glossary

- **App**: The root React component that composes all sections into a single-page layout
- **Navbar**: The sticky top navigation component that provides smooth-scroll links to each section
- **Hero**: The full-viewport landing section displaying name, title, intro, and call-to-action
- **Skills_Section**: The section displaying technical skills grouped by category as styled badges
- **Projects_Section**: The section displaying project cards with tab-based filtering between DevOps and AI categories
- **ProjectCard**: A reusable card component displaying a single project's details
- **Experience_Section**: The section displaying work history as a vertical timeline
- **Thoughts_Section**: The blog-like section displaying article cards in a responsive grid
- **Contact_Section**: The section containing a contact form and social links
- **Footer**: The bottom component displaying copyright and attribution
- **useScrollAnimation**: A custom React hook using IntersectionObserver to trigger fade-in animations when elements enter the viewport
- **Content_Data**: The centralized static data module (`data/content.js`) supplying all section content
- **Contact_Form_Validator**: The pure function that validates contact form input fields

## Requirements

### Requirement 1: Site Navigation

**User Story:** As a visitor, I want a persistent navigation bar with links to all sections, so that I can quickly jump to any part of the portfolio.

#### Acceptance Criteria

1. THE Navbar SHALL render navigation links for all six sections: Hero, Skills, Projects, Experience, Thoughts, and Contact
2. WHEN a visitor clicks a navigation link, THE Navbar SHALL smooth-scroll the viewport to the corresponding section
3. WHILE a visitor scrolls through the page, THE Navbar SHALL highlight the link corresponding to the section currently in the viewport
4. THE Navbar SHALL remain fixed at the top of the viewport during scrolling
5. WHEN the viewport width is less than 768px, THE Navbar SHALL collapse navigation links into a hamburger menu

### Requirement 2: Hero Section

**User Story:** As a visitor, I want to see an engaging landing section with the engineer's name and title, so that I immediately understand who this portfolio belongs to.

#### Acceptance Criteria

1. THE Hero SHALL occupy the full viewport height on all screen sizes
2. THE Hero SHALL display the engineer's name with a warm animated accent effect
3. THE Hero SHALL display the title and a brief introductory paragraph
4. WHEN a visitor clicks the call-to-action button, THE Hero SHALL smooth-scroll the viewport to the Contact_Section

### Requirement 3: Skills Display

**User Story:** As a visitor, I want to see the engineer's technical skills organized by category, so that I can quickly assess their expertise.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skills grouped by category as defined in Content_Data
2. THE Skills_Section SHALL render each skill as a styled badge with monospace font
3. WHEN the Skills_Section enters the viewport, THE useScrollAnimation hook SHALL trigger a fade-in animation

### Requirement 4: Project Showcase

**User Story:** As a visitor, I want to browse projects filtered by category, so that I can see relevant work in DevOps or AI.

#### Acceptance Criteria

1. THE Projects_Section SHALL display tab buttons for "DevOps" and "AI" categories
2. WHEN a visitor selects a tab, THE Projects_Section SHALL display only projects matching the selected category
3. WHEN projects are filtered by a category, THE Projects_Section SHALL return all projects matching that category and exclude all projects not matching that category
4. THE ProjectCard SHALL display the project title, description, and technology tags
5. WHEN a project has an external link, THE ProjectCard SHALL render a link that opens in a new tab with `rel="noopener noreferrer"`

### Requirement 5: Experience Timeline

**User Story:** As a visitor, I want to view the engineer's work history in a timeline format, so that I can understand their career progression.

#### Acceptance Criteria

1. THE Experience_Section SHALL render experience entries from Content_Data in newest-first order
2. THE Experience_Section SHALL display each entry with company name, role, time period, description, and technology tags
3. WHEN the viewport width is 1024px or greater, THE Experience_Section SHALL display entries in an alternating left-right layout

### Requirement 6: Thoughts Section

**User Story:** As a visitor, I want to read the engineer's articles and opinions, so that I can understand their thinking and expertise.

#### Acceptance Criteria

1. THE Thoughts_Section SHALL render article cards from Content_Data in a responsive grid layout
2. WHEN the viewport width is less than 768px, THE Thoughts_Section SHALL display cards in a single column
3. WHEN the viewport width is between 768px and 1023px, THE Thoughts_Section SHALL display cards in two columns
4. WHEN the viewport width is 1024px or greater, THE Thoughts_Section SHALL display cards in three columns
5. THE ThoughtCard SHALL display the article title, excerpt, date, and estimated read time

### Requirement 7: Contact Form

**User Story:** As a visitor, I want to send a message through a contact form, so that I can reach the engineer directly.

#### Acceptance Criteria

1. THE Contact_Section SHALL render a form with name, email, and message input fields
2. THE Contact_Form_Validator SHALL return valid only when the name is at least 2 characters, the email matches a standard email pattern, and the message is at least 10 characters
3. WHEN a visitor submits the form with invalid data, THE Contact_Section SHALL display descriptive error messages for each failing field
4. WHEN a visitor submits the form with valid data, THE Contact_Section SHALL transition the form status from idle to sending to sent
5. IF the form submission fails due to a network error, THEN THE Contact_Section SHALL display an error message and preserve the form data for retry
6. THE Contact_Section SHALL display social media links (GitHub, LinkedIn) alongside the form

### Requirement 8: Scroll Animations

**User Story:** As a visitor, I want sections to animate into view as I scroll, so that the browsing experience feels polished and engaging.

#### Acceptance Criteria

1. WHEN an observed element enters the viewport, THE useScrollAnimation hook SHALL set the visibility state to true
2. WHILE the triggerOnce option is true, THE useScrollAnimation hook SHALL disconnect the observer after the first visibility trigger and keep the visibility state as true permanently
3. WHILE the triggerOnce option is false, THE useScrollAnimation hook SHALL toggle the visibility state as the element enters and exits the viewport
4. WHEN the component using useScrollAnimation unmounts, THE useScrollAnimation hook SHALL disconnect the observer to prevent memory leaks
5. IF the browser does not support IntersectionObserver, THEN THE useScrollAnimation hook SHALL return visibility as true so all content is immediately visible

### Requirement 9: Responsive Layout

**User Story:** As a visitor, I want the portfolio to look good on any device, so that I can browse it on my phone, tablet, or desktop.

#### Acceptance Criteria

1. THE App SHALL render all content without horizontal overflow at any viewport width
2. WHEN the viewport width is less than 768px, THE App SHALL use single-column layouts for all sections
3. WHEN the viewport width is between 768px and 1023px, THE App SHALL use two-column layouts where applicable
4. WHEN the viewport width is 1024px or greater, THE App SHALL use full multi-column layouts as designed

### Requirement 10: Performance and Loading

**User Story:** As a visitor, I want the site to load quickly, so that I don't have to wait to see the content.

#### Acceptance Criteria

1. THE App SHALL eagerly load only the Navbar and Hero components in the initial bundle
2. THE App SHALL lazy-load the Skills_Section, Projects_Section, Experience_Section, Thoughts_Section, Contact_Section, and Footer using dynamic imports
3. WHILE a lazy-loaded section is loading, THE App SHALL display a Suspense fallback placeholder
4. IF a lazy-loaded section fails to load, THEN THE App SHALL keep the Suspense fallback visible until the page is refreshed

### Requirement 11: Data Integrity

**User Story:** As a developer maintaining the portfolio, I want content data to follow consistent rules, so that the site renders correctly.

#### Acceptance Criteria

1. THE Content_Data SHALL enforce unique id fields within the projects array
2. THE Content_Data SHALL enforce unique id fields within the experience array
3. THE Content_Data SHALL enforce unique id fields within the thoughts array
4. THE Content_Data SHALL restrict project category values to "devops" or "ai"
5. THE Content_Data SHALL require non-empty items arrays for each skill category

### Requirement 12: Accessibility

**User Story:** As a visitor using assistive technology, I want the portfolio to be navigable and readable, so that I can access all content.

#### Acceptance Criteria

1. THE App SHALL make all interactive elements (links, buttons, form inputs) reachable via keyboard Tab navigation
2. THE App SHALL provide non-empty alt attributes on all images
3. THE App SHALL associate all form inputs with label elements
4. THE App SHALL use semantic HTML elements (nav, main, section, article, footer) for document structure

### Requirement 13: Theme and Visual Consistency

**User Story:** As a visitor, I want a cohesive dark terminal-inspired visual theme, so that the portfolio feels professional and distinctive.

#### Acceptance Criteria

1. THE App SHALL use colors exclusively from the defined palette: #003049, #001d2e, #D62828, #F77F00, #FCBF49, #EAE2B7, and #f5f0e1
2. THE App SHALL use geometric sans-serif font (Outfit) for headings and sans-serif (Inter) for body text
3. THE App SHALL use external links with `rel="noopener noreferrer"` and `target="_blank"` attributes

### Requirement 14: Empty State Handling

**User Story:** As a developer, I want sections to handle missing content gracefully, so that the site never shows blank or broken sections.

#### Acceptance Criteria

1. WHEN the projects array in Content_Data is empty, THE Projects_Section SHALL display an empty-state message
2. WHEN the experience array in Content_Data is empty, THE Experience_Section SHALL display an empty-state message
3. WHEN the thoughts array in Content_Data is empty, THE Thoughts_Section SHALL display an empty-state message
