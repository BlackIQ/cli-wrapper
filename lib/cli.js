#!/usr/bin/env node

import Wrapper from "./wrapper.js"

// Parse command line arguments
const args = process.argv.slice(2);

const portIndex = args.findIndex(arg => arg === '--port');
let port = 3000; // Default port

if (portIndex !== -1 && args[portIndex + 1]) {
    port = parseInt(args[portIndex + 1]);
}

Wrapper(port);
