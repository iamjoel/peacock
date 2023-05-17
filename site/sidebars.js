/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const frontendConfig = require('./docs/frontend/sidebar')
const libsConfig = require('./docs/libs/sidebar')
const backendConfig = require('./docs/backend/sidebar')
const aiConifg = require('./docs/ai/sidebar')

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  frontend: frontendConfig,
  libs: libsConfig,
  backend: backendConfig,
  ai: aiConifg,
};

module.exports = sidebars;
