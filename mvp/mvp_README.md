# MVP: AI HiTek Platform

This MVP is built to test the core functionality of AI-powered remote IT hiring.

## 🧱 Tech Stack
- Frontend: Next.js 14 (SPA with hybrid SSR)
- Backend: Node.js (Express or NestJS)
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth
- Payments: Stripe
- Email: SendGrid
- Deployment: Vercel (frontend), Railway / Render (backend)

## 📦 Structure
- `/frontend` – user and client UI (SPA structure)
- `/backend` – API, AI logic, Stripe integration
- `/database` – SQL schema / Supabase exports
- `/docs` – OpenAPI / Swagger API definitions

## 🚀 Setup Guide
1. Clone this repo
2. Set up Supabase project and copy `.env.example` → `.env`
3. Run:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
4. Repeat for `backend`

## 🧭 Platform Architecture
The platform is designed as a Single Page Application (SPA) using React and Next.js, with hybrid rendering (SSR/SSG) for selected pages to improve SEO and performance.

## ✅ MVP Features (Phase 1)
- Developer profile builder
- AI-based skill tagging
- Smart matching algorithm
- Client dashboard
- Contracting + Stripe payments

## 📈 Roadmap Phases
1. Discovery – architecture, UX, roles
2. MVP Core – Auth, profiles, AI Matching, chat, Stripe
3. MVP Plus – Agency role, filters, geo, “Available Now”
4. Scale-Up – Dev Portfolio, CRM, contracts, AI questions
5. Premium AI – full AI interview module
6. Community – Dev Explorer, SEO profiles, marketing

## 💬 Contact
GitHub: https://github.com/Checanschik/ai-hitek-platform
