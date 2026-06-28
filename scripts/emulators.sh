#!/usr/bin/env bash
# Start the Firebase Auth + Firestore emulators with persistence.
# - Ensures Java is on PATH (Homebrew openjdk is keg-only).
# - Saves data on graceful exit (Ctrl+C) to ./emulator-data.
# - Imports that data on the next start, so a child you create (and its
#   student login code + PIN) survives restarts.
set -e

export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"

DIR=emulator-data
ARGS="--project edu-app-demo --only auth,firestore --export-on-exit=$DIR"

# Import only if a previous export exists (a bare --import on a missing/empty
# directory errors out, which would break the very first run).
if [ -f "$DIR/firebase-export-metadata.json" ]; then
  ARGS="$ARGS --import=$DIR"
fi

exec firebase emulators:start $ARGS
