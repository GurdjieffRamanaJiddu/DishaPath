import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    include: ["tests/emulator/**/*.test.ts"],
    // Rules tests share one emulator; avoid parallel data races.
    fileParallelism: false,
  },
});
