# Home Page Sections

This folder contains all the modular sections for the main home page, organized in logical order with descriptive names.

## File Structure

### 01-hero-main-banner.html

- **Purpose**: Main hero section with background image, title, and CTA buttons
- **Content**: "CLEAN AIR IS A RIGHT" headline, subtitle, and action buttons
- **Features**: Media logos banner at bottom

### 02-problem-solution-comparison.html

- **Purpose**: Problem vs Solution comparison cards
- **Content**: Air quality monitoring challenges and HabitatMap's solution
- **Features**: Statistics, connecting arrow, gradient backgrounds

### 03-community-feature-cards.html

- **Purpose**: Three feature cards highlighting community benefits
- **Content**: No subscriptions, data ownership, research-grade accuracy
- **Features**: Icon-based design, hover effects, green branding

### 04-airbeam-aircasting-ecosystem.html

- **Purpose**: Showcase of main products and platform
- **Content**: AirBeam sensors and AirCasting platform descriptions
- **Features**: Image showcases, action buttons, responsive layout

### 05-community-impact-testimonial.html

- **Purpose**: Social proof and community impact story
- **Content**: 5-star testimonial from Maria Santos
- **Features**: Star rating, quote, author info with avatar

### 06-educator-resources-cta.html

- **Purpose**: Educational resources call-to-action
- **Content**: Teaching resources link and description
- **Features**: Icon, green branding, external link

### 07-final-donation-cta.html

- **Purpose**: Final donation and engagement call-to-action
- **Content**: Environmental justice messaging and donation buttons
- **Features**: Gradient background, dual CTAs, nonprofit info

## Usage

These sections are included in the main `pages/index.md` file in numerical order. Each section is self-contained and can be:

- **Reordered** by changing the include order
- **Modified** independently without affecting other sections
- **Reused** on other pages if needed
- **Styled** individually through their corresponding SCSS modules

## Naming Convention

Files use a numbered prefix (01-, 02-, etc.) to maintain order and descriptive names that clearly indicate their purpose and content.

## Dependencies

Each section depends on:

- Base SCSS styles from `_sass/modules/_base.scss`
- Section-specific styles from corresponding SCSS modules
- Global layout and typography styles
