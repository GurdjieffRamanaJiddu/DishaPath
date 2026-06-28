# DishaPath — Bilingual MBTI Career-Guidance App

A web app (installable PWA) that helps Indian students in **grades 5–8** discover
a personality type and career direction, and helps their **parents guide and
track** them month by month.

- **Deterministic MBTI assessment** — no AI/LLM APIs. The 16 types, reports,
  careers, and a 12-month plan are curated, **bilingual (English + हिंदी)** content
  in the repo.
- **Roles:** parents log in with **phone OTP**; each child gets a **login code +
  PIN**. Students complete tasks; **parents confirm completion and track progress**.
- **Built as a PWA** so it runs in the browser first and can later be wrapped for
  the Play Store / App Store.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router, TypeScript), React 19 |
| Styling | Tailwind CSS v4 |
| i18n | next-intl (`/en`, `/hi`) |
| Auth | Firebase Authentication — Phone OTP (parents), custom token (students) |
| Data | Cloud Firestore |
| PWA | Hand-rolled manifest + service worker |
| Tests | Vitest |

## Prerequisites

- **Node.js 20+** (built with Node 26) and npm
- For full local end-to-end testing: **Java 11+** (the Firebase emulators need it)
  and the **Firebase CLI** (`npm i -g firebase-tools`)

## Getting started

```bash
npm install
cp .env.local.example .env.local   # already set up for the emulator
```

### Run the UI (no Firebase needed to see pages)

```bash
npm run dev          # http://localhost:3000  → redirects to /en
```

The landing, language toggle, and login screens render without Firebase. Any
action that reads/writes data needs the emulator (below) or a real project.

### Full local end-to-end (Firebase emulator)

`.env.local` is preconfigured to talk to the emulators. In two terminals:

```bash
# terminal 1 — start Auth + Firestore emulators
npm run emulators

# terminal 2 — start the app
npm run dev
```

`npm run emulators` runs `scripts/emulators.sh`, which puts Java on `PATH` for you
and **persists data** to `./emulator-data`: it exports on graceful shutdown and
re-imports on the next start. So a child you create once (and its student login
code + PIN) keeps working across restarts. **Stop the emulator with `Ctrl+C`** — a
hard kill skips the export, so the data won't be saved. (Delete `emulator-data/` to
start fresh.)

#### Quick test login (skip the parent flow)

With the emulators running, seed a fixed test student:

```bash
npm run seed
```

Then go to **Student login** and use:

| Field | Value |
|---|---|
| Login code (user id) | `TEST01` |
| PIN (password) | `1234` |

It also creates a parent (phone `+911111100000`) with consent already given, so you
can test the parent side via OTP too. Re-run `npm run seed` any time after a fresh
emulator start (it's safe to re-run; it won't wipe an existing assessment).

#### Review all 16 report variants

To preview every personality type at once, seed one fully-assessed student per type:

```bash
npm run seed:all
```

This creates 16 students (all under one test parent) and needs only the emulator
running (no dev server). Then:

- **As a parent:** log in with phone `9876543210` (OTP shown in the emulator) to see
  all 16 children on your dashboard, each with a "View report" link, so you can open
  every report variant.
- **As a student:** the login code is the **type code itself**, with PIN `1234`. For
  example `INTJ` / `1234`, `ENFP` / `1234`, `ESFP` / `1234`, and so on for all 16.

Then walk the flow:

1. **Parent:** open `/`, choose *I'm a Parent*, enter any 10-digit number, *Send OTP*.
   The emulator prints the OTP code in **terminal 1** (and in its UI at
   http://127.0.0.1:4000). Enter it to continue.
2. Accept **consent**, then **add a child** (name, grade, language). You'll get a
   **login code + PIN** — note them down.
3. **Student:** log out, choose *I'm a Student*, enter the **code + PIN**, and take
   the quiz. You'll get a **type + report**, and a 12-month plan is snapshotted
   into tasks.
4. On the **student dashboard**, tap **"I did this!"** on a task → it moves to
   *waiting for parent*.
5. Log back in as the **parent** → the task appears under *tasks to confirm* →
   **Confirm** → progress updates.

### Tests

```bash
npm test         # MBTI scoring, content-pack validity, plan generation
npm run typecheck
npm run build
```

## Production setup (real Firebase project)

1. Create a Firebase project; enable **Authentication → Phone** and **Firestore**.
2. Add a **Web app**; copy its config into `.env.local` (the `NEXT_PUBLIC_FIREBASE_*`
   vars) and **remove** `NEXT_PUBLIC_FIREBASE_USE_EMULATOR` and the `*_EMULATOR_HOST` vars.
3. Create a **service account** (Project settings → Service accounts) and set
   `FIREBASE_SERVICE_ACCOUNT` to its JSON (single line). Set a strong `APP_SECRET`.
4. Deploy the security rules: `firebase deploy --only firestore:rules`.
5. Deploy the app to **Vercel** or **Firebase Hosting**. For phone auth in
   production, add your domain to Firebase Auth's authorized domains.

## Project structure

```
src/
  app/[locale]/            # localized routes: landing, login, onboarding,
                           # assessment, report/[studentId], dashboard/{parent,student}
  app/api/                 # children (create child), child-login (mint token)
  components/              # UI kit, AppHeader, LanguageToggle, TaskCard, PwaRegister
  content/
    questions.ts           # MBTI question bank (per dimension, EN/HI, grade-banded)
    mbti/                  # the 16-type content pack + buildPlan (12-month arc)
  lib/
    firebase/{client,admin}.ts
    mbti/{score,generatePlan}.ts
    repository.ts          # Firestore CRUD
    auth-context.tsx       # role-aware auth state
    crypto.ts              # PIN hashing + code generation (server only)
  proxy.ts                 # next-intl routing (Next 16 "proxy" = old middleware)
messages/{en,hi}.json      # UI strings
firestore.rules            # family isolation; students cannot self-confirm
```

## Privacy & consent (minors' data)

- **Parental consent** is recorded before any child data is stored, and the
  create-child API rejects requests without it (relevant to India's **DPDP Act 2023**).
- Only the child's **first name + grade** are stored; the **PIN is hashed**.
- **Firestore rules** keep each family's data isolated and let a student mark
  their own tasks done but **never confirm** them.

## Roadmap

- **Phase 2 — WhatsApp notifications:** reminders ("new monthly tasks", "your child
  finished a task — please confirm") via an Indian WhatsApp Business provider
  (AiSensy / Interakt / Gupshup / Wati). App-first; WhatsApp only nudges users back in.
- **Phase 3 — App stores:** Google Play via **TWA (Bubblewrap)**, App Store via
  **Capacitor / PWABuilder** — wrapping the existing PWA, not a rewrite.

## Verified

All against the local Firebase emulator:

- ✅ `npm test` (9 unit tests: scoring, content pack, plan generation)
- ✅ `npm run test:rules` (11 rules tests: family isolation, student can't
  self-confirm, parent list-query authorization)
- ✅ `npm run typecheck` and `npm run build` pass; app renders in **EN and हिंदी**
  with correct Devanagari fonts and no console errors
- ✅ **Full end-to-end flow** driven through the UI on the emulator:
  parent phone-OTP login → consent → add child → child code/PIN login →
  20-question quiz → ESTJ report → student marks a task done →
  parent re-login → parent confirms → progress updates (1→2 of 3)
