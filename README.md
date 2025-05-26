# Lemon Labs Payment Portal

A modern payment portal for customers to view and pay invoices. Built with Next.js, React, TailwindCSS, and Shadcn UI.

## Tech Stack

- Next.js 15
- React 19
- TailwindCSS 4
- Radix UI & Shadcn UI
- Lucide Icons

## Prerequisites

- Node.js (v18+ recommended)
- npm, yarn, pnpm, or bun

## Installation

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `dev` – Start dev server
- `build` – Build for production
- `start` – Start production server

## Usage

1. Open the app in your browser.
2. View your payment information and outstanding invoice.
3. Select a payment method (auto-detected by country).
4. Complete your payment securely.
5. See a success confirmation page.

## Customization

- Main page: `app/page.tsx`
- Payment page: `app/payment/page.tsx`
- Success page: `app/success/page.tsx`

## API Endpoints (for development)

- `/api/paymentMethods` – Returns available payment methods
- `/api/payment/[id]` – Returns payment info for a given organisation id
