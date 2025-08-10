# replit.md

## Overview

This is a React-based landing page for NutriPro, a fitness and nutrition service that provides personalized workout plans and meal plans. The application is built as a full-stack web application with Express backend and React frontend, designed as a sales page with quiz-based lead qualification and WhatsApp integration for customer acquisition.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Library**: Shadcn/UI components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom green color palette matching the NutriPro brand
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Component Structure**: Modular component architecture with separate sections (Hero, Benefits, Testimonials, etc.)

### Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Development Server**: Custom Vite integration for development with HMR support
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: Configured for PostgreSQL via Neon Database connection
- **Schema**: Basic user management with users table containing id, username, and password fields
- **Migrations**: Drizzle Kit for schema migrations and database management

### Styling and Design System
- **Color Palette**: Custom green theme with primary (#2F8F4E), light (#A3D9A5), and lighter (#DFF4DD) variants
- **Typography**: Inter font family for modern, clean appearance
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Icons**: Font Awesome for social media and UI icons

### Landing Page Features
- **Hero Section**: Main value proposition with quiz CTA button
- **Video Section**: Placeholder for Video Sales Letter (VSL)
- **Benefits Section**: Six key benefits with icons and descriptions
- **About Section**: Service explanation with image gallery
- **Testimonials**: Customer reviews with photos and ratings
- **Quiz System**: 10-question personalized quiz that qualifies leads before WhatsApp
- **CTA Section**: Final conversion section with quiz integration
- **Contact Section**: Quiz-based lead qualification instead of direct form

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Direct integration for lead generation and customer communication via +55 75 98705-3807
- **Neon Database**: PostgreSQL hosting service for production database
- **Unsplash**: Stock photography service for hero images and testimonials

### Key Libraries
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Form Management**: React Hook Form with Hookform Resolvers for validation
- **Validation**: Zod for schema validation integrated with Drizzle
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling**: Tailwind CSS with PostCSS for processing
- **Development**: ESBuild for production builds, TSX for development server

### Build and Development Tools
- **Vite**: Modern build tool with plugins for React and runtime error overlay
- **TypeScript**: Full type safety across frontend, backend, and shared schemas
- **Drizzle Kit**: Database schema management and migration tool
- **ESLint/Prettier**: Code quality and formatting tools (implied by project structure)

### Deployment Configuration
- **Production Build**: Separate client and server builds with static file serving
- **Environment Variables**: DATABASE_URL for database connection
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **CORS and Security**: Basic Express security middleware setup