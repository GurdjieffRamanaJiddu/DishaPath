# DishaPath — Testing Guide

This guide walks through testing **DishaPath**, a bilingual MBTI career-guidance app for Indian students and parents. You'll test both the **student view** and **parent view** with pre-seeded test data.

---

## Setup (One-Time)

### Prerequisites
- **Node.js 20+** and npm
- **Java 11+** (for Firebase emulators)
- **Firebase CLI** (run `npm install -g firebase-tools`)

### Install & Configure

```bash
git clone https://github.com/GurdjieffRamanaJiddu/DishaPath.git
cd DishaPath
npm install
```

The `.env.local` is already configured for local Firebase emulators (no additional setup needed).

---

## Start the Emulators & App

Open **three terminal tabs** and run these commands in order:

### Terminal 1: Firebase Emulators
```bash
npm run emulators
```
You'll see output like:
```
✔ firestore: Firestore Emulator was started in standard edition.
✔ firestore: Firestore Emulator UI websocket is running on 9150.
```
**Note:** Keep this running throughout testing.

### Terminal 2: Seed Test Data
```bash
npm run seed:all
```
Output:
```
✅ Seeded test accounts:

👨‍👩‍👧 PARENT LOGIN (development mode):
   Phone: 9876543210
   OTP:   Any value (will be bypassed in emulator)

👤 STUDENT LOGIN:
   Code: INTJ (or any MBTI type)
   PIN:  1234
```

### Terminal 3: Start the App
```bash
npm run dev
```
You'll see:
```
▲ Next.js 16.2.9 (Turbopack)
- Local:         http://localhost:3000
✓ Ready in 288ms
```

**Open http://localhost:3000 in your browser.**

---

## Test Flow 1: Student View (Complete Journey)

### Step 1: Student Login

1. Navigate to http://localhost:3000
2. Click **"Student login"** tab
3. Enter:
   - **Login code:** `INTJ` (or any MBTI type: ENFP, ESFP, ESTJ, INFJ, etc.)
   - **PIN:** `1234`
4. Click **Log In**

✅ You should see: **"My Journey"** (student dashboard)

### Step 2: View Your Personality Report

1. You'll see your **MBTI type** displayed (e.g., "INTJ — The Mastermind")
2. Click **"View full report"** to see:
   - Your **strengths**
   - **10–15 careers** suited to your type
   - Your **12-month plan** (monthly tasks)

3. Scroll down and explore the **dimensions** section showing how you scored on:
   - Introversion ↔ Extroversion
   - Sensing ↔ Intuition
   - Thinking ↔ Feeling
   - Judging ↔ Perceiving

### Step 3: Track Tasks

1. Scroll to **"My tasks"** section
2. You'll see tasks for this month (e.g., "Research 3 careers on LinkedIn")
3. Click **"I did this!"** on any task
   - The task moves to **"Waiting for parent to confirm"**

4. Go back and check **"Ways I can help"** (parent's monthly guidance tasks)
   - Parents see these but students can't check them off

✅ **Student view complete.** Note down a task you marked "I did this!" for the parent test.

---

## Test Flow 2: Parent View (Tracking & Confirmation)

### Step 4: Parent Login

1. At the top-right, click **Log out** (or navigate back to http://localhost:3000)
2. Click **"Parent login"** tab
3. Enter:
   - **Phone:** `9876543210` (just the 10 digits; +91 is shown by the form)
4. Click **Send OTP**
5. In the **OTP input**, enter any value (e.g., `000000` or just `1`) and click **Verify & Continue**
   - In development mode, OTP is bypassed automatically

✅ You should see: **"Parent Dashboard"**

### Step 5: View Your Child's Progress

On the parent dashboard:

1. **Your children** section shows all 16 seeded students (one per MBTI type)
   - Each child has a **name**, **grade**, and **progress indicator** (e.g., "2 of 3 tasks done")

2. Click on **"INTJ"** (the child you just tested as)
   - See their **personality type**, **current month**, and **progress bar**

3. Click **"View report"** to see the full report you saw as a student

### Step 6: Confirm Your Child's Task

1. Scroll to **"Tasks waiting for your confirmation"** (or **"Tasks to confirm"**)
2. You'll see the task you marked as "I did this!" in the student view
   - Status: **"Waiting for parent to confirm"**

3. Click **"Confirm done"** button
   - The task is now marked as **Complete** ✅
   - Progress updates: "2 of 3 tasks done" → "3 of 3 tasks done"

4. The task moves to the **Done** section

✅ **Parent confirmation flow complete.**

### Step 7: Explore Other Children

1. Scroll to **"Your children"**
2. Click on a different child (e.g., **"ENFP"**)
   - Same flow as step 5 & 6
   - Each child has their own MBTI type, report, and task progress

---

## Test Flow 3: Full Parent Onboarding (Optional)

If you want to test the **parent's consent + add child** flow:

1. Log out from the parent dashboard
2. Go to http://localhost:3000 and select **Parent login**
3. Use a **different phone number** (e.g., `9876543211`)
4. Click **Send OTP** → Enter any OTP → **Verify & Continue**
5. You'll see:
   - **Parental Consent** page (checkbox to agree)
   - Click **"I Agree & Continue"**
6. **Add Your Child** form:
   - **Child's first name:** (e.g., "Aarav")
   - **Grade:** 6
   - **Language:** English (or हिंदी)
   - Click **"Create Profile"**
7. You'll get a **login code** and **PIN** for this child
   - Share these with your child to log in and take the quiz

---

## Test Flow 4: Student Quiz (Optional, ~5 min)

If a new child just got a **login code + PIN** from the parent:

1. Log out and select **Student login**
2. Enter the **login code** and **PIN** from step 7 above
3. Click **"Start the Quiz"** on "My Journey"
4. Answer **20 questions** about your personality
   - No right or wrong answers; pick what feels most like you
5. Click **"See My Results"**
   - Your **MBTI type** is calculated
   - A **12-month plan** is generated and saved
6. Your **report** appears with:
   - Personality summary
   - Career suggestions
   - Monthly tasks for you and your parent
7. On the dashboard, check off tasks and wait for parent confirmation (as in Flow 1)

---

## Language Testing (Bilingual)

The app supports **English (EN)** and **Hindi (हिंदी)**.

### Switch Language

1. Click **"EN"** or **"हि"** in the top-right corner
2. All UI text switches:
   - Button labels
   - Field placeholders
   - Instructions

3. **MBTI type names and content** are bilingual:
   - "INTJ — The Mastermind" → "INTJ — The Mastermind" (names same in both)
   - Strengths, careers, and tasks appear in the selected language

✅ Test both languages for UX coherence.

---

## Test Data Summary

### 16 Pre-Seeded Students (for parent testing)

Each student is fully assessed with a specific MBTI type. Use these login codes:

| Type | Code | PIN | Grade |
|------|------|-----|-------|
| INTJ | INTJ | 1234 | 6 |
| INTP | INTP | 1234 | 6 |
| ENTJ | ENTJ | 1234 | 6 |
| ENTP | ENTP | 1234 | 6 |
| INFJ | INFJ | 1234 | 6 |
| INFP | INFP | 1234 | 6 |
| ENFJ | ENFJ | 1234 | 6 |
| ENFP | ENFP | 1234 | 6 |
| ISTJ | ISTJ | 1234 | 6 |
| ISFJ | ISFJ | 1234 | 6 |
| ESTJ | ESTJ | 1234 | 6 |
| ESFJ | ESFJ | 1234 | 6 |
| ISTP | ISTP | 1234 | 6 |
| ISFP | ISFP | 1234 | 6 |
| ESTP | ESTP | 1234 | 6 |
| ESFP | ESFP | 1234 | 6 |

### Parent Account

- **Phone:** `9876543210`
- **OTP:** Any value (auto-filled in dev mode)
- **Consent:** Already given
- **Children:** All 16 seeded students

---

## Troubleshooting

### "Something went wrong" error during login

**Cause:** Emulator not running or connection lost.

**Fix:**
```bash
# Terminal 1: Verify emulators are running
npm run emulators

# Terminal 3: Restart the dev server
npm run dev
```

### Port 3000 already in use

```bash
# Kill the process on port 3000
lsof -ti :3000 | xargs kill

# Restart the app
npm run dev
```

### Data persisted but I want a fresh start

```bash
# Stop the emulators (Ctrl+C in Terminal 1)
# Then delete the emulator data
rm -rf emulator-data/

# Restart emulators and seed
npm run emulators
npm run seed:all
```

### "Invalid PIN" or "Login code not found"

Make sure you're using the **correct codes** from the test data table above. The seed data is case-sensitive (e.g., `INTJ` not `intj`).

---

## What to Look For (QA Checklist)

- ✅ **Phone input** accepts 10 digits; +91 is prepended in the form
- ✅ **Student login** works with any MBTI type code + PIN 1234
- ✅ **Parent login** works with phone 9876543210
- ✅ **Quiz flow** (if taking it) is intuitive; no console errors
- ✅ **MBTI reports** display correctly (type name, strengths, careers, 12-month plan)
- ✅ **Task marking** ("I did this!") updates the student dashboard
- ✅ **Parent confirmation** moves tasks to "Done" and updates progress
- ✅ **Language toggle** switches all UI text (EN ↔ हिंदी)
- ✅ **Dashboard responsiveness** on mobile and desktop

---

## Feedback

Found a bug or issue? Please report it on GitHub:
📍 https://github.com/GurdjieffRamanaJiddu/DishaPath/issues

---

**Happy testing! 🎉**
