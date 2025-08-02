# DesignPro Agency Website

## Overview

A modern full-stack web application for a digital agency showcasing services, portfolio, and company information. Built with React frontend and Express.js backend, featuring a responsive design with multiple theme options and comprehensive UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript for RESTful API development
- **Development Setup**: Hot-reload development server with custom logging middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **API Structure**: Modular route registration system with centralized error handling

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured for production deployment
- **Schema Management**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database schema migrations

### Styling System
- **Design System**: Multi-theme support with CSS custom properties
- **Theme Options**: Four distinct themes (Blue/White, Purple/Dark, Orange/Cream, Teal/Gray)
- **Component Library**: Comprehensive UI component set using Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### File Organization
- **Monorepo Structure**: Shared types and schemas between frontend and backend
- **Client Directory**: React application with organized components, pages, and utilities
- **Server Directory**: Express backend with modular route and storage architecture
- **Shared Directory**: Common TypeScript definitions and database schemas

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React Router (Wouter), TanStack Query for data management
- **UI Framework**: Radix UI component primitives, Tailwind CSS for styling
- **Development Tools**: Vite for build tooling, TypeScript for type safety

### Database Stack
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **ORM**: Drizzle ORM with Zod for runtime type validation
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Utility Libraries
- **Form Handling**: React Hook Form with Hookform Resolvers for validation
- **Date Management**: date-fns for date manipulation and formatting
- **UI Utilities**: class-variance-authority for component variants, clsx for conditional classes

### Development Infrastructure
- **Build System**: ESBuild for server bundling, Vite for client bundling
- **Replit Integration**: Custom error overlay and cartographer plugins for development
- **CSS Processing**: PostCSS with Autoprefixer for cross-browser compatibility