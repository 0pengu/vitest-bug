import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    dedupe: ["@parentlink/sj"],
  },
});
