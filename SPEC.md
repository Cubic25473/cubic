# Cubic International - FTC Robotics Team 25473

## Project Overview
- **Project name**: Cubic International FTC Team Website
- **Type**: Single-page animated website
- **Core functionality**: Showcase an FTC robotics team with immersive animations, team information, and robot details
- **Target users**: Potential sponsors, event attendees, other teams, recruits

## UI/UX Specification

### Layout Structure
- **Header**: Fixed navigation with logo and menu items
- **Hero Section**: Full viewport with animated 3D cube background, team name, and tagline
- **About Section**: Team mission and history
- **Robot Section**: Current season robot showcase with specs
- **Team Section**: Grid of team members
- **Contact Section**: Contact form and social links
- **Footer**: Copyright and quick links

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

#### Color Palette
- **Primary**: `#0a0a0f` (Deep space black)
- **Secondary**: `#1a1a2e` (Dark navy)
- **Accent 1**: `#00d4ff` (Electric cyan)
- **Accent 2**: `#ff6b35` (Robotic orange)
- **Accent 3**: `#7b2cbf` (Neon purple)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a0a0b0`

#### Typography
- **Headings**: "Orbitron" (futuristic, robotic feel)
- **Body**: "Rajdhani" (clean, technical)
- **Accent**: "Share Tech Mono" (monospace for numbers/stats)

#### Visual Effects
- Particle field background animation
- Glowing neon borders and text
- 3D rotating cube in hero
- Smooth scroll-triggered animations
- Hover effects with glow and scale
- Grid pattern overlay
- Gradient text effects

### Components

#### Navigation
- Transparent background, blur on scroll
- Logo (Cubic International + team number)
- Menu items: Home, About, Robot, Team, Contact
- Hover: cyan glow effect

#### Hero Section
- Large team name with gradient text
- Team number with animated glow
- Tagline with typewriter effect
- Floating 3D cube particles
- Scroll indicator

#### About Section
- Split layout: text left, animated stats right
- Stats: Years active, competitions, awards
- Animated number counters

#### Robot Section
- Robot image placeholder with glow frame
- Specifications grid
- Season info card

#### Team Section
- Grid of team member cards
- Photo placeholder, name, role
- Hover: card lift with glow

#### Contact Section
- Contact form (name, email, message)
- Social media links with hover animations
- Location/map placeholder

## Functionality Specification

### Core Features
1. Smooth scrolling navigation
2. Particle background animation (canvas)
3. 3D cube rotation animation
4. Scroll-triggered reveal animations
5. Number counter animation
6. Typewriter effect for tagline
7. Form validation (basic)
8. Responsive design

### User Interactions
- Click nav links → smooth scroll to section
- Hover cards → lift and glow effect
- Scroll → trigger section animations
- Form submit → alert confirmation

### Edge Cases
- Mobile menu toggle
- Reduced motion preference support
- Fallback for canvas animations

## Acceptance Criteria
- [ ] Hero loads with particle animation and cube
- [ ] Navigation works with smooth scroll
- [ ] All sections have scroll animations
- [ ] Team cards have hover effects
- [ ] Form validates required fields
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] All fonts load correctly
