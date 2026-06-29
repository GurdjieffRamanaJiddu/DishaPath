# Deploy DishaPath to a public URL (Vercel + Firebase)

This gives you a shareable `https://your-app.vercel.app` URL that anyone can test in
a browser, with no local setup. People log in as a **parent** (a Firebase test phone
number, so no real SMS) or as a **student** (a type code + PIN) and browse all 16
reports in English and हिंदी.

The app code is already deploy-ready. You will create a free Firebase project, set a
few environment variables on Vercel, and run a one-time seed. Total time: about 30
minutes, mostly waiting on dashboards.

> Cost: this works on Firebase's **free Spark plan** because we use *test phone
> numbers* (no real SMS). Sending real SMS to arbitrary phones would need the Blaze
> (pay-as-you-go) plan.

---

## 1. Create the Firebase project

1. Go to <https://console.firebase.google.com> and **Add project** (any name).
2. **Build → Firestore Database → Create database** → Production mode → pick a region
   (for India, `asia-south1`). This creates Firestore in **Native** mode.
3. **Build → Authentication → Get started → Sign-in method → Phone → Enable.**

## 2. Add a test phone number (so testers need no real SMS)

In **Authentication → Sign-in method → Phone**, expand **Phone numbers for testing**
and add:

| Phone number | Verification code |
|---|---|
| `+91 98765 43210` | `123456` |

Testers will log in as the parent with this number and code. (You can add a few more
numbers if multiple people test at once.)

## 3. Copy the web app config

**Project settings (gear icon) → General → Your apps → Web (`</>`)** → register an app.
Copy these values; you will paste them into Vercel in step 5:

- `apiKey` → `NEXT_PUBLIC_FIREBASE_API_KEY`
- `authDomain` → `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `projectId` → `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `appId` → `NEXT_PUBLIC_FIREBASE_APP_ID`

## 4. Create a service account (for the server + seeding)

**Project settings → Service accounts → Generate new private key** → download the JSON.
You will use it as `FIREBASE_SERVICE_ACCOUNT` (the whole JSON on one line). Keep it
secret; never commit it.

## 5. Deploy on Vercel

1. Go to <https://vercel.com>, sign in with GitHub, and **Add New → Project →** import
   `GurdjieffRamanaJiddu/DishaPath`. Vercel auto-detects Next.js; no settings to change.
2. Before deploying, open **Environment Variables** and add:

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | from step 3 |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | from step 3 |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | from step 3 |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | from step 3 |
   | `FIREBASE_SERVICE_ACCOUNT` | the service-account JSON on one line (step 4) |
   | `APP_SECRET` | a long random string (remember it for step 7) |

   **Do NOT add** `NEXT_PUBLIC_FIREBASE_USE_EMULATOR` or any `*_EMULATOR_HOST` var.
3. **Deploy.** Note the resulting URL, for example `https://dishapath.vercel.app`.

## 6. Authorize the Vercel domain for phone auth

**Firebase → Authentication → Settings → Authorized domains → Add domain** → add your
Vercel domain (for example `dishapath.vercel.app`). Without this, the phone-login
reCAPTCHA fails with `auth/unauthorized-domain`.

## 7. Publish the security rules and seed the data (run locally, once)

From the project folder on your machine:

```bash
# a) Point the Firebase CLI at your project and publish the rules
firebase use <your-project-id>
firebase deploy --only firestore:rules

# b) Seed the test parent + 16 students into the REAL database
cp .env.production.example .env.prod      # then fill in .env.prod:
#   FIREBASE_SERVICE_ACCOUNT  = the one-line JSON from step 4
#   NEXT_PUBLIC_FIREBASE_PROJECT_ID = your project id
#   APP_SECRET = the SAME value you set on Vercel in step 5
npm run seed:prod
```

`npm run seed:prod` prints `Seeded 16 test students into the live project "..."`.

> If you do not have the Firebase CLI: `npm i -g firebase-tools` then `firebase login`.
> Alternatively, paste the contents of `firestore.rules` into the console under
> Firestore → Rules → Publish.

## 8. Share the URL

Open your `*.vercel.app` URL and share it. Testers can use:

- **Parent view:** choose *I'm a Parent*, enter `9876543210`, code `123456`. The
  dashboard lists all 16 children, each with a **View report** link.
- **Student view:** choose *I'm a Student*, login code = the **type code** (`INTJ`,
  `ENFP`, `ESFP`, … any of the 16), PIN `1234`.

Both English and हिंदी work via the toggle, and any report can be saved with
**Download PDF**.

---

## Gotchas (the things that actually break)

- **`APP_SECRET` must match** between Vercel (step 5) and `.env.prod` (step 7), exactly.
  If they differ, student PIN login fails because the stored hash will not match.
- **`FIREBASE_SERVICE_ACCOUNT` is required on Vercel.** Without it the `/api` routes
  (student login, add child) return 500.
- **Authorize the Vercel domain** (step 6) or parent phone login will not start.
- **Keep secrets out of git.** `.gitignore` already ignores `.env*`; never commit the
  service-account JSON.
- Re-running `npm run seed:prod` is safe (it merges and will not wipe existing data).

## Updating the app later

Every `git push` to the `main` branch triggers an automatic redeploy on Vercel. If you
change `firestore.rules`, re-run `firebase deploy --only firestore:rules`.
