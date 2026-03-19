<div align="center">

# WhatTheCron

A visual cron expression builder that translates cron syntax into plain English, and lets you construct expressions field-by-field, no syntax memorization required.

[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

**[Live Demo →](https://what-the-cron.vercel.app)**

</div>

---

## Why I built this

Cron expressions are one of those things developers write, copy-paste, and immediately forget. I wanted something that lets you build an expression visually, understand each field independently, and verify the schedule before deploying it to production.

---

## Features

| Feature | Description |
|---|---|
| Visual field builder | Each of the 5 cron fields has its own toggle with three modes: Every, Interval, and Specific |
| Plain English output | Converts expressions to human-readable descriptions in real time via `cronstrue` |
| Preset expressions | One-click presets for common schedules like Every Minute, Daily 9AM, and Weekdays |
| Copy to clipboard | Copies the final expression with a single click with visual confirmation

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| Expression parsing | `cron-parser` |
| Plain English | `cronstrue` |
| Deployment | Vercel |

---

## Project structure

```
app/
├── layout.tsx                    # Root layout 
├── page.tsx                      # Entry page
└── components/ui
    ├── CronBuilder.tsx             # Main page
    ├── ToggleButton.tsx            # Per-field UI with mode switching 
    ├── PresetButtons.tsx           # Quick-select preset expressions 
    ├── ExpressionDisplay.tsx       # Live expression bar with copy
    ├── SimpleExpressionDisplay.tsx # Plain English output via cronstrue

```

---


## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/Kaustubhjogle/What-The-Cron.git
cd whatthecron

# 2. Install dependencies
npm install
npm install cronstrue cron-parser
npm install --save-dev @types/cron-parser

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Cron expression reference

```
* * * * *
│ │ │ │ │
│ │ │ │ └── Day of week    (0–6, Sunday = 0)
│ │ │ └──── Month          (1–12)
│ │ └────── Day of month   (1–31)
│ └──────── Hour           (0–23)
└────────── Minute         (0–59)
```

| Syntax | Meaning |
|---|---|
| `*` | Every unit |
| `*/5` | Every 5 units |
| `5` | At exactly 5 |
| `1-5` | Range from 1 to 5 |
| `1,3,5` | Specific values |

---