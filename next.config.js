/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

import withBundleAnalyzer from "@next/bundle-analyzer";

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })(
  config,
);
