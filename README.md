# Lanezy - Customizable Kanban Board

A modern, customizable Kanban board application built with Next.js and tRPC. Designed for job hunting, coursework management, and project organization.

## 🚧 Project Status

**Currently in development** - Week 1 complete (Authentication & Foundation)

This is a portfolio project demonstrating full-stack development with modern web technologies.

## ✨ Planned Features

- **Customizable Kanban boards** with drag-and-drop functionality
- **Three pre-built templates**: Job Hunt, Course Work, Project Management
- **Rich card customization**: 
  - Start/due dates
  - Priority levels
  - Tags and checklists
  - Subtasks
  - Link attachments
  - Notes
- **Color theming** with 5 preset themes per board
- **User authentication** via magic links (passwordless email login)
- **Board limits**: 2 boards per user (unlimited for admin)
- **Guided onboarding** with tutorial for new users

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** (App Router with Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **tRPC** (type-safe API layer)
- **TanStack Query** (data fetching & caching)

### Backend
- **tRPC Server** (end-to-end type safety)
- **Auth.js v5** (NextAuth) with magic link authentication
- **Prisma 7** (ORM with PostgreSQL adapter)
- **PostgreSQL** (database)
- **Resend** (transactional emails)

### Deployment
- **Vercel** (hosting & CI/CD)

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL installed and running locally
- A Resend account (free tier) for magic link emails

### Installation

1. Clone the repository
```bash
git clone https://github.com/SofPan/lanezy-kanban.git
cd lanezy-kanban
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/lanezy"
AUTH_SECRET="your-auth-secret-here"
RESEND_API_KEY="your-resend-api-key"
```

Generate `AUTH_SECRET` with:
```bash
openssl rand -base64 32
```

4. Set up the database
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📋 Development Roadmap

- [x] **Week 1**: Foundation & Authentication
  - Project setup with Next.js, TypeScript, tRPC
  - Prisma + PostgreSQL configuration
  - Auth.js magic link authentication
  - Basic layout (header + sidebar navigation)
  - Vercel deployment

- [ ] **Week 2**: Data Layer & Board Basics
  - Expand Prisma schema (cards, tags, checklists, themes)
  - Build tRPC board CRUD routes
  - Implement 2-board limit with admin override
  - Basic board creation UI

- [ ] **Week 3**: Kanban Core Experience
  - Drag-and-drop functionality
  - Column and card rendering
  - Card creation and movement between columns

- [ ] **Week 4**: Card Depth & Customization
  - Card detail view with all fields
  - Dates, priority, tags, checklists, links
  - Full CRUD for card elements

- [ ] **Week 5**: Templates, Theming & Polish
  - Three board templates
  - Color theming system (5 presets)
  - User onboarding tutorial

- [ ] **Week 6**: Testing, Refinement & Deployment
  - End-to-end testing
  - Bug fixes and edge cases
  - UI polish
  - Production deployment

## 👤 Author

**Sofia Panchaud**
- GitHub: [@SofPan](https://github.com/SofPan)

## 📝 License

This project is open source and available under the MIT License.

---

**Note**: This is a learning project and portfolio piece. It demonstrates full-stack development practices, type-safe APIs, modern authentication patterns, and deployment workflows.