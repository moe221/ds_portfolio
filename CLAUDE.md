# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal data science portfolio website for Mohamed Abuhalala. It's a single-page React application built with TypeScript, Vite, and Tailwind CSS, showcasing data science and machine learning projects with detailed case studies.

**Live site**: Deployed on Vercel
**Repository structure**: Monorepo with `portfolio/` subdirectory containing the main application

## Development Commands

All commands should be run from the `portfolio/` directory:

```bash
cd portfolio

# Install dependencies
npm install

# Development server (runs on http://localhost:5173)
npm run dev

# Build for production (output to dist/)
npm run build

# Preview production build
npm run preview

# Lint with ESLint
npm run lint

# Type checking without emitting files
npm run typecheck
```

## Architecture

### Application Structure

The app follows a single-page application (SPA) pattern with scroll-based navigation:

- **Layout**: `src/App.tsx` orchestrates all sections sequentially
- **Sections**: Hero → Skills Banner → About → Projects → CV → Contact
- **Navigation**: Sticky header with smooth scroll to section anchors
- **State**: Minimal global state, mostly local component state for UI interactions

### Key Components

**Navigation (`Navigation.tsx`)**
- Sticky header that changes appearance on scroll
- Uses `scrolled` prop to trigger visual state changes
- Smooth scroll behavior to section IDs

**Projects (`Projects.tsx`)**
- Masonry grid layout distributing project categories across 3 columns
- Hover-to-expand interaction pattern for each category card
- Modal system for detailed project views
- Project data comes from `src/data/projectDetails.ts`

**Project Modal (`ProjectModal.tsx`)**
- Full-screen overlay with detailed project case studies
- Supports multiple media types: images, GIFs, YouTube embeds
- Rich content sections with HTML rendering
- Metrics cards and tech stack visualization

**CV (`CV.tsx`)**
- Inline CV display with keyword highlighting
- Professional experience, education, and publications
- PDF download link to `/Moe Abuhalala - CV.pdf` in public folder

### Data Architecture

Project data is centralized in `src/data/projectDetails.ts`:

```typescript
export const projectDetails: Record<string, ProjectDetails>
```

Each project has:
- Basic metadata (title, subtitle, period, client, tags)
- Metrics array with icons
- Tech stack grouped by category
- Sections array with rich content (HTML + media)
- External links (GitHub, live site)

Projects are linked by ID (kebab-case title). The `getProjectDetails()` helper function handles lookups.

### Styling System

**Tailwind CSS** for utility-first styling with custom configuration:

- **Layout padding**: `var(--layout-padding)` CSS custom property for consistent horizontal spacing
- **Section spacing**: `.section-spacing` class for vertical rhythm
- **Color scheme**: Neutral palette (100-900) for professional look
- **Responsive**: Mobile-first with `md:` breakpoints

**Custom patterns**: Decorative SVG patterns defined in global CSS for visual interest.

### Static Assets

All static files live in `portfolio/public/`:
- `/me_square.jpg` - Profile photo
- `/Moe Abuhalala - CV.pdf` - Downloadable CV
- `/projects/[project-name]/` - Project screenshots, GIFs, charts organized by project

## Design System

### Color Palette - Custom Blue Accent System

The portfolio uses a minimal color system centered on neutral tones with **vibrant blue accents** (#2323FF) for interactive elements.

**Custom Accent Colors (defined in `tailwind.config.js`):**
- `accent-700` (#2323FF) - Primary CTAs, active states, primary links
- `accent-600` (#3D3DFF) - Secondary emphasis, icon accents (lighter for visual variety)
- `accent-800` (#1A1ACC) - Hover states for accent-700 elements
- `accent-100` (#D1D1FF) - Light backgrounds (badges, focus rings)
- `accent-50` (#E8E8FF) - Very subtle backgrounds (button hovers)

**Usage Guidelines:**
- **accent-700**: Use for all primary CTAs ("Book a Call", "Send Message", "Download CV"), text links on hover, active navigation elements, primary action buttons, and form focus rings
- **accent-600**: Use for decorative icons (metrics in project modals, section header icons) to add visual interest without overpowering - one shade lighter for subtle variety
- **accent-100**: Use for badge backgrounds (tech tags, category badges) paired with accent-700 text
- **accent-50**: Use for very subtle hover states on secondary buttons

**Existing Colors to Preserve:**
- `green-400`: Status indicators ("Open for new projects", active employment) - different shade, no conflict
- `amber-100/700`: "In Progress" badges
- Varied colors in SkillsBanner and About section badges (intentional diversity for visual interest)

### Component-Specific Color Patterns

**Buttons:**
- Primary CTA: `bg-accent-700 hover:bg-accent-800 text-white`
- Secondary: `border-accent-700 text-accent-700 hover:bg-accent-50`
- Examples: "Book a Call", "Send Message", "Download CV", project action buttons

**Links:**
- Default: `text-neutral-600 hover:text-accent-700`
- Social icons: `hover:text-accent-700`
- External/GitHub links in projects: `hover:text-accent-700`

**Form Inputs:**
- Focus state: `focus:ring-2 focus:ring-accent-700 focus:border-transparent`
- Provides clear visual feedback when user interacts with forms

**Badges & Tags:**
- Tech tags: `bg-accent-100 text-accent-700`
- Category badges: `bg-accent-100 text-accent-700`
- Status badges: Keep existing colors (Details: blue, In Progress: amber)

**Active States:**
- Project category cards: `border-accent-700`
- Category icons: `bg-accent-700 text-white`
- Chevron indicators: `text-accent-700`

**Icons:**
- Contact section icons: `bg-accent-100` with `text-accent-700`
- Metric icons in project modals: `text-accent-600`
- Section header icons (e.g., FileText in CV): `text-accent-600`

### Accessibility

All accent color combinations meet WCAG 2.1 AA accessibility standards for contrast ratios.

Focus states use 2px ring outlines for clear keyboard navigation visibility.

## Common Development Tasks

### Adding a New Project

1. **Add project details** to `src/data/projectDetails.ts`:
   ```typescript
   'project-id': {
     id: 'project-id',
     title: 'Project Name',
     // ... rest of the fields
   }
   ```

2. **Add project to category** in `Projects.tsx` under `projectsByCategory`:
   ```typescript
   projects: [
     {
       title: 'Project Name',  // Must match title in projectDetails
       description: 'Short description',
       tags: ['Tag1', 'Tag2'],
       hasDetails: true,
     }
   ]
   ```

3. **Add project assets** to `portfolio/public/projects/[project-id]/`

### Updating CV

- **Inline CV**: Edit the CV component directly in `src/components/CV.tsx`
- **PDF CV**: Replace `portfolio/public/Moe Abuhalala - CV.pdf`

### Modifying the Color Scheme

The site uses Tailwind's neutral palette. To change:
- Modify `tailwind.config.js` to extend the theme
- Update component-level color classes (search for `neutral-`)

## Build & Deployment

**Build process**:
```bash
cd portfolio
npm run build
```

Output: `portfolio/dist/` directory with static files ready for deployment.

**Deployment**: Configured for Vercel with auto-detection of Vite. The root `portfolio/` directory is the build root.

**Environment**: No environment variables or API keys required. All content is static.

## TypeScript Configuration

- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - App-specific settings (used for type checking)
- `tsconfig.node.json` - Node environment settings for Vite config

Strict mode is enabled. Use type-safe patterns throughout.

## Important Notes

- **No backend**: This is a purely static site. All data is hardcoded in TypeScript files.
- **No routing library**: Uses anchor links and smooth scroll instead of React Router.
- **Asset optimization**: Vite handles bundling and optimization automatically.
- **Modal accessibility**: ProjectModal includes focus trapping and ESC key handling.
- **Responsive images**: Use appropriate image sizes in `/public/projects/` to avoid large transfers.

## Codebase Conventions

- **Component files**: PascalCase (e.g., `ProjectModal.tsx`)
- **Data files**: camelCase (e.g., `projectDetails.ts`)
- **Utility functions**: Exported from data files where they're used
- **Icons**: Imported from `lucide-react` package
- **Formatting**: Use Prettier-compatible formatting (handled by ESLint config)

## Coding Principles

**Always follow clean code architecture and best coding practices with a focus on simplicity and readability:**

- **Simplicity first**: Prefer straightforward solutions over clever ones. Code should be easy to understand at a glance.
- **Readable over compact**: Write code that clearly expresses intent. Use descriptive variable names and break complex logic into smaller, well-named functions.
- **Component composition**: Keep components focused on a single responsibility. Extract reusable logic into custom hooks or utility functions.
- **Type safety**: Leverage TypeScript's type system. Avoid `any` types. Define clear interfaces for component props and data structures.
- **Consistent patterns**: Follow existing patterns in the codebase. If you see a pattern used multiple times, continue using it rather than introducing a new approach.
- **Avoid premature optimization**: Prioritize clear, maintainable code over micro-optimizations unless performance issues are demonstrated.
- **Self-documenting code**: Write code that explains itself. Use comments sparingly, only for complex business logic or non-obvious decisions.

## Git Commit Guidelines

When creating git commits:

- Write clear, concise commit messages that describe what changed and why
- Follow conventional commit format when appropriate (e.g., "feat:", "fix:", "docs:")
- **NEVER include "Generated with Claude Code" or similar attribution messages in commit messages**
- Keep commit messages professional and focused on the technical changes
